import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from './error';
import { appActions, authActions, httpRequestsOnErrorsActions } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import Icon from '../../icon';
import { signUpStyles } from 'fragments';
import { BlueButton } from 'components';
import { Colors } from 'utils';
import { useRouter } from 'next/router';

export const SignInForm = ({ open, close, classes, signIn }) => {
    const inputStyle = signUpStyles();
    const dispatch = useDispatch();
    const [localInfo, setLocalInfo] = useState(typeof window !== 'undefined' && JSON.parse(localStorage.getItem('userLog')));
    const [checked, setChecked] = React.useState(false);
    const [loginType, setLoginType] = React.useState('');
    const [log, setLog] = React.useState('');
    const route = useRouter();

    const { accessToken, httpOnError, httpOnLoad } = useSelector((state) => ({
        accessToken: state.auth.accessToken,
        httpOnError: state.httpOnError,
        httpOnLoad: state.httpOnLoad,
    }));

    const validationSchema = Yup.object().shape({
        email:
            loginType === 'email'
                ? Yup.string().email('Must be a valid email address').max(30, 'Must be shorter than 30').required('required')
                : loginType === 'phone'
                ? Yup.string().min(10, 'The phone number must be between 10 and 13 digits').max(13).required('required')
                : '',
        password: Yup.string().min(6, 'Must be more than 9 letters').required('required'),
    });

    const backError = httpOnError.length && httpOnError.find((type) => type.error === 'user password does not match');
    const loginBackError = httpOnError.length && httpOnError.find((type) => type.error === 'Such user does not exist in our records');
    const loading = httpOnLoad.filter((type) => type === 'SIGNIN_USER');
    const authDispatch = useDispatch();

    useEffect(() => {
        if (accessToken) {
            close();
        }
    }, [accessToken]);

    const handleSubmit = async (value) => {
        const values =
            loginType === 'email'
                ? {
                      email: value.email,
                      password: value.password,
                  }
                : loginType === 'phone'
                ? {
                      phoneNumber: value.email,
                      password: value.password,
                  }
                : {};

        if (checked) {
            localStorage.setItem('userLog', JSON.stringify(values));
        }
        authDispatch(appActions.clearError());
        authDispatch(authActions.signIn(values, route?.asPath));
    };
    const handleRemember = (data) => {
        setChecked(data);
        if (data === false) {
            setLocalInfo('');
            localStorage.removeItem('userLog');
        }
    };

    const removeBackError = () => {
        const err = backError ? backError.type : loginBackError ? loginBackError.type : '';
        if (err) {
            dispatch(httpRequestsOnErrorsActions.removeError(err));
        }
    };

    const handleChangePhoneOrEmail = (e) => {
        const regex = /[a-zA-Z]/g;
        setLog(e.target.value);
        setLoginType(e.target.value.search(regex) === -1 ? 'phone' : 'email');
    };

    return (
        <div className="sign">
            <Formik
                initialValues={{ email: localInfo ? localInfo.email : '', password: localInfo ? localInfo.password : '' }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(true);
                    handleSubmit(values);
                    setSubmitting(false);
                }}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
                    return (
                        <div className="signIn-form">
                            <form onSubmit={handleSubmit}>
                                <div style={{ marginTop: '-30px' }}>
                                    <div className="form group">
                                        <TextField
                                            onKeyDown={removeBackError}
                                            InputLabelProps={{
                                                shrink: false,
                                            }}
                                            variant="outlined"
                                            type={loginType === 'email' ? 'email' : loginType === 'phone' ? 'text' : ''}
                                            error={!!loginBackError}
                                            name="email"
                                            placeholder={signIn.email.placeholder}
                                            value={values.email ? values.email : localInfo ? localInfo.email : ''}
                                            className={
                                                (touched.email && errors.email) || loginBackError
                                                    ? inputStyle.fieldStylesError
                                                    : inputStyle.fieldStyles
                                            }
                                            onChange={(e) => {
                                                handleChange(e);
                                                handleChangePhoneOrEmail(e);
                                            }}
                                            onBlur={handleBlur}
                                            onFocus={(e) => {
                                                handleChangePhoneOrEmail(e);
                                            }}
                                            InputProps={{
                                                startAdornment: (
                                                    <div className={classes.iconWrapper}>
                                                        <Icon
                                                            name={
                                                                log.length
                                                                    ? loginType === 'email'
                                                                        ? signIn.email.icon
                                                                        : loginType === 'phone'
                                                                        ? signIn.phone.icon
                                                                        : ''
                                                                    : ''
                                                            }
                                                            color={
                                                                errors.email && touched.email
                                                                    ? '#F07379'
                                                                    : loginBackError
                                                                    ? '#F07379'
                                                                    : Colors.ThemeGreen
                                                            }
                                                        />
                                                    </div>
                                                ),
                                            }}
                                        />
                                        <Error
                                            touched={loginBackError ? 'User with this email was not found' : touched.email}
                                            message={loginBackError ? 'User with this email was not found' : errors.email}
                                        />
                                    </div>

                                    <div className="form group" style={{ marginTop: '8px' }}>
                                        <TextField
                                            onKeyDown={removeBackError}
                                            InputLabelProps={{
                                                shrink: false,
                                            }}
                                            variant="outlined"
                                            id="password"
                                            type="password"
                                            error={!!backError}
                                            name="password"
                                            placeholder={signIn.password.placeholder}
                                            value={values.password ? values.password : localInfo ? localInfo.password : ''}
                                            className={
                                                (touched.password && errors.password) || backError
                                                    ? inputStyle.fieldStylesError
                                                    : inputStyle.fieldStyles
                                            }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            InputProps={{
                                                startAdornment: (
                                                    <div className={classes.iconWrapper}>
                                                        <Icon
                                                            name={signIn.password.icon}
                                                            color={
                                                                errors.password && touched.password
                                                                    ? '#F07379'
                                                                    : backError
                                                                    ? '#F07379'
                                                                    : Colors.ThemeGreen
                                                            }
                                                        />
                                                    </div>
                                                ),
                                            }}
                                        />
                                        <Error
                                            touched={backError ? 'Password is not match' : touched.password}
                                            message={backError ? 'Password is not match' : errors.password}
                                        />
                                    </div>
                                    <div className="form group">
                                        <BlueButton loading={loading.length} text="Continue" type="submit" />
                                    </div>
                                    <div className={classes.saveMyInfoWrapper}>
                                        <div />
                                        <button className={classes.forgotButton} onClick={() => open.forgotPass()}>
                                            Forgot Password?
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    );
                }}
            </Formik>
        </div>
    );
};
