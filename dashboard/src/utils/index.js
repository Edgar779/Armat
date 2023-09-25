// Utils.

export { Colors, renderColor, tagColors } from './colors/colors';
export { initAxiosInterceptors, FindLoad, FindError, FindSuccess, CustomModals, CustomModalProvider, useModal, capFirst } from './hooks';
export { EmailValidator, PasswordValidator } from './validation';
export { MODAL_NAMES } from './constants';
export { SavePage, SendPageSave, SaveParams } from './paginate';
export { carouselList, tagList, categorisList, organizationlist } from './json';
export { useWindowDimensions } from "./width";
export { ORGMANAGER, ORGADMIN, CheckUserType } from './hooks'

export const ADMIN = 'ADMIN';

export const getId = localStorage.getItem('orgId');
