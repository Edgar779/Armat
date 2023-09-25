/**Tags and Categories export index */

import {
    createOrgCat,
    deleteOrgCat,
    editOrgCat,
    getOrgCat,
    getOrgCatById,
} from './organizer.action';

export {organizerReducer} from './organizer.reducer';
export {watchOrgCat} from './organizer.saga';

export const organizerActions = {
    createOrgCat,
    editOrgCat,
    deleteOrgCat,
    getOrgCat,
    getOrgCatById,
};
