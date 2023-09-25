import React from 'react';
import { useSelector } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { myTicketsStyles } from './styles';
import { noImage } from 'fragments';
import { TextRow } from '../../../components/screens/slicedText';
import { multiConverter } from '../../../utils/dateConverter';
import { Box, Typography } from '@material-ui/core';
import { Picture } from '../../../components';
import { image } from '../../../components/screens/constant';
import { noResultStyle } from '../../../components/screens/style';
import moment from 'moment';

export const TicketCards = ({ buttonsTab }) => {
    const { myTickets } = useSelector((state) => ({
        myTickets: state.tickets.myTickets,
    }));
    const classes = myTicketsStyles();
    const resultClasses = noResultStyle();
    const filtered = myTickets?.filter((i) => i?.ticketId?.eventId?.eventId);

    const checkPastEvents = (item) => {
        let start = moment();
        let end = moment(item?.eventId?.endDate);
        let different = end.diff(start, 'days') + 1;

        if (buttonsTab === 'PRESENT' && different > 0) {
            return true;
        } else if (buttonsTab === 'PAST' && different <= 0) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <div className={classes.myTicketsWrapper} style={{ width: '100%' }}>
            {filtered?.length ? (
                filtered?.map(
                    (i, j) =>
                        checkPastEvents(i) && (
                            <div key={j} className={classes.ticketCardWrapper}>
                                <div>
                                    <div className={classes.cardHeader}>
                                        <div className={classes.cardIconText}>
                                            <img
                                                className={classes.cardImage}
                                                src={
                                                    i?.ticketId?.eventId?.images?.length > 0
                                                        ? i?.ticketId?.eventId?.images[
                                                              i?.ticketId?.eventId?.eventImage ? i?.ticketId?.eventId?.eventImage : 0
                                                          ].url
                                                        : noImage.lgJPG
                                                }
                                                alt="icon"
                                            />
                                            <div className={classes.textWrapper}>
                                                <p className={classes.title}>
                                                    <TextRow name={i?.ticketId?.eventId?.title} />
                                                </p>
                                                <p className={classes.subTitle}>
                                                    {ReactHtmlParser(i?.ticketId?.eventId?.description?.slice(0, 50))}
                                                </p>
                                            </div>
                                        </div>
                                        <button className={classes.downloadWrapper} onClick={() => window.open(i?.qr?.url, '_blank')}>
                                            <img src="/assets/icons/download.svg" alt="download" />
                                        </button>
                                    </div>
                                    <div className={classes.cardBody}>
                                        <div className={classes.dateAndTimeWrapper}>
                                            <div className={classes.date}>
                                                <p className={classes.dateDay}>
                                                    {i?.ticketId &&
                                                        multiConverter(
                                                            i?.ticketId?.eventId?.startDate,
                                                            i?.ticketId?.eventId?.startTime,
                                                            i?.ticketId?.eventId?.timezoneOffset,
                                                            'MMM DD'
                                                        )}
                                                </p>
                                                <p className={classes.year}>
                                                    {i?.ticketId &&
                                                        multiConverter(
                                                            i?.ticketId?.eventId?.startDate,
                                                            i?.ticketId?.eventId?.startTime,
                                                            i?.ticketId?.eventId?.timezoneOffset,
                                                            'YYYY'
                                                        )}
                                                </p>
                                            </div>
                                            <div className={classes.timeAndLocation}>
                                                <p className={classes.time}>
                                                    <span style={{ fontWeight: '400' }}>
                                                        {i?.ticketId &&
                                                            multiConverter(
                                                                i?.ticketId?.eventId?.startDate,
                                                                i?.ticketId?.eventId?.startTime,
                                                                i?.ticketId?.eventId?.timezoneOffset,
                                                                'ddd'
                                                            )}
                                                    </span>
                                                    &nbsp;
                                                    {i?.ticketId?.eventId?.startTime
                                                        ? multiConverter(
                                                              i?.ticketId?.eventId?.startDate,
                                                              i?.ticketId?.eventId?.startTime,
                                                              i?.ticketId?.eventId?.timezoneOffset,
                                                              'hh:mm'
                                                          )
                                                        : i?.ticketId?.eventId?.allDay
                                                        ? 'All Day'
                                                        : ''}
                                                </p>
                                                <p className={classes.location}>
                                                    <TextRow
                                                        name={
                                                            i?.ticketId?.eventId?.address
                                                                ? i?.ticketId?.eventId?.address?.formattedAddress
                                                                : 'Not Set'
                                                        }
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                        <div className={classes.qrCodeText}>#{i?.ticketId?.displayId}</div>
                                    </div>

                                    <div className={classes.footerIconId}>
                                        <div className={classes.qrCodeTextMobile}>#{i?.ticketId?.displayId}</div>
                                        <button className={classes.downloadMobileWrapper} onClick={() => window.open(i?.qr?.url, '_blank')}>
                                            <img src="/assets/icons/download.svg" alt="download" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                )
            ) : (
                <Box className={resultClasses.noResultWrapper}>
                    <Box className={resultClasses.image}>
                        <Picture image={image} />
                    </Box>
                    <Typography className={resultClasses.noResultTitle}>Oops... No Results Found</Typography>
                </Box>
            )}
        </div>
    );
};
