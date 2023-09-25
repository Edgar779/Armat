import { expect } from 'chai';
import { Role } from '../src/auth';
import { EditUserDTO } from '../src/user';
import { users } from './data';
import { adminAuth } from './hooks';
import { User } from './modules';

describe('User', function () {
  this.timeout(0);
  // describe('Create User Accounts', function () {
  //   it('Should create user accounts', async function () {
  //     const promises = [];
  //     for (let i = 0; i < users.length; i++) {
  //       // promises.push(() => User.create(data.users[i]));
  //       await User.create(users[i]);
  //     }
  //   });
  // });

  describe('Create user', function () {
    this.timeout(0);
    it('Should create user', async function () {
      const testUser = users[0];
      const userAuth = await User.create(testUser);
      expect(userAuth.token).to.be.a('string');

      describe('Get my profile', function () {
        it('Should get the user profile', async function () {
          const user = await User.getMyProfile(userAuth.token);
          expect(user.fullName).to.equal(testUser.fullName);
        });
      });

      describe('Edit user', function () {
        this.timeout(0);
        it('Should edit user account', async function () {
          const changeData: EditUserDTO = {
            fullName: 'VALOD',
            email: 'valod@vladik.com',
            phoneNumber: '8184416760',
            settings: {
              notificationSettings: { allowEmail: false, allowText: false, allowInApp: false },
            },
          };
          const user = await User.edit(userAuth.token, changeData);
          expect(user.fullName).to.equal(changeData.fullName);
          expect(user.email).to.equal(changeData.email);
          expect(user.phoneNumber).to.equal(changeData.phoneNumber);
          expect(user.settings.notificationSettings.allowEmail).is.equal(false);
          expect(user.settings.notificationSettings.allowInApp).is.equal(false);
          expect(user.settings.notificationSettings.allowText).is.equal(false);
        });
      });
    });
  });

  // describe('Get User Accounts', function () {
  //   it('Should get user accounts', async function () {
  //     const users = await User.getAll();
  //     console.log(users);
  //   });
  // });

  // describe('Get User Accounts', function () {
  //   it('Should get user accounts', async function () {
  //     const users = await User.getAll();
  //     console.log(users);
  //   });
  // });
});
