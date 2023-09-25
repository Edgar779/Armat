import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from './error';
import { authActions } from 'store';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { useGlobalStyles } from 'theme';
import { useRouter } from 'next/router';
import Loader from 'react-loader-spinner';
import { Icon } from 'components';
import { signUpStyles } from 'fragments';
import { Colors } from 'utils';

const validationSchema = Yup.object().shape({
    newPassword: Yup.string().min(9, 'Must be more than 9 letters').required('required'),
    confirmation: Yup.string()
        .min(9, 'Must be more than 9 letters')
        .required('required')
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
});

let clicked = false;

export const ResetPassForm = ({ open, classes, resetPassword }) => {
    const inputStyle = signUpStyles();
    const authDispatch = useDispatch();
    const button = {
        background: Colors.ThemeGray,
        borderRadius: '24px',
    };
    const globalClasses = useGlobalStyles({ button: button });
    const { app } = useSelector(
        (state) => ({
            app: state.global,
        }),
        shallowEqual
    );
    useEffect(() => {
        if (!app.isLoading && clicked && app.error == false) {
            open.successResetPass();
        }
    }, [app.isLoading || app.error]);
    const router = useRouter();
    const handleSubmit = (value) => {
        const data = {
            resetToken: router.query.resetToken,
            password: {
                newPassword: value.newPassword,
                confirmation: value.confirmation,
            },
        };
        clicked = true;
        authDispatch(authActions.resetPassword(data));
        if (app.error) {
            clicked = false;
        }
    };

    return (
        <div className="sign">
            <Formik
                initialValues={{ newPassword: '', confirmation: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    handleSubmit(values);
                    app.error ? () => {} : resetForm();
                    setSubmitting(false);
                }}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
                    return (
                        <div className="resetPassword-form">
                            <form onSubmit={handleSubmit}>
                                <div style={{ marginTop: '40px' }}>
                                    <div className="form group">
                                        <TextField
                                            InputProps={{
                                                startAdornment: (
                                                    <div className={classes.iconWrapper}>
                                                        <Icon
                                                            name={resetPassword.newPassword.icon}
                                                            color={errors.newPassword && touched.newPassword ? '#F07379' : Colors.ThemeGreen}
                                                        />
                                                    </div>
                                                ),
                                            }}
                                            InputLabelProps={{
                                                shrink: false,
                                            }}
                                            variant="outlined"
                                            id="newPassword"
                                            type="password"
                                            name="newPassword"
                                            placeholder={resetPassword.newPassword.placeholder}
                                            value={values.newPassword}
                                            className={
                                                touched.newPassword && errors.newPassword
                                                    ? inputStyle.fieldStylesError
                                                    : inputStyle.fieldStyles
                                            }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <Error touched={touched.newPassword} message={errors.newPassword} />
                                    </div>

                                    <div className="form group" style={{ marginTop: '16px' }}>
                                        <TextField
                                            InputProps={{
                                                startAdornment: (
                                                    <div className={classes.iconWrapper}>
                                                        <Icon
                                                            name={resetPassword.confirmation.icon}
                                                            color={
                                                                errors.confirmation && touched.confirmation ? '#F07379' : Colors.ThemeGreen
                                                            }
                                                        />
                                                    </div>
                                                ),
                                            }}
                                            InputLabelProps={{
                                                shrink: false,
                                            }}
                                            variant="outlined"
                                            id="confirmation"
                                            type="password"
                                            name="confirmation"
                                            placeholder={resetPassword.confirmation.placeholder}
                                            value={values.confirmation}
                                            className={
                                                touched.confirmation && errors.confirmation
                                                    ? inputStyle.fieldStylesError
                                                    : inputStyle.fieldStyles
                                            }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />

                                        <Error touched={touched.confirmation} message={errors.confirmation} />
                                    </div>
                                    {app.error ? <p style={{ color: '#F07379' }}>{app.error}</p> : null}
                                    <div className="form group" style={{ marginTop: '10px' }}>
                                        <Button
                                            style={{ borderRadius: '24px', padding: 0, fontSize: '16px', background: Colors.ThemeGreen }}
                                            type="submit"
                                            className={globalClasses.button}>
                                            {app.isLoading ? (
                                                <Loader
                                                    type="ThreeDots"
                                                    color="#FFFFFF"
                                                    height={16}
                                                    width={16}
                                                    style={{ margin: '0', padding: '0' }}
                                                />
                                            ) : (
                                                'Reset'
                                            )}
                                        </Button>
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

export default ResetPassForm;
