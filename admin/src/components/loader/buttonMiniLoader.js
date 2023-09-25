import React from 'react';
import { CircularProgress } from '@material-ui/core';

export const ButtonMiniLoader = ({ color }) => {
    return (
            <CircularProgress
                style={{
                    width: '20px' ,
                    height:'20px',
                    left: 0,
                    right: 0,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    color: color ? color : '#387DFF',
                }}
            />
    );
};
