import {
  GET_ORG_BY_USER, SET_CURRENT_ORG, GET_ORG_CATEGORIES, CREATE_ORGANIZATION,
  GET_ORGANIZATION_BY_ID, EDIT_ORGANIZATION, EDIT_ORGANIZATION_SOCIALS, GET_ORGANIZATION_SOCIALS
} from "./organization.type";


/** My Organizations */

export const getOrganizationsByUser = () => {
  return {
    type: GET_ORG_BY_USER
  };
};

export const setCurrentOrganization = (orgId) => {
  return {
    type: SET_CURRENT_ORG,
    payload: orgId
  };
};

export const createOrganization = (body) => {
  return {
    type: CREATE_ORGANIZATION,
    payload: { body }
  };
};

export const editOrganization = (id, body) => {
  return {
    type: EDIT_ORGANIZATION,
    payload: { id, body }
  };
};

export const getOrgById = () => {
  return {
    type: GET_ORGANIZATION_BY_ID
  };
};

export const editOrganizationSocial = (body) => {
  return {
    type: EDIT_ORGANIZATION_SOCIALS,
    payload: { body }
  };
};

export const getOrganizationSocial = () => {
  return {
    type: GET_ORGANIZATION_SOCIALS
  };
};

/** End */

/** Organization Categories */

export const getOrgCategories = () => {
  return {
    type: GET_ORG_CATEGORIES
  };
};

/** End */
