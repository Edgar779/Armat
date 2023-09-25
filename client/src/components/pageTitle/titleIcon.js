import React from 'react';
import { useStyles } from './style';
import { Box } from '@material-ui/core';

export const TitleIcon = ({ text }) => {
    const classes = useStyles();
    return (
        <Box className={classes.titleCont}>
            <div className={classes.titleIcon} />
            <p className={classes.title}>{text}</p>
        </Box>
    );
};
