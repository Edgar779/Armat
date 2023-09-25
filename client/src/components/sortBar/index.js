import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Box, Select, MenuItem, InputLabel, FormControl, Radio } from '@material-ui/core';
import { sortBarStyles } from './styles';
import { authActions, EventsActions } from 'store';
import { Icon } from '../icon';
import { SVGNames } from 'constants/index';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import { Colors } from '../../utils';

export const SortBar = ({ type, top, info }) => {
    const classes = sortBarStyles();
    const dispatch = useDispatch();
    const router = useRouter();
    const [searchType, setSearchType] = useState('');

    const handleChange = (event) => {
        if (type === 'searched') {
            setSearchType(event.target.value);
            const searchBody = {
                type: event.target.value,
            };
            router.query.lat ? (searchBody.lat = router.query.lat) : '';
            router.query.lng ? (searchBody.lng = router.query.lng) : '';
            router.query.search ? (searchBody.searchField = router.query.search) : '';
            dispatch(authActions.search(searchBody, 'noLoad'));
        } else {
            if (event.target.value === 'All') {
                dispatch(EventsActions.getEvents(type, 'noLoad'));
            } else {
                dispatch(EventsActions.getEvents(type, 'noLoad', event.target.value));
            }
        }
    };

    const upcoming = info && info.filter((i) => i.type === 'EVENT');
    const non = info && info.filter((i) => i.type === 'NON_PROFIT');
    const business = info && info.filter((i) => i.type === 'BUSINESS');

    return (
        <Box style={top === 'noTop' ? { marginTop: 0 } : { marginLeft: 0 }} className={classes.sortBarWrapper}>
            <Box className={classes.selectCont}>
                <Box className={classes.selectField}>
                    {type === 'searched' ? (
                        <FormControl variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">Filter</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                onChange={handleChange}
                                label="Age">
                                <MenuItem className={classes.sortByStyle} value={null}>
                                    <Radio style={{ color: Colors.ThemeGreen }} checked={searchType === null} className={classes.radio} />
                                    All ({info.length})
                                </MenuItem>
                                <MenuItem className={classes.sortByStyle} value={'EVENT'}>
                                    <Radio
                                        style={{ color: Colors.ThemeGreen }}
                                        checked={searchType === 'EVENT'}
                                        className={classes.radio}
                                    />
                                    Event ({upcoming.length})
                                </MenuItem>
                                <MenuItem className={classes.sortByStyle} value={'NON_PROFIT'}>
                                    <Radio
                                        style={{ color: Colors.ThemeGreen }}
                                        checked={searchType === 'NON_PROFIT'}
                                        className={classes.radio}
                                    />
                                    Nonprofit ({non.length})
                                </MenuItem>
                                <MenuItem className={classes.sortByStyle} value={'BUSINESS'}>
                                    <Radio
                                        style={{ color: Colors.ThemeGreen }}
                                        checked={searchType === 'BUSINESS'}
                                        className={classes.radio}
                                    />
                                    Business ({business.length})
                                </MenuItem>
                            </Select>
                        </FormControl>
                    ) : (
                        <FormControl variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">Sort By</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                onChange={handleChange}
                                label="Age">
                                <MenuItem className={classes.sortByStyle} value={'All'}>
                                    <SpellcheckIcon style={{ marginRight: '7px', marginLeft: '-3px', color: '#545F7E' }} />
                                    All
                                </MenuItem>
                                <MenuItem className={classes.sortByStyle} value={'ZA'}>
                                    <Icon
                                        name={SVGNames.AtoZ}
                                        style={{ marginRight: '11px', marginLeft: '-3px' }}
                                        width={'21px'}
                                        height={'23px'}
                                    />
                                    A to Z
                                </MenuItem>
                                <MenuItem className={classes.sortByStyle} value={'AZ'}>
                                    <Icon name={SVGNames.ZtoA} style={{ marginRight: '8px' }} width={'21px'} height={'23px'} />Z to A
                                </MenuItem>
                                <MenuItem className={classes.sortByStyle} value={'NEWEST'}>
                                    <Icon name={SVGNames.Earlier} style={{ marginRight: '8px' }} width={'21px'} height={'23px'} />
                                    Earliest to Latest
                                </MenuItem>
                                <MenuItem className={classes.sortByStyle} value={'OLDEST'}>
                                    <Icon name={SVGNames.Latest} style={{ marginRight: '8px' }} width={'21px'} height={'23px'} />
                                    Latest to Earliest
                                </MenuItem>
                            </Select>
                        </FormControl>
                    )}
                </Box>
            </Box>
        </Box>
    );
};
