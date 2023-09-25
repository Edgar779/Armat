import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Checkbox from '@mui/material/Checkbox';
import { TextField, Autocomplete, Box, RadioGroup, FormControl, FormControlLabel, Radio, Select, MenuItem } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const userList = [
    { title: 'User' },
    { title: 'User' },
    { title: 'User' },
    { title: 'User' },
    { title: 'User' },
    { title: 'User' },
    { title: 'User' },
    { title: 'User' },
    { title: 'User' },
    { title: 'User' },
    { title: 'User' },
    { title: 'User' },
];

const REQUEST_TYPE = 'ADD_SELECTED_MEMBERS';

export const SelectedMembers = () => {
    /**
     *  Hooks.
     */

    const [radioValue, setRadioValue] = useState('exciting');
    const [category, setCategory] = useState('');

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            memebrs: '',
        },
    });

    const handelChangeRadio = (event) => {
        setRadioValue(event.target.value);
    };

    const onSubmit = (data) => {
        const formData = {
            ...data,
        };
    };

    const handleAddList = () => {
        console.warn(' Add List ');
    };

    const handleChangeSelect = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className="organization-modal">
            <div className="organization-banner">
                <p className="typography">Add the selected 10 members to an existing list or create a new one</p>
            </div>
            <div className="invite-container">
                <form onSubmit={handleSubmit(onSubmit)} className="form-messages">
                    <p className="radio-title"> How do you want to add selected members?</p>
                    <div className="radio-box">
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="radio-buttons-group"
                                name="radio-buttons"
                                onChange={handelChangeRadio}
                                value={radioValue}>
                                <FormControlLabel value="exciting" control={<Radio />} label="Exciting List" className="radio-label" />
                                <Box sx={{ marginX: 5 }} />
                                <FormControlLabel value="list" control={<Radio />} label="New list" className="radio-label" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <label className="label">Select a List to Add Members to</label>
                    <FormControl fullWidth className="select-members">
                        <Select labelId="select-label" id="select-label" value={category} label="category" onChange={handleChangeSelect}>
                            <MenuItem value={'List 1'}>
                                <FormControlLabel value="List 1" control={<Radio checked={category === 'List 1'} />} label="List 1" />
                            </MenuItem>
                            <MenuItem value={'List 2'}>
                                <FormControlLabel value="List 2" control={<Radio checked={category === 'List 2'} />} label="List 2" />
                            </MenuItem>
                            <MenuItem value={'List 3'}>
                                <FormControlLabel value="List 3" control={<Radio checked={category === 'List 3'} />} label="List 3" />
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <div className="modal-footer">
                        <div className="foooter-box">
                            <button type="button" className="add-btn" onClick={handleAddList}>
                                Add Members
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
