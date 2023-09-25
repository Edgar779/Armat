import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { FileDTO } from 'src/file';
import { OrgUser } from 'src/orgUser/orgUser.constants';
import { SubscriptionService } from 'src/subscription/subscription.service';
import { AlgoliaService } from '../algolia/algolia.service';
import { Role, SessionDTO } from '../auth';
import { AddressService } from '../components/address/address.service';
import { FileService } from '../file/file.service';
import { DAYS_TO_NOTIFY } from '../notification';
import { NotificationService } from '../notification/notification.service';
import { OrgService } from '../org/org.service';
import { OrgUserService } from '../orgUser/orgUser.service';
import { CreateSponsorDTO, EditSponsorDTO, SponsorDTO, SponsorStatus } from '../sponsor';
import { SponsorService } from '../sponsor/sponsor.service';
import { NotificationType as NotifType } from '../util/constants';
import { EventAccess, EventStatus } from './constants';
import { CreateEventDTO, EditEventDTO, EventDTO, EventListDTO, EventStatusDTO, GetEventQuery } from './dto';
import { EventModel } from './event.model';
import { EventSanitizer } from './event.sanitizer';
import { IEvent, IEventAccess } from './interfaces';
import { PastEventService } from './pastEvent.service';
const { startOfDay, endOfDay, addDays } = require('date-fns');

@Injectable()
export class EventService {
  constructor(
    private readonly sanitizer: EventSanitizer,
    private readonly addressService: AddressService,
    private readonly fileService: FileService,
    private readonly pastEventService: PastEventService,
    private readonly notService: NotificationService,
    private readonly orgService: OrgService,
    private readonly algoliaService: AlgoliaService,
    private readonly sponsorService: SponsorService,
    private readonly orgUserService: OrgUserService,
    private readonly authService: AuthService,
    private readonly subService: SubscriptionService,
  ) {
    this.model = EventModel;
  }
  private model: Model<IEvent>;

