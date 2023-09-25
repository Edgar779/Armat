import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { membersFragmentStyle } from './style';
import { FilterStatus } from 'components';
import { FormControlLabel, Radio } from '@material-ui/core';
import { EventsActions } from 'store';
import {useGlobalStyles} from "theme";

export const FilterEventsType = ({ List, Type, online, physical  }) => {
    const classes = membersFragmentStyle();
    const [open, setOpen] = useState(false);
    const [type, setType] = useState(false);
    const dispatch = useDispatch();
    const globalClasses = useGlobalStyles()

    const handleFilterByType = (ev) => {
        if(type === ev){
            setType ('');
            dispatch (EventsActions.getEvents (Type));
        }else {
            setType (ev);
            const type = ev  === 'Physical' ? 'PHYSICAL' : ev  ===  'Online' ? 'VIRTUAL' : ''
            dispatch (EventsActions.FilterByType (type));
        }
    };
    return (
        <FilterStatus title={'Filter the Type'} handleClick={() => setOpen(true)} open={open} className={'BigLeft'}>
            {List.length &&
                List.map((i, j) => (
                    <div key={j} className={classes.PopoverListWrapper}>
                        <FormControlLabel
                            onClick={() => handleFilterByType(i)}
                            checked={type === i && true}
                            control={<Radio style={{ color: '#387DFF', marginLeft: '19px' }} />}
                            label={
                                i === 'Physical' ?
                                  <p  className={globalClasses.lengthStyle}>{i}<span>{`(${physical ? physical.length : '0'})`}</span></p>
                                  : i === 'Online' ?
                                  <p  className={globalClasses.lengthStyle}>{i}<span>{`(${online ? online.length : '0'})`}</span></p>
                                         : i
                            }
                        />
                    </div>
                ))}
        </FilterStatus>
    );
};
