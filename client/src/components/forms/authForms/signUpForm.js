import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from './error';
import { appActions, authActions, httpRequestsOnErrorsActions } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import { BlueButton, Icon } from 'components';
import { signUpStyles } from 'fragments';
import { Colors } from 'utils';
import InputMask from 'react-input-mask';
import { useRouter } from 'next/router';

export const SignUpForm = ({ open, classes, signUp, load, err }) => {
    const inputStyle = signUpStyles();
    const dispatch = useDispatch();

    const { app, isAuthenticated } = useSelector((state) => ({
        app: state.global,
        isAuthenticated: state.auth.isAuthenticated,
    }));

    const backError = err.length && err.find((type) => type.error === ' User with this email or phone number exists');
    const loading = load.filter((type) => type === 'SIGNUP_USER');
    const route = useRouter();

    const validationSchema = Yup.object().shape({
        fullName: Yup.string().min(6, 'Must be more than 6 letters').required('required'),
        email: Yup.string().email('Must be a valid email address').max(30, 'Must be shorter than 30').required('required'),
        phoneNumber: Yup.string().min(14, 'The phone number must be between 10 and 13 digits').max(14),
        password: Yup.string().min(9, 'Must be more than 9 letters').required('required'),
        confPassword: Yup.string()
            .min(9, 'Must be more than 9 letters')
            .required('required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    });

    useEffect(() => {
        if (isAuthenticated) {
            open.welcome();
            authDispatch(appActions.clearError());
        }
    }, [isAuthenticated]);

    const authDispatch = useDispatch();
    const signUpHandle = (values) => {
        authDispatch(appActions.clearError());
        authDispatch(authActions.signUp(values, route?.asPath));
    };

    const handleSubmit = async (value) => {
        const values = value.phoneNumber
            ? {
                  fullName: value.fullName,
                  email: value.email,
                  phoneNumber: parseInt(value?.phoneNumber.replace(/[^0-9]/g, '')),
                  password: value.password,
              }
            : {
                  fullName: value.fullName,
                  email: value.email,
                  password: value.password,
              };
        authDispatch(authActions.signUp(values, route?.asPath));
    };

    const removeBackError = () => {
        if (backError) {
            dispatch(httpRequestsOnErrorsActions.removeError('SIGNUP_USER'));
        }
    };

    const loginBackError = false;

    return (
        <div className="sign">
            <Formik
                initialValues={{ fullName: '', email: '', password: '', confPassword: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    handleSubmit(values);
                    isAuthenticated === true && resetForm();
                    setSubmitting(false);
                }}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
                    return (
                        <div className="signin-form">
                            <form onSubmit={handleSubmit}>
                                <div style={{ marginTop: '-40px' }}>
                                    <div className="form group">
                                        <TextField
                                            InputProps={{
                                                startAdornment: (
                                                    <div className={classes.iconWrapper}>
                                                        <Icon
                                                            name={signUp.fullName.icon}
                                                            color={errors.fullName && touched.fullName ? '#F07379' : Colors.ThemeGreen}
                                                        />
                                                    </div>
                                                ),
                                            }}
                                            InputLabelProps={{
                                                shrink: false,
                                            }}
                                            inputProps={{
                                                autocomplete: 'new-password',
                                                form: {
                                                    autocomplete: 'off',
                                                },
                                            }}
                                            variant="outlined"
                                            id="fullName"
                                            type="text"
                                            name="fullName"
                                            placeholder={signUp.fullName.placeholder}
                                            value={values.fullName}
                                            className={
                                                touched.fullName && errors.fullName ? inputStyle.fieldStylesError : inputStyle.fieldStyles
                                            }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <Error touched={touched.fullName} message={errors.fullName} />
                                    </div>

                                    <div className="form group" style={{ marginTop: '10px' }}>
                                        <TextField
                                            onKeyDown={removeBackError}
                                            error={!!backError}
                                            InputProps={{
                                                startAdornment: (
                                                    <div className={classes.iconWrapper}>
                                                        <Icon
                                                            name={signUp.email.icon}
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
                                            InputLabelProps={{
                                                shrink: false,
                                            }}
                                            variant="outlined"
                                            id="email"
                                            inputProps={{
                                                autocomplete: 'new-password',
                                                form: {
                                                    autocomplete: 'off',
                                                },
                                            }}
                                            type="email"
                                            name="email"
                                            placeholder={signUp.email.placeholder}
                                            value={values.email}
                                            className={
                                                (touched.email && errors.email) || backError
                                                    ? inputStyle.fieldStylesError
                                                    : inputStyle.fieldStyles
                                            }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <Error
                                            touched={backError ? 'User with this email exists' : touched.email}
                                            message={backError ? 'User with this email exists' : errors.email}
                                        />
                                        <Error touched={touched.email} message={errors.email} />
                                    </div>

                                    <div className="form group" style={{ marginTop: '10px' }}>
                                        <InputMask maskChar="" mask="(999) 999-9999" value={values.phoneNumber} onChange={handleChange}>
                                            {() => (
                                                <TextField
                                                    onKeyDown={removeBackError}
                                                    // error={!!backError}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <div className={classes.iconWrapper}>
                                                                <Icon
                                                                    name={signUp.phone.icon}
                                                                    color={
                                                                        errors.phoneNumber && touched.phoneNumber
                                                                            ? '#F07379'
                                                                            : Colors.ThemeGreen
                                                                    }
                                                                />
                                                            </div>
                                                        ),
                                                    }}
                                                    InputLabelProps={{
                                                        shrink: false,
                                                    }}
                                                    variant="outlined"
                                                    id="phoneNumber"
                                                    inputProps={{
                                                        autocomplete: 'new-password',
                                                        form: {
                                                            autocomplete: 'off',
                                                        },
                                                    }}
                                                    type="text"
                                                    name="phoneNumber"
                                                    placeholder={signUp.phone.placeholder}
                                                    value={values.phoneNumber}
                                                    className={
                                                        (touched.phoneNumber && errors.phoneNumber) || backError
                                                            ? inputStyle.fieldStylesError
                                                            : inputStyle.fieldStyles
                                                    }
                                                    onChange={handleChange}
                                                    // onBlur={handleBlur}
                                                />
                                            )}
                                        </InputMask>
                                        <Error touched={touched.phoneNumber} message={errors.phoneNumber} />

                                        {/*<TextField*/}
                                        {/*    onKeyDown={removeBackError}*/}
                                        {/*    // error={!!backError}*/}
                                        {/*    InputProps={{*/}
                                        {/*        startAdornment: (*/}
                                        {/*            <div className={classes.iconWrapper}>*/}
                                        {/*                <Icon*/}
                                        {/*                    name={signUp.phone.icon}*/}
                                        {/*                    color={*/}
                                        {/*                        errors.phoneNumber && touched.phoneNumber ? '#F07379' : Colors.ThemeGreen*/}
                                        {/*                    }*/}
                                        {/*                />*/}
                                        {/*            </div>*/}
                                        {/*        ),*/}
                                        {/*    }}*/}
                                        {/*    InputLabelProps={{*/}
                                        {/*        shrink: false,*/}
                                        {/*    }}*/}
                                        {/*    variant="outlined"*/}
                                        {/*    id="phoneNumber"*/}
                                        {/*    inputProps={{*/}
                                        {/*        autocomplete: 'new-password',*/}
                                        {/*        form: {*/}
                                        {/*            autocomplete: 'off',*/}
                                        {/*        },*/}
                                        {/*    }}*/}
                                        {/*    type="text"*/}
                                        {/*    name="phoneNumber"*/}
                                        {/*    placeholder={signUp.phone.placeholder}*/}
                                        {/*    value={values.phoneNumber}*/}
                                        {/*    className={*/}
                                        {/*        (touched.phoneNumber && errors.phoneNumber) || backError*/}
                                        {/*            ? inputStyle.fieldStylesError*/}
                                        {/*            : inputStyle.fieldStyles*/}
                                        {/*    }*/}
                                        {/*    onChange={handleChange}*/}
                                        {/*    onBlur={handleBlur}*/}
                                        {/*/>*/}
                                        {/*<Error touched={touched.phoneNumber} message={errors.phoneNumber} />*/}
                                    </div>

                                    <div className="form group" style={{ marginTop: '10px' }}>
                                        <TextField
                                            InputProps={{
                                                startAdornment: (
                                                    <div className={classes.iconWrapper}>
                                                        <Icon
                                                            name={signUp.password.icon}
                                                            color={errors.password && touched.password ? '#F07379' : Colors.ThemeGreen}
                                                        />
                                                    </div>
                                                ),
                                            }}
                                            InputLabelProps={{
                                                shrink: false,
                                            }}
                                            variant="outlined"
                                            id="password"
                                            inputProps={{
                                                autocomplete: 'new-password',
                                                form: {
                                                    autocomplete: 'off',
                                                },
                                            }}
                                            type="password"
                                            name="password"
                                            placeholder={signUp.password.placeholder}
                                            value={values.password}
                                            className={
                                                touched.password && errors.password ? inputStyle.fieldStylesError : inputStyle.fieldStyles
                                            }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />

                                        <Error touched={touched.password} message={errors.password} />
                                    </div>
                                    <div className="form group" style={{ marginTop: '10px' }}>
                                        <TextField
                                            InputProps={{
                                                startAdornment: (
                                                    <div className={classes.iconWrapper}>
                                                        <Icon
                                                            name={signUp.password.icon}
                                                            color={
                                                                errors.confPassword && touched.confPassword ? '#F07379' : Colors.ThemeGreen
                                                            }
                                                        />
                                                    </div>
                                                ),
                                            }}
                                            InputLabelProps={{
                                                shrink: false,
                                            }}
                                            inputProps={{
                                                autocomplete: 'new-password',
                                                form: {
                                                    autocomplete: 'off',
                                                },
                                            }}
                                            variant="outlined"
                                            id="confPassword"
                                            type="password"
                                            name="confPassword"
                                            placeholder={signUp.confPassword.placeholder}
                                            value={values.confPassword}
                                            className={
                                                touched.confPassword && errors.confPassword
                                                    ? inputStyle.fieldStylesError
                                                    : inputStyle.fieldStyles
                                            }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />

                                        <Error touched={touched.confPassword} message={errors.confPassword} />
                                    </div>
                                    {app.error ? <p style={{ color: '#F07379', lineHeight: 0 }}>{app.error}</p> : null}
                                    <div className="form group">
                                        <BlueButton loading={loading.length} text="Sign Up" type="submit" />
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
