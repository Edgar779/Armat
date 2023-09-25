import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Profile } from 'fragments';
import { useDispatch, useSelector } from 'react-redux';
import { EditProfileActions } from 'store';
import { FindLoad } from '../../utils';
import { Loader } from '../../components/loader/loader';

export const MyProfile = () => {
    const dispatch = useDispatch();
    const { accountDeleted, MyProfile } = useSelector((state) => ({
        accountDeleted: state.auth.accountDeleted,
        MyProfile: state.profile.MyProfile,
    }));

    useEffect(() => {
        if (accountDeleted) {
            window.location.replace('/');
        }
    }, [accountDeleted]);

    useEffect(() => {
        dispatch(EditProfileActions.myProfileInfo());
    }, []);

    const loader = FindLoad('GET_MY_PROFILE');

    return (
        <div>
            <Grid container item spacing={1} direction="column" lg={12} md={12}>
                {loader.length ? (
                    <Loader text={'noText'} />
                ) : (
                    <Grid>
                        <Profile info={MyProfile} />
                    </Grid>
                )}
            </Grid>
        </div>
    );
};
