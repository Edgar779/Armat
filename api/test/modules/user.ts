import axios from 'axios';
import { SignedInDTO } from 'src/auth';
import { UserDTO } from 'src/user';
import { BASE_URL } from '../data';

export class User {
  static async create(admin): Promise<SignedInDTO> {
    const res = await axios.post(BASE_URL + 'users', admin);
    return res.data;
  }

  static async edit(token, user): Promise<UserDTO> {
    const res = await axios.patch(BASE_URL + 'users', user, {
      headers: { 'access-token': token },
    });
    return res.data;
  }

  static async getAll(): Promise<UserDTO[]> {
    const res = await axios.get(BASE_URL + 'users');
    return res.data;
  }

  static async getMyProfile(token): Promise<UserDTO> {
    const res = await axios.get(BASE_URL + 'users/myProfile', {
      headers: { 'access-token': token },
    });
    return res.data;
  }
}
