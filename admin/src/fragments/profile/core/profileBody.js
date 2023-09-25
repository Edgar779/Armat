import React from 'react';
import { myProfilePage } from './styles';
import { Images } from 'theme';
import { PasswordInput, SignInInput } from 'components';
import { EmailValidator } from 'constants/index';

export const ProfileBody = ({
    SettingName,
    SettingValue,
    handleChange,
    disabled,
    Placeholder,
    type,
    IconType,
    error,
    handleChangePassword,
    errorText,
    style,
    name,
    value,
    handleCheck,
    validEmail, editInfo,
}) => {
    const classes = myProfilePage();
    return (
        <div style={{ ...style }} className={error === true ? classes.profileSettingsBodyError : editInfo === 'Edit' ? classes.profileSettingsBodyNoBottom : classes.profileSettingsBody}>
            <div className={classes.profileSettingsBodyContacts}>
                <div className={error === true ? classes.profileSettingsErrorBodyName : classes.profileSettingsBodyName}>
                    {IconType === 'Password' ? (
                        <img
                            style={{ marginLeft: '16px', width: '17px', height: '16px' }}
                            src={error === true ? Images.errorPassword : Images.password}
                            alt="password"
                        />
                    ) : (
                        <img
                            src={
                                IconType === 'Email'
                                    ? errorText === 'Email is not field'
                                        ? Images.errorEmail
                                        : errorText === 'Email is not valid'
                                        ? Images.errorEmail
                                        : Images.email
                                    : IconType === 'User'
                                    ? errorText === 'Name is not field'
                                        ? Images.errorUser
                                        : Images.user
                                    : errorText === 'Phone Number is not field'
                                    ? Images.errorPhone
                                    : Images.phone
                            }
                            alt="user"
                            style={{ marginLeft: '16px', width: '17px' }}
                        />
                    )}

                    <p>{SettingName}</p>
                </div>

                <div className={classes.profileSettingsBodyUserName}>
                    {type === 'password' ? (
                        <PasswordInput
                            handleChangePassword={handleChangePassword}
                            type={type}
                            className={
                                type === 'password' ? classes.profileSettingsBodyPasswordInput : classes.profileSettingsBodyUserNameInput
                            }
                            name={name}
                            disabled={disabled}
                            value={value}
                            onChange={handleChange}
                            placeholder={Placeholder ? Placeholder :''}
                        />
                    ) : type === 'Email' ? (
                        <SignInInput
                            disabled={disabled}
                            className={'Email'}
                            validator={EmailValidator}
                            value={SettingValue}
                            onChange={handleChange}
                            sendBoolean={handleCheck}
                            typeError={validEmail}
                            name={'email'}
                            type={'email'}
                            label={'Email'}
                            id={'email'}
                            autoComplete={'current-email'}
                        />
                    ) : (
                        <input
                            type={IconType === 'Phone' ? 'Number' : type}
                            className={classes.profileSettingsBodyUserNameInput}
                            disabled={disabled}
                            name={name}
                            value={SettingValue}
                            onChange={handleChange}
                            placeholder={Placeholder ? Placeholder :''}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
