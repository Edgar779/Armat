import React, { useState } from 'react';
import { inputsStyle } from './styles';
import TextField from '@material-ui/core/TextField';
import {EmailValidator} from "../../constants";

export const SignInInput = ({
    className,
    id,
    autoComplete,
    typeError,
    Length,
    disabled,
    value,
    type,
    onChange,
    name,
    label,
    validator,
    sendBoolean,
}) => {
    const classes = inputsStyle();
    const [validEmail, setValidEmail] = useState(false);

    const chechValid = (e) => {
        let Value = e.target.value;
        if (Value.length >= 1) {
            if (validator) {
                if (validator.test(Value)) {
                    setValidEmail(false);
                    sendBoolean(false);
                } else {
                    setValidEmail(true);
                    sendBoolean(true);
                }
            }
        }
    };

    return (
        <>
            {!className ? (
                <div className={classes.SignInInput}>
                    <TextField
                        label={label}
                        name={name}
                        type={type}
                        id={id}
                        autoComplete={autoComplete}
                        error={validEmail ? validEmail : typeError}
                        disabled={disabled}
                        maxLength={Length}
                        onChange={onChange}
                        onFocus={() => setValidEmail(false)}
                        onBlur={(e) => chechValid(e)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                    />
                </div>
            ) : className === 'Email' ? (
                <div>
                    <input
                        className={classes.userEmailInput}
                        placeholder={label}
                        value={value}
                        name={name}
                        type={type}
                        id={id}
                        autoComplete={autoComplete}
                        disabled={disabled}
                        maxLength={Length}
                        onChange={onChange}
                        onFocus={() => setValidEmail(false)}
                        onBlur={(e) => chechValid(e)}
                        required
                    />
                </div>
            ) : (
                <div className={validEmail || typeError === true ? classes.errorEmailInput : classes.emailInput}>
                    <input
                        placeholder={label}
                        name={name}
                        type={type}
                        id={id}
                        autoComplete={autoComplete}
                        disabled={disabled}
                        maxLength={Length}
                        onChange={onChange}
                        onFocus={() => setValidEmail(false)}
                        onBlur={(e) => chechValid(e)}
                        required
                    />
                </div>
            )}
        </>
    );
};
