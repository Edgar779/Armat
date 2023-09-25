import { expect } from 'chai';
import { orgs } from './data/org';
import { Org } from './modules/org';
import { adminAuth } from './hooks';
import { admins, users } from './data';
import { Auth } from './modules';
import { OrgStatus } from '../src/org/org.constants';
import { OrgCat } from './modules/orgCat';
import { Role } from '../src/auth';

try {
  let user, categories, mainOrg;
  describe('Org', function () {
    this.timeout(0);
    before(async function () {
      this.timeout(0);
      user = await Auth.login(users[0]);
      categories = await OrgCat.getAll();
    });

    describe('Create an organization', function () {
      it('Should create an organization with admin', async function () {
        const data = { ...orgs[0], categories: [categories[0].children[0].id] };
        mainOrg = await Org.create(adminAuth.token, data);
        expect(mainOrg.name).to.be.equal(orgs[0].name);
        expect(mainOrg.id).to.be.a('string');
        expect(mainOrg.createdAt).to.be.a('string');
        expect(mainOrg.status).to.be.equal(OrgStatus.ACTIVE);
        expect(mainOrg.creator.fullName).to.be.equal(admins[0].fullName);
        expect(mainOrg.categories[0].name).to.equal(categories[0].children[0].name);
      });

      it('Should create an organization with user', async function () {
        const org = await Org.create(user.token, orgs[1]);
        expect(org.name).to.be.equal(orgs[1].name);
        expect(org.id).to.be.a('string');
        expect(org.createdAt).to.be.a('string');
        expect(org.status).to.be.equal(OrgStatus.PENDING);
      });

      describe('Create a claim', function () {
        it('Should create a claim', async function () {
          await Auth.setRole(adminAuth.token, users[0].email, Role.VERIFIED_MEMBER);
          await Org.claim(user.token, mainOrg.id);
          const claims = await Org.getClaims(adminAuth.token, mainOrg.id);
          expect(claims[0].org.id).to.equal(mainOrg.id);
          describe('Approve the claim', function () {
            it('Should approve a claim', async function () {
              await Org.approveClaim(adminAuth.token, claims[0].id);
              const approvedOrg = await Org.get(adminAuth.token, claims[0].org.id);
              expect(approvedOrg.manager).to.equal(claims[0].user.id);
            });
          });
        });
      });
    });
  });
} catch (err) {
  console.log(err.message);
  console.log(err.response);
}
