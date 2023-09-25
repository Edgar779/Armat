/**Invites services */

import { API_BASE } from '../constants';
import axios from 'axios';

const path = `${API_BASE}`;

export const authService = {
    inviteMakeMember: (email) => {
        const res = axios.post(
            `auth/makeMember`,
            { email: email },
            {auth: true}
        );
        return res;
    },

    inviteMember: (email) => {
        const res = axios.post(
            `auth/invitations/members`,
            { email: email },
            {auth: true}
        );
        return res;
    },

    inviteOrganizer: (email) => {
        const res = axios.post(
            `auth/invitations/organizers`,
            { email: email },
            {auth: true}
        );
        return res;
    },



    setRoleService: ( info ) => axios.patch('/auth/setRole', info, { auth: true } )
};
