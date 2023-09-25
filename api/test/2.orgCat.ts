import { orgCats } from './data';
import { adminAuth } from './hooks';
import { OrgCat } from './modules/orgCat';

describe('Organization Categories', function () {
  this.timeout(0);
  describe('Create org categories', function () {
    it('should create organization Categories', async function () {
      for (let i = 0; i < orgCats.length; i++) {
        const parent = await OrgCat.create(adminAuth.token, orgCats[i]);
        i++;
        if (i >= orgCats.length) break;
        const orgDTO = {
          name: orgCats[i].name,
          parent: parent.id,
        };
        const child = await OrgCat.create(adminAuth.token, orgDTO);
        i++;
        if (i >= orgCats.length) break;
        const grandchild = {
          name: orgCats[i].name,
          parent: child.id,
        };
        await OrgCat.create(adminAuth.token, grandchild);
      }
    });
  });
  describe('Get all categories', function () {
    it('Should get all categories', async function () {
      const cats = await OrgCat.getAll();
    });
  });

  describe('Delete a category', function s() {
    it('Should delete a category with subcategories', async function () {
      let cats = await OrgCat.getAll();
      cats = await OrgCat.delete(adminAuth.token, cats[0].id);
    });
  });
});
