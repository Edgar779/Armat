import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';

import { SideDrawerStyles, useMenuStyles } from './styles';
import { useRouter } from 'next/router';
import { Signin } from './signin';
import { DropDown } from './dropdown';
import {Colors} from "../../../utils";

export const SideDrawer = ({ open, handleClick, notifications, width, userInfo, token }) => {
    const classes = SideDrawerStyles();
    const dropDownClasses = useMenuStyles();
    const router = useRouter();

    const handleChangeScreen = (text) => {
        const route =
            text === 'Upcoming Events'
                ? '/upcomingEvents'
                : text === 'Past Events'
                ? '/pastEvents'
                : text === 'Organizations'
                ? '/organizations'
                : text === 'Business'
                ? '/business'
                : text === 'Nonprofit'
                ? '/nonProfit'
                : '/';
        router.push(route);
        handleClick();
    };

    const list = (
        <div className={classes.list} role="presentation">
            <List className={classes.listWrapper}>
                {['Home', 'Upcoming Events', 'Past Events', 'Business', 'Nonprofit'].map((text, index) => (
                    <ListItem button key={index} onClick={() => handleChangeScreen(text)}>
                        <ListItemText className={classes.mobileListItemText} primary={text} />
                    </ListItem>
                ))}
            </List>
            <List className={classes.mobileManuDropdown}>
                {token ? (
                    <ul>
                        <li className={`${dropDownClasses.listItem}`}>
                            <div className={dropDownClasses.dropDown}>
                                <DropDown
                                    userInfo={userInfo}
                                    handleClickClose={handleClick}
                                    color={Colors.ThemeGreen}
                                    notifications={notifications}
                                    width={width}
                                />
                            </div>
                        </li>
                    </ul>
                ) : (
                    <Signin />
                )}
            </List>
        </div>
    );

    return open ? (
        <React.Fragment>
            <Drawer style={{ zIndex: 1005 }} anchor={'right'} open={open} onClose={handleClick} className={classes.sideDrawer}>
                {list}
            </Drawer>
        </React.Fragment>
    ) : null;
};
