import React from 'react';
import {inputsStyle} from './styles';
import {Loader} from "../loader";

export const CreateInput = ({ handleChange, Placeholder, name, handleClick, value, lader }) => {
    const classes = inputsStyle();
    return (
        <>
            <div
                className={name === 'Tag' ? classes.CreateTagInput : classes.CreateInput}>
                <input type="text" onChange={handleChange} placeholder={Placeholder} value={value}/>
                <span onClick={handleClick}>
                {
                    !!lader.length ?
                        <Loader size={'mini'} style={{display: 'flex'}}/>
                        :
                        'Save'}
                    </span>
            </div>

        </>
    );
};
