import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useGlobalStyles } from 'theme';
import { useDispatch, useSelector } from 'react-redux';
import { SingleOrganizations } from 'fragments';
import { FindLoad, FindSuccess, Scroll } from 'utils';
import { Loader } from 'components';
import { EventsActions, organizationActions } from 'store';
import { ShowImages } from '../../fragments/singleEvent/singleEventHeader/core/showImages';
import axios from 'axios';

export const SingleOrganizationPage = ({}) => {
    const dispatch = useDispatch();
    const classes = useGlobalStyles();
    const loader = FindLoad('GET_ORGANIZATION_BY_ID');
    const success = FindSuccess('CLAIMS');
    const [open, setOpen] = useState(false);
    const route = useRouter();
    const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('userInfo'));
    const scrollPos = Scroll();
    const [claimedInfo, setClaimedInfo] = useState(false);
    const { organizationsById, myFollows, orgCategories } = useSelector((state) => ({
        organizationsById: state.orgs.organizationsById,
        myFollows: state.orgs.myFollows,
        orgCategories: state.orgs.orgCategories,
    }));

    const handleOpenClose = () => {
        setOpen(!open);
    };

    useEffect(() => {
        // if (route.query.orgid && organizationsById.type !== 'BUSINESS') {
        if (route?.query?.orgid) {
            dispatch(EventsActions.getPendingSponsors(route.query.orgid));
            dispatch(EventsActions.getEventSponsors(route.query.orgid));
            dispatch(organizationActions.getOrgCategories());
        }
        if (user && route?.query?.orgid) {
            dispatch(organizationActions.getFollows());
            handleGetClaimInfo();
        }
        if (route?.query?.orgid && organizationsById?.type !== 'BUSINESS') {
            dispatch(organizationActions.orgEvents(route.query.orgid));
        }

        // }
    }, [route]);

    const handleGetClaimInfo = () => {
        axios.get(`/orgs/${route.query.orgid}/claims/hasClaimed`, { auth: true }).then((res) => {
            setClaimedInfo(res.data);
        });
    };

    useEffect(() => {
        if (success.length) {
            handleGetClaimInfo();
        }
    }, [success]);

    const myFollowsInfo = myFollows && myFollows.filter((i) => user && i.userId === user.id && i.orgId === route.query.orgid);

    return (
        <div className={scrollPos > 10 ? classes.singleOrg : classes.singleOrgScrolled}>
            {open === true ? (
                <ShowImages
                    handleClick={handleOpenClose}
                    images={organizationsById && organizationsById?.images && organizationsById?.images}
                />
            ) : loader?.length ? (
                <Loader text={'noText'} />
            ) : (
                <SingleOrganizations
                    claimedInfo={claimedInfo}
                    orgCategories={orgCategories}
                    follow={myFollowsInfo}
                    myFollows={myFollows}
                    handleOpenClose={handleOpenClose}
                    info={organizationsById}
                />
            )}
        </div>
    );
};
