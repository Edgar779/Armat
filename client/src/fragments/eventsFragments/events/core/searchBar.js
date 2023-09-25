import { useState } from 'react';
import { Box, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { searchBarStyles } from './styles';
import { useDispatch } from 'react-redux';
import { EventsActions } from 'store';
import FormControl from '@material-ui/core/FormControl';

export const SearchBar = ({ view }) => {
    const classes = searchBarStyles();
    const dispatch = useDispatch();
    const [age, setAge] = useState('0');

    const handleChange = (event) => {
        setAge(event.target.value);
        if (event.target.value === 'AZ') {
            dispatch(EventsActions.ByAlphabeticalOrganizers());
        }
    };

    return (
        <Box className={classes.searchCont} style={{ marginBottom: view === 'Calendar' ? '0px' : '30px' }}>
            <TextField
                id="filled-search"
                label="SearchPage field"
                type="search"
                variant="filled"
                className={classes.searchBarCont}
                style={{ marginTop: view === 'Calendar' ? '-90px' : '0', marginLeft: view === 'Calendar' ? '400px' : '0' }}
            />
            {view === 'Listing/Grid' ? (
                <Box className={classes.searchContButtonsAndSelect}>
                    <Box className={classes.selectCont}>
                        <Box className={classes.selectField}>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Sort By</InputLabel>
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    disableUnderline
                                    label={'Sort By'}
                                    placeholder={'Sort By'}
                                    inputProps={{
                                        name: 'age',
                                        id: 'age-simple',
                                    }}>
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>AZ</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </Box>
            ) : null}
        </Box>
    );
};

export default SearchBar;
