import React from 'react';
import { inputsStyle } from './styles';
import { FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';

export const SelectInput = ({
    title,
    selectData,
    handleChangeSelectValue,
    style = {},
    EventType,
    className,
    disabled,
    type,
    Ev,
    disablePortal,
    error,
    placeholder,
    name,
}) => {
    const classes = inputsStyle();

    const handleChange = (ev) => {
        handleChangeSelectValue(ev.target.value);
    };

    return (
        <div style={{ ...style, width: '100%' }} className={className === 'Mini' ? classes.miniSelectInputStyle : classes.selectInputStyle}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">{title}</InputLabel>
                {placeholder && <p className={classes.placeholder}>{placeholder}</p>}
                <Select
                    name={name}
                    style={error ? { borderColor: '#F07379' } : {}}
                    error={error}
                    MenuProps={{
                        disablePortal: disablePortal,
                    }}
                    disabled={disabled}
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={EventType}
                    onChange={handleChange}
                    label="Age">
                    {selectData.length &&
                        selectData.map((i, item) => (
                            <MenuItem key={item} value={type === 'timezone' ? i.value : i}>
                                {type === 'timezone' ? i.text : i}
                            </MenuItem>
                        ))}

                    {type === 'timezone' && Ev && <MenuItem value={EventType}>{EventType}</MenuItem>}
                    {type === 'location' && Ev && <MenuItem value={EventType}>{EventType}</MenuItem>}
                </Select>
            </FormControl>
        </div>
    );
};
