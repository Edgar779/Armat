/**Invites export index */

import {InviteMember, InviteOrganizer, MakeMember, RemoveStatus, setRoleInvite} from './invite.action';

export { inviteReducer } from './invite.reducer';
export { watchInvite } from './invite.saga';

export const invitesActions = {
    // MakeMember,
    // InviteMember,
    // InviteOrganizer,
    RemoveStatus,



    setRoleInvite
};
