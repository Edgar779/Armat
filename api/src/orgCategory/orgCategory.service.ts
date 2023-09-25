import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MongooseUtil } from '../util';
import { OrgCategoryModel } from './orgCategory.model';
import { ICatUsedCount, IOrgCategory } from './interface';
import { CreateOrgCatDTO, EditOrgCatDTO, OrgCategoryDTO } from './dto';
import { OrgCategorySanitizer } from './orgCategory.sanitizer';
import { OrgType } from 'src/org/org.constants';

@Injectable()
export class OrgCategoryService {
  constructor(private readonly sanitizer: OrgCategorySanitizer) {
    this.model = OrgCategoryModel;
    this.mongooseUtil = new MongooseUtil();
  }
  private model: Model<IOrgCategory>;
  private mongooseUtil: MongooseUtil;

  /** add an organization cateogry */
  async create(dto: CreateOrgCatDTO): Promise<OrgCategoryDTO> {
    try {
      let cat = new this.model({ name: dto.name, parent: dto.parent });
      cat = await cat.save();
      return this.sanitizer.sanitize(cat);
    } catch (err) {
      this.mongooseUtil.checkDuplicateKey(err, 'Category with this name exists');
      throw err;
    }
  }

  /** Edit the name or the parent of a cateogry */
  async edit(id: string, dto: EditOrgCatDTO): Promise<OrgCategoryDTO> {
    const cat = await this.model.findById(id);
    this.checkOrgCat(cat);
    if (dto.name) cat.name = dto.name;
    await cat.save();
    return this.sanitizer.sanitize(cat);
  }

  /** Changes the used count of the category */
  async addOrgs(catIds: string[], orgId: string, type: OrgType) {
    if (!catIds || catIds.length < 0) return;
    if (type === OrgType.BUSINESS) {
      await this.model.updateMany({ _id: { $in: catIds } }, { $addToSet: { businessUsers: orgId } });
    }
    if (type === OrgType.NON_PROFIT) {
      await this.model.updateMany({ _id: { $in: catIds } }, { $addToSet: { nonProfitUsers: orgId } });
    }
    return catIds;
  }

  /** Changes the used count of the category */
  async removeOrgs(catIds: string[], orgId: string, type: OrgType) {
    if (!catIds || catIds.length < 0) return;
    if (type === OrgType.BUSINESS) {
      await this.model.updateMany({ _id: { $in: catIds } }, { $pull: { businessUsers: orgId } });
    }
    if (type === OrgType.NON_PROFIT) {
      await this.model.updateMany({ _id: { $in: catIds } }, { $pull: { nonProfitUsers: orgId } });
    }
    return catIds;
  }

  /** Get all categories in a nested fasion */
  async getAll(): Promise<OrgCategoryDTO[]> {
    const categories = await this.model.find();
    const catList = this.makeTree(categories);
    return catList;
  }

  /** Get all categories in a nested fasion */
  async get(id: string): Promise<OrgCategoryDTO> {
    const category = await this.model.findById(id);
    this.checkOrgCat(category);
    return this.sanitizer.sanitize(category);
  }

  /** Delete a category by its id. Deletes all children and their children of this subcategory */
  async delete(id: string): Promise<OrgCategoryDTO[]> {
    const cat = await this.model.findById(id);
    if (!cat) return null;
    const childIds = [cat._id];
    let catIds = [cat._id];
    let children: IOrgCategory[] = [];
    while (true) {
      children = await this.model.find({ parent: { $in: catIds } });
      if (children.length < 1) break;
      catIds = [];
      for (let i = 0; i < children.length; i++) {
        catIds.push(children[i]._id);
        childIds.push(children[i]._id);
      }
    }
    await this.model.deleteMany({ _id: { $in: childIds } });
    const cats = await this.getAll();
    return cats;
  }

  /** Private Methods */
  private checkOrgCat(cat: IOrgCategory) {
    if (!cat) {
      throw new HttpException('Category was not found', HttpStatus.NOT_FOUND);
    }
  }

  /** Creates the nested tree structure of the categories */
  private makeTree(cats: IOrgCategory[]): OrgCategoryDTO[] {
    const catList: OrgCategoryDTO[] = [];
    if (!cats && cats.length < 1) return catList;
    const catMap = new Map<string, OrgCategoryDTO>();
    cats.map((cat) => catMap.set(cat._id.toString(), this.sanitizer.sanitize(cat)));
    for (let i = 0; i < cats.length; i++) {
      if (!cats[i].parent) {
        catList.push(catMap.get(cats[i]._id.toString()));
      } else {
        const parentCat = catMap.get(cats[i].parent.toString());
        if (!parentCat.items) {
          parentCat.items = [catMap.get(cats[i]._id.toString())];
        } else {
          parentCat.items.push(catMap.get(cats[i]._id.toString()));
        }
      }
    }
    this.calculateTreeCounts(catList);
    return catList;
  }

  /** Modifies the counts of the categories in the treee to aggregate them, uses a recursive functions --- OLD VERSION */
  // private calculateTreeCounts(tree: OrgCategoryDTO[]): ICatUsedCount {
  //   let businessCountTotal = 0;
  //   let nonProfitCountTotal = 0;
  //   for (let i = 0; i < tree.length; i++) {
  //     let nodeBusinessCount = 0;
  //     let nodeNonProfitCount = 0;
  //     if (!tree[i].items || tree[i].items?.length < 1) {
  //       nodeBusinessCount = tree[i].businessUsedCount;
  //       nodeNonProfitCount = tree[i].nonProfitUsedCount;
  //     } else {
  //       const counts = this.calculateTreeCounts(tree[i].items);
  //       nodeBusinessCount = tree[i].businessUsedCount + counts.businessCountTotal;
  //       nodeNonProfitCount = tree[i].nonProfitUsedCount + counts.nonProfitCountTotal;
  //     }
  //     tree[i].businessUsedCount = nodeBusinessCount;
  //     tree[i].nonProfitUsedCount = nodeNonProfitCount;

  //     businessCountTotal += nodeBusinessCount;
  //     nonProfitCountTotal += nodeNonProfitCount;
  //   }
  //   return {
  //     businessCountTotal,
  //     nonProfitCountTotal,
  //   };
  // }

  private calculateTreeCounts(tree: OrgCategoryDTO[]): ICatUsedCount {
    const businessSet = new Set<string>();
    const nonProfitSet = new Set<string>();
    for (let i = 0; i < tree.length; i++) {
      if (!tree[i].items || tree[i].items.length < 1) {
        tree[i].businessUsedCount = tree[i].businessUsers ? tree[i].businessUsers.length : 0;
        tree[i].businessUsers?.forEach((b) => businessSet.add(b));
        tree[i].nonProfitUsedCount = tree[i].nonProfitUsers ? tree[i].nonProfitUsers.length : 0;
        tree[i].nonProfitUsers?.forEach((b) => nonProfitSet.add(b));
      } else {
        //get unique set of all children of the current tree element
        const childSets = this.calculateTreeCounts(tree[i].items);
        //add this elemets used orgs to that set and set the counts
        tree[i].businessUsers?.forEach((b) => childSets.businessSet.add(b));
        tree[i].businessUsedCount = childSets.businessSet.size;
        tree[i].nonProfitUsers?.forEach((b) => childSets.nonProfitSet.add(b));
        tree[i].nonProfitUsedCount = childSets.nonProfitSet.size;
        //combine with the global set
        childSets.businessSet?.forEach((el) => businessSet.add(el));
        childSets.nonProfitSet?.forEach((el) => nonProfitSet.add(el));
      }
    }
    return { businessSet, nonProfitSet };
  }
}
