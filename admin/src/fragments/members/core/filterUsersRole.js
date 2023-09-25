import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { membersFragmentStyle } from './style';
import { FormControlLabel, Radio } from '@material-ui/core';
import { FilterStatus } from 'components';
import { invitesActions } from 'store';
import {light} from "@material-ui/core/styles/createPalette";

export const FilterUsersRole = ({ List, userEmail, type }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const classes = membersFragmentStyle();

    const sendRequest = (type) => {
        const roleType =
            type === 'Verified User' ? 'VERIFIED_MEMBER' :
              type === 'Unverified User' ? 'MEMBER' :
                type === 'Organizer' ? 'ORGANIZER' :
                    type === 'Member' ? 'MEMBER' :
                      type === 'ADMIN' ? 'ADMIN' : ''

        const info = {
            "email": userEmail,
            "role": roleType,
        }
        dispatch(invitesActions.setRoleInvite(info));

        // dispatch(invitesActions.invitesActions(values))


        // if (type === 'Organizer') {
        //     dispatch(invitesActions.InviteOrganizer(userEmail));
        // }
        // if (type === 'Verified User') {
        //     dispatch(invitesActions.InviteMember(userEmail));
        // }
        // if (type === 'Unverified User') {
        //     dispatch(invitesActions.MakeMember(userEmail));
        // }
    };

    const Type =
        type === 'ORGANIZER' ? 'Organizer' : type === ' VERIFIED_MEMBER' ? 'Verified User' : type === 'MEMBER' ? 'Unverified User' : '';

    return (
        <FilterStatus
            style={{ color: '#707070', marginTop: '-12px' }}
            title={'Change User Role'}
            handleClick={() => setOpen(true)}
            opens={open}>
            {List.length &&
                List.map((i, j) => (
                    <div key={j} className={classes.PopoverListWrapper}>
                        <FormControlLabel
                            onChange={() => sendRequest(i)}
                            checked={Type === i && true}
                            control={<Radio style={{ color: '#387DFF', marginLeft: '19px' }} />}
                            label={i}
                        />
                    </div>
                ))}
        </FilterStatus>
    );
};
