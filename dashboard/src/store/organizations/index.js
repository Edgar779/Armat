import {
    getOrganizationsByUser,
    setCurrentOrganization,
    getOrgCategories,
    createOrganization,
    getOrgById,
    editOrganization,
    editOrganizationSocial,
    getOrganizationSocial,
} from "./organization.action";
export { organizationReducer } from './organization.reducer';
export { watchOrganization } from './organization.saga';

export const organizationActions = {
    /** My Organizations */
    getOrgById,
    getOrganizationsByUser,
    setCurrentOrganization,
    createOrganization,
    editOrganization,
    editOrganizationSocial,
    getOrganizationSocial,
    /** End */

    /** Organization Categories */
    getOrgCategories,
    /** End */
};
