import React from 'react';
import { myProfilePage } from './styles';
import { Icon, PasswordInput, SignInInput, Switcher } from 'components';
import { SVGNames, EmailValidator } from 'constants/index';

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
    style,
    name,
    value,
    handleCheck,
    validEmail,
    switchInfo,
    editInfo,
    handleSwitch,
}) => {
    const classes = myProfilePage();

    return (
        <div
            style={{ ...style }}
            className={
                error === true
                    ? classes.profileSettingsBodyError
                    : editInfo === 'Edit'
                    ? classes.profileSettingsBodyNoBottom
                    : classes.profileSettingsBody
            }>
            <div
                className={
                    type === 'Notifications'
                        ? classes.profilePasswordBodyContacts
                        : type === 'password'
                        ? classes.profilePasswordBodyContacts
                        : classes.profileSettingsBodyContacts
                }>
                <div className={error === true ? classes.profileSettingsErrorBodyName : classes.profileSettingsBodyName}>
                    <Icon
                        name={
                            IconType === 'User'
                                ? SVGNames.UserOutline
                                : IconType === 'Email'
                                ? SVGNames.EmailOutline
                                : IconType === 'Phone'
                                ? SVGNames.PhoneNumberOutline
                                : IconType === 'Password'
                                ? SVGNames.PasswordOutline
                                : IconType === 'Organizer'
                                ? SVGNames.Company
                                : SVGNames.NotificationFill
                        }
                        color={error === true ? '#F07379' : ''}
                        width={IconType === 'Organizer' ? '23px' : type === 'Notifications' ? '20px' : '17px'}
                        height={IconType === 'Organizer' ? '23px' : type === 'Notifications' ? '23px' : '16px'}
                        style={IconType === 'Organizer' ? { marginLeft: '-5px' } : {}}
                    />
                    <p>{SettingName}</p>
                </div>

                <div>
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
                            placeholder={Placeholder}
                        />
                    ) : type === 'Notifications' ? (
                        <Switcher type={'notification'} info={switchInfo ? switchInfo : false} handleChangeSwitcher={handleSwitch} />
                    ) : type === 'Email' ? (
                        <SignInInput
                            disabled={disabled}
                            className={'Email'}
                            validator={EmailValidator}
                            value={SettingValue}
                            onChange={handleChange}
                            sendBoolean={handleCheck}
                            typeError={validEmail}
                            name={name}
                            type={'email'}
                            label={'Email'}
                            id={'email'}
                            autoComplete={'current-email'}
                        />
                    ) : (
                        <input
                            name={name}
                            type={type}
                            className={
                                type === 'password' ? classes.profileSettingsBodyPasswordInput : classes.profileSettingsBodyUserNameInput
                            }
                            disabled={disabled}
                            value={SettingValue}
                            onChange={handleChange}
                            placeholder={Placeholder}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
