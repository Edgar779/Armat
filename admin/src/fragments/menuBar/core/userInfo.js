import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navBarStyles } from './style';
import { authActions, EditProfileActions } from 'store';
import { Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Images } from 'theme';

export const UserInfo = ({}) => {
    const classes = navBarStyles();
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(authActions.logOut());
    };

    const { MyProfile, avatarImg } = useSelector((state) => ({
        MyProfile: state.profile.MyProfile,
        avatarImg: state.profile.avatarImg,
    }));

    useEffect(() => dispatch(EditProfileActions.MyProfileInfo()), []);

    const AdminName = MyProfile && MyProfile.fullName ? MyProfile.fullName : '';

    return (
        <div className={classes.boxWrapper}>
            <div className={classes.userInfo}>
                <Typography className={classes.userInfoText}>{AdminName}</Typography>
                {avatarImg ? <img src={avatarImg} alt="avatar" /> : <AccountCircleIcon style={{ fontSize: 50 }} />}
            </div>
            <div className={classes.logOutInfo} onClick={() => handleSignOut()}>
                <img src={Images.logOutOutline} alt={'logOutOutline'} />
                <Typography className={classes.logOut}>Log Out</Typography>
            </div>
        </div>
    );
};
