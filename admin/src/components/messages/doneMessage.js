import React from 'react';
import { errMessageStyle } from './styles';
import { Cancel, CheckCircle } from '@material-ui/icons';

export const DoneMessage = ({ text, type }) => {
    const classes = errMessageStyle();
    return (
        <div className={classes.DoneMessage}>
            {type === 'Error' ? (
                <Cancel style={{ color: '#F07379', marginRight: '16px' }} />
            ) : (
                <CheckCircle style={{ color: '#4FDC6F', marginRight: '16px' }} />
            )}
            <p>{text}</p>
        </div>
    );
};
