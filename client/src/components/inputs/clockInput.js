import React, { useEffect, useState } from 'react';
import { inputsStyle } from './styles';
import { TextField } from '@material-ui/core';

export const ClockInput = ({ label, handle, value, error, handleDown, name, marginTop }) => {
    const [Width, SetWidth] = useState();
    const classes = inputsStyle();

    useEffect(() => {
        SetWidth(window.innerWidth);
    }, []);

    return (
        <div
        // style={
        //     // label === 'Start Time*'
        //     //     ? Width > 1240
        //     //         ? { width: '50%', marginTop: '6px' }
        //     //         : { width: '100%', marginTop: '6px' }
        //     //     : Width > 1240
        //     //     ? { width: '50%', marginLeft: '12px', marginTop: '6px' }
        //     //     : { width: '100%', marginLeft: '12px', marginTop: '6px' }
        // }
        >

            <TextField
                sx={{
                    '& input[type="time"]::-webkit-calendar-picker-indicator': {
                        filter: 'invert(78%) sepia(66%) saturate(6558%) hue-rotate(84deg) brightness(127%) contrast(116%)',
                    },
                }}
                onKeyDown={handleDown}
                style={error ? { borderColor: '#F07379', marginTop: marginTop } : { border: '0.5px solid #BEBEBE', marginTop: marginTop }}
                className={classes.DateInput}
                id="time"
                datatype={true}
                ampm={true}
                label={label}
                type="time"
                name={name}
                onChange={handle}
                value={value}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 300,
                }}
            />
        </div>
    );
};
