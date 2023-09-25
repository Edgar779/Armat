import React, { useState } from 'react';
import { Images, Svg } from 'assets';

export const WebsiteInput = () => {
    /**
     * Hooks.
     */

    const [social, setSocital] = useState('');

    const handelChangeType = (event) => {
        setSocital(event.target.value);
    };

    return (
        <div className="connect-box">
            <div className="social-icon" style={{ background: social?.length > 0 ? '#49B776' : '' }}>
                {social?.length > 0 ? <img src={Svg.GoogleWhite} alt="google-green" /> : <img src={Svg.GoogleGreen} alt="google-green" />}
            </div>
            <input type={'text'} className="social-input" placeholder={'Add Google Place ID'} value={social} onChange={handelChangeType} />
            <div className="social-delete">
                <button type="button" className="btn-delete" onClick={() => setSocital('')}>
                    {social?.length > 0 ? <img src={Svg.DeleteRed} alt="Delete Black" /> : <img src={Svg.DeleteBlack} alt="Delete Black" />}
                </button>
            </div>
        </div>
    );
};
