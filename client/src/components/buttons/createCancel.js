import React from 'react';
import { ButtonsStyle } from './styles';
import { Button } from '@material-ui/core';
import Loader from 'react-loader-spinner';

export const CreateCancel = ({ Create, Cancel, handleCreate, handleCancel, loading, width, style }) => {
    const classes = ButtonsStyle();

    return (
        <div style={{ ...style }}>
            <Button style={width ? { width: width } : {}} className={classes.Create} onClick={handleCreate}>
                {loading ? (
                    <Loader
                        type="ThreeDots"
                        color="#FFFFFF"
                        height={16}
                        width={16}
                        style={{ margin: '10px', padding: '0' }}
                    />
                ) : (
                    Create
                )}
            </Button>
            <Button style={width ? { width: width } : {}} className={classes.Cancel} onClick={handleCancel}>
                {Cancel}
            </Button>
        </div>
    );
};
