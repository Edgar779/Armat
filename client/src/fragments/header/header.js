import { useContext, useEffect, useRef, useState } from 'react';
import { Logo, BurgerMenu } from 'components';
import { AppBar } from '@material-ui/core';
import { useGlobalStyles } from 'theme';
import { SideDrawer, Navigation, Menu, useStyles, Signin } from './core';
import { useDispatch, useSelector } from 'react-redux';
import { appActions, notificationsActions } from 'store';
import { ModalContext } from 'contexts';
import { Scroll } from '../../utils';

export const Header = ({ onOpen }) => {
    const [width, setWidth] = useState('');
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const globalClasses = useGlobalStyles();
    const headerRef = useRef(null);
    const scrollY = Scroll();

    const userInfo = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('userInfo'));
    const token = typeof window !== 'undefined' && localStorage.getItem('access-token');
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            const params = { pageSize: 6, page: 1, userId: userInfo && userInfo.id };
            dispatch(notificationsActions.getNotifications(params));
        }
    }, []);

    const handleClick = () => {
        setOpen(!open);
    };

    const { notifications } = useSelector((state) => ({
        notifications: state.notifications,
    }));

    const fixHeader = () => {
        const header = headerRef.current;
        if (window.pageYOffset > header.clientHeight + headerRef.current.offsetTop) {
            header.classList.add('fixed-header');
            header.classList.remove('initial-header');
        } else {
            if (header.classList[1] === 'fixed-header') {
                header.classList.add('initial-header');
            }
            header.classList.remove('fixed-header');
        }
    };
    useEffect(() => {
        appActions.clearError();
        if (!width) {
            setWidth(window.innerWidth);
        }
    }, []);

    /** window scroll related header fixing */
    useEffect(() => {
        window.addEventListener('scroll', fixHeader);
        return () => {
            window.removeEventListener('scroll', fixHeader);
        };
    });

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        return () => {
            window.addEventListener('resize', handleResize);
        };
    });

    return (
        <AppBar
            position="absolute"
            className={`${globalClasses.containerFluid} ${scrollY < 10 ? classes.header : classes.headerScrolled}`}
            ref={headerRef}>
            {width < 1280 ? (
                <div className={classes.wrapper}>
                    <div className={classes.navbar}>
                        <div className={classes.logoCont}>
                            <Logo blue={true} classes={classes} />
                        </div>

                        <div className={globalClasses.tableteSearch}>
                            <Navigation onOpen={onOpen} scrollY={scrollY} token={token} />
                        </div>

                        <div className={classes.rightPanel}>
                            <div>
                                {/*{userInfo && token ? (*/}
                                <Menu userInfo={userInfo} token={token} notifications={notifications} width={width} />
                                {/*) : (*/}
                                {/*    <Signin />*/}
                                {/*)}*/}
                            </div>
                            <div>
                                <BurgerMenu handleClick={handleClick} open={open} />
                                <SideDrawer
                                    token={token}
                                    userInfo={userInfo}
                                    open={open}
                                    handleClick={handleClick}
                                    notifications={notifications}
                                    width={width}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={globalClasses.desktopM}>
                        <Navigation onOpen={onOpen} scrollY={scrollY} token={token} />
                    </div>
                </div>
            ) : (
                <div className={classes.navbar}>
                    <div>
                        <Logo blue={true} classes={classes} />
                    </div>

                    <Navigation scrollY={scrollY} token={token} />

                    <div className={classes.menuAndCreate}>
                        <div>
                            {/*{userInfo && token ? (*/}
                            <Menu token={token} userInfo={userInfo} notifications={notifications} width={width} />
                            {/*) : (*/}
                            {/*    <Signin />*/}
                            {/*)}*/}
                        </div>
                    </div>
                </div>
            )}
        </AppBar>
    );
};
