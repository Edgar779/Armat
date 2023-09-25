import { ModalContext } from 'contexts';
import { HomeAbout, HomeExploreEvents, HomeFeatures, HomeHeader } from 'fragments';
import { Notifications } from 'fragments/header/core';
import React, { useContext, useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useStyles } from './style';

export const Home = () => {
    const classes = useStyles();
    const token = typeof window !== 'undefined' && localStorage.getItem('access-token');

    const { app } = useSelector(
        (state) => ({
            app: state.global,
        }),
        shallowEqual
    );
    const [width, setWidth] = useState(2100);
    const { openModal } = useContext(ModalContext);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        return () => {
            window.addEventListener('resize', handleResize);
        };
    });

    return app.isOpen && width < 960 ? (
        <div className={classes.homeContForNotes}>
            <Notifications notifications={5} />
        </div>
    ) : (
        <div>
            <div style={{ background: '#FCFCFC' }} className={classes.homeCont}>
                <HomeHeader openModal={openModal} token={token} />
            </div>
            <div style={{ background: '#F4F4F4' }} className={classes.homeContNoPaddingTop}>
                <HomeFeatures />
                <HomeExploreEvents token={token} openModal={openModal} />
            </div>
            <div style={{ background: '#FCFCFC' }} className={classes.homeContPaddingTop}>
                <HomeAbout />
            </div>
        </div>
    );
};
