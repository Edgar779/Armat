import React, { useState } from 'react';
import { Images, Svg } from 'assets';
import { Card, Checkbox, Grid, FormControlLabel } from '@mui/material';

export const HoursOperation = ({ addMoreHousre }) => {
    /**
     * Hooks.
     */

    const [checkIt, setCheckIt] = useState(false);

    const onCheckIt = () => {
        setCheckIt(!checkIt);
    };

    return (
        <div className="list-hourse">
            {/* Row List */}
            <div className="row-list">
                <input type={'time'} className="time-input" disabled={checkIt} />
                <span className="line" />
                <input type={'time'} className="time-input" disabled={checkIt} />
                <button type="button" className="remove-btn">
                    Remove
                </button>
                <div className="lable-checkbox">
                    <FormControlLabel
                        value={checkIt}
                        onChange={onCheckIt}
                        control={<Checkbox />}
                        label="Not Available"
                        labelPlacement="end"
                    />
                </div>
            </div>
            <div className="row-list">
                <input type={'time'} className="time-input" disabled={checkIt} />
                <span className="line" />
                <input type={'time'} className="time-input" disabled={checkIt} />
                <button type="button" className="remove-btn">
                    Remove
                </button>
                <div className="lable-checkbox">
                    <FormControlLabel
                        value={checkIt}
                        onChange={onCheckIt}
                        control={<Checkbox />}
                        label="Not Available"
                        labelPlacement="end"
                    />
                </div>
            </div>
            <div className="">
                <button type="button" className="btn-more" onClick={() => addMoreHousre()}>
                    Add more hours
                </button>
            </div>
        </div>
    );
};
