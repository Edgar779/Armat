import React from 'react';
import { CircularProgress } from '@material-ui/core';

export const MinLoader = ({ style = {},color }) => {
    const styles = {
        loaderStyle: {
            position: 'absolute',
            color: color ? color : '#387DFF',
            width: '20px',
            height: '20px',
            margin: '5px 0 0 10px',
        },
    };
    return <CircularProgress style={{ ...styles.loaderStyle, ...style }} />;
};
