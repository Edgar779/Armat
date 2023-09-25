/**My events page */

import React, {useEffect, useState} from 'react';
import {Organizations} from 'fragments';
import {useDispatch} from 'react-redux';
import {organizationActions, organizerActions} from 'store';
import {OrgsModal} from "../../fragments/createOrgs/orgsModal";

export const MyOrganizations = ({ }) => {
    const local = 'my'
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [eventInfo, setEventInfo] = useState('');

    const handleOpenClose = () => {
        setOpen(!open);
    };
    const handleCloseInfoModal = () => {
        setEventInfo('');
    };

    useEffect(() => {
        dispatch(organizationActions.getOrg('BUSINESS', true))
        dispatch(organizerActions.getOrgCat())
    }, []);

    const handleGetEventValues = (ev) => {
        setEventInfo(ev);
    };

    return (
        <div>
            <OrgsModal
                eventInfo={eventInfo}
                open={open}
                handleClose={eventInfo ? handleCloseInfoModal : handleOpenClose}
            />

            <Organizations
                type={local}
                handleGetEventValues={handleGetEventValues}
                handleCreate={handleOpenClose}
                buttonText={'Create an Organization'}
            />
        </div>
    );
};
