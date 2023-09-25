import React from 'react';
import { withStyles, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import { Colors } from 'utils';

const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 43,
        height: 23,
        padding: 0,
        marginLeft: '20px',
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: Colors.ThemeGreen,
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: Colors.ThemeGreen,
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 18,
        height: 18,
        marginTop: '1px',
        marginLeft: '5px',
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: 'lightgray',
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});

export const Switcher = ({ handleChangeSwitcher, info, disabled, type }) => {
    const handleChange = (event) => {
        // setState({ ...state, [event.target.name]: event.target.checked });
        handleChangeSwitcher();
    };
    return (
        <FormGroup>
            {type === 'notification' ? (
                <FormControlLabel
                    label=""
                    disabled={disabled}
                    control={<IOSSwitch checked={info !== null ? info : false} onChange={handleChange} name="checkedB" />}
                />
            ) : (
                <FormControlLabel
                    label=""
                    disabled={disabled}
                    control={<IOSSwitch checked={true} onChange={handleChange} name="checkedB" />}
                />
            )}
        </FormGroup>
    );
};
