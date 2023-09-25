import React from 'react';
import { inputsStyle } from './styles';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';

export const MultipleSelect = ({ handleChange, option, label, name, value, disablePortal, error, title }) => {
    const classes = inputsStyle();
    return (
        <div style={{ width: '100%' }} className={error ? classes.selectInputStyleError : classes.selectInputStyle}>
            <Autocomplete
                disablePortal={disablePortal}
                onChange={handleChange}
                multiple
                id="tags-outlined"
                defaultValue={value ? value : ''}
                options={option}
                name={name}
                getOptionLabel={(option) => (title ? option.name : option)}
                filterSelectedOptions
                renderInput={(params) => <TextField {...params} variant="outlined" label={label} placeholder={name} />}
            />
        </div>
    );
};
