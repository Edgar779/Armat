/**Users reducer */

import {
    FILTER_USERS_BY_AZ,
    FILTER_USERS_BY_AZ_SUCCESS,
    FILTER_USERS_BY_DEFAULT,
    FILTER_USERS_BY_ROLE,
    FILTER_USERS_BY_ROLE_SUCCESS,
    GET_USERS,
    GET_USERS_BY_ID_SUCCESS,
    GET_USERS_SUCCESS,
    SEARCH_USER,
} from './users.types';
import { paginate } from '../../utils/pagination';
import {FilterType} from "../../utils/filterType";

const initialState = {
    usersListLoader: false,
    users: [],
    reserveUsers: [],
    usersByID: [],
    filterLoader: false,
    unverified:'',
    organizer:'',
    verified:'',
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {
                ...state,
                // usersListLoader: false,
                users: paginate(action.payload, 10),
                reserveUsers: action.payload,
                unverified: FilterType(action.payload, 'MEMBER'),
                organizer: FilterType(action.payload, 'ORGANIZER'),
                verified: FilterType(action.payload, ' VERIFIED_MEMBER')
            };

        case GET_USERS_BY_ID_SUCCESS:
            return {
                ...state,
                usersByID: action.payload.data,
            };

        // case GET_USERS:
        //     return {
        //         ...state,
        //         usersListLoader: true,
        //     };

        case SEARCH_USER: {
            const filterItems = (query) => {
                return state.reserveUsers.filter((el) => el.fullName.toLowerCase().indexOf(query.toLowerCase()) > -1);
            };
            return { ...state, users: paginate(filterItems(action.payload.name), 10) };
        }

        case FILTER_USERS_BY_AZ:
            return {
                ...state,
                filterLoader: true,
                users: paginate(
                    state.reserveUsers.sort((a, b) => a.fullName.localeCompare(b.fullName)),
                    10
                ),
            };

        case FILTER_USERS_BY_DEFAULT:
            return {
                ...state,
                users: paginate(state.reserveUsers, 10),
            };

        case FILTER_USERS_BY_AZ_SUCCESS:
            return {
                ...state,
                reserveUsers: action.payload,
                filterLoader: false,
            };

        case FILTER_USERS_BY_ROLE: {
            return {
                ...state,
                users: paginate(
                    state.reserveUsers.filter((i) => (i.type === action.payload.role ? state.usersByID.push(i) : '')),
                    10
                ),
            };
        }
        case FILTER_USERS_BY_ROLE_SUCCESS: {
            return {
                ...state,
                reserveUsers: action.payload,
            };
        }

        default:
            return state;
    }
};
