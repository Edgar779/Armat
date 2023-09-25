import { OrganizationsInfo } from 'fragments';
import { useGlobalStyles } from 'theme';
import { useEffect } from 'react';
import { organizationActions } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import { FindLoad } from 'utils';
import { Loader } from 'components';

export const Business = () => {
    const classes = useGlobalStyles();
    const dispatch = useDispatch();
    const loader = FindLoad('GET_ORGANIZATION');

    useEffect(() => {
        dispatch(organizationActions.getOrg('BUSINESS', 'ACTIVE'));
        dispatch(organizationActions.getOrgCategories());
    }, []);

    const { organizations, organizationsReserve, orgCategories } = useSelector((state) => ({
        organizations: state.orgs.organizations,
        organizationsReserve: state.orgs.organizationsReserve,
        orgCategories: state.orgs.orgCategories,
    }));

    return (
        <div className={classes.singleEventCont}>
            {loader.length ? (
                <Loader text={'noText'} />
            ) : (
                <OrganizationsInfo
                    type={'Business'}
                    organizations={organizations}
                    organizationsReserve={organizationsReserve}
                    orgCategories={orgCategories}
                />
            )}
        </div>
    );
};
