import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from './error';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import { MailerActions } from 'store';
import { OrangeButton } from 'components';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email adress').max(30, 'Must be shorter than 30').required('required'),
});

export const SubscribeForm = ({ classes, subscribeData }) => {
    const { app } = useSelector(
        (state) => ({
            app: state.global,
        }),
        shallowEqual
    );

    const button = {
        background:
            'transparent linear-gradient(270deg, #FFA330 0%, #FF9346 27%, #FF8559 54%, #FB7A6A 77%, #F07379 100%) 0% 0% no-repeat padding-box',
        borderRadius: '24px',
        whiteSpace: 'nowrap',
        minWidth: '140px',
    };

    const dispatch = useDispatch();

    const handleSubmit = (value) => {
        const values = {
            email: value.email,
            subscriber: value.email,
        };
        dispatch(MailerActions.subscribeNews(values));
    };

    const width = typeof window !== 'undefined' && window.innerWidth;

    return (
        <div className="subscribeData" style={{}}>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    handleSubmit(values);
                    app.error === false ? resetForm() : () => {};

                    setSubmitting(false);
                    resetForm();
                }}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
                    return (
                        <div className="subscribeData-form" style={{ height: '48px' }}>
                            <form onSubmit={handleSubmit} className={classes.formik}>
                                <div className={classes.fieldsGroup}>
                                    <div className={classes.emailInput}>
                                        <TextField
                                            InputLabelProps={{
                                                shrink: false,
                                            }}
                                            variant="outlined"
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder={subscribeData.email.placeholder}
                                            value={values.email}
                                            className={touched.email && errors.email ? classes.fieldStylesError : classes.fieldStyles}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <Error touched={touched.email} message={errors.email} />
                                    </div>
                                    <div className="form group">
                                        <div className={classes.sendSubscribeButtonStyle}>
                                            <OrangeButton
                                                width={width > 767 ? '160px' : '120px'}
                                                button={button}
                                                buttonText="Subscribe"
                                                type="submit"
                                                loader={app.isLoading}
                                            />
                                        </div>
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
