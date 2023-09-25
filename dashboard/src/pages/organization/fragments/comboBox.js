import { useState } from 'react';
import * as React from 'react';
import { Autocomplete } from '@mui/material';
import { TextField } from '@material-ui/core';

export const SelectTypeAutocomplete = ({ list, title, name, style, disabled, handleGetTree }) => {
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const defaultProps = {
        options: list.map((i) => {
            return { label: i?.text, id: i.id };
        }),
        getOptionLabel: (option) => option?.label,
    };

    const handleClick = (e, info) => {
        handleGetTree(info);
        setInputValue('');
    };

    return (
        <div className={style ? style : ''}>
            <Autocomplete
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                value={value}
                inputValue={inputValue}
                disabled={disabled}
                {...defaultProps}
                style={{ width: '100%', marginRight: '56px' }}
                onChange={(e, info) => {
                    handleClick(e, info);
                }}
                id="disable-close-on-select"
                name={name}
                renderInput={(params) => <TextField {...params} label={title} variant="outlined" />}
            />
        </div>
    );
};
