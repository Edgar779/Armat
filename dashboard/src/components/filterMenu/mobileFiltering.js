import React, { Fragment, useState } from 'react';
import { Box, Menu, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { Svg } from 'assets/images';

export const MobileFiltering = ({ status, title, handleFilterStatus, handleFilterType, typeList, statusList }) => {
    /**
     * Mobile Filtering Menu.
     */

    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const [openType, setOpenType] = useState(false);
    const [openStatus, setOpenStatus] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleStatus = () => {
        setOpenStatus(!openStatus);
    };

    const toggleType = () => {
        setOpenType(!openType);
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
                className="filter-container mobile-filtering "
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
                <Box className="filtering-subtitle">
                    <p className="subtitle"> Type </p>
                    {openType ? (
                        <div onClick={() => toggleType()}>
                            <img src={Svg.BillingUp} alt="Billing-Up" />
                        </div>
                    ) : (
                        <div onClick={() => toggleType()}>
                            <img src={Svg.BillingDown} alt="Billing-Down" />
                        </div>
                    )}
                </Box>
                {openType && (
                    <Box className="filter-box">
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="radio-group"
                                defaultValue={status ? status : 'ALL'}
                                name="radio-group"
                                onChange={handleFilterType}>
                                {typeList.map((item, index) => (
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
                )}

                <Box className="filtering-subtitle">
                    <p className="subtitle"> Status </p>
                    {openStatus ? (
                        <div onClick={() => toggleStatus()}>
                            <img src={Svg.BillingUp} alt="Billing-Up" />
                        </div>
                    ) : (
                        <div onClick={() => toggleStatus()}>
                            <img src={Svg.BillingDown} alt="Billing-Down" />
                        </div>
                    )}
                </Box>
                {openStatus && (
                    <Box className="filter-box">
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="radio-group"
                                defaultValue={status ? status : 'ALL'}
                                name="radio-group"
                                onChange={handleFilterStatus}>
                                {statusList.map((item, index) => (
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
                )}
            </Menu>
        </Fragment>
    );
};
