import axios from 'axios';
import { OrgCategoryDTO } from 'src/orgCategory/dto';
import { BASE_URL } from '../data';

export class OrgCat {
  static async create(token, cat): Promise<OrgCategoryDTO> {
    // Whipe the database
    const res = await axios.post(BASE_URL + 'orgCategories', cat, {
      headers: { 'access-token': token },
    });
    return res.data;
  }

  static async getAll(): Promise<OrgCategoryDTO[]> {
    const res = await axios.get(BASE_URL + 'orgCategories');
    return res.data;
  }

  static async get(id): Promise<OrgCategoryDTO[]> {
    const res = await axios.get(BASE_URL + 'orgCategories/' + id);
    return res.data;
  }

  static async delete(token, id): Promise<OrgCategoryDTO[]> {
    const res = await axios.delete(BASE_URL + 'orgCategories/' + id, {
      headers: { 'access-token': token },
    });
    return res.data;
  }
}
