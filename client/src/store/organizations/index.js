/**Tags and Categories export index */

import {
    acceptOrReject,
    approveClaims,
    claim,
    createOrg,
    deleteOrg,
    editOrg,
    follow,
    getClaims,
    getEdits,
    getFollows,
    getOrg,
    getOrgByCategories,
    getOrgById,
    getOrgCategories,
    orgEvents,
    rejectClaims,
    removeById,
    removeOrgById,
    removeSuggestOrg,
    setStatus,
    suggestOrg,
    unfollow,
} from './organizations.action';

export { organizationsReducer } from './organizations.reducer';
export { watchOrg } from './organizations.saga';

export const organizationActions = {
    createOrg,
    editOrg,
    deleteOrg,
    getOrg,
    getOrgByCategories,
    getOrgById,
    removeOrgById,

    getClaims,
    approveClaims,
    rejectClaims,

    /**Edits */
    getEdits,
    acceptOrReject,

    /**Status */
    setStatus,

    /**Claim */
    claim,

    /**Suggest */
    suggestOrg,
    removeSuggestOrg,
    removeById,

    /**Events */
    orgEvents,

    /**Categories */
    getOrgCategories,

    /**Follow */
    getFollows,
    follow,
    unfollow,
};
