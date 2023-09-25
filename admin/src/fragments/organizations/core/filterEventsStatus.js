import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {FilterStatus} from 'components';
import {EventsStatus} from './common';
import {membersFragmentStyle} from './style';
import {organizationActions} from 'store';

export const FilterEventsStatus = ({List, handleDis, item, fragment}) => {
    const dispatch = useDispatch();
    const classes = membersFragmentStyle();
    const [open, setOpen] = useState(false);

    const handleFilterByRole = (i) => {
        if (i === 'Rejected') {
            handleDis();
        } else {
            const status =
                i === 'Active' ? 'ACTIVE' :
                    i === 'Archived' ? 'ARCHIVED' :
                        i === 'Pending' ? 'PENDING' :
                            i === 'Rejected' ? 'REJECT' :
                                ''


            const data = {
                status: {status: status},
                info: item.id,
                type: item.type,
            };
            dispatch(organizationActions.setStatus(data))
        }
    };

    return (
        <FilterStatus fragment={fragment} className={'small'} handleClick={() => setOpen(true)} open={open}
                      style={{color: '#707070', marginTop: '-12px'}}>
            {List.length &&
            List.map((i, j) => (
                <div key={j} onClick={() => handleFilterByRole(i)} className={classes.PopoverStatusListWrapper}>
                    <EventsStatus item={i}/>
                </div>
            ))}
        </FilterStatus>
    );
};