  /** Create a new event */
  async create(dto: CreateEventDTO): Promise<EventDTO> {
    if (dto.accessStatus === EventAccess.LISTS && !dto.listIds) {
      throw new HttpException('listIds should not be empty', HttpStatus.BAD_REQUEST);
    }
    if (dto.listIds?.length && dto.accessStatus !== EventAccess.LISTS) {
      throw new HttpException('select status LISTS', HttpStatus.BAD_REQUEST);
    }
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], dto.user, null, dto.org);
    this.validateDateInterval(dto.startDate, dto.endDate);
    if (dto.listIds?.length) {
      await this.orgService.isOrgList(dto.org, dto.listIds);
    }

    const event: IEvent = new this.model({
      creator: dto.user.id,
      access: { listIds: dto.listIds, status: dto.accessStatus },
      title: dto.title,
      startDate: dto.startDate,
      endDate: dto.endDate,
      startTime: dto.startTime,
      endTime: dto.endTime,
      allDay: dto.allDay ? dto.allDay : false,
      tbd: dto.tbd ? dto.tbd : false,
      timezoneOffset: dto.timezoneOffset,
      description: dto.description,
      locationType: dto.locationType,
      status: EventStatus.PUBLISHED,
      tags: dto.tags ? dto.tags : [],
      categories: dto.categories ? dto.categories : [],
      eventImage: dto.eventImage,
      images: dto.images ? dto.images : [],
      address: await this.addressService.getAddress(dto.address),
      cta: dto.cta ? dto.cta : {},
      org: dto.org,
      isPast: false,
    });

    await Promise.all([
      event.save(),
      this.addSponsors(dto.sponsors, event._id.toString(), dto.user.id),
      this.algoliaService.addEvent(event),
      this.orgService.notifyFollowers(NotifType.EVENT_CREATED, dto.org, event),
    ]);
    return this.sanitizer.sanitize(event);
  }

  /** add user lists */
  async addList(_id: string, listIds: string[], user: SessionDTO): Promise<EventDTO> {
    const event = await this.model.findById(_id);
    this.checkEvent(event);
    await Promise.all([
      this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, event.org),
      this.orgService.isOrgList(event.org, listIds),
    ]);
    let exist = false;
    listIds.forEach((listId) => {
      event.access.listIds.forEach((list) => {
        if (list.toString() === listId.toString()) {
          exist = true;
        }
      });
      if (!exist) {
        event.access.listIds.push(listId);
      }
    });
    event.access.status = EventAccess.LISTS;
    await event.save();
    return this.sanitizer.sanitize(await event.populate('access.listIds'));
  }

  /** delete the user lists */
  async deleteList(_id: string, listId: string, user: SessionDTO): Promise<EventDTO> {
    const event = await this.model.findById(_id);
    this.checkEvent(event);
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, event.org);
    const index = event.access.listIds.findIndex((id) => {
      return id.toString() === listId.toString();
    });
    if (index === -1) {
      throw new HttpException('List with this id was not found', HttpStatus.BAD_REQUEST);
    }
    event.access.listIds.splice(index, 1);
    await event.save();
    return this.sanitizer.sanitize(event);
  }

  /** edit event */
  async edit(id: string, dto: EditEventDTO): Promise<EventDTO> {
    this.validateDateInterval(dto.startDate, dto.endDate);
    const event = await this.model.findById(id);
    this.checkEvent(event);
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], dto.user, null, event.org);
    if (dto.title) event.title = dto.title;
    if (dto.categories) event.categories = dto.categories;
    if (dto.tags) event.tags = dto.tags;
    if (dto.description) event.description = dto.description;
    if (dto.startDate) event.startDate = dto.startDate;
    if (dto.endDate) event.endDate = dto.endDate;
    if (dto.startTime || dto.startTime === null) event.startTime = dto.startTime;
    if (dto.endTime || dto.startTime === null) event.endTime = dto.endTime;
    if (dto.timezoneOffset) event.timezoneOffset = dto.timezoneOffset;
    if (dto.locationType) event.locationType = dto.locationType;
    if (dto.cta) event.cta = dto.cta;
    if (dto.address === null || dto.address) event.address = await this.addressService.getAddress(dto.address);
    await Promise.all([
      this.manageImages(event, dto),
      this.addSponsors(dto.addSponsors, event._id.toString(), dto.user.id),
      this.removeSponsors(event._id.toString(), dto.removeSponsors),
      this.algoliaService.addEvent(event),
      event.save(),
    ]);
    return this.sanitizer.sanitize(event);
  }

  /** Get all events sanitized  */
  async getAll(dto: GetEventQuery, orgId: string, user: SessionDTO): Promise<EventListDTO> {
    const orgUser = await this.orgUserService.getMember(user?.id);
    const query: FilterQuery<IEvent> = { org: orgId };
    const getLists = await this.orgService.findMemberLists(orgUser?._id, orgUser?.org);
    if (user?.role !== Role.ADMIN) {
      query.$or = [
        { 'access.status': EventAccess.PUBLIC },
        { 'access.status': EventAccess.MEMBERS, org: orgUser?.org },
        { 'access.status': EventAccess.LISTS, 'access.listIds': { $in: getLists } },
      ];
    }
    if (dto.status) query.status = dto.status;
    if (dto.locationType) query.locationType = dto.locationType;
    const [events, count] = await Promise.all([
      this.model.find(query).populate('creator').populate('org').skip(dto.skip).limit(dto.limit),
      this.model.countDocuments(query),
    ]);
    return { events: this.sanitizer.sanitizeMany(events), count };
  }

  /** get all event for admin */
  async getAllByAdmin(dto: GetEventQuery, user: SessionDTO): Promise<EventListDTO> {
    this.authService.enforceAccess([Role.ADMIN], user);
    const query: FilterQuery<IEvent> = {};
    if (dto.status) {
      query.status = dto.status;
    }
    const [events, count] = await Promise.all([
      this.model
        .find(query)
        .populate({ path: 'creator', populate: { path: 'auth' } })
        .populate('org'),
      this.model.countDocuments(query),
    ]);
    return { events: this.sanitizer.sanitizeMany(events), count };
  }

  /** gets the events based on subscriptions */
  async getSubscribed(user: SessionDTO): Promise<EventDTO[]> {
    const eventIds = await this.subService.getBySubscriber(user.id);
    const events = await this.model
      .find({ _id: { $in: eventIds }, status: EventStatus.PUBLISHED })
      .populate('org')
      .populate('creator');
    return this.sanitizer.sanitizeMany(events);
  }

  /** Get a single event, sanitize and return */
  async get(id: string, user?: SessionDTO): Promise<EventDTO> {
    const event = await this.model.findOne({ _id: id }).populate('creator').populate('org').populate('access.listIds');
    let pastEvent;
    if (!event) {
      pastEvent = await this.pastEventService.get(id);
    }
    await this.enforceEventAccess(event ? event.org : pastEvent.org, user.id, event ? event.access : pastEvent.access);
    return event ? this.sanitizer.sanitize(event) : pastEvent;
  }

  /** Get event in its raw form (ticket) (ticket-order)*/
  async getRaw(id: string): Promise<IEvent> {
    const event = await this.model.findById(id);
    this.checkEvent(event);
    return event;
  }

  /** Gets by the event creator */
  async getByCreator(creatorId: string): Promise<EventDTO[]> {
    const events = await this.model.find({ creator: creatorId }).populate('creator').populate('org');
    const sanitizedEvents = this.sanitizer.sanitizeMany(events);
    return sanitizedEvents;
  }

  /** Delete an event by id*/
  async delete(eventId: string, user: SessionDTO): Promise<IEvent> {
    const event = await this.model.findById(eventId);
    this.checkEvent(event);
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, event.org);
    if (event.images && event.images.length > 0) {
      const ids = event.images.map((image) => image.id);
      await this.fileService.deleteFiles(user.id, ids);
    }
    await Promise.all([
      this.sponsorService.deleteByEvent(event._id.toString()),
      this.algoliaService.delete(event._id.toString()),
      event.deleteOne(),
    ]);
    return event;
  }

  /** Delete many events */
  async deleteMany(eventIds: string[], orgId: string, user: SessionDTO): Promise<string> {
    const events = await this.model.find({ _id: { $in: eventIds } });
    const deleteEvents = [];
    const deleteFiles = [];
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, orgId);
    for (let i = 0; i < events.length; i++) {
      if (events[i].images && events[i].images.length > 0) {
        const ids = events[i].images.map((image) => image.id);
        deleteFiles.push(this.fileService.deleteFiles(user.id, ids));
      }
      deleteEvents.push(this.sponsorService.deleteByEvent(events[i]._id.toString()));
      deleteEvents.push(this.algoliaService.delete(events[i]._id.toString()));
    }
    deleteEvents.push(this.model.deleteMany({ _id: { $in: eventIds } }));
    await Promise.all(deleteEvents);
    return 'ok';
  }

  /** increment rsvp count */
  async incrementRsvpCount(eventId: string): Promise<number> {
    const event = await this.model.findById(eventId);
    this.checkEvent(event);
    event.rsvpCount += 1;
    await event.save();
    return event.rsvpCount;
  }

  /** decrement rsvp count */
  async decrementRsvpCount(eventId: string): Promise<number> {
    const event = await this.model.findById(eventId);
    this.checkEvent(event);
    event.rsvpCount -= 1;
    await event.save();
    return event.rsvpCount;
  }

  /** remove mmultiple events (do not touch)*/
  async removeEvents(eventIds: string[]) {
    const events = await this.model.find({ _id: eventIds });
    const imageIds = [];
    const tasks = [];
    events.forEach((event) => {
      event.images?.forEach((image) => {
        imageIds.push(image.id);
      });
      tasks.push(this.fileService.deleteFiles(event.creator, imageIds));
    });
    tasks.push(this.algoliaService.deleteMany(eventIds), this.model.deleteMany({ _id: { $in: eventIds } }));
    await Promise.all(tasks);

    return;
  }

  /** Set the event status */
  async setStatus(eventId: string, dto: EventStatusDTO): Promise<EventDTO> {
    let statusChanged = false;
    const user = dto.user;
    const event = await this.model.findById(eventId);
    this.checkEvent(event);
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, event.org);

    // if the status is not changing, do not do anything
    if (event.status === dto.status && event.status !== EventStatus.REJECTED) return this.sanitizer.sanitize(event);

    if (dto.status === EventStatus.REJECTED) event.comment = dto.comment;
    event.status = dto.status;
    statusChanged = true;
    if (dto.status !== EventStatus.REJECTED || event.status !== EventStatus.REJECTED) {
      event.status = dto.status;
      statusChanged = true;
    }
    if (dto.status === EventStatus.PENDING || dto.status === EventStatus.UNPUBLISHED) {
      event.status = dto.status;
      statusChanged = true;
    }
    if (!statusChanged) throw new HttpException('Could not make the status change', HttpStatus.UNAUTHORIZED);
    if (event.status !== EventStatus.REJECTED) event.comment = undefined;
    await Promise.all([this.notifyStatusChange(event), this.algoliaService.addEvent(event), event.save()]);
    return this.sanitizer.sanitize(event);
  }

  /** Gets the upcoming events */
  async getUpcomingEvents(user?: SessionDTO): Promise<EventDTO[]> {
    const orgUser = user ? await this.orgUserService.getMember(user.id) : null;
    const query: FilterQuery<IEvent> = {};
    const getLists = orgUser ? await this.orgService.findMemberLists(orgUser?._id, orgUser?.org) : [];
    query.$or = [
      { 'access.status': EventAccess.PUBLIC },
      { 'access.status': EventAccess.MEMBERS, org: orgUser?.org },
      { 'access.status': EventAccess.LISTS, 'access.listIds': { $in: getLists } },
    ];
    const currentDate = startOfDay(new Date());
    const futureDate = addDays(currentDate, DAYS_TO_NOTIFY);
    const futureEndOfDay = endOfDay(futureDate);
    query['startDate'] = { $gte: currentDate, $lte: futureEndOfDay };
    const events = await this.model.find(query);
    return this.sanitizer.sanitizeMany(events);
  }

  /** Finds events that have been past */
  async findPastEvents(): Promise<IEvent[]> {
    const currentDate = new Date();
    return await this.model.find({ startDate: { $lte: currentDate.toISOString() } });
  }

  /** Sponsors */
  /** Get the sponsor requests for an organization */
  async getSponsorRequests(orgId: string, user: SessionDTO): Promise<SponsorDTO[]> {
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, orgId);
    const sponsors = await this.sponsorService.getByOrg(orgId, SponsorStatus.PENDING);
    return sponsors;
  }

  /** Sponsor specific endpoints */
  async getEventSponsors(eventId: string, user?: SessionDTO): Promise<SponsorDTO[]> {
    let event: IEvent = await this.model.findById(eventId);
    if (!event) event = await this.pastEventService.getRaw(eventId);
    this.checkEvent(event);
    let approvedOnly = true;
    const userType = await this.orgUserService.getUserType(event.org, user.id);
    if (this.orgUserService.hasAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], userType) || event.creator == user.id) {
      approvedOnly = false;
    }
    let sponsors;
    if (approvedOnly) {
      sponsors = await this.sponsorService.getByEvent(eventId, SponsorStatus.APPROVED);
    } else {
      sponsors = await this.sponsorService.getByEvent(eventId);
    }
    return sponsors;
  }

  /** Get the events of the organization that are sponsored */
  async getSponsoredEvent(orgId: string, user?: SessionDTO): Promise<EventDTO[]> {
    const sponsors = await this.sponsorService.getByOrg(orgId, SponsorStatus.APPROVED);
    const eventIds: string[] = [];
    sponsors.map((sponsor) => eventIds.push(sponsor.eventId.toString()));
    const [events, pastEvents] = await Promise.all([
      this.model.find({ _id: { $in: eventIds }, status: EventStatus.PUBLISHED }),
      this.pastEventService.getMany(eventIds),
    ]);
    return pastEvents.concat(this.sanitizer.sanitizeMany(events));
  }

  /** Accept or deny the sponsor request fro an event */
  async setSponsorRequest(eventId: string, dto: EditSponsorDTO): Promise<SponsorStatus> {
    if (!dto.orgId || !dto.status) return null;
    const event = await this.model.findById(eventId);
    this.checkEvent(event);
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], dto.user, null, event.org);
    const sponsorId = eventId + dto.orgId;
    const status = await this.sponsorService.setStatus(sponsorId, dto.status);
    return status;
  }

  /** Change the note of the sponsor */
  async editSponsorNote(eventId: string, dto: EditSponsorDTO): Promise<SponsorDTO> {
    if (!dto.orgId || !dto.note) return null;
    const event = await this.model.findById(eventId);
    this.checkEvent(event);
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], dto.user, null, dto.orgId);
    const sponsor = await this.sponsorService.edit(eventId + dto.orgId, dto.note);
    return sponsor;
  }

  /** Private Methods */
  /** checks if the event is valid or throws a not found exception */
  private checkEvent(event: IEvent) {
    if (!event) {
      throw new HttpException('Event was not found', HttpStatus.NOT_FOUND);
    }
  }

  /** Updates the event images */
  private async manageImages(event: IEvent, dto: EditEventDTO) {
    const newImages: FileDTO[] = [];
    const idsToRemove = [];
    dto.imagesToAdd?.forEach((img) => event.images.push(img));
    dto.imagesToRemove?.forEach((img) => idsToRemove.push(img.id));
    if (idsToRemove.length > 0) await this.fileService.deleteFiles(event.creator, idsToRemove);
    let imageIndex;
    for (let i = 0; i < event.images?.length; i++) {
      // check if this image needs to be deleted
      imageIndex = idsToRemove.findIndex((id) => event.images[i].id === id);
      if (imageIndex < 0) {
        //does not need to be deleted
        newImages.push(event.images[i]);
      } else {
        //needs to be deleted
        if (event.eventImage > i) {
          event.eventImage = event.eventImage - 1;
        } else if (event.eventImage === i) {
          event.eventImage = 0;
        }
      }
    }
    if (newImages.length < 1) event.eventImage = undefined;
    event.images = newImages;
    //Set the main image
    if (dto.eventImage || !(dto.eventImage < 0 || dto.eventImage >= event.images.length)) {
      event.eventImage = dto.eventImage;
    }
  }

  /** Notify the user of the status change of their event */
  private async notifyStatusChange(event: IEvent) {
    let notType: NotifType;
    if (event.status === EventStatus.PUBLISHED) {
      notType = NotifType.EVENT_APPROVED;
    } else if (event.status === EventStatus.REJECTED) {
      notType = NotifType.EVENT_DISAPPROVED;
    } else {
      return;
    }
    await this.notService.create({
      event: event._id,
      userId: event.creator,
      type: notType,
    });
    this.notService.sendSMS({ type: notType, userId: event.creator });
  }

  /** add sponsor requests */
  private async addSponsors(sponsors: CreateSponsorDTO[], eventId: string, userId: string) {
    if (!sponsors || sponsors.length < 1) return null;
    try {
      for (let i = 0; i < sponsors.length; i++) {
        sponsors[i].event = eventId;
        sponsors[i].requester = userId;
      }
      await this.sponsorService.createMany(sponsors);
    } catch (err) { }
  }

  /** remove sponsor requests/accepted sponsors */
  private async removeSponsors(eventId: string, orgIds: string[]) {
    if (!orgIds || orgIds.length < 1) return null;
    try {
      const ids: string[] = [];
      for (let i = 0; i < orgIds.length; i++) {
        ids.push(eventId + orgIds[i]);
      }
      await this.sponsorService.deleteMany(ids);
    } catch (err) { }
  }

  /** Validate Dates. returns false if the start date is less than end date. Returns true otherwise */
  private validateDateInterval(start: string, end: string): boolean {
    if (!start || !end) return true;
    const startString = `${start.replace(/-/g, '/')} 0:0:0 +0000`;
    const endString = `${end.replace(/-/g, '/')} 0:0:0 +0000`;
    const startDate = new Date(startString);
    const endDate = new Date(endString);
    if (startDate.valueOf() > endDate.valueOf()) {
      throw new HttpException('End Date is less than start date', HttpStatus.BAD_REQUEST);
    }
    return true;
  }

  /** set event access status */
  async setAccessStatus(_id: string, status: EventAccess, user: SessionDTO): Promise<EventDTO> {
    const event = await this.model.findById(_id);
    this.checkEvent(event);
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, event.org);
    if (status === EventAccess.LISTS && !event.access.listIds.length) {
      throw new HttpException('First add listIds', HttpStatus.BAD_REQUEST);
    }
    event.access.status = status;
    await event.save();
    return this.sanitizer.sanitize(event);
  }

  /** has event access */
  async hasEventAccess(orgId: string, userId: string, access: IEventAccess): Promise<boolean> {
    let member;
    if (access.status === EventAccess.PUBLIC) return true;
    else if (access.status === EventAccess.MEMBERS) {
      member = await this.orgUserService.getMember(userId, orgId);
      if (!member) return false;
    } else if (access.status === EventAccess.LISTS) {
      const listIds = [];
      if (access.listIds[0]?.name) {
        access.listIds.forEach((list) => listIds.push(list._id));
      }
      member = await this.orgUserService.getMember(userId, orgId);
      const exist = await this.orgService.getListByMember(orgId, listIds.length ? listIds : access.listIds, member._id);
      if (!exist) return false;
    }
    return true;
  }

  /** enforce event access */
  async enforceEventAccess(orgId: string, userId: string, access: IEventAccess): Promise<boolean> {
    const eventAccess = await this.hasEventAccess(orgId, userId, access);
    if (!eventAccess) {
      throw new HttpException('User does not have permission to access resource', HttpStatus.UNAUTHORIZED);
    }
    return true;
  }
}
