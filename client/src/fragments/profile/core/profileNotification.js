import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { myProfilePage } from './styles';
import { ProfileHead } from './profileHead';
import { ProfileBody } from './profileBody';
import { EditProfileActions } from 'store';

export const ProfileNotification = ({ info, setError }) => {
    const classes = myProfilePage();
    const dispatch = useDispatch();
    const userSettings = info && info.settings && info.settings.notificationSettings;
    const [allowText, setAllowText] = useState(userSettings ? userSettings.allowText : false);
    const [allowInApp, setAllowInApp] = useState(userSettings ? userSettings.allowInApp : false);
    const [allowEmail, setAllowEmail] = useState(userSettings ? userSettings.allowEmail : false);

    useEffect(() => {
        if (userSettings) {
            setAllowText(userSettings.allowText);
            setAllowInApp(userSettings.allowInApp);
            setAllowEmail(userSettings.allowEmail);
        }
    }, [userSettings]);

    const handleSwitch = (type, value) => {
        if (type === 'inAppNotifications') {
            setAllowInApp(!allowInApp);
        }
        if (type === 'textNotifications') {
            setAllowText(!allowText);
        }
        if (type === 'emailNotifications') {
            setAllowEmail(!allowEmail);
        }
        const settings = {
            settings: {
                notificationSettings: {
                    allowText: type === 'textNotifications' ? value : allowText,
                    allowInApp: type === 'inAppNotifications' ? value : allowInApp,
                    allowEmail: type === 'emailNotifications' ? value : allowEmail,
                },
            },
        };
        dispatch(EditProfileActions.editProfile(settings));
    };

    return (
        <div style={{ margin: '40px 0' }} className={classes.profileSettings}>
            <ProfileHead title={'Notification Settings'} type={'Notification'} />
            <div style={{ marginTop: '30px' }} onChange={() => setError('')} className={classes.profileSettingsBodyWrapper}>
                <ProfileBody
                    switchInfo={allowInApp}
                    type={'Notifications'}
                    style={{ margin: 0 }}
                    SettingName={'In-app Notifications'}
                    IconType={'Notifications'}
                    handleSwitch={() => handleSwitch('inAppNotifications', !allowInApp)}
                />
            </div>

            <div className={classes.profileSettingsBodyWrapper}>
                <ProfileBody
                    switchInfo={allowText}
                    type={'Notifications'}
                    style={{ margin: 0 }}
                    SettingName={'Text Notifications'}
                    IconType={'Notifications'}
                    handleSwitch={() => handleSwitch('textNotifications', !allowText)}
                />
            </div>
            <div className={classes.profileSettingsBodyWrapper}>
                <ProfileBody
                    switchInfo={allowEmail}
                    type={'Notifications'}
                    style={{ margin: 0 }}
                    SettingName={'Email Notifications'}
                    IconType={'Notifications'}
                    handleSwitch={() => handleSwitch('emailNotifications', !allowEmail)}
                />
            </div>
        </div>
    );
};
