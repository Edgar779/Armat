import React from 'react';
import { inputsStyle } from './styles';

export const Input = ({ handleChange, placeholder, value, type, disabled, max }) => {
    const classes = inputsStyle();
    return (
        <input
            maxLength={max}
            disabled={disabled}
            value={value}
            onChange={handleChange}
            className={classes.InputStyle}
            placeholder={placeholder ? placeholder :''}
            style={type === 'Big' ? { height: '58px', borderRadius: '28px' } : {}}
        />
    );
};
