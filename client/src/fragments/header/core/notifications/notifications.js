import { Icon } from 'components';
import { SVGNames } from 'constants/index';
import { appActions, notificationsActions } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import { useNoteContStyles } from '../styles';
import NotificationItem from './notificationItem';
import React, { useEffect, useRef, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import { Colors, FindLoad } from '../../../../utils';

export const Notifications = ({ notifications, userInfo }) => {
    const dispatch = useDispatch();
    const classes = useNoteContStyles();
    const [array, setArray] = useState(6);
    const [notificationsList, setNotifications] = useState([]);

    const { removeNotification } = useSelector((state) => ({
        removeNotification: state.notifications.removeNotification,
    }));

    const closeOpen = () => {
        dispatch(appActions.openOrCloseNotes());
    };

    const params = { pageSize: array, page: 1, userId: userInfo.id };
    const list = notificationsList.length ? notificationsList : notifications;

    const [load, setLoad] = useState(true);
    const [page, setPage] = useState(1);
    const loader = useRef(null);

    useEffect(() => {
        let options = {
            root: null,
            rootMargin: '20px',
            threshold: 1.0,
        };
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current);
        }
    }, []);

    useEffect(() => {
        let config = {
            headers: { 'access-token': localStorage.getItem('access-token') },
            params: params,
        };
        axios.get(`/notifications`, config).then((res) => {
            if (res.data.length >= notificationsList.length) {
                setArray(array + 6);
                setNotifications(res.data);
                dispatch(notificationsActions.getNotifications(params));
            } else {
                setLoad(false);
            }
        });
    }, [page]);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((page) => page + 1);
        }
    };

    const backLoad = FindLoad('GET_NOTIFICATIONS');

    return (
        <>
            {notifications.length ? (
                <>
                    <div className={classes.backdrop} onClick={closeOpen} />
                    <div className={classes.notificationsCont}>
                        <button className={classes.closeNotificationButton} onClick={closeOpen}>
                            <Icon name={SVGNames.ClearIconBlue} />
                        </button>

                        <div className={classes.header}>
                            <p className={classes.headerText}>Notifications</p>
                            <button
                                className={classes.headerText1}
                                onClick={() => dispatch(notificationsActions.markReadNotifications(params))}>
                                Mark all as read
                            </button>
                        </div>

                        <div style={{ height: '500px', overflow: 'auto' }}>
                            <div className="container">
                                <div className="post-list">
                                    {list.length &&
                                        list.map((n, i) => (
                                            <NotificationItem
                                                removeNotification={removeNotification}
                                                params={params}
                                                closeOpen={closeOpen}
                                                loader={loader}
                                                notifications={n}
                                                key={i}
                                            />
                                        ))}
                                    {load && (
                                        <div className="loading" ref={loader}>
                                            <div className={classes.infinitiScrollStyle} />
                                        </div>
                                    )}
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    {backLoad.length && (
                                        <CircularProgress
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                margin: '0 auto',
                                                color: Colors.ThemeGreen,
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                        {/*<div style={{ display: 'flex' }}>*/}
                        {/*    <div*/}
                        {/*        id="scrollableDiv"*/}
                        {/*        style={{*/}
                        {/*            height: 300,*/}
                        {/*            overflow: 'auto',*/}
                        {/*            display: 'flex',*/}
                        {/*            flexDirection: 'column-reverse',*/}
                        {/*        }}>*/}
                        {/*        /!*Put the scroll bar always on the bottom*!/*/}
                        {/*        <InfiniteScroll*/}
                        {/*            dataLength={array}*/}
                        {/*            next={fetchMoreData}*/}
                        {/*            style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.*/}
                        {/*            inverse={true} //*/}
                        {/*            hasMore={true}*/}
                        {/*            // loader={<h4>Loading...</h4>}*/}
                        {/*            scrollableTarget="scrollableDiv">*/}
                        {/*            <div*/}
                        {/*            // className={classes.notificationItemCont}*/}
                        {/*            >*/}
                        {/*                {list.length &&*/}
                        {/*                    list.map((n, i) => (*/}
                        {/*                        <NotificationItem*/}
                        {/*                            removeNotification={removeNotification}*/}
                        {/*                            params={params}*/}
                        {/*                            closeOpen={closeOpen}*/}
                        {/*                            loader={loader}*/}
                        {/*                            notifications={n}*/}
                        {/*                            key={i}*/}
                        {/*                        />*/}
                        {/*                    ))}*/}

                        {/*                {loader && (*/}
                        {/*                    <div className={classes.infinitiScrollStyle}>*/}
                        {/*                        <CircularProgress*/}
                        {/*                            style={{*/}
                        {/*                                width: '40px',*/}
                        {/*                                height: '40px',*/}
                        {/*                                margin: '0 auto',*/}
                        {/*                                color: '#387DFF',*/}
                        {/*                            }}*/}
                        {/*                        />*/}
                        {/*                    </div>*/}
                        {/*                )}*/}
                        {/*            </div>*/}
                        {/*        </InfiniteScroll>*/}
                        {/*    </div>*/}

                        {/*</div>*/}
                    </div>
                </>
            ) : (
                <>
                    <div className={classes.backdrop} onClick={closeOpen} />
                    <div className={classes.notificationsCont}>
                        <button className={classes.closeNotificationButton} onClick={closeOpen}>
                            <Icon name={SVGNames.ClearIconBlue} />
                        </button>
                        <div className={classes.noNotificationBody}>
                            <Icon name={SVGNames.NotificationModalIcon} color={'#49B77680'} width={60} height={60} />
                            <p className={classes.noNotes}>No Notifications Yet</p>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
