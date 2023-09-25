import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
// import { SessionDTO } from 'src/auth';
// import { AuthService } from 'src/auth/auth.service';
import { CreateSponsorDTO, SponsorDTO } from './dto';
import { ISponsor } from './interface';
import { SponsorStatus } from './sponsor.constants';
import { SponsorModel } from './sponsor.model';
import { SponsorSanitizer } from './sponsor.sanitizer';

@Injectable()
export class SponsorService {
  constructor(
    private readonly sanitizer: SponsorSanitizer, // private readonly authService: AuthService,
  ) {
    this.model = SponsorModel;
  }
  private model: Model<ISponsor>;

  /** Create a sponsor request. Sponsor is a many to many connection between events and orgs. The ID of a sponsor is the eventId + orgId in that order */
  async createMany(dtos: CreateSponsorDTO[]): Promise<SponsorDTO[]> {
    const sponsors: ISponsor[] = [];
    for (let i = 0; i < dtos.length; i++) {
      sponsors.push(
        new this.model({
          uniqueId: dtos[i].event + dtos[i].org,
          event: dtos[i].event,
          org: dtos[i].org,
          requester: dtos[i].requester,
          note: dtos[i].note,
          status: SponsorStatus.PENDING,
        }),
      );
    }
    await this.model.insertMany(sponsors);
    return this.sanitizer.sanitizeMany(sponsors);
  }

  /** Edits the sponsor object. For now, only update the note associated  */
  async edit(sponsorId: string, note: string): Promise<SponsorDTO> {
    const sponsor = await this.model.findOneAndUpdate({ uniqueId: sponsorId }, { note: note }, { new: true });
    this.checkSponsor(sponsor);
    return this.sanitizer.sanitize(sponsor);
  }

  /** Get by event */
  async getByEvent(eventId: string, status?: SponsorStatus): Promise<SponsorDTO[]> {
    const query: any = { event: eventId };
    if (status) {
      query.status = status;
    }
    const sponsors = await this.model.find(query).populate('org').populate('requester');
    return this.sanitizer.sanitizeMany(sponsors);
  }

  /** Get org */
  async getByOrg(orgId: string, status?: SponsorStatus): Promise<SponsorDTO[]> {
    const query: any = { org: orgId };
    if (status) {
      query.status = status;
    }
    const sponsors = await this.model.find(query).populate('event').populate('requester');
    return this.sanitizer.sanitizeMany(sponsors);
  }

  /** set status of a sponsor */
  async setStatus(sponsorId: string, status: SponsorStatus): Promise<SponsorStatus> {
    const sponsor = await this.model.findOne({ uniqueId: sponsorId });
    this.checkSponsor(sponsor);
    if (status === SponsorStatus.APPROVED) {
      sponsor.status = status;
      await sponsor.save();
    } else if (status === SponsorStatus.REJECTED) {
      await sponsor.deleteOne();
    }
    return status;
  }

  /** Remove many sponsors by their ids */
  async deleteMany(sponsorIds: string[]): Promise<number> {
    const deleted = await this.model.deleteMany({ uniqueId: { $in: sponsorIds } });
    return deleted.deletedCount;
  }

  /** Delete by orgId */
  async deleteByOrg(orgId: string): Promise<number> {
    const deleted = await this.model.deleteMany({ org: orgId });
    return deleted.deletedCount;
  }

  /** Delete by event */
  async deleteByEvent(eventId: string): Promise<number> {
    const deleted = await this.model.deleteMany({ event: eventId });
    return deleted.deletedCount;
  }

  /** Private methods */
  private checkSponsor(sponsor: ISponsor) {
    if (!sponsor) {
      throw new HttpException('Could not find sponsor', HttpStatus.NOT_FOUND);
    }
  }
}
