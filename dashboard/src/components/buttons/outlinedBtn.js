import React, { Fragment } from 'react';

export const OutlinedBtn = ({ title, handelClick }) => {
    return (
        <button className="outlined-btn" onClick={handelClick}>
            {title}
        </button>
    );
};
