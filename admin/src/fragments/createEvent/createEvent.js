import {CreateEventModal} from './core';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {manageActions, organizationActions} from 'store';

export const CreateEvent = ({open, handleClose, eventInfo}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(manageActions.GetTags())
        dispatch(manageActions.GetCategories())
        dispatch(organizationActions.getOrg('ALL', 'ACTIVE'))
    }, []);

    return (
        <div>
            <CreateEventModal
                eventInfo={eventInfo}
                open={open}
                handleClose={handleClose}
                EventTitle={'Create an Event'}
            />
        </div>
    );
};
