import { Svg } from 'assets';
import React, { useState } from 'react';

export const ConnectText = ({ placeholder }) => {
    /**
     * Hooks.
     */

    return (
        <div className="connect-box">
            <div className="social-icon">
                <img src={Svg.GoogleGreen} alt="google-green" />
            </div>
            <input type={'text'} className="social-input" placeholder={placeholder} />
            <div className="social-delete">
                <button type="button" className="btn-delete">
                    <img src={Svg.DeleteBlack} alt="Delete Black" />
                </button>
            </div>
        </div>
    );
};
