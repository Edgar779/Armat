// import  from ;
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const SwipeableBottomSheet = dynamic(() => import('react-swipeable-bottom-sheet'), { ssr: false });
export const SwipeUp = ({ overlayBool, overlayStyle, onTransitionEnd, onChange, children, className, onclick, style = {}, bool }) => {
    return (
        <SwipeableBottomSheet
            overlayStyle={overlayStyle}
            onTransitionEnd={onTransitionEnd}
            bodyStyle={{ background: 'none' }}
            open={bool}
            onChange={onChange}
            defaultOpen={false}
            overlay={false}
            // overlay={overlayBool === 'noConnect' ? false : true}
            topShadow={false}>
            <div className={className} style={{ ...style }}>
                {children}
            </div>
        </SwipeableBottomSheet>
    );
};
