import React from 'react';
import { PageTitle } from 'components';
import { categoryFilterStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete } from '@material-ui/lab';
import { EventsActions } from 'store';
import { FormControl, RadioGroup, Radio, FormControlLabel, Box, TextField } from '@material-ui/core';

export const CategoryFilter = ({ view, pageType }) => {
    const classes = categoryFilterStyles();
    const [value, setValue] = React.useState('All');

    const dispatch = useDispatch();
    const { categories } = useSelector((state) => ({
        categories: state.manage.categories,
    }));

    const handleSearchCategory = (event, values) => {
        setValue('All');

        const viewType = view === 'Calendar' ? 'Calendar' : view === 'Map' ? 'Calendar' : '';
        if (values.length) {
            dispatch(EventsActions.searchByCategories(values, viewType));
        } else {
            dispatch(EventsActions.ByAlphabeticalOrganizersDefault());
        }
    };

    const handleChange = (event) => {
        setValue(event.target.value);

        const viewType = view ? (view === 'Calendar' ? 'Calendar' : view === 'Map' ? 'Calendar' : 'List') : 'List';
        const locationType = event.target.value === 'Virtual' ? 'VIRTUAL' : event.target.value === 'Physical' ? 'PHYSICAL' : 'ALL';

        if (locationType === 'ALL') {
            dispatch(EventsActions.getEvents(pageType, 'noLoad'));
        } else {
            dispatch(EventsActions.ByLocationTypeEvents(locationType, viewType));
        }
    };

    return (
        <Box>
            <Box className={classes.categCont}>
                <Box className={classes.headerCont}>
                    <PageTitle title="Categories" style={classes.header} />
                </Box>
                <Box>
                    <Autocomplete
                        className={classes.multipleSelectCategories}
                        onChange={handleSearchCategory}
                        multiple
                        id="tags-outlined"
                        options={categories}
                        name={'Category'}
                        getOptionLabel={(option) => option}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" label={'Select Categories'} placeholder="Categories" />
                        )}
                    />
                </Box>
            </Box>

            <Box className={classes.typeCont}>
                <Box className={classes.headerContRadio}>
                    <PageTitle title="Type" style={classes.headerRadio} />
                </Box>
                <Box className={classes.radioCont}>
                    <FormControl component="fieldset">
                        {/*{view === 'Map' ? (*/}
                        {/*    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>*/}
                        {/*        <FormControlLabel*/}
                        {/*            checked={view === 'Map' && false}*/}
                        {/*            disabled={view === 'Map'}*/}
                        {/*            value={'All'}*/}
                        {/*            control={<Radio />}*/}
                        {/*            label="All"*/}
                        {/*        />*/}
                        {/*        <FormControlLabel*/}
                        {/*            checked={view === 'Map' && true}*/}
                        {/*            // disabled={view === 'Map'}*/}
                        {/*            value="Virtual"*/}
                        {/*            control={<Radio />}*/}
                        {/*            label="Online"*/}
                        {/*        />*/}

                        {/*        <FormControlLabel*/}
                        {/*            checked={view === 'Map' && false}*/}
                        {/*            disabled={view === 'Map'}*/}
                        {/*            value={'Physical'}*/}
                        {/*            control={<Radio />}*/}
                        {/*            label="Physical"*/}
                        {/*        />*/}
                        {/*    </RadioGroup>*/}
                        {/*) : (*/}
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={(ev) => handleChange(ev)}>
                            <FormControlLabel checked={value === 'All'} value={'All'} control={<Radio />} label="All" />
                            <FormControlLabel value="Virtual" control={<Radio />} label="Virtual" />
                            <FormControlLabel value="Physical" control={<Radio />} label="Physical" />
                        </RadioGroup>
                        {/*)}*/}
                    </FormControl>
                </Box>
            </Box>
        </Box>
    );
};

export default CategoryFilter;
