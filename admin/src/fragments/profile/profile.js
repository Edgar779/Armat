import React from 'react';
import {myProfilePage, ProfileSettings, ProfilePassword} from './core';
import UploadAvatar from '../uploadAvatar/uploadAvatar';

export const Profile = ({}) => {
    const classes = myProfilePage();
    const admin = JSON.parse(localStorage.getItem('userInfo'));

    return (
        <div>
            <div className={classes.tittle}>
                <p> {admin && admin.fullName}</p>
            </div>
            <div className={classes.profileWrapper}>
                <div className={classes.profileContainer}>
                    <UploadAvatar/>
                    <div style={{width: '100%'}}>
                        <ProfileSettings info={admin}/>
                        <ProfilePassword/>
                    </div>
                </div>
            </div>
        </div>
    );
};
