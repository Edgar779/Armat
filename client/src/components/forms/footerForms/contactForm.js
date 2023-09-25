import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from './error';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import { MailerActions } from 'store';
import { OrangeButton } from 'components';
import { Colors } from 'utils';
const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Must be a valid full name').max(30, 'Must be shorter than 30').required('required'),
    message: Yup.string().max(155, 'Must be shorter than 155 letters').required('required'),
    email: Yup.string().email('Must be a valid email adress').max(30, 'Must be shorter than 30').required('required'),
});

export const ContactForm = ({ classes, contactUs }) => {
    const { app } = useSelector(
        (state) => ({
            app: state.global,
        }),
        shallowEqual
    );

    const button = {
        background: Colors.ThemeGreen,
        borderRadius: '24px',
        whiteSpace: 'nowrap',
        marginTop: '16px',
        minWidth: '170px',
    };

    const dispatch = useDispatch();
    const handleSubmit = async (value) => {
        try {
            const values = {
                name: value.name,
                email: value.email,
                message: value.message,
            };
            dispatch(MailerActions.postMail(values));
        } catch (error) {}
    };

    return (
        <div className="contactUs" style={{ marginTop: '30px' }}>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    handleSubmit(values);
                    resetForm();

                    setSubmitting(false);
                }}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
                    return (
                        <div className="contactUs-form">
                            <form onSubmit={handleSubmit}>
                                <div className={classes.nameInputWrap}>
                                    <div className={classes.nameInput}>
                                        <TextField
                                            InputLabelProps={{
                                                shrink: false,
                                            }}
                                            variant="outlined"
                                            id="name"
                                            type="name"
                                            name="name"
                                            placeholder={contactUs.contactName.placeholder}
                                            value={values.name}
                                            className={touched.name && errors.name ? classes.fieldStylesError : classes.fieldStyles}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <Error touched={touched.name} message={errors.name} />
                                    </div>
                                    <div className={classes.emailInput}>
                                        <TextField
                                            InputLabelProps={{
                                                shrink: false,
                                            }}
                                            variant="outlined"
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder={contactUs.email.placeholder}
                                            value={values.email}
                                            className={touched.email && errors.email ? classes.fieldStylesError : classes.fieldStyles}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <Error touched={touched.email} message={errors.email} />
                                    </div>
                                </div>
                                <div className={classes.messageInput}>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder={contactUs.message.placeholder}
                                        value={values.message}
                                        className={
                                            touched.message && errors.message ? classes.messageFieldStyleError : classes.messageFieldStyle
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />

                                    <Error touched={touched.message} message={errors.message} />
                                </div>

                                <div className="form group" style={{ marginTop: '10px' }}>
                                    <div className={classes.sendMessageStyle}>
                                        <OrangeButton button={button} buttonText="Send Message" type="submit" loader={app.isLoading} />
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
