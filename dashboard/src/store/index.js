/** Actions */
import axios from 'axios';
export { store } from './store';
export { API_BASE } from './constants';
export { membersActions } from './members';
export { organizationActions } from './organizations';
export { eventActions } from './events';
export { ticketsActions } from './tickets';

export { httpRequestsOnSuccessActions } from './http_requests_on_success';
export { httpRequestsOnErrorsActions } from './http_requests_on_errors';
export { httpRequestsOnLoadActions } from './http_requests_on_load';

export const UploadServices = {
    UploadImage: (formData) => axios.post('/files/upload?includeThumbnail=false', formData, { auth: true, params: '' }),
};
