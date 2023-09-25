import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from './error';
import { authActions, httpRequestsOnErrorsActions } from 'store';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import { BlueButton, Icon } from 'components';
import { signUpStyles } from 'fragments';
import { Colors } from 'utils';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email address').max(30, 'Must be shorter than 30').required('required'),
});

export const ForgotPassForm = ({ open, classes, forgotPassword, success, load, err }) => {
    const inputStyle = signUpStyles();
    const authDispatch = useDispatch();

    const { app } = useSelector(
        (state) => ({
            app: state.global,
        }),
        shallowEqual
    );
    const backError = err.length && err.find((type) => type.error === 'not exist');
    const loading = load.filter((type) => type === 'FORGOT_PASSWORD');
    const done = success.length && success.filter((type) => type.type === 'FORGOT_PASSWORD');

    useEffect(() => {
        if (done) {
            open.checkEmail();
        }
    }, [done]);

    const handleSubmit = async (value) => {
        try {
            const values = {
                email: value.email,
            };
            authDispatch(authActions.forgotPassword(values));
        } catch (error) {}
    };

    const removeBackError = () => {
        if (backError) {
            authDispatch(httpRequestsOnErrorsActions.removeError('FORGOT_PASSWORD'));
        }
    };
    return (
        <div className="sign">
            <Formik
                initialValues={{ email: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    handleSubmit(values);
                    setSubmitting(false);
                }}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
                    return (
                        <div className="forgotPassword-form">
                            <form onSubmit={handleSubmit}>
                                <div style={{ marginTop: '40px' }}>
                                    <div className="form group">
                                        <TextField
                                            onKeyDown={removeBackError}
                                            InputProps={{
                                                startAdornment: (
                                                    <div className={classes.iconWrapper}>
                                                        <Icon
                                                            name={forgotPassword.email.icon}
                                                            color={
                                                                (errors.email && touched.email) || backError ? '#F07379' : Colors.ThemeGreen
                                                            }
                                                        />
                                                    </div>
                                                ),
                                            }}
                                            InputLabelProps={{
                                                shrink: false,
                                            }}
                                            error={!!backError}
                                            variant="outlined"
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder={forgotPassword.email.placeholder}
                                            value={values.email}
                                            className={touched.email && errors.email ? inputStyle.fieldStylesError : inputStyle.fieldStyles}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <Error
                                            touched={backError ? "Email Don't exist" : touched.email}
                                            message={backError ? "Email Don't exist" : errors.email}
                                        />
                                    </div>

                                    <div className="form group" style={{ marginTop: '10px' }}>
                                        {app.error ? <p style={{ color: '#F07379' }}>{app.error}</p> : null}

                                        <BlueButton loading={loading.length} text="Send" type="submit" />
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
