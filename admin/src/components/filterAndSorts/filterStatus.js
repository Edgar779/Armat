import React from 'react';
import { FilterAndSort } from './styles';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Popover } from '@material-ui/core';

export const FilterStatus = ({ children, style, title, className, popStyle, fragment }) => {
    const classes = FilterAndSort();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <React.Fragment>
            {fragment ?
                <div style={{display: 'flex'}} onClick={handleClick}>
                    {fragment}
                    <button className={classes.SimplePopoverButton}>
                        {open === true ? <ExpandLess style={{...style}}/> : <ExpandMore style={{...style}}/>}
                    </button>
                </div>
                :
                <button onClick={handleClick} className={classes.SimplePopoverButton}>
                    {open === true ? <ExpandLess style={{...style}}/> : <ExpandMore style={{...style}}/>}
                </button>
            }

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                style={{ ...popStyle }}
                className={
                    className === 'small'
                        ? classes.smallPopoverStatusStyle
                        : className === 'BigLeft'
                        ? classes.PopoverStatusStyleLeft
                        : classes.PopoverStatusStyle
                }
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <div>
                    <p className={classes.FilterType}>{title}</p>
                    <div onClick={() => setTimeout(handleClose, 500)}>{children}</div>
                </div>
            </Popover>
        </React.Fragment>
    );
};
