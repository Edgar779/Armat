/**Users export index */

import {
    ByAlphabeticalUsers,
    ByAlphabeticalUsersDefault,
    deleteUser,
    getUsersById,
    getUsersList,
    searchUser,
    filterByRole,
    getUser,
} from './users.action';

export { usersReducer } from './users.reducer';
export { watchUsers } from './users.saga';
export { GET_USERS, GET_USERS_SUCCESS } from './users.types';

export const userActions = {
    getUsersList,
    getUser,
    getUsersById,
    deleteUser,
    searchUser,
    ByAlphabeticalUsers,
    ByAlphabeticalUsersDefault,
    filterByRole,
};
