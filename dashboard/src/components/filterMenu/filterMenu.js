import React, { Fragment, useState } from 'react';
import { Box, Menu, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { Svg } from '../../assets/images';

export const FilterMenu = ({ list, status, handleFilterStatus, title }) => {
    /**
     * Filter Menu.
     */

    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <button
                    className="filter-button-style"
                    id="filter-button"
                    aria-controls={openMenu ? 'filter-button' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? 'true' : undefined}
                    onClick={handleClick}>
                    <img src={Svg.FilterBtn} alt="Filter-Btn" />
                </button>
                <div className="filter-text">
                    <span>Filter</span>
                </div>
            </Box>
            <Menu
                className="filter-container"
                id="filter-button"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>
                <Box className="filter-text">
                    <p className="filter-title">{title}</p>
                </Box>
                <Box className="filter-box">
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="radio-group"
                            defaultValue={status ? status : 'ALL'}
                            name="radio-group"
                            onChange={handleFilterStatus}>
                            {list?.map((item, index) => (
                                <div key={index} className="check-label">
                                    <FormControlLabel
                                        value={item.value}
                                        control={<Radio />}
                                        label={
                                            <div className="flex">
                                                <span className="text-status">{item.label}</span>
                                            </div>
                                        }
                                    />
                                </div>
                            ))}
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Menu>
        </Fragment>
    );
};
