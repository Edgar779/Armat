import { SignedInDTO } from '../src/auth';
import { admins } from './data';
import { App, User } from './modules';
import { Auth } from './modules/auth';

export let adminAuth: SignedInDTO;
export let permissions;

export const mochaHooks = {
  async beforeAll() {
    this.timeout(0);
    await App.clearDB();
    const admin = await User.create(admins[0]);
    await Auth.setRoleAdmin(admin.token);
    adminAuth = await Auth.login(admins[0]);
  },
};
