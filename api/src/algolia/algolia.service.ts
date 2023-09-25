import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import algoliasearch, { SearchIndex } from 'algoliasearch';
import { IEvent } from 'src/event';
import { EventStatus } from 'src/event/constants';
import { IOrg } from 'src/org';
import { OrgStatus, OrgType } from 'src/org/org.constants';
// import { OrgType } from 'src/org/org.constants';
import { ALGOLIA_API_KEY, ALGOLIA_APP_ID, ALGOLIA_INDEX_NAME, ResultType } from './algolia.constants';
import { AlgoliaSanitizer } from './algolia.sanitizer';
import { ResultDTO, SearchDTO } from './dto';
import { IResult } from './interface/result.interface';

@Injectable()
export class AlgoliaService {
  constructor(private readonly sanitizer: AlgoliaSanitizer) {
    this.client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    this.pIndex = this.client.initIndex(ALGOLIA_INDEX_NAME);
  }
  private client;
  private pIndex: SearchIndex;

  /** setup algolia - this will be called from the app mounting */
  async setup(): Promise<void> {
    await this.pIndex.setSettings({
      searchableAttributes: ['name', 'description', 'categories'],
      attributesForFaceting: ['type'],
    });
  }

  /** add data from Algolia */
  async addEvent(event: IEvent): Promise<string> {
    if (!event) return null;
    const entity: IResult = {
      objectID: event._id.toString(),
      name: event.title,
      description: event.description,
      address: event.address,
      image: event.images[event.eventImage],
      type: ResultType.EVENT,
      _geoloc: {
        lat: event.address?.lat,
        lng: event.address?.lng,
      },
      isActive: event.status === EventStatus.PUBLISHED ? true : false,
      categories: event.categories,
    };

    return await this.save(entity);
  }

  /** add data from Algolia */
  async addOrg(org: IOrg): Promise<string> {
    if (!org) return null;
    const entity: IResult = {
      objectID: org._id.toString(),
      name: org.name,
      description: org.description,
      address: org.address,
      image: org.images[org.mainImage],
      type: org.type === OrgType.BUSINESS ? ResultType.BUSINESS : ResultType.NON_PROFIT,
      _geoloc: {
        lat: org.address?.lat,
        lng: org.address?.lng,
      },
      isActive: org.status === OrgStatus.ACTIVE ? true : false,
      categories: this.getOrgCategories(org.categories),
    };
    return await this.save(entity);
  }

  /** delete data from Algolia */
  async delete(id: string): Promise<void> {
    try {
      await this.pIndex.deleteObject(id);
    } catch (e) {
      throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
    }
  }

  /** delete data from Algolia */
  async deleteMany(ids: string[]): Promise<void> {
    try {
      await this.pIndex.deleteObjects(ids);
    } catch (e) {
      throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
    }
  }

  /** search data with radius */
  async search(dto: SearchDTO): Promise<ResultDTO[]> {
    /** check if needed address filter */
    if (dto.lat || dto.lng || dto.zoom) {
      if (!dto.lat || !dto.lng || !dto.zoom) {
        throw new HttpException('lat, lng or zoom are required', HttpStatus.BAD_REQUEST);
      }
    }
    /** check if zoom is number */
    if (dto.zoom && isNaN(dto.zoom)) {
      throw new HttpException('zoom must be a number', HttpStatus.BAD_REQUEST);
    }
    //Set filters
    const filters = [];
    if (dto.type) filters.push(`type: ${dto.type}`);
    let filterString = '';
    for (let i = 0; i < filters.length; i++) {
      if (i < filters.length - 1) {
        filterString += `${filters[i]} AND `;
      } else {
        filterString += filters[i];
      }
    }
    const index = this.setIndex();
    const data = await index.search(dto.searchField, {
      filters: filterString,
      // numericFilters: numericFilers,
      aroundLatLng: dto.lat ? `${dto.lat ? dto.lat : ''}, ${dto.lng ? dto.lng : ''}` : '',
      aroundRadius: dto.zoom ? Math.floor(this.getRadius(dto.zoom)) * 1000 : 50000,
    });
    return this.sanitizer.sanitizeMany(data.hits);
  }

  async clearIndex(): Promise<any> {
    return await this.pIndex.clearObjects();
  }

  /** get radius */
  private getRadius(zoom: number): number {
    if (!zoom) zoom = 15;
    const minRadius = 1;
    const maxRadius = 500;
    const radius = -35.5 * zoom + 535.5;
    if (radius < minRadius) return minRadius;
    if (radius > maxRadius) return maxRadius;
    if (radius) return radius;
  }

  /** Saves a result object to algolia and returns its id */
  private async save(entity: IResult): Promise<string> {
    try {
      const response = await this.pIndex.saveObject(entity);
      return response.objectID;
      // return this.sanitizer.sanitize(result as IResult);
    } catch (e) {
      console.log(e);
      throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
    }
  }

  /** Chooses the right index to query based on the sorting criteria */
  private setIndex(sortFilter?: string) {
    const index = this.pIndex;
    if (!sortFilter) return index;
    // switch (sortFilter) {
    //   case 'price':
    //     index = this.desPriceIndex;
    //     break;
    //   case '-price':
    //     index = this.ascPriceIndex;
    //     break;
    //   case 'size':
    //     index = this.desSizeIndex;
    //     break;
    //   case '-size':
    //     index = this.ascSizeIndex;
    //     break;
    //   case '-createdAt':
    //     index = this.ascCreatedIndex;
    //     break;
    //   default:
    //     break;
    // }
    return index;
  }

  /** extracts the category names from the org */
  private getOrgCategories(cats: any[]): string[] {
    if (!cats || cats.length < 1 || !cats[0].name) {
      return [];
    }
    const categories = [];
    cats.forEach((cat) => categories.push(cat?.name));
    return categories;
  }
}
