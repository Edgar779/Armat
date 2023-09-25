import React from 'react';
import { useGlobalStyles } from 'theme';
import { useSelector } from 'react-redux';
import { FindLoad } from 'utils';
import { Loader, OrangeButton, SliderCarousel } from 'components';
import { Breadcrumbs, Grid } from '@material-ui/core';
import Link from 'next/link';
import { useStyles } from './styles';
import { useRouter } from 'next/router';
import { SingleEventStyle } from '../../fragments/organizations/singleOrganizations/core';

export const Sponsored = ({}) => {
    const global = useGlobalStyles();
    const classes = useStyles();
    const { sponsors, organizationsById } = useSelector((state) => ({
        sponsors: state.event.sponsors,
        organizationsById: state.orgs.organizationsById,
    }));

    const route = useRouter();
    const loader = FindLoad('GET_EVENTS_BY_ORGANIZATION');
    const classesEv = SingleEventStyle();

    return (
        <Grid container item className={classes.containerpaddings} direction="column" lg={12} md={12} sm={12} xs={12}>
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
                            <p className={global.activeBreadcrumbs}>Sponsored Events</p>
                        </Link>
                    </Breadcrumbs>
                    <div>
                        <div className={classesEv.titleWrapper}>
                            <p className={classesEv.eventsTitle}>{`Sponsored Events`}</p>
                        </div>
                    </div>
                    <div>{sponsors && sponsors.length && <SliderCarousel info={sponsors} />}</div>
                </div>
            )}
        </Grid>
    );
};
