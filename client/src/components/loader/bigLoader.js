import React from 'react';
import { CircularProgress } from '@material-ui/core';
import {Colors} from "../../utils";

export const BigLoader = ({}) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', height: '70vh' }}>
            <CircularProgress
                style={{
                    width: '100px',
                    height: '100px',
                    margin: '0 auto',
                    color: Colors.ThemeGreen,
                }}
            />
        </div>
    );
};
