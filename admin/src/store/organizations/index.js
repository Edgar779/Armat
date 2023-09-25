/**Tags and Categories export index */

import {
    acceptOrReject,
    approveClaims, approveOrRejectSponsor, aToZ, atoZDefault,
    createOrg,
    deleteOrg,
    editOrg, filterOrgByStatus, getClaims, getEdits, getEventSponsors, getEventSponsorsForEdit,
    getOrg,
    getOrgById, getPendingSponsors, rejectClaims, removeManager, searchOrg, setStatus,

} from './organizations.action';

export {organizationsReducer} from './organizations.reducer';
export {watchOrg} from './organizations.saga';

export const organizationActions = {
    createOrg,
    editOrg,
    deleteOrg,
    getOrg,
    getOrgById,

    getClaims,
    approveClaims,
    rejectClaims,

    /**Edits */
    getEdits,
    acceptOrReject,

    /**Status */
    setStatus,

    /**Manager */
    removeManager,

    /**Sponsoring */
    getPendingSponsors,
    getEventSponsors,
    getEventSponsorsForEdit,
    approveOrRejectSponsor,
    /**SearchPage */
    searchOrg,
    aToZ,
    atoZDefault,
    filterOrgByStatus

};
