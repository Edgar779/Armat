import React, { useState } from 'react';
import { inputsStyle } from './style';
import TextField from '@material-ui/core/TextField';
import { CircularProgress } from '@material-ui/core';

export const ValidationInput = ({
    errorFalse,
    errorMessageStyle,
    multiline,
    style,
    className,
    autoComplete,
    placeholder,
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
    variant,
    loader,
    styles,
    handleBlur,
    size,
    ampm,
}) => {
    const classes = inputsStyle();
    const [validEmail, setValidEmail] = useState(false);

    const chechValid = (e) => {
        handleBlur && handleBlur();
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

    let maxLength = (e) => {
        if (Length) {
            return (e.target.value = e.target.value.slice(0, Length));
        }
    };

    return (
        <>
            <div className={style ? style : classes.SignInValidInput}>
                <TextField
                    onInput={(e) => maxLength(e)}
                    style={{ ...styles }}
                    className={className ? className : size === 'small' ? classes.inputTextFieldSmall : classes.inputValidTextField}
                    variant={variant}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    InputLabelProps={{
                        shrink: type === 'date' ? true : !!value,
                    }}
                    id="standard-basic"
                    autoComplete={autoComplete}
                    error={typeError}
                    onWheel={() => document.activeElement.blur()}
                    disabled={disabled}
                    maxLength={Length}
                    onChange={(ev) => onChange(ev)}
                    onFocus={() => setValidEmail(false)}
                    onBlur={(e) => chechValid(e)}
                    fullWidth
                    multiline={multiline}
                    InputProps={{
                        endAdornment: loader && (
                            <CircularProgress
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    position: 'relative',
                                    left: 0,
                                    right: 0,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    color: 'white',
                                }}
                            />
                        ),
                        // :
                        // (
                        //     (type = 'time' && <AccessTime style={{ color: Colors.ThemeGreen }} />)
                        // ),
                    }}
                />
            </div>
        </>
    );
};
