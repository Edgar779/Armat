import React from 'react';
import { textStyle } from './style';

export const SliceText = ({ OnMouseEnter, OnMouseLeave, disable, row, className }) => {
    const classes = textStyle();
    const windowWidth = window.innerWidth;
    return (
        <>
            {windowWidth > 1280 ? (
                row.length <= 30 ? (
                    <p className={className ? classes.tableRowGrayText : classes.tableRowUserName}>{row}</p>
                ) : (
                    <p
                        onMouseEnter={OnMouseEnter}
                        onMouseLeave={OnMouseLeave}
                        data-title={row}
                        className={className ? classes.tableRowGrayText : classes.tableRowUserName}>
                        {`${row.slice(0, 30)} ...`}
                    </p>
                )
            ) : row.length <= 10 ? (
                <p className={className ? classes.tableRowGrayText : classes.tableRowUserName}>{row}</p>
            ) : disable === true ? (
                <p
                    onMouseEnter={OnMouseEnter}
                    onMouseLeave={OnMouseLeave}
                    data-title={row}
                    className={className ? classes.tableRowGrayText : classes.tableRowUserName}>
                    {`${row.slice(0, 10)}${row.length > 10 ? '...' : ''}`}
                </p>
            ) : (
                <p
                    onMouseEnter={OnMouseEnter}
                    onMouseLeave={OnMouseLeave}
                    className={className ? classes.tableRowGrayText : classes.tableRowUserName}>
                    {`${row.slice(0, 10)}${row.length > 10 ? '...' : ''}`}
                </p>
            )}
        </>
    );
};
