import { authActions } from 'store';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useStyles } from './styles';

export const Signout = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(authActions.logOut());
    };
    return (
        <div className={classes.list}>
            <div className={`${classes.listItem} ${classes.sign}`} onClick={handleLogOut}>
                Sign out
            </div>
        </div>
    );
};
