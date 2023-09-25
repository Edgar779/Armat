import React from 'react';
import { inputsStyle } from './styles';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';

export const MultipleSelect = ({ handleChange, option, label, name, value,disabled, disablePortal }) => {
    const classes = inputsStyle();
    return (
        <div style={{ width: '100%' }} className={classes.selectInputStyle}>
            <Autocomplete
                disablePortal={disablePortal}
                disabled={disabled}
                className={classes.multipleSelect}
                onChange={handleChange}
                multiple
                id="tags-outlined"
                defaultValue={value ? value : ''}
                options={option}
                name={name}
                getOptionLabel={(option) => option}
                filterSelectedOptions
                renderInput={(params) => <TextField  {...params} variant="outlined" label={label} placeholder={name} />}
            />
        </div>
    );
};
