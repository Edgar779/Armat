import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Loader from 'react-loader-spinner';
import moment from 'moment';
import { Icon, OrangeButton, PageTitle, Picture } from 'components';
import { SVGNames } from 'constants/index';
import { EventsActions, httpRequestsOnSuccessActions } from 'store';
import { Box, Popover } from '@material-ui/core';
import { image1 } from './constants';
import { Colors, FindLoad, FindSuccess } from 'utils';
import { dateConverter, originalDateConverter } from '../../../../utils/dateConverter';
import { useStyles } from './style';

export const InfoCard = ({ data, locationBoolean, mySubscribes, userInfo }) => {
    const { eventRsvp, accessToken } = useSelector((state) => ({
        eventRsvp: state.event.eventRsvp,
        accessToken: state.auth.accessToken,
    }));
    const token = accessToken ? accessToken : typeof window !== 'undefined' && localStorage.getItem('access-token');
    const ACTION_TYPE = eventRsvp?.id ? 'EDIT_RSVP' : 'CREATE_RSVP';
    const unsubscribeLoad = FindLoad('UNSUBSCRIBE_EVENT');
    const subscribeLoad = FindLoad('SUBSCRIBE_EVENT');
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();
    const router = useRouter();
    const [subscribe, setSubscribe] = useState(false);
    const successUnsubscribe = FindSuccess('UNSUBSCRIBE_EVENT');
    const successSubscribe = FindSuccess('SUBSCRIBE_EVENT');
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const loader = FindLoad(ACTION_TYPE);
    const converted = dateConverter(data);
    const originalConverter = originalDateConverter(data);
    const name = data?.org ? data.org.name : data?.creator ? data.creator.fullName : data.creator === null && 'Deleted User';

    const button = {
        background:
            'transparent linear-gradient(270deg, #FFA330 0%, #FF9346 27%, #FF8559 54%, #FB7A6A 77%, #F07379 100%) 0% 0% no-repeat padding-box',
        whiteSpace: 'nowrap',
        height: '42x',
        '@media (min-width: 320px)': {
            width: '162px',
            height: '36px',
        },
        '@media (min-width: 768px)': {
            width: '203px',
            height: '42px',
        },
        '@media (min-width: 1240px)': {
            width: '203px',
            height: '42px',
        },
        '@media (min-width: 1920px)': {
            width: '203px',
            height: '42px',
        },
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSubscribe = () => {
        const data = {
            eventId: router.query.eventid,
        };
        dispatch(EventsActions.subscribeEvent(data));
    };

    useEffect(() => {
        if (successUnsubscribe.length) {
            setSubscribe(!subscribe);
            dispatch(httpRequestsOnSuccessActions.removeSuccess('UNSUBSCRIBE_EVENT'));
        }
    }, [successUnsubscribe]);

    useEffect(() => {
        if (successSubscribe.length) {
            setSubscribe(!subscribe);
            dispatch(httpRequestsOnSuccessActions.removeSuccess('SUBSCRIBE_EVENT'));
        }
    }, [successSubscribe]);

    const handleUnsubscribe = () => {
        const data = {
            eventId: router.query.eventid,
        };
        dispatch(EventsActions.unsubscribe(data));
    };

    useEffect(() => {
        for (let i of mySubscribes) {
            if (i.eventId === router.query.eventid) {
                setSubscribe(true);
            }
        }
    }, []);

    const handleRsvp = (type) => {
        handleClose();
        if (eventRsvp?.id) {
            dispatch(EventsActions.editRsvp(eventRsvp?.id, type, router.query.eventid));
        } else {
            dispatch(EventsActions.createRsvp(router.query.eventid, type));
        }
    };

    const renderCurrent = () => {
        if (eventRsvp?.id) {
            return (
                <div className={classes.rsvpButtonWrapper} onClick={handleClick}>
                    {loader?.length ? (
                        <Loader
                            type="ThreeDots"
                            color="#FFFFFF"
                            height={10}
                            width={16}
                            style={{ margin: '0', padding: '0', color: 'white' }}
                        />
                    ) : (
                        <div className={classes.activeRsvpColors}>
                            <Icon
                                name={
                                    eventRsvp?.status === 'GOING'
                                        ? SVGNames.Going
                                        : eventRsvp?.status === 'NOTGOING'
                                        ? SVGNames.NotGoing
                                        : eventRsvp?.status === 'INTERESTED'
                                        ? SVGNames.Interested
                                        : SVGNames.Interested
                                }
                                style={{ marginRight: '8px' }}
                            />
                            <p className={classes.rsvpButtonText}>
                                {eventRsvp?.status === 'GOING'
                                    ? 'Going'
                                    : eventRsvp?.status === 'NOTGOING'
                                    ? 'Not Going'
                                    : eventRsvp?.status === 'INTERESTED'
                                    ? 'Interested'
                                    : 'Interested'}
                            </p>
                        </div>
                    )}
                </div>
            );
        } else {
            return (
                <div className={classes.rsvpButtonWrapper} onClick={() => handleRsvp('INTERESTED')}>
                    {loader?.length ? (
                        <Loader type="ThreeDots" color="#222222" height={10} width={16} style={{ margin: '0', padding: '0' }} />
                    ) : (
                        <>
                            <Icon name={SVGNames.Interested} style={{ marginRight: '8px' }} />
                            <p className={classes.rsvpButtonText}>Interested</p>
                        </>
                    )}
                </div>
            );
        }
    };

    return (
        <Box className={classes.infoCard}>
            <Box
                style={data && userInfo && data?.creator?.id === userInfo.id ? { justifyContent: 'flex-start' } : {}}
                className={classes.infoCont}>
                <Box>
                    <Box className={classes.titleCont}>
                        <div className={classes.titleIcon} style={{ height: 'auto' }} />

                        <PageTitle title={data?.title.toUpperCase()} style={classes.title} />
                    </Box>
                    <Box className={classes.orgCont}>
                        {data.creator && data.creator.avatar ? (
                            <img className={classes.creatorAvatar} src={data.creator.avatar.url} alt={'creatorAvatar'} />
                        ) : (
                            <Icon name={SVGNames.AvatarIcon} width={60} height={60} style={{ marginLeft: '-10px' }} />
                        )}

                        {data?.org ? (
                            <Link href={`singleOrganization?orgid=${data?.org?.id}`}>
                                <p style={{ cursor: 'pointer', textDecoration: 'underline' }} className={classes.org}>
                                    Created by {name}
                                </p>
                            </Link>
                        ) : (
                            <p className={classes.org}>Created by {name}</p>
                        )}
                    </Box>

                    <Box className={classes.dataCont}>
                        <Box className={classes.type}>
                            <Icon
                                name={SVGNames.CalendarOutline}
                                color={Colors.ThemeGreen}
                                style={{ width: '24px', height: '24px', marginRight: '8px' }}
                            />
                            <p className={classes.li}>
                                {data.locationType === 'Physical' || data.locationType === 'PHYSICAL' ? 'Physical' : 'Virtual'}
                            </p>
                        </Box>
                        <Box className={classes.date}>
                            <div style={{ width: '24px', marginRight: '8px' }}>
                                <Icon name={SVGNames.TimeIcon} color={Colors.ThemeGreen} style={{ width: '24px' }} />
                            </div>
                            {data.timezoneOffset ? (
                                <div>
                                    <p className={classes.li}>
                                        {data.startTime
                                            ? `
                                            ${originalConverter} ${data.timezoneOffset ? `(GMT ${data.timezoneOffset} )` : ''}
                                            `
                                            : `${moment(data.startDate).format('MM/DD/YYYY')}`}
                                    </p>
                                    {data?.startTime && (
                                        <p className={classes.li} style={{ fontWeight: 'bold' }}>
                                            {data.startTime ? `${converted} (Your Time)` : `${moment(data.startDate).format('MM/DD/YYYY')}`}
                                        </p>
                                    )}
                                </div>
                            ) : (
                                <p className={classes.li}>{`${moment(data.startTime).format('llll')} ${
                                    data.timezoneOffset ? `(GMT ${data.timezoneOffset} )` : ''
                                }`}</p>
                            )}
                        </Box>
                        {locationBoolean && (
                            <Box className={classes.location}>
                                <div style={{ width: '24px', height: '24px', marginRight: '8px' }}>
                                    <Icon name={SVGNames.MapFill} color={Colors.ThemeGreen} style={{ width: '24px', height: '24px' }} />
                                </div>
                                <p className={classes.li}>
                                    {data?.address?.formattedAddress
                                        ? data?.address?.formattedAddress?.length > 100
                                            ? `${data?.address?.formattedAddress.slice(0, 100)}...`
                                            : data.address.formattedAddress
                                        : ''}
                                </p>
                            </Box>
                        )}
                        {data?.address?.lat && data?.address?.lng && (
                            <Box className={classes.location}>
                                <a
                                    className={classes.cardGetDirection}
                                    target={'_blank'}
                                    href={`https://www.google.com/maps?saddr=My+Location&daddr=${data?.address?.lat},${data?.address?.lng}`}
                                    rel="noreferrer">
                                    <div style={{ width: '24px', height: '24px', marginRight: '8px' }}>
                                        <Icon name={SVGNames.GetDirection} color={Colors.ThemeGreen} />
                                    </div>
                                    <p style={{ marginTop: '2px' }} className={classes.li}>
                                        Get Direction
                                    </p>
                                </a>
                            </Box>
                        )}
                    </Box>
                </Box>

                {userInfo && !data.isPast && data?.creator?.id !== userInfo?.id && (
                    <Box className={classes.buttonCont}>
                        {/*{subscribe === true ? (*/}
                        <div className={classes.subscribeButton}>
                            <OrangeButton
                                loader={subscribe === true ? !!unsubscribeLoad.length : !!subscribeLoad.length}
                                width={'100%'}
                                height={'48px'}
                                button={button}
                                radius={'8px'}
                                buttonText={subscribe === true ? 'Unsubscribe' : 'Subscribe'}
                                handleClick={subscribe === true ? handleUnsubscribe : handleSubscribe}
                            />
                        </div>
                        {token && (
                            <div className={eventRsvp?.id ? classes.rsvpActiveButton : classes.rsvpButton}>
                                {renderCurrent()}

                                <button
                                    className={eventRsvp?.id ? classes.downArrowButtonActive : classes.downArrowButton}
                                    onClick={handleClick}
                                    aria-describedby={id}>
                                    <Icon name={SVGNames.DownArrow} />
                                </button>
                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}>
                                    <div className={classes.rsvTypesWrapper}>
                                        <button onClick={() => handleRsvp('INTERESTED')} className={classes.rsvTypesButton}>
                                            <div>
                                                <Icon name={SVGNames.Interested} style={{ marginRight: '8px' }} />
                                                <p className={classes.rsvpButtonText}>Interested</p>
                                            </div>
                                        </button>
                                        <button onClick={() => handleRsvp('GOING')} className={classes.rsvTypesButton}>
                                            <div>
                                                <Icon name={SVGNames.Going} style={{ marginRight: '8px' }} />
                                                <p className={classes.rsvpButtonText}>Going</p>
                                            </div>
                                        </button>
                                        <button onClick={() => handleRsvp('NOTGOING')} className={classes.rsvTypesButton}>
                                            <div>
                                                <Icon name={SVGNames.NotGoing} style={{ marginRight: '8px' }} />
                                                <p className={classes.rsvpButtonText}>Not Going</p>
                                            </div>
                                        </button>
                                    </div>
                                </Popover>
                            </div>
                        )}
                    </Box>
                )}
            </Box>

            <Box className={classes.backImgCont}>
                <Picture image={image1} />
            </Box>
        </Box>
    );
};
