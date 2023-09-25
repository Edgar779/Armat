import React from 'react';
import { navBarStyles } from './style';
import clsx from 'clsx';
import { Title } from 'components';
import { UserInfo } from './userInfo';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

export const TopBar = ({ handleClick, open }) => {
    const classes = navBarStyles();
    const url = window.location.pathname;
    const menuTittle =
        url === '/admin/'
            ? 'Home'
            : url === '/admin/myProfile'
            ? 'My Profile'
            : url === '/admin/myEvents'
            ? 'My Events'
            : url === '/admin/members'
            ? 'Members'
            : url === '/admin/events'
            ? 'Events'
            : url === '/admin/settings'
            ? 'Settings'
            : '';

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}>
            <Toolbar className={classes.headerContent}>
                <div className={classes.toolbar}>
                    <div className={'toolbarBox'}>
                        <Button style={{background:'white',borderRadius:'40px',minWidth:'26px',width:'26px',border:'none',outline:'none',
                            height: '26px',}}  onClick={handleClick}>{open === true ?
                            <ChevronLeft  style={{color:'#387DFF'}} />
                            :
                            <ChevronRight style={{color:'#387DFF'}} />

                        }</Button>
                        <Title text={menuTittle} />
                    </div>
                    <Title text={'Armat'} />
                    <UserInfo />
                </div>
            </Toolbar>
        </AppBar>
    );
};
