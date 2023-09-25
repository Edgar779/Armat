import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { myProfilePage } from './styles';
import { EditProfileActions } from 'store';
import { ProfileHead } from './profileHead';
import { ProfileBody } from './profileBody';
import { ErrMessage } from 'components';
import { FindError, FindLoad, FindSuccess } from 'utils';

export const ProfileContacts = ({ info }) => {
    const classes = myProfilePage();
    const dispatch = useDispatch();
    const [dis, setDis] = useState(true);
    const [edit, setEdit] = useState('Edit');
    const [error, setError] = useState('');
    const [validEmail, setValidEmail] = useState('');

    const [inputs, setInputs] = useState(info.organizerInfo ? { ...info.organizerInfo } : {});
    const handleChange = (e) => {
        setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }),
            error === e.target.name && setError(''));
        // err && err.length && dispatch(httpRequestsOnErrorsActions.removeError('EDIT_MY_ORGANIZATION'));
    };

    const loading = FindLoad('EDIT_MY_ORGANIZATION');
    const success = FindSuccess('EDIT_MY_ORGANIZATION');
    const backError = FindError('EDIT_MY_ORGANIZATION');

    const handleChangeButton = () => {
        if (edit === 'Edit') {
            setDis(false);
            setEdit('Save');
        }
        if (edit === 'Save') {
            if (!validEmail && inputs.contactName && inputs.contactEmail && inputs.contactPhone) {

                const organizer = {
                    organizer: {
                        contactName: inputs.contactName,
                        contactPhone: inputs.contactPhone,
                        contactEmail: inputs.contactEmail,
                    },
                };
                dispatch(EditProfileActions.editProfile(organizer, 'organizer'));
            } else {
                if (!inputs.contactName) {
                    setError('Name is not field');
                } else if (!inputs.contactEmail) {
                    setError('Email is not field');
                } else if (!inputs.contactPhone) {
                    setError('Phone Number is not field');
                }
            }
        }
    };

    useEffect(() => {
        if (success) {
            setEdit('Edit');
            setDis(true);
        }
    }, [success.length]);

    const handleClose = () => {
        setDis(false);
        setEdit('Edit');
    };

    const handleCheck = (bool) => {
        if (bool === true) {
            setValidEmail('Email is not valid');
        } else {
            setValidEmail('');
        }
    };

    return (
        <div style={{ marginBottom: '40px' }} className={classes.profileSettings}>
            <ProfileHead
                loading={loading}
                handleClose={handleClose}
                handleClick={handleChangeButton}
                title={'Contact Person'}
                type={'Contact'}
                buttonText={edit}
            />

            <div style={{ marginTop: '30px' }} onChange={() => setError('')} className={classes.profileSettingsBodyWrapper}>
                <ProfileBody
                    editInfo={edit}
                    style={{ margin: 0 }}
                    errorText={error === 'Name is not field' && 'Name is not field'}
                    error={error === 'Name is not field'}
                    disabled={dis}
                    SettingName={'Company Name'}
                    SettingValue={inputs.contactName}
                    Placeholder={inputs.contactName ? '' : 'Not Specified'}
                    IconType={'Organizer'}
                    name={'contactName'}
                    handleChange={handleChange}
                />
                <ProfileBody
                    editInfo={edit}
                    handleCheck={handleCheck}
                    type={'Email'}
                    errorText={
                        error === 'Email is not field'
                            ? 'Email is not field'
                            : validEmail === 'Email is not valid'
                            ? 'Email is not valid'
                            : false
                    }
                    error={error === 'Email is not field' || validEmail === 'Email is not valid'}
                    disabled={dis}
                    SettingName={'Email Address'}
                    SettingValue={inputs.contactEmail}
                    name={'contactEmail'}
                    IconType={'Email'}
                    Placeholder={inputs.contactEmail ? '' : 'Not Specified'}
                    handleChange={handleChange}
                />
                <ProfileBody
                    editInfo={edit}
                    errorText={error === 'Phone Number is not field' && 'Phone Number is not field'}
                    error={error === 'Phone Number is not field'}
                    disabled={dis}
                    SettingName={'Phone Number'}
                    name={'contactPhone'}
                    SettingValue={inputs.contactPhone}
                    Placeholder={inputs.contactPhone ? '' : 'Not Specified'}
                    IconType={'Phone'}
                    handleChange={handleChange}
                />
                <ErrMessage text={validEmail ? validEmail : error} />
            </div>
        </div>
    );
};
