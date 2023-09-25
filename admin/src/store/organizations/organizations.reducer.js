import {
    FILTER_ORG, FILTER_ORG_BY_STATUS, FILTER_ORG_DEFAULT,
    GET_CLAIMS_SUCCESS, GET_EDITS_SUCCESS, GET_EVENT_SPONSORS_FOR_EDIT_SUCCESS, GET_EVENT_SPONSORS_SUCCESS,
    GET_ORGANIZATION_BY_ID_SUCCESS,
    GET_ORGANIZATION_SUCCESS, GET_PENDING_SPONSORS_SUCCESS, SEARCH_ORG,
} from './organizations.types';
import {paginate} from "../../utils/pagination";
import {FILTER_USERS_BY_ROLE} from "../users/users.types";

const initialState = {
    organizations: [],
    organizationsReserve: [],
    organizationsById: [],
    claims: [],
    edits: [],
    pendingSponsors: [],
    sponsors: [],
    eventSponsor: []
};

export const organizationsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEARCH_ORG: {
            const filterItems = (query) => {
                return state.organizationsReserve.filter((el) => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
            };
            return {
                ...state,
                organizations: paginate(filterItems(action.payload.name), 10),
            };
        }
        case FILTER_ORG:
            return {
                ...state,

                organizations: paginate(
                    state.organizationsReserve.sort((a, b) => a.name.localeCompare(b.name)),
                    10
                ),
            };

        case FILTER_ORG_DEFAULT:
            return {
                ...state,
                organizations: paginate(state.organizationsReserve, 10),
            };

        case GET_ORGANIZATION_SUCCESS:
            return {
                ...state,
                organizations: paginate(action.payload, 10),
                organizationsReserve: action.payload,
            };

        case FILTER_ORG_BY_STATUS: {
            return {
                ...state,
                organizations: paginate(
                    state.organizationsReserve.filter((i) => (i.status === action.payload.status )),
                    10
                ),
            };
        }

        case GET_ORGANIZATION_BY_ID_SUCCESS:
            return {
                ...state,
                organizationsById: action.payload,
            };

        /**Claims types */
        case GET_CLAIMS_SUCCESS:
            return {
                ...state,
                claims: action.payload,
            };

        /**Edits types */
        case GET_EDITS_SUCCESS:
            return {
                ...state,
                edits: action.payload,
            };

        /**Sponsoring types */
        case GET_PENDING_SPONSORS_SUCCESS:
            return {
                ...state,
                pendingSponsors: action.payload,
            };

        case GET_EVENT_SPONSORS_SUCCESS:
            return {
                ...state,
                sponsors: action.payload,
            };

        case GET_EVENT_SPONSORS_FOR_EDIT_SUCCESS:
            return {
                ...state,
                eventSponsor: action.payload,
            };

        default:
            return state;
    }
};
