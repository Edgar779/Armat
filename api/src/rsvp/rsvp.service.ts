import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { SessionDTO } from 'src/auth';
import { EventStatus } from 'src/event/constants';
import { EventService } from 'src/event/event.service';
import { OrgUser } from 'src/orgUser/orgUser.constants';
import { OrgUserService } from 'src/orgUser/orgUser.service';
import { CreateRsvpDTO, EditRsvpDTO, GetRsvpQuery, RsvpDTO, RsvpListDTO } from './dto';
import { IRsvp } from './interface';
import { RsvpModel } from './rsvp.model';
import { RsvpSanitizer } from './rsvp.sanitizer';
import { RsvpStatus } from './rsvp.constants';

@Injectable()
export class RsvpService {
  constructor(
    private readonly sanitizer: RsvpSanitizer,
    private readonly eventService: EventService,
    private readonly orgUserService: OrgUserService,
  ) {
    this.model = RsvpModel;
  }
  private model: Model<IRsvp>;

  /** create rsvp */
  async create(dto: CreateRsvpDTO): Promise<RsvpDTO> {
    const event = await this.eventService.getRaw(dto.eventId);
    if (event.status !== EventStatus.PUBLISHED) {
      throw new HttpException('You must publish the event', HttpStatus.BAD_REQUEST);
    }
    const getRsvp = await this.model.findOne({ memberId: dto.user.id, eventId: dto.eventId });
    if (getRsvp) {
      throw new HttpException('already created', HttpStatus.BAD_REQUEST);
    }
    const rsvp: IRsvp = new this.model({
      eventId: dto.eventId,
      memberId: dto.user.id,
      status: dto.status,
    });
    await Promise.all([rsvp.save(), this.eventService.incrementRsvpCount(event._id)]);
    return this.sanitizer.sanitize(rsvp);
  }

  /** get all rsvp */
  async findAll(dto: GetRsvpQuery, user: SessionDTO): Promise<RsvpListDTO> {
    const event = await this.eventService.getRaw(dto.eventId);
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, event.org);
    const query: FilterQuery<IRsvp> = { eventId: dto.eventId };
    const [rsvp, count] = await Promise.all([
      this.model.find(query).skip(dto.skip).limit(dto.limit).populate('memberId'),
      this.model.countDocuments(query),
    ]);
    return { rsvp: this.sanitizer.sanitizeMany(rsvp), count };
  }

  /** get by member id */
  async findByMember(eventId: string, user: SessionDTO): Promise<RsvpDTO> {
    const event = await this.eventService.getRaw(eventId);
    // await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, event.org);
    const query: FilterQuery<IRsvp> = { eventId, memberId: user.id };
    const rsvp = await this.model.findOne(query).populate('memberId');
    this.checkRsvp(rsvp);
    return this.sanitizer.sanitize(rsvp);
  }

  /** get rsvp by id */
  async findOne(_id: string, user: SessionDTO): Promise<RsvpDTO> {
    const rsvp = await this.model.findOne({ _id, memberId: user.id }).populate('memberId');
    this.checkRsvp(rsvp);
    return this.sanitizer.sanitize(rsvp);
  }

  /** edit rsvp */
  async update(_id: string, dto: EditRsvpDTO): Promise<RsvpDTO> {
    const rsvp = await this.model.findOne({ _id, memberId: dto.user.id }).populate('eventId');
    this.checkRsvp(rsvp);
    rsvp.status = dto.status;
    await rsvp.save();
    return this.sanitizer.sanitize(rsvp);
  }

  /** delete rsvp */
  async remove(_id: string, user: SessionDTO): Promise<string> {
    const rsvp = await this.model.findOne({ _id }).populate('eventId');
    this.checkRsvp(rsvp);
    await Promise.all([
      this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, rsvp.eventId.org),
      this.eventService.enforceEventAccess(rsvp.eventId.org, user.id, rsvp.eventId.access),
    ]);
    await Promise.all([rsvp.deleteOne(), this.eventService.decrementRsvpCount(rsvp.eventId)]);
    return rsvp._id;
  }

  /** set the rsvp status. @returns the new status if updated. Throws if the rsvp was not found (ticket-order) */
  async setStatus(eventId: string, status: RsvpStatus, userId: string): Promise<RsvpStatus> {
    const rsvp = await this.model.findOneAndUpdate({ eventId, memberId: userId }, { $set: { status: status } });
    if (!rsvp) {
      const newRsvp = new this.model({
        eventId,
        memberId: userId,
        status,
      });
      await Promise.all([newRsvp.save(), this.eventService.incrementRsvpCount(eventId)])
      return newRsvp.status;
    }
    return rsvp.status;
  }

  /***************************** Private Methods ****************************/
  /** @throws not found exception if the rsvp was not found */
  private checkRsvp(rsvp: IRsvp) {
    if (!rsvp) {
      throw new HttpException('Rsvp with this information was not found', HttpStatus.NOT_FOUND);
    }
  }
}
