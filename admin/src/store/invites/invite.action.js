import {MAKE_MEMBER_INVITE, MEMBER_INVITE, ORGANIZER_INVITE, REMOVE_STATUS, SET_ROLE_INVITE} from "./invite.types";

export const MakeMember = (email) => {
  return {
    type: MAKE_MEMBER_INVITE,
    payload: { email },
  }
};

export const InviteMember = (email) => {
  return {
    type: MEMBER_INVITE,
    payload: { email },
  }
};

export const InviteOrganizer = (email) => {
  return {
    type: ORGANIZER_INVITE,
    payload: { email },
  }
};

export const RemoveStatus = () => {
  return {
    type: REMOVE_STATUS,
  }
};





export const setRoleInvite = ( info ) =>{
  return{
    type: SET_ROLE_INVITE,
    payload: { info }
  }
}