import React from 'react';
import { inputsStyle } from './styles';
import { FormControl, Input, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

export const PasswordInput = ({ name, handleChangePassword, disabled, value, placeholder }) => {
    const classes = inputsStyle();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChanges = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        handleChangePassword(event);
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl disabled={disabled} className={classes.passwordInput}>
            <Input
                disabled={disabled}
                id="standard-adornment-password"
                name={name}
                type={values.showPassword ? 'text' : 'password'}
                value={value}
                onChange={handleChanges('password')}
                placeholder={placeholder}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            disabled={disabled}
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}>
                            {disabled === true ? <VisibilityOff /> : values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
};
