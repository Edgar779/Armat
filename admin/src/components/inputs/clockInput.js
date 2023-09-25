import React from 'react';
import { inputsStyle } from './styles';
import { TextField } from '@material-ui/core';

export const ClockInput = ({ label, handle, value, disabled, name }) => {
    const classes = inputsStyle();
    return (
        <div
            style={
                label === 'Start Time*'
                    ? {  marginLeft: '16px', }
                    : {  marginLeft: '16px', }
            }
        >
            <TextField
                disabled={disabled}
                className={classes.DateInput}
                id="time"
                label={label}
                name={name}
                type="time"
                onChange={handle}
                value={value}
                InputLabelProps={{
                    shrink: !!value,
                }}
                inputProps={{
                    step: 300,
                }}
            />





            {/*<TextField*/}
            {/*    onKeyDown={handleDown}*/}
            {/*    style={error ? { borderColor: '#F07379',marginTop:marginTop } : {border: '0.5px solid #387DFF',marginTop:marginTop}}*/}
            {/*    className={classes.DateInput}*/}
            {/*    id="time"*/}
            {/*    datatype={true}*/}
            {/*    ampm={true}*/}
            {/*    label={label}*/}
            {/*    type="time"*/}
            {/*    name={name}*/}
            {/*    onChange={handle}*/}
            {/*    value={value}*/}
            {/*    InputLabelProps={{*/}
            {/*        shrink: true,*/}
            {/*    }}*/}
            {/*    inputProps={{*/}
            {/*        step: 300,*/}
            {/*    }}*/}
            {/*/>*/}
        </div>
    );
};
