import React, { useState } from 'react';
import { Popover } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useModal } from "../../utils";

export const PopperComponent = ({ list, handle }) => {
    /**
     * Popper Components
     */

    const [anchorEl, setAnchorEl] = useState(null);
    const { openModal } = useModal();
    const openPoper = Boolean(anchorEl);
    const id = openPoper ? 'simple-popover' : undefined;

    const handleClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = ({}) => {
        setAnchorEl(null);
    };

    return (
        <div className="popper-wrapper">
            <button className="btn" aria-describedby={id} onClick={handleClick}>
                <MoreVertIcon style={{ color: '#758EA6' }} />
            </button>
            <Popover
                id={id}
                open={openPoper}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}>
                <div className="popper-items-wrapper">
                    {list &&
                        list.map(
                            (i, k) =>
                                i && (
                                    <div onClick={() => openModal(i.name, i.params)} key={k}>
                                        <button
                                            style={{ color: i?.color ? i.color : '#324557' }}
                                            key={k}
                                            onClick={(e) => e.preventDefault()}>
                                            {i?.title}
                                        </button>
                                    </div>
                                )
                        )}
                </div>
            </Popover>
        </div>
    );
};
