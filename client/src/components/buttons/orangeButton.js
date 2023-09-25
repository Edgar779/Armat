import { Button } from '@material-ui/core';
import { useGlobalStyles } from 'theme';
import Loader from 'react-loader-spinner';
import React from 'react';
import { Colors } from 'utils';

export const OrangeButton = ({ handleClick, buttonText, button, type, loader, width, height, radius, follow }) => {
    const globalClasses = useGlobalStyles({ button: button });

    return (
        <div>
            <Button
                type={type}
                style={{
                    width: width,
                    height: height,
                    boxShadow: '0px 3px 16px #49B7764D',
                    borderRadius: radius ? radius : 24,
                    fontSize: 16,
                    padding: 0,
                    background: Colors.ThemeGreen,
                    whiteSpace: 'nowrap',
                }}
                className={follow === 'follow' ? globalClasses.buttonGreen : globalClasses.buttonOrange}
                onClick={handleClick}>
                {loader ? (
                    <Loader type="ThreeDots" color="#FFFFFF" height={16} width={16} style={{ margin: '0', padding: '0' }} />
                ) : (
                    buttonText
                )}
            </Button>
        </div>
    );
};
