import axios from 'axios';
import { getId } from 'utils';

export const membersService = {
    /** Member */

    inviteMemberService: (body) => axios.post(`/orgUser/createRole`, body, { auth: true }),

    editRoleService: (body) => axios.patch(`/orgUser/updateRole`, body, { auth: true }),

    getMembersListService: ( params) => axios.get(`/orgUser/org/${getId}`, { params: { ...params }, auth: true }),

    deleteMembersService: ( params) => axios.patch(`/orgUser/${getId}/deleteRole`, null, {params:{ memberIds:params.members }, auth: true }),

    /** End */

    /** Tags */

    getTagsService: ( ) => axios.get(`/tags/org/${getId}`, { auth: true }),

    createTagService: ( body ) => axios.post(`/tags`, body,{ auth: true }),

    editTagService: ( body ) => axios.patch(`/tags/${body?.id}/org/${getId}`, { color:body?.color, name:body?.name },{ auth: true }),

    deleteTagService: ( id ) => axios.delete(`/tags/${id}/org/${getId}`,{ auth: true }),

    addTagToMemberService: ( userId, tagId ) => axios.patch(`/orgUser/${userId}/org/${getId}/tag/${tagId}/assign`,null, { auth: true }),

    removeTagFromMemberService: ( userId, tagId ) => axios.patch(`/orgUser/${userId}/org/${getId}/tag/${tagId}/unassign`, null,{ auth: true }),

    /** End */

    /** User List */

    createUserListService: ( body ) => axios.patch(`/orgs/${getId}/list`, body,{ auth: true }),

    assignUsersToListService: (listId, body ) => axios.patch(`/list/${listId}/org/${getId}/assignUser`, body,{ auth: true }),

    getUserGroupListService: (  ) => axios.get(`/list/org/${getId}` ,{ auth: true }),

    getUserGroupByIdService: ( id, params ) => axios.get(`/list/${id}/org/${getId}` ,{params:{ ...params }, auth: true }),

    duplicateGroupListService: ( body ) => axios.patch(`/orgs/${getId}/list/${body?.listId}/duplicate`, null, {params:{listName:body?.listName}, auth: true }),

    assignUserToGroupListService: ( id, body ) => axios.patch(`/list/${id}/org/${getId}/assignUser`, body, { auth: true }),

    unassignUserToGroupListService: ( id, body ) => axios.patch(`/list/${id}/org/${getId}/deleteUser`, body, { auth: true }),

    deleteGroupListService: ( id ) => axios.patch(`/orgs/${getId}/list/${id}/delete`, null, { auth: true }),

    /** End */
    postOrgUserIdExportCsv: (orgId) => axios.post(`/orgUser/${orgId}/exportCsv`, {}, { auth: true }),

};
