import { Button } from '@material-ui/core';
import { useGlobalStyles } from 'theme';
import Loader from 'react-loader-spinner';
import React from 'react';
import { Colors } from 'utils';

export const BlueButton = ({ loading, type, text, handleCLick }) => {
    const globalClasses = useGlobalStyles();
    return (
        <Button
            onClick={handleCLick}
            type={type}
            style={{
                borderRadius: '24px',
                marginTop: '10px',
                background: Colors.ThemeGreen,
                height: '42px',
                padding: 0,
                fontSize: '16px',
            }}
            className={globalClasses.button}>
            {loading ? <Loader type="ThreeDots" color="#FFFFFF" height={16} width={16} style={{ margin: '10px', padding: '0' }} /> : text}
        </Button>
    );
};
