import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { myProfilePage } from './styles';
import { ProfileHead } from './profileHead';
import { ProfileBody } from './profileBody';
import { EditProfileActions, httpRequestsOnErrorsActions } from 'store';
import { ErrMessage } from 'components';
import { FindError, FindLoad, FindSuccess } from 'utils';

export const ProfilePassword = ({}) => {
    const classes = myProfilePage();
    const dispatch = useDispatch();
    const [dis, setDis] = useState(true);
    const [edit, setEdit] = useState('Edit');
    const [error, setError] = useState('');
    const [inputs, setInputs] = useState('');
    const loader = FindLoad('EDIT_PASSWORD');
    const success = FindSuccess('EDIT_PASSWORD');
    const backError = FindError('EDIT_PASSWORD');
    const errText = backError.length && backError[0].error === 'user password does not match';

    const handleChangeInputs = (e) => {
        setInputs(
            (prevState) => ({ ...prevState, [e.target.name]: e.target.value }),
            error === e.target.name && setError(''),
            error === 'notMatch' && setError(''),
            errText && dispatch(httpRequestsOnErrorsActions.removeError('EDIT_PASSWORD'))
        );
    };

    const handleChangeButton = () => {
        if (edit === 'Edit') {
            setDis(false);
            setEdit('Save');
        }
        if (edit === 'Save') {
            if (inputs.currentPassword && inputs.newPassword && inputs.confirmPassword && inputs.newPassword === inputs.confirmPassword) {
                const data = {
                    password: inputs.currentPassword,
                    newPassword: inputs.newPassword,
                    confirmation: inputs.confirmPassword,
                };
                dispatch(EditProfileActions.EditPassword(data));
            } else {
                setError(
                    !inputs.currentPassword
                        ? 'currentPassword'
                        : !inputs.newPassword
                        ? 'newPassword'
                        : !inputs.confirmPassword
                            ? 'confirmPassword'
                            : inputs.newPassword !== inputs.confirmPassword
                                ? 'notMatch'
                                : ''
                );
            }
        }
    };

    const handleClose = () => {
        setDis(false);
        setEdit('Edit');
    };

    useEffect(() => {
        if (success) {
            setInputs('');
            setEdit('Edit');
            setDis(true);
        }
    }, [success.length]);

    const errorText =
        error === 'currentPassword'
            ? 'Current Password is not field'
            : error === 'newPassword'
            ? 'New Password is not field'
            : error === 'confirmPassword'
                ? 'Confirm Password is not field'
                : error === 'notMatch'
                    ? 'Password and confirm password does not match'
                    : '';

    return (
        <div style={{ marginTop: '40px' }} className={classes.profileSettings}>
            <ProfileHead
                loading={!!loader.length}
                handleClose={handleClose}
                handleClick={handleChangeButton}
                title={'Privacy'}
                type={'Password'}
                buttonText={edit}
            />

            <div style={{ marginTop: '30px' }} className={classes.profileSettingsBodyWrapper}>
                {edit === 'Save' ? (
                    <>
                        <ProfileBody
                            value={inputs.currentPassword}
                            handleChangePassword={handleChangeInputs}
                            style={{ margin: 0 }}
                            error={errText ? true : error === 'currentPassword'}
                            type={'password'}
                            SettingName={'Current Password'}
                            IconType={'Password'}
                            Placeholder={'...'}
                            name={'currentPassword'}
                        />
                        <ProfileBody
                            value={inputs.newPassword}
                            handleChangePassword={handleChangeInputs}
                            error={error === 'newPassword'}
                            type={'password'}
                            SettingName={'New Password'}
                            IconType={'Password'}
                            Placeholder={'...'}
                            name={'newPassword'}
                        />
                        <ProfileBody
                            value={inputs.confirmPassword}
                            handleChangePassword={handleChangeInputs}
                            error={error === 'confirmPassword'}
                            type={'password'}
                            SettingName={'Confirm Password'}
                            IconType={'Password'}
                            Placeholder={'...'}
                            name={'confirmPassword'}
                        />

                        <ErrMessage text={errText ? 'Password does not match' : errorText} />
                    </>
                ) : (
                    <ProfileBody
                        editInfo={edit}
                        value={''}
                        SettingValue={''}
                        disabled={dis}
                        SettingName={'Password'}
                        IconType={'Password'}
                        Placeholder={'......'}
                        type={'password'}
                    />
                )}
            </div>
        </div>
    );
};
