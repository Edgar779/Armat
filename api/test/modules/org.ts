import axios from 'axios';
import { BASE_URL } from '../data';

export class Org {
  static async create(token, org) {
    const res = await axios.post(BASE_URL + 'orgs', org, { headers: { 'access-token': token } });
    return res.data;
  }

  //   static async edit() {}

  //   static async archive() {}

  static async get(token, orgId) {
    if (!orgId) return null;
    const res = await axios.get(BASE_URL + `orgs/${orgId}`, {
      headers: { 'access-token': token },
    });
    return res.data;
  }

  /** Claims */
  static async claim(token, orgId) {
    const res = await axios.post(BASE_URL + `orgs/${orgId}/claims`, null, {
      headers: { 'access-token': token },
    });
    return res.data;
  }
  static async approveClaim(token, claimId) {
    const res = await axios.patch(BASE_URL + `orgs/claims/${claimId}`, null, {
      headers: { 'access-token': token },
    });
    return res.data;
  }
  static async rejectClaim(token, claimId) {
    const res = await axios.patch(BASE_URL + `orgs/claims/${claimId}`, {
      headers: { 'access-token': token },
    });
    return res.data;
  }
  static async getClaims(token, orgId) {
    const res = await axios.get(BASE_URL + `orgs/${orgId}/claims`, {
      headers: { 'access-token': token },
    });
    return res.data;
  }
}
