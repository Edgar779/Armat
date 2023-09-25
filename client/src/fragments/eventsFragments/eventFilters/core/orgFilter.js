import React from 'react';
import { Box, Typography, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import { PageTitle } from 'components';
import { orgFilterStyles } from './styles';
import { EventsActions } from 'store';
import { useDispatch } from 'react-redux';

export const OrgFilter = ({ creators, handleFilterEvents }) => {
    const classes = orgFilterStyles();
    const dispatch = useDispatch();
    const [creatorsName, setCreatorsName] = React.useState('');
    const [creatorsList, setCreatorsList] = React.useState(creators);
    const [allList, setAllList] = React.useState(false);
    const [state, setState] = React.useState('All');

    const handleChange = (event) => {
        setState(event);
        handleFilterEvents(event);

        if (event === 'All') {
            dispatch(EventsActions.searchEvents(''));
        } else {
            dispatch(EventsActions.searchEvents(event, 'mySubscriptions'));
        }
    };

    const creator = creators;
    let filterCreatorFunction = (names) => names.filter((v, i) => names.indexOf(v) === i);

    if (creator) {
        let creators = filterCreatorFunction(creator);
        if (creators) {
            if (!creatorsName) {
                setCreatorsName(creators);
            }
        }
    }

    const creatorsNameList = allList === true ? creatorsName : creatorsName.slice(0, 2);

    return (
        <Box className={classes.orgCont}>
            <Box className={classes.headerCont}>
                <PageTitle title="Event Organizer" style={classes.header} />
            </Box>
            <Box>
                <Box className={classes.checkCont}>
                    <FormGroup column="true">
                        <FormControlLabel
                            control={
                                <Checkbox name="checkedB" color="primary" checked={state === 'All'} onChange={() => handleChange('All')} />
                            }
                            label="All"
                        />
                        {creatorsNameList &&
                            creatorsNameList.map((i, j) => (
                                <Box key={j}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state === i}
                                                onChange={() => handleChange(i)}
                                                name="checkedA"
                                                color="primary"
                                            />
                                        }
                                        label={i}
                                    />
                                </Box>
                            ))}
                    </FormGroup>
                </Box>
                {creatorsName.length > 2 && (
                    <Typography onClick={() => setAllList(!allList)} className={classes.seeMore}>
                        {allList === true ? 'Close' : 'See More'}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default OrgFilter;
