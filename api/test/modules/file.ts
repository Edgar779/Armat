// import axios from 'axios';
// import { FileDTO } from '../../../../poloTMS/api/src/files/dto';
// import { BASE_URL } from '../data';

// export class File {
//   static async createFile(token, file): Promise<FileDTO> {
//     const res = await axios.post(BASE_URL + 'files', file, {
//       headers: { 'access-token': token },
//     });
//     return res.data;
//   }
//   static async getFile(resource, onModel): Promise<FileDTO> {
//     const res = await axios.get(BASE_URL + `files/:${resource}/:${onModel}`, {
//       //   headers: { 'access-token': token },
//     });
//     return res.data;
//   }
//   static async editFile(file, id): Promise<FileDTO> {
//     const res = await axios.post(BASE_URL + 'files' + id, file);
//     return res.data;
//   }
//   static async deleteFile(file, id): Promise<FileDTO> {
//     const res = await axios.post(BASE_URL + 'files' + id);
//     return res.data;
//   }
// }
