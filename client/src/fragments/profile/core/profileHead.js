import React, { useEffect, useState } from 'react';
import { myProfilePage } from './styles';
import { Icon } from 'components';
import { SVGNames } from 'constants/index';
import Loader from 'react-loader-spinner';
import { Colors } from '../../../utils';

export const ProfileHead = ({ title, type, handleClick, buttonText, handleClose, loading }) => {
    const [size, setSize] = useState();
    const classes = myProfilePage();

    useEffect(() => {
        setSize(window.innerWidth);
    }, []);

    return (
        <div className={classes.profileSettingsHead}>
            <div className={classes.profileSettingsGeneral}>
                {size >= 400 && (
                    <Icon
                        name={
                            type === 'Settings'
                                ? SVGNames.SettingsFill
                                : type === 'Password'
                                ? SVGNames.PrivacyFill
                                : type === 'Contact'
                                ? SVGNames.ContactInfo
                                : SVGNames.BlueNotificationFill
                        }
                        color={Colors.ThemeGreen}
                        width={'21.59px'}
                        height={'20.5px'}
                        style={{ marginRight: '15px' }}
                    />
                )}
                {title}
            </div>
            {buttonText && (
                <div style={{ display: 'flex' }}>
                    {buttonText === 'Save' && (
                        <button className={classes.closeButton} onClick={handleClose}>
                            Close
                        </button>
                    )}
                    <button
                        onClick={handleClick}
                        className={buttonText === 'Edit' ? classes.profileSettingsEdit : classes.profileSettingsSave}>
                        {loading ? (
                            <Loader
                                type="ThreeDots"
                                color={Colors.ThemeWhite}
                                height={16}
                                width={16}
                                style={{ margin: '10px', padding: '0' }}
                            />
                        ) : (
                            buttonText
                        )}
                    </button>
                </div>
            )}
        </div>
    );
};
