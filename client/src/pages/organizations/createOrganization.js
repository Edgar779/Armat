import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { manageActions, organizationActions } from 'store';
import { PageTitle } from 'components';
import { Breadcrumbs, Grid } from '@material-ui/core';
import { useStyles } from './styles';
import { useGlobalStyles } from 'theme';
import { CreateOrganizationsInputs } from 'fragments';
import { checkAdmin } from '../../utils/checkUser';
import { useRouter } from 'next/router';

export const CreateOrganization = ({ userInfo }) => {
    const { organizationsById, orgCategories } = useSelector((state) => ({
        organizationsById: state.orgs.organizationsById,
        orgCategories: state.orgs.orgCategories,
    }));
    const classes = useStyles();
    const global = useGlobalStyles();
    const dispatch = useDispatch();
    const router = useRouter();
    const adminCheck = checkAdmin();
    const managerInfo =
        adminCheck === true ? true : organizationsById && organizationsById.manager && organizationsById.manager.id === userInfo.id;
    const [info, setInfo] = useState('');
    const text =
        managerInfo && !Array.isArray(organizationsById)
            ? `Edit ${organizationsById?.type === 'NON_PROFIT' ? 'Nonprofit' : 'Business'}`
            : !Array.isArray(organizationsById)
            ? `Suggest Edits`
            : `Suggest  ${router?.query?.type ? `a ${router?.query?.type}` : ''}`;

    useEffect(() => {
        dispatch(manageActions.GetTags());
        dispatch(manageActions.GetCategories());
        dispatch(organizationActions.getOrgCategories());

        return () => {
            dispatch(organizationActions.removeById());
            dispatch(organizationActions.removeSuggestOrg());
        };
    }, []);

    useEffect(() => {
        if (organizationsById) {
            setInfo(organizationsById);
        }
    }, [organizationsById]);

    return (
        <Grid container item className={classes.container} direction="column" lg={12} md={12} sm={12} xs={12}>
            <Breadcrumbs style={{ marginBottom: '20px' }} separator="›" aria-label="breadcrumb">
                <Link
                    color="inherit"
                    href={
                        router?.query?.orgId
                            ? `singleOrganization?orgid=${router?.query?.orgId}`
                            : router?.query?.type === 'Nonprofit'
                            ? '/nonProfit'
                            : '/business'
                    }>
                    <p className={global.passiveBreadcrumbs}>
                        {router?.query?.type === 'Nonprofit'
                            ? 'Nonprofit'
                            : router?.query?.type === 'Business'
                            ? 'Business'
                            : 'Organization'}
                    </p>
                </Link>

                <p className={global.activeBreadcrumbs}>{text}</p>
            </Breadcrumbs>

            <Grid container item className={classes.contHeader} justify="flex-start">
                <PageTitle title={text} style={classes.contHeaderText} />
                {text === 'Suggest Edits' && (
                    <p className={classes.organizationInfo}>Any of the suggested changes must first be verified by the system admin.</p>
                )}
            </Grid>

            <Grid container item className={classes.contContainer} lg={12} md={12} justify="space-between">
                {router?.pathname === '/createOrganizations' ? (
                    <CreateOrganizationsInputs
                        managerInfo={managerInfo}
                        type={text}
                        eventInfo={[]}
                        orgCategories={orgCategories}
                        orgType={router?.query?.type}
                    />
                ) : (
                    info && (
                        <CreateOrganizationsInputs
                            eventInfo={info}
                            managerInfo={managerInfo}
                            orgCategories={orgCategories}
                            type={text}
                            orgType={router?.query?.type}
                        />
                    )
                )}
            </Grid>
        </Grid>
    );
};
