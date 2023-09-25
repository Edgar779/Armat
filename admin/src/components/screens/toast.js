import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Cancel, CheckCircle } from '@material-ui/icons';
import {screensStyle} from "./styles";

export const Toast = ({ info, text, type }) => {
    const classes = screensStyle();

    const screen = (
        <div className={classes.toastWrapper}>
            {type === 'error' ? (
                <Cancel style={{ color: '#F07379', marginRight: '16px' }} />
            ) : (
                <CheckCircle style={{ color: '#4FDC6F', marginRight: '16px' }} />
            )}
            <p>{text}</p>
        </div>
    );

    useEffect(() => {
        if (info) {
            toast(screen);
        }
    }, [info]);
    return (
        <div>
            <ToastContainer className={type === 'error' ? 'error' : 'success'} position={'bottom-right'} />
        </div>
    );
};
