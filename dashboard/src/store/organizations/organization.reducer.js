import {
  GET_ORG_BY_USER_SUCCESS,
  GET_CURRENT_ORG,
  SET_CURRENT_ORG,
  GET_ORG_CATEGORIES_SUCCESS,
  GET_ORGANIZATION_BY_ID_SUCCESS,
  GET_ORGANIZATION_SOCIALS_SUCCESS
} from "./organization.type";

const initialState = {
  organizationsList: null,
  currentOrg: null,
  orgById: null,

  categories: null,
  orgSocials: null
};

const handleSetCurrent = (id, list) => {
  const current = list?.find((i) => i?.id === id);
  if (current?.id) {
    localStorage.setItem("orgId", current?.id);
    return current;
  }
};

const handleRenderNewState = (res) => {
  const admin = JSON.parse(localStorage.getItem("userInfo"));

  const userOrganizations = admin?.orgs?.length && admin?.orgs?.filter((i) => i?.userType && i?.userType !== "ORGMEMBER");

  if (admin?.auth?.role === "ADMIN") {
    return res;
  } else {
    const filteredList = res?.filter(function(array_el) {
      return (
        userOrganizations?.filter(function(anotherOne_el) {
          return anotherOne_el?.org === array_el.id || array_el?.creator?.id === admin?.id;
        }).length !== 0
      );
    });
    return filteredList;
  }
};

export const organizationReducer = (state = initialState, action) => {
  switch (action.type) {

    /** My Organizations */

    case GET_ORG_BY_USER_SUCCESS:
      return {
        ...state,
        organizationsList: handleRenderNewState(action.payload)
        // organizationsList: action.payload
      };

    case GET_ORGANIZATION_BY_ID_SUCCESS:
      return {
        ...state,
        orgById: action.payload
      };

    case GET_CURRENT_ORG:
      return {
        ...state,
        currentOrg: action.payload
      };

    case SET_CURRENT_ORG:
      return {
        ...state,
        currentOrg: handleSetCurrent(action.payload, state?.organizationsList)
      };

    case GET_ORGANIZATION_SOCIALS_SUCCESS:
      return {
        ...state,
        orgSocials: action.payload
      };

    /** End */

    /** Organization Categories */

    case GET_ORG_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload
      };

    /** End */

    default:
      return state;
  }
};
