import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { CloseButton, Icon } from 'components';
import { buyTicketStyles } from '../styles';
import { SVGNames } from '../../../../../constants';
import { TextRow } from '../../../../../components/screens/slicedText';
import { dateConverter } from '../../../../../utils/dateConverter';

export const DoneScreen = ({ onClose, event }) => {
    const classes = buyTicketStyles();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const router = useRouter();
    const { accessToken } = useSelector((state) => ({
        accessToken: state.auth.accessToken,
    }));
    const token = accessToken ? accessToken : typeof window !== 'undefined' && localStorage.getItem('access-token');

    return (
        <div style={{ width: '100%' }}>
            <div className={classes.flexEnd}>
                <div className={classes.closeButton}>
                    <CloseButton handleClick={onClose} type={'info'} background={'#00000066 0% 0% no-repeat padding-box'} />
                </div>
            </div>

            <div className={classes.doneScreenWrapper}>
                <div className={classes.letterWrapper}>
                    <Icon name={SVGNames.Letter} />
                    <p className={classes.thanksTitle}>Thanks for your order!</p>
                </div>
                <div className={classes.ticketEventInformationWrapper}>
                    <p className={classes.goingTo}>You are going to</p>
                    <p className={classes.doneEventTitle}>
                        <TextRow name={event?.title} />
                    </p>
                    <div>
                        <p className={classes.title}>DATE</p>
                        <p className={classes.value}>
                            {event?.allDay
                                ? `${dateConverter(event, 'LL')} All Day`
                                : event?.tbd
                                ? `${dateConverter(event, 'LL')} Not Set`
                                : dateConverter(event, 'LLLL')}
                        </p>

                        <p className={classes.title}>LOCATION</p>
                        <p className={classes.value}>
                            {event?.address?.formattedAddress
                                ? event?.address?.formattedAddress
                                : event?.locationType === 'VIRTUAL'
                                ? 'Online'
                                : 'Not Set'}
                        </p>

                        <p className={classes.title}>TICKET SENT TO</p>
                        <p className={classes.value}>{token ? userInfo?.email : 'Your email'}</p>
                        {token && (
                            <button className={classes.viewTickets} onClick={() => router.push('/myTickets')}>
                                View Tickets
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
