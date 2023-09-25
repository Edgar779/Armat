import React from 'react';
import { inputsStyle } from './styles';

export const Input = ({ handleChange, placeholder, value, type, disabled, max, error, handleDown }) => {
    const classes = inputsStyle();
    return (
        <input
            onKeyDown={handleDown}
            maxLength={max}
            disabled={disabled}
            value={value}
            onChange={handleChange}
            className={error === true ? classes.InputStyleError : classes.InputStyle}
            placeholder={placeholder}
            style={type === 'Big' ? { height: '58px', borderRadius: '28px' } : {}}
        />
    );
};
