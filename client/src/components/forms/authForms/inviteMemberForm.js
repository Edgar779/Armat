import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from './error';
import { authActions, httpRequestsOnErrorsActions } from 'store';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { useGlobalStyles } from 'theme';
import Loader from 'react-loader-spinner';
import { Icon } from 'components';
import { signUpStyles } from 'fragments';
import { Colors, FindErrorItem, FindLoad, FindSuccess } from 'utils';
import { httpRequestsOnSuccessActions } from 'store';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email adress').max(30, 'Must be shorter than 30').required('required'),
});

export const InviteMemberForm = ({ open, classes, inviteMember }) => {
    const info = JSON.parse(localStorage.getItem('userInfo'));
    const inputStyle = signUpStyles();
    const authDispatch = useDispatch();
    const globalClasses = useGlobalStyles();
    const loader = FindLoad('INVITE_MEMBER');
    const backError = FindErrorItem('INVITE_MEMBER');
    const success = FindSuccess('INVITE_MEMBER');
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.removeItem('inviteEmail');
    }, []);

    const handleSubmit = async (value) => {
        localStorage.setItem('inviteEmail', value.email);
        const type =
            info.auth.role === 'ORGANIZER'
                ? 'VERIFIED_MEMBER'
                : info.auth.role === 'VERIFIED_MEMBER'
                ? 'VERIFIED_MEMBER'
                : info.auth.role === 'ADMIN'
                ? 'VERIFIED_MEMBER'
                : '';
        const values = {
            email: value.email,
            role: type,
        };
        authDispatch(authActions.inviteMember(values));
    };

    useEffect(() => {
        if (backError?.type === 'INVITE_MEMBER') {
            open.inviteMemberError();
            dispatch(httpRequestsOnErrorsActions.removeError('INVITE_MEMBER'));
        }
    }, [backError]);

    useEffect(() => {
        if (success.length) {
            open.inviteMemberSuccess();
            dispatch(httpRequestsOnSuccessActions.removeSuccess('INVITE_MEMBER'));
        }
    }, [success]);

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
                        <div className="inviteMember-form">
                            <form onSubmit={handleSubmit}>
                                <div style={{ marginTop: '40px' }}>
                                    <div className="form group">
                                        <TextField
                                            InputProps={{
                                                startAdornment: (
                                                    <div className={classes.iconWrapper}>
                                                        <Icon
                                                            name={inviteMember.email.icon}
                                                            color={
                                                                errors.email && touched.email
                                                                    ? '#F07379'
                                                                    : backError?.length
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
                                            type="email"
                                            name="email"
                                            placeholder={inviteMember.email.placeholder}
                                            value={values.email}
                                            className={
                                                touched.email && errors.email
                                                    ? inputStyle.fieldStylesError
                                                    : backError?.length
                                                    ? inputStyle.fieldStylesError
                                                    : inputStyle.fieldStyles
                                            }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <Error touched={touched.email} message={errors.email} />
                                    </div>

                                    <div className="form group" style={{ marginTop: '10px' }}>
                                        <Button
                                            style={{ borderRadius: '24px', background: Colors.ThemeGreen, padding: 0, fontSize: '16px' }}
                                            type="submit"
                                            className={globalClasses.button}>
                                            {loader.length ? (
                                                <Loader
                                                    type="ThreeDots"
                                                    color="#FFFFFF"
                                                    height={16}
                                                    width={16}
                                                    style={{ margin: '0', padding: '0' }}
                                                />
                                            ) : (
                                                'Send Invite'
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
