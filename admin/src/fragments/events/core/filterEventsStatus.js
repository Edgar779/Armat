import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilterStatus } from 'components';
import { EventsStatus } from './common';
import { membersFragmentStyle } from './style';
import { EventsActions } from 'store';

export const FilterEventsStatus = ({ List, handleDis, EventId, item, type, fragment }) => {
    const dispatch = useDispatch();
    const classes = membersFragmentStyle();
    const [open, setOpen] = useState(false);

    const handleFilterByRole = (i) => {

        if (i === 'Disapprove') {
            handleDis();
        }else {
            const status =
                i === 'Approve' ? 'PUBLISHED' :
                    i === 'Unpublish' ? 'UNPUBLISHED' :
                      i === 'Publish' ? 'PUBLISHED' : ''
            const data = {
                status: status
            };
            dispatch(EventsActions.setEventStatus(data, item.eventId,type ))
        }
    };

    return (
        <div>
        <FilterStatus fragment={fragment} className={'small'} handleClick={() => setOpen(true)} open={open} style={{ color: '#707070', marginTop: '-12px' }}>
            {List.length &&
                List.map((i, j) => (
                    <div key={j} onClick={() => handleFilterByRole(i)} className={classes.PopoverStatusListWrapper}>
                        <EventsStatus item={i} />
                    </div>
                ))}
        </FilterStatus>

        </div>
    );
};
