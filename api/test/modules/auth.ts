import axios from 'axios';
import { AuthDTO, Role, SignedInDTO } from '../../src/auth';
import { BASE_URL } from '../data';

export class Auth {
  static async create(user): Promise<AuthDTO> {
    const res = await axios.post(BASE_URL + 'auth', {
      id: '61803a18212200183866343b',
      email: user.email,
      password: user.password,
    });
    return res.data;
  }

  static async setRole(token: string, email: string, role?: Role) {
    const res = await axios.patch(
      BASE_URL + 'auth/setRole',
      {
        email: email,
        role: role ? role : Role.VERIFIED_MEMBER,
      },
      { headers: { 'access-token': token } },
    );
    return res.data;
  }

  static async setRoleAdmin(token: string) {
    const res = await axios.patch(BASE_URL + 'auth/setRoleAdmin', null, {
      headers: { 'access-token': token },
    });
  }

  static async login(admin): Promise<SignedInDTO> {
    const res = await axios.post(BASE_URL + 'auth/signin', {
      email: admin.email,
      password: admin.password,
    });
    return res.data;
  }
  static async loginPhone(admin): Promise<SignedInDTO> {
    const res = await axios.post(BASE_URL + 'auth/signin', {
      phoneNumber: admin.phoneNumber,
      password: admin.password,
    });
    return res.data;
  }
  // static async logout(token): Promise<string> {
  //   const res = await axios.post(BASE_URL + 'authn/logout', null, {
  //     headers: { 'access-token': token },
  //   });
  //   return res.data;
  // }

  // static async addRole(authId, roleId): Promise<AuthResponseDTO> {
  //   const res = await axios.patch(BASE_URL + `authn/${authId}/${roleId}/addRole`);
  //   return res.data;
  // }

  // static async getAuth(token, authId): Promise<AuthResponseDTO> {
  //   const res = await axios.get(BASE_URL + `authn/${authId}`, {
  //     headers: { 'access-token': token },
  //   });
  //   return res.data;
  // }

  // static async getMyAuth(token): Promise<AuthResponseDTO> {
  //   const res = await axios.get(BASE_URL + `authn/myAuth`, {
  //     headers: { 'access-token': token },
  //   });
  //   return res.data;
  // }
}
