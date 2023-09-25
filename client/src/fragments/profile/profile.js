import React from 'react';
import { useSelector } from 'react-redux';
import { UploadAvatar } from '../uploadAvatar';
import {
    DeleteMyAccount,
    ProfileContacts,
    ProfileNotification,
    ProfilePassword,
    ProfileSettings,
    DeleteOption,
    myProfilePage,
} from './core';
import { PagesTitle } from 'components';

export const Profile = ({ info }) => {
    const classes = myProfilePage();
    const [open, setOpen] = React.useState(false);

    const { httpOnLoad, httpOnSuccess } = useSelector((state) => ({
        httpOnLoad: state.httpOnLoad,
        httpOnSuccess: state.httpOnSuccess,
    }));


    return (
        <div className={classes.profileWrapper}>
            <div className={classes.profileContainer}>
                <div className={'container'}>
                    <div className={classes.profileTittleMargins}>
                        <PagesTitle text={'My Profile'} />
                    </div>

                    <div className={classes.profileContainerBody}>
                        <UploadAvatar info={info} />

                        <div className={classes.profileBodyWrapper}>
                            <div>
                                {info && info.auth.role === 'ORGANIZER' && (
                                    <ProfileContacts info={info} load={httpOnLoad} success={httpOnSuccess} />
                                )}
                            </div>
                            <div>
                                <ProfileSettings info={info} load={httpOnLoad} success={httpOnSuccess} />
                            </div>

                            <div>
                                <ProfilePassword info={info} load={httpOnLoad} success={httpOnSuccess} />
                            </div>

                            <div>
                                <ProfileNotification info={info} />
                            </div>

                            <DeleteMyAccount info={info} handleClick={() => setOpen(true)} />
                        </div>
                    </div>
                </div>
            </div>
            <DeleteOption open={open} setOpen={() => setOpen(false)} info={info}/>
        </div>
    );
};
