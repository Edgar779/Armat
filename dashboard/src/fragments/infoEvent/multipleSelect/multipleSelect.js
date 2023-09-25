import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const categoris = [
    { title: "Child's Child Category", key: 0 },
    { title: "Child's Child Category", key: 1 },
];

export const MultipleSelect = ({ error }) => {
    /**
     * Hooks.
     */

    return (
        <div style={{ width: '100%' }} className="autocomplete-input">
            <Autocomplete
                loadingText=""
                multiple
                limitTags={1}
                id="multiple-limit-tags"
                options={categoris}
                getOptionLabel={(option) => option?.title}
                defaultValue={[]}
                renderInput={(params) => <TextField {...params} label="limitTags" placeholder="Favorites" />}
            />
        </div>
    );
};
