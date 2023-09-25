import React, { useState } from 'react';
import { inputsStyle } from './styles';
import TextField from '@material-ui/core/TextField';

export const SignInInput = ({
    className,
    id,
    autoComplete,
    onBlur,
    onFocus,
    typeError,
    Length,
    pattern,
    disabled,
    value,
    type,
    onChange,
    name,
    label,
    style = {},
    inputProps,
    validator,
    sendBoolean,
                                margin,
    ...props
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
                <div style={margin === 'none' ? {margin:0} : {}} className={validEmail || typeError === true ? classes.errorEmailInput : classes.emailInput}>
                    <input
                        placeholder={label}
                        name={name}
                        type={type}
                        value={value}
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
}
