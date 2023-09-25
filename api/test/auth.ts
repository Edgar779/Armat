import { expect } from 'chai';

import { users, admins } from './data';
import { HttpStatus } from '@nestjs/common';
import { Auth } from './modules/auth';
import { Role } from '../src/auth';
import { adminAuth } from './hooks';
import { User } from './modules';

describe.skip('Auth', () => {
  let user0, user1;
  before(async function () {
    this.timeout(0);
    user0 = await Auth.login(users[0]);
    user1 = await Auth.login(users[1]);
  });
  describe('Invite Users', function () {
    it('Should Invite users', async function () {
      const auth = await Auth.setRole(adminAuth.token, users[0].email, Role.VERIFIED_MEMBER);
    });
  });

  describe('Organizer Role Change', async function () {
    it('Should NOT change user role to organizer with user', async function () {
      const auth = await Auth.setRole(user0.token, users[1].email, Role.ORGANIZER);
      console.log(auth);
    });
    it('Should change user role to organizer with admin', async function () {
      const auth = await Auth.setRole(adminAuth.token, users[1].email, Role.ORGANIZER);
      console.log(auth);
    });
    it('Should NOT downgrade Organizers to member with user', async function () {
      const auth = await Auth.setRole(user0.token, users[1].email, Role.MEMBER);
      console.log(auth);
    });
    it('Should downgrade Organizers to member with Admin', async function () {
      const auth = await Auth.setRole(adminAuth.token, users[1].email, Role.MEMBER);
      console.log(auth);
    });
  });

  describe('Admin Role Change', async function () {
    it('Should NOT change user role to admin role with user', async function () {
      const auth = await Auth.setRole(user0.token, users[1].email, Role.ADMIN);
      console.log(auth);
    });
    it('Should Not change admin user role with admin', async function () {
      const auth = await Auth.setRole(adminAuth.token, users[1].email, Role.ADMIN);
      console.log(auth);
    });
    it('Should NOT downgrade Admin to anything with user', async function () {
      const auth = await Auth.setRole(user0.token, admins[0].email, Role.ORGANIZER);
      console.log(auth);
    });
    it('Should downgrade Admin to anything with Admin', async function () {
      const auth = await Auth.setRole(adminAuth.token, admins[0].email, Role.ORGANIZER);
      console.log(auth);
    });
  });

  describe('Verified Role Change', function () {
    it('Members CANT changes member to verified user', async function () {
      const auth = await Auth.setRole(user1.token, users[2].email, Role.VERIFIED_MEMBER);
      console.log(auth);
    });

    it('Verified User changes member to verified user', async function () {
      const auth = await Auth.setRole(user0.token, users[2].email, Role.VERIFIED_MEMBER);
      console.log(auth);
    });
    it('Verified User CANT change verified user to member', async function () {
      const auth = await Auth.setRole(user0.token, users[2].email, Role.MEMBER);
      console.log(auth);
    });

    it('ADMIN Can change verified user to member', async function () {
      const auth = await Auth.setRole(adminAuth.token, users[2].email, Role.MEMBER);
      console.log(auth);
    });

    it('ADMIN CAN downgrade VERIFIED USER to member', async function () {
      const auth = await Auth.setRole(user0.token, users[1].email, Role.MEMBER);
      console.log(auth);
    });
  });

  describe('Login with phoneNumber', function () {
    it('Should login with phone number', async function () {
      const auth = await Auth.loginPhone(users[2]);
      expect(auth.token).to.be.a('string');
    });
  });
});
