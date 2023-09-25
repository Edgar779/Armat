import React from 'react';
import { CircularProgress } from '@material-ui/core';

export const Loader = ({ style, size }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', height: '70vh', width: '100%' }}>
            <CircularProgress
                style={{
                    width:size === 'mini' ? '20px' : '100px',
                    height: size === 'mini' ? '20px' : '100px',
                    position:style ? style : 'absolute',
                    left: 0,
                    right: 0,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    color: '#387DFF',
                }}
            />
        </div>
    );
};
