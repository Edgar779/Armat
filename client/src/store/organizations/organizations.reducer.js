import {
    GET_CLAIMS_SUCCESS,
    GET_EDITS_SUCCESS,
    GET_EVENTS_BY_ORGANIZATION_SUCCESS,
    GET_FOLLOWS_SUCCESS,
    GET_ORG_CATEGORIES_SUCCESS,
    GET_ORGANIZATION_BY_ID_SUCCESS,
    GET_ORGANIZATION_SUCCESS,
    GET_SUGGEST_INFO_SUCCESS,
    REMOVE_ORG_BY_ID,
    REMOVE_ORGANIZATION_BY_ID,
    REMOVE_SUGGEST_INFO,
} from './organizations.types';
import { paginate } from 'theme';

const initialState = {
    organizations: [],
    organizationsReserve: [],
    organizationsById: [],
    claims: [],
    edits: [],
    orgEvents: [],
    suggestOrg: [],
    orgCategories: [],
    myFollows: [],
};

export const organizationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORGANIZATION_SUCCESS:
            return {
                ...state,
                organizations: paginate(action.payload, 10),
                organizationsReserve: action.payload,
            };

        case GET_ORGANIZATION_BY_ID_SUCCESS:
            return {
                ...state,
                organizationsById: action.payload,
            };
        case REMOVE_ORGANIZATION_BY_ID:
            return {
                ...state,
                organizationsById: [],
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

        /**Events */
        case GET_EVENTS_BY_ORGANIZATION_SUCCESS:
            return {
                ...state,
                orgEvents: action.payload,
            };

        /**Suggest */
        case GET_SUGGEST_INFO_SUCCESS:
            return {
                ...state,
                suggestOrg: action.payload,
            };

        case REMOVE_ORG_BY_ID:
            return {
                ...state,
                organizationsById: [],
            };

        case REMOVE_SUGGEST_INFO:
            return {
                ...state,
                organizationsById: [],
            };

        /**Categories */
        case GET_ORG_CATEGORIES_SUCCESS:
            return {
                ...state,
                orgCategories: action.payload,
            };

        /**Follows */
        case GET_FOLLOWS_SUCCESS:
            return {
                ...state,
                myFollows: action.payload,
            };

        default:
            return state;
    }
};
