import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { myProfilePage } from './styles';
import { EditProfileActions, httpRequestsOnErrorsActions } from 'store';
import { ProfileHead } from './profileHead';
import { ProfileBody } from './profileBody';
import { ErrMessage } from 'components';
import { FindError, FindLoad, FindSuccess } from 'utils';

export const ProfileSettings = ({ info }) => {
    const classes = myProfilePage();
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState(info ? { ...info } : {});
    const [dis, setDis] = useState(true);
    const [edit, setEdit] = useState('Edit');
    const [error, setError] = useState('');
    const [validEmail, setValidEmail] = useState('');

    const handleChangeButton = () => {
        if (edit === 'Edit') {
            setDis(false);
            setEdit('Save');
        }
        if (edit === 'Save') {
            if (!validEmail && inputs.fullName  && inputs.email && inputs.phoneNumber) {
                const data = {
                    fullName: inputs.fullName,
                    phoneNumber: inputs.phoneNumber,
                    email: inputs.email,
                };
                dispatch(EditProfileActions.editProfile(data));
            } else {
                setError(!inputs.fullName ? 'fullName' : !inputs.email ? 'email' : !inputs.phoneNumber ? 'phoneNumber' : '');
            }
        }
    };

    const editSuccess = FindSuccess('EDIT_PROFILE');
    const loader = FindLoad('EDIT_PROFILE');
    const backErr = FindError('EDIT_PROFILE');
    const err = backErr.length && backErr[0].type;
    const errMessageText = validEmail ? validEmail : backErr.length && backErr[0].type === 'EDIT_PROFILE' ? 'Email was exist' : error;

    useEffect(() => {
        if (editSuccess) {
            setEdit('Edit');
            setDis(true);
        }
    }, [editSuccess.length]);

    const handleCheck = (bool) => {
        if (bool === true) {
            setValidEmail('Email is not valid');
        } else {
            setValidEmail('');
        }
    };

    const handleClose = () => {
        setDis(false);
        setEdit('Edit');
    };

    const handleChange = (e) => {
        setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }), error === e.target.name && setError(''));
        err && err.length && dispatch(httpRequestsOnErrorsActions.removeError('EDIT_PROFILE'));
        error === e.target.name && setError('');
    };

    return (
        <div className={classes.profileSettings}>
            <ProfileHead
                loading={!!loader.length}
                handleClose={handleClose}
                handleClick={handleChangeButton}
                title={'General Account Settings'}
                type={'Settings'}
                buttonText={edit}
            />

            <div style={{ marginTop: '30px' }} className={classes.profileSettingsBodyWrapper}>
                <ProfileBody
                    editInfo={edit}
                    Placeholder={'Full Name'}
                    style={{ margin: 0 }}
                    errorText={error === 'fullName' && 'Name is not field'}
                    error={error === 'fullName'}
                    disabled={dis}
                    SettingName={'Full Name'}
                    name={'fullName'}
                    SettingValue={inputs.fullName}
                    IconType={info && info.auth && info.auth.role === 'Organizer' ? 'Organizer' : 'User'}
                    handleChange={handleChange}
                />
                <ProfileBody
                    editInfo={edit}
                    handleCheck={handleCheck}
                    type={'Email'}
                    errorText={
                        error === 'email'
                            ? 'Email is not field'
                            : validEmail === 'Email is not valid'
                            ? 'Email is not valid'
                            : backErr.length && backErr[0].type === 'EDIT_PROFILE'
                                ? 'Email was exist'
                                : false
                    }
                    error={
                        error === 'email'
                            ? true
                            : validEmail === 'Email is not valid'
                            ? true
                            : backErr.length && backErr[0].type === 'EDIT_PROFILE'
                    }
                    disabled={dis}
                    SettingName={'Email Address'}
                    SettingValue={inputs.email}
                    name={'email'}
                    IconType={'Email'}
                    handleChange={handleChange}
                />
                <ProfileBody
                    editInfo={edit}
                    type={'Number'}
                    errorText={error === 'phoneNumber' && 'Phone Number is not field'}
                    error={error === 'phoneNumber'}
                    disabled={dis}
                    SettingName={'Phone Number'}
                    SettingValue={inputs.phoneNumber}
                    name={'phoneNumber'}
                    Placeholder={inputs.phoneNumber ? '' : 'Not Specified'}
                    IconType={'Phone'}
                    handleChange={handleChange}
                />
                <ErrMessage
                    text={
                        errMessageText === 'phoneNumber'
                            ? 'Phone Number is not field'
                            : errMessageText === 'fullName'
                            ? 'Name is not field'
                            : errMessageText === 'email'
                                ? 'Email is not field'
                                : errMessageText === 'Email is not valid'
                                    ? 'Email is not valid'
                                    : ''
                    }
                />
            </div>
        </div>
    );
};
