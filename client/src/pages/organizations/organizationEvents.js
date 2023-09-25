import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useGlobalStyles } from 'theme';
import { Breadcrumbs, Grid } from '@material-ui/core';
import { FindLoad } from 'utils';
import { Loader, OrangeButton, SliderCarousel } from 'components';
import { useStyles } from './styles';
import { SingleEventStyle } from '../../fragments/organizations/singleOrganizations/core';

export const OrganizationEvents = () => {
    const global = useGlobalStyles();
    const classesEv = SingleEventStyle();
    const classes = useStyles();
    const route = useRouter();
    const loader = FindLoad('GET_EVENTS_BY_ORGANIZATION');
    const [info, setInfo] = useState(false);
    const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('userInfo'));

    const { orgEvents, organizationsById } = useSelector((state) => ({
        orgEvents: state.orgs.orgEvents,
        organizationsById: state.orgs.organizationsById,
    }));

    useEffect(() => {
        if (user) {
            const creatorInfo =
                user && user.auth.role === 'ADMIN'
                    ? true
                    : organizationsById && organizationsById.manager
                    ? organizationsById.manager.id === user.id
                    : 'not';
            setInfo(creatorInfo);
        }
    }, [user]);

    return (
        <Grid container item className={classes.container} direction="column" lg={12} md={12} sm={12} xs={12}>
            {loader.length ? (
                <Loader text={'noText'} />
            ) : (
                <div>
                    <Breadcrumbs style={{ marginBottom: '20px' }} separator="›" aria-label="breadcrumb">
                        <Link color="inherit" href="/organizations">
                            <p className={global.passiveBreadcrumbs}>Organizations</p>
                        </Link>
                        <Link href={`/singleOrganization?orgid=${organizationsById.id}`}>
                            <p className={global.passiveBreadcrumbs}>Organization Details</p>
                        </Link>
                        <Link href={''}>
                            <p className={global.activeBreadcrumbs}>{organizationsById && organizationsById.name}</p>
                        </Link>
                    </Breadcrumbs>
                    <div>
                        <div className={classesEv.titleWrapper}>
                            <p className={classesEv.eventsTitle}>{`Events Created by ${organizationsById && organizationsById.name}`}</p>
                            {info === true && (
                                <OrangeButton
                                    width={'190px'}
                                    height={'48px'}
                                    buttonText={'Create Event'}
                                    handleClick={() => route.push(`createEventByOrganization?orgid=${organizationsById.id}`)}
                                />
                            )}
                        </div>
                    </div>
                    <div>
                        {orgEvents && orgEvents.length && <SliderCarousel creatorInfo={info} screenType="allEvents" info={orgEvents} />}
                    </div>
                </div>
            )}
        </Grid>
    );
};
