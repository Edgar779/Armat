import React, { useEffect, useState } from 'react';
import { MenuItem, FormControl, Select } from '@mui/material';

export const DropdownSelect = ({ value, options, handleChange, disabled }) => {
    /**
     * Dropdown Select.
     */

    const [selected, setSelected] = useState('');

    useEffect(() => {
        if (value) {
            setSelected(value);
        }
    }, [value]);

    return (
        <div className="input-wrapper select-wrapper">
            <FormControl>
                <Select
                    sx={{ height: 36 }}
                    value={selected}
                    onChange={handleChange}
                    displayEmpty
                    disabled={disabled}
                    inputProps={{ 'aria-label': 'Without label' }}
                    className="from-control select-dropdown">
                    {options?.map((item, index) => (
                        <MenuItem value={item?.value} key={index}>
                            <span className="dropdown-icon">
                                <img src={item.svg} alt="icon" />
                            </span>
                            <span className="dropdown-text">{item.label}</span>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};
