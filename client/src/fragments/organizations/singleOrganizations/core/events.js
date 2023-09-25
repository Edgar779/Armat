import React from 'react';
import { useRouter } from 'next/router';
import { SingleEventStyle } from './styles';
import { SliderCarousel } from 'components';
import { Colors } from 'utils';
import { Button } from '@material-ui/core';
import { useGlobalStyles } from 'theme';
import { canManageOrg } from '../../../../utils/canManageOrg';

export const Events = ({ info, orgEvents, sponsors, eventByOrg, sponsorByOrg }) => {
    const route = useRouter();
    const classes = SingleEventStyle();
    const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('userInfo'));
    const creatorInfo = canManageOrg(user, info);

    return (
        <div className={classes.eventsWrapper}>
            {eventByOrg && (
                <div className={classes.events}>
                    {info && info?.type !== 'BUSINESS' && (
                        <div>
                            <div className={classes.titleWrapper}>
                                <div>
                                    <span className={classes.eventsTitle}>{`Events Created by ${info && info?.name}`} </span>
                                </div>

                                {creatorInfo === true ? (
                                    <div>
                                        <div>
                                            <button
                                                style={{
                                                    width: '190px',
                                                    height: '48px',
                                                    boxShadow: '0px 3px 16px #49B7764D',
                                                    borderRadius: 24,
                                                    fontSize: 16,
                                                    padding: 0,
                                                    background: Colors.ThemeGreen,
                                                    whiteSpace: 'nowrap',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    color: 'white',
                                                }}
                                                // className={globalClasses.buttonOrange}
                                                onClick={() => route.push(`createEventByOrganization?orgid=${info?.id}`)}>
                                                Create Event
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    ''
                                )}
                            </div>
                            <div>
                                {orgEvents?.length ? (
                                    <SliderCarousel creatorInfo={creatorInfo} info={orgEvents} />
                                ) : (
                                    <div className={classes.noEvent}>
                                        <p>No Events Yet</p>
                                    </div>
                                )}
                            </div>

                            {orgEvents?.length ? (
                                <button
                                    onClick={() => route.push(`eventsByOrganization?orgid=${route?.query?.orgid}`)}
                                    className={classes?.link}>
                                    View All{' '}
                                </button>
                            ) : (
                                ''
                            )}
                        </div>
                    )}
                </div>
            )}
            {sponsorByOrg && (
                <div className={classes.events}>
                    <div>
                        <p className={classes.eventsTitle}>Sponsored Events</p>
                        <div>
                            <SliderCarousel creatorInfo={creatorInfo} info={sponsors} sponsor={'sponsor'} />
                        </div>
                        <button onClick={() => route.push(`sponsoredEvents?orgid=${route?.query?.orgid}`)} className={classes.link}>
                            View All{' '}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
