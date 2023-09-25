import axios from "axios";
import { getId } from "utils";


export const authService = {
  /** My Organizations */

  getOrganizationsByUserService: () => axios.get(`/orgs/byAdmin`, { auth: true }),
  // getOrganizationsByUserService: ( ) => axios.get(`/orgs/byMember`, { auth: true }),

  createOrganizationService: (body) => axios.post(`/orgs`, body, { auth: true }),

  getOrgByIdService: () => axios.get(`/orgs/${getId}`, { auth: true }),

  editOrganizationService: (id, body) => axios.patch(`/orgs/${id}`, body, { auth: true }),

  editOrganizationSocialService: (body) => axios.patch(`/orgs/${getId}/socials`, body, { auth: true }),

  getOrganizationSocialService: ( ) => axios.get(`/orgs/${getId}/socials`, ),

  /** End */

  /** Organization Categories */
  getOrgCategoriesService: () => axios.get(`/orgCategories`, { auth: true }),
  /** End */

};
