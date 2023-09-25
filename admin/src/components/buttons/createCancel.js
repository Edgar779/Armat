import React from 'react';
import { ButtonsStyle } from './styles';
import {Button, CircularProgress} from '@material-ui/core';

export const CreateCancel = ({ Create, Cancel, handleCreate, handleCancel, display, loading }) => {
    const classes = ButtonsStyle();

    return (
        <div style={display ? {display:'flex'} : {}}>
            <Button
                style={{textTransform: 'capitalize', fontSize:'16px',color:'white',borderRadius:'24px', background: '#387DFF', fontWeight:'600'}}
                className={classes.Create} onClick={handleCreate}>
                {loading ?
                    <CircularProgress
                        style={{
                            width: '20px',
                            height: '20px',
                            position: 'relative',
                            left: 0,
                            right: 0,
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            color: 'white',
                        }}
                    />
                    :
                    Create
                }
            </Button>
            <Button

            style={{textTransform: 'capitalize', background:'#387DFF1A', fontSize:'16px',color:'#545F7E',borderRadius:'24px',marginRight:'16px',fontWeight:'600'}}
                className={classes.Cancel} onClick={handleCancel}>
                {Cancel}
            </Button>
        </div>
    );
};
