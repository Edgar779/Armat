import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { Box, Breadcrumbs } from '@material-ui/core';
import { Buttons, EventStatus, ImgCard, InfoCard, useStyles, noImage } from './core';
import { Icon, SimpleModal } from 'components';
import { SVGNames } from 'constants/index';
import { BuyTicket } from './buyTicket';

export const SingleEventHeader = ({ id, data, locationBoolean, userInfo, handleClick }) => {
    const classes = useStyles();
    const role = userInfo;
    const breadcrumb = sessionStorage.getItem('windowPath');
    const [openModal, setOpenModal] = useState(false);

    const { mySubscribes, eventTickets } = useSelector((state) => ({
        mySubscribes: state.event.mySubscribes,
        eventTickets: state.tickets.eventTickets,
    }));

    const handleBuyTicket = () => {
        setOpenModal(!openModal);
    };

    return (
        <Box className={classes.headerCont}>
            <div className={classes.breadcrumbsCont}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {breadcrumb !== '/upcomingEvents' && (
                        <Link color="inherit" href="/">
                            <p className={classes.passiveBreadcrumbs}>Home</p>
                        </Link>
                    )}
                    {breadcrumb === '/pastEvents' ? (
                        <Link href={'/pastEvents'}>
                            <p className={classes.passiveBreadcrumbs}>Past Events</p>
                        </Link>
                    ) : breadcrumb === '/upcomingEvents' ? (
                        <Link href={'/upcomingEvents'}>
                            <p className={classes.passiveBreadcrumbs}>Upcoming Events</p>
                        </Link>
                    ) : breadcrumb === 'myEvents' ? (
                        <Link href={'/myEvents'}>
                            <p className={classes.passiveBreadcrumbs}> My Events</p>
                        </Link>
                    ) : (
                        ''
                    )}
                    <p className={classes.activeBreadcrumbs}>Single Event</p>
                </Breadcrumbs>
            </div>

            <div className={data && data.cta && Object.keys(data.cta).length > 0 ? classes.infoCardCont : classes.infoCardContSmall}>
                <InfoCard userInfo={userInfo} locationBoolean={locationBoolean} classes={classes} data={data} mySubscribes={mySubscribes} />
                <div>
                    <div>
                        {data?.images?.length && (
                            <button onClick={handleClick} className={classes.showMoreImages}>
                                <Icon name={SVGNames.ImageShow} color={'white'} />
                                <p>{`${data?.images?.length} Images`}</p>
                            </button>
                        )}
                        <ImgCard classes={classes} data={data} noImage={noImage.lgJPG} />
                    </div>
                </div>

                {(data?.cta && Object.keys(data.cta).length) || eventTickets?.tickets?.length ? (
                    <div className={classes.buttonsSection}>

                      {eventTickets?.tickets?.length ? <Buttons type={'buyTickets'} text={'Buy Tickets'} handleClickBuy={handleBuyTicket} /> : ''}
                        {data.cta &&
                            Object?.keys(data.cta).map((keyName, i) => (
                                <React.Fragment key={i}>
                                    <Buttons type={keyName} text={data.cta[keyName]} />
                                </React.Fragment>
                            ))}
                    </div>
                ) : (
                    ''
                )}
            </div>

            {role && role?.auth?.role !== 'MEMBER' && breadcrumb !== '/pastEvents' && data?.creator?.id === role?.id ? (
                <div className={classes.eventCardStatusCont}>
                    <EventStatus role={role} classes={classes} id={id} data={data} />
                </div>
            ) : null}

            <SimpleModal
                openDefault={openModal}
                onClose={handleBuyTicket}
                content={<BuyTicket eventTickets={eventTickets} onClose={handleBuyTicket} event={data} />}
            />
        </Box>
    );
};
