import {
    getMembersList,
    inviteMember,
    changeRole,
    deleteMembers,
    getTags,
    createTag,
    editTag,
    deleteTag,
    addTagToMember,
    removeTagFromMember,
    createUserList,
    assignUsersToList,
    getUserGroupList,
    getUserGroupById,
    duplicateList,
    getAllMembers,
    assignUserToGroupList,
    deleteGroupList,
    unassignUserToGroupList, removeUserGroupById
} from "./member.action";
export { membersReducer } from './member.reducer';
export { watchMember } from './member.saga';


export const membersActions = {
    /** Member */
    inviteMember,
    changeRole,
    getMembersList,
    getAllMembers,
    deleteMembers,
    /** End */

    /** Tags */
    getTags,
    createTag,
    editTag,
    deleteTag,
    addTagToMember,
    removeTagFromMember,
    /** End */

    /** User List */
    createUserList,
    assignUsersToList,
    getUserGroupList,
    getUserGroupById,
    removeUserGroupById,
    duplicateList,
    assignUserToGroupList,
    unassignUserToGroupList,
    deleteGroupList,
    /** End */
};
