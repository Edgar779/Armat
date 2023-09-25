import { organizationsStyle } from './style';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { useState } from 'react';

import { Tree } from './tree';
import { organizationActions } from 'store';
import { useDispatch } from 'react-redux';
import { OrganizerCateg } from './accordionTree';

export const Filters = ({ orgCategories, type }) => {
    const classes = organizationsStyle();
    const dispatch = useDispatch();
    const token = typeof window !== 'undefined' && localStorage.getItem('access-token') ? localStorage.getItem('access-token') : '';
    const [inputs, setInputs] = useState('All');

    const handleChange = (e) => {
        if (token) {
            setInputs(e.target.value);
            if (e.target.value === 'Following') {
                dispatch(organizationActions.getFollows('filter'));
            } else {
                const orgType = type === 'Business' ? 'BUSINESS' : 'NON_PROFIT';
                dispatch(organizationActions.getOrg(orgType, 'ACTIVE', true));
            }
        }
    };

    return (
        <div className={classes.filterWrapper}>
            <div>
                <p className={classes.title}>Filter by Categories</p>
                <div className={classes.treeItem}>
                    <OrganizerCateg orgCateg={orgCategories} type={type} />
                </div>
            </div>

            {/*{token && (*/}
            <div className={classes.typeWrapper}>
                <FormControlLabel
                    onChange={(ev) => handleChange(ev)}
                    checked={inputs === 'All'}
                    value={'All'}
                    control={<Radio color="primary" />}
                    label="All"
                />
                <FormControlLabel
                    onChange={(ev) => handleChange(ev)}
                    checked={inputs === 'Following'}
                    value={'Following'}
                    control={<Radio color="primary" />}
                    label="Following"
                />

                {/*<RadioGroup className={classes.type} aria-label="gender" name="type" onChange={(ev) => handleChange(ev)}>*/}
                {/*    <FormControlLabel checked={inputs === 'All'} value={'All'} control={<Radio color="primary" />} label="All" />*/}
                {/*    <FormControlLabel*/}
                {/*        checked={inputs === 'Following'}*/}
                {/*        value={'Following'}*/}
                {/*        control={<Radio color="primary" />}*/}
                {/*        label="Following"*/}
                {/*    />*/}
                {/*</RadioGroup>*/}
            </div>
            {/*)}*/}
        </div>
    );
};
