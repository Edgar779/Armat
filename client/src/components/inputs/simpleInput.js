import { TextField } from '@material-ui/core';
import Icon from '../icon';
import Error from '../forms/authForms/error';
import React from 'react';
import { forgotPasswordStyles } from '../../fragments/inviteMemberModal/core';

export const SimpleInput = ({ err, place, values, type, name, handleChange, handleBlur, touched }) => {
    const classes = forgotPasswordStyles();
    return (
        <div className="form group">
            {/*<TextField*/}
            {/*    InputLabelProps={{*/}
            {/*        shrink: false,*/}
            {/*    }}*/}
            {/*    variant="outlined"*/}
            {/*    id="email"*/}
            {/*    type={type}*/}
            {/*    error={!!err}*/}
            {/*    name={name}*/}
            {/*    placeholder={place}*/}
            {/*    value={values.email ? values.email : localInfo ? localInfo.email : ''}*/}
            {/*    className={touched.email && errors.email ? inputStyle.fieldStylesError : inputStyle.fieldStyles}*/}
            {/*    onChange={handleChange}*/}
            {/*    onBlur={handleBlur}*/}
            {/*    InputProps={{*/}
            {/*        startAdornment: (*/}
            {/*            <div className={classes.iconWrapper}>*/}
            {/*                <Icon*/}
            {/*                    name={signIn.email.icon}*/}
            {/*                    color={errors.email && touched.email ? '#F07379' : loginBackError ? '#F07379' : '#387DFF'}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Error touched={loginBackError ? 'Not exist user' : touched.email} message={loginBackError ? 'Not exist user' : errors.email} />*/}
        </div>
    );
};
