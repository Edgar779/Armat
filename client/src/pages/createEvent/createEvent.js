import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {EventsActions, manageActions, organizationActions} from 'store';
import { CreateEventModal } from 'fragments';
import { PageTitle } from 'components';
import { Breadcrumbs, Grid } from '@material-ui/core';
import { useStyles } from './styles';
import Link from 'next/link';
import { useGlobalStyles } from 'theme';

export const CreateEvent = ({ token }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(token) {
            dispatch(manageActions.GetTags());
            dispatch(manageActions.GetCategories());
            dispatch(organizationActions.getOrg('ALL', 'ACTIVE'));
        }
    }, []);

    const global = useGlobalStyles();
    return (
        <Grid container item className={classes.container} direction="column" lg={12} md={12} sm={12} xs={12}>
            <Breadcrumbs style={{ marginBottom: '20px' }} separator="›" aria-label="breadcrumb">
                <Link color="inherit" href="/">
                    <p className={global.passiveBreadcrumbs}>Home</p>
                </Link>
                <Link href={'/pastEvents'}>
                    <p className={global.activeBreadcrumbs}>Create an Event</p>
                </Link>
            </Breadcrumbs>

            <Grid container item className={classes.contHeader} justify="flex-start">
                <PageTitle title={'Create an Event'} style={classes.contHeaderText} />
            </Grid>
            <Grid container item className={classes.contContainer} lg={12} md={12} justify="space-between">
                <CreateEventModal EventTitle={'Create an Event'} />
            </Grid>
        </Grid>
    );
};
