import React from 'react';
import { myProfilePage } from './styles';
import Lock from 'assets/images/lock.png';
import Settings from 'assets/images/settings.png';
import Loader from 'react-loader-spinner';

export const ProfileHead = ({ title, type, handleClick, buttonText, loading, handleClose }) => {
    const classes = myProfilePage();
    return (
        <div className={classes.profileSettingsHead}>
            <div className={classes.profileSettingsGeneral}>
                {type === 'Settings' ? (
                    <img src={Settings} alt={'settings'} style={{ width: '23px', marginRight: '15px' }} />
                ) : (
                    <img
                        src={Lock}
                        alt={'Lock'}
                        style={{ height: '21px', width: '20px', marginRight: '15px' }}
                        className={classes.LockImg}
                    />
                )}

                {title}
            </div>

            <div style={{ display: 'flex' }}>
                {buttonText === 'Save' && (
                    <button className={classes.closeButton} onClick={handleClose}>
                        Close
                    </button>
                )}
            <button onClick={handleClick} className={buttonText === 'Edit' ? classes.profileSettingsEdit : classes.profileSettingsSave}>
                {loading ? (
                    <Loader
                        type="ThreeDots"
                        color="#FFFFFF"
                        height={16}
                        width={16}
                        style={{ margin: '10px', padding: '0' }}
                    />
                ) : (
                    buttonText
                )}

            </button>
            </div>
        </div>
    );
};
