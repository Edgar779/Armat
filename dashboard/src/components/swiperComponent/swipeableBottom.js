import React, { useState, Fragment } from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';

export const SwipeableBottom = ({ onOpen, toggleOpen, setOpenSwipe, openSwipe }) => {
    /**
     * Hooks.
     */

    const [open, setOpen] = useState();

    return (
        <div className="mobile-swiper">
            <SwipeableBottomSheet
                style={{
                    maxWidth: '768px',
                    width: '100%',
                    margin: '0 auto',
                    borderRadius: '8px 8px 0 0',
                    zIndex: 99999,
                }}
                open={open}
                onChange={() => setOpen('')}
                className="swipe-up">
                <div>
                    {' '}
                    <div className="swipe-contant" style={{ height: 600 }}>
                        <p>Download CSV</p>
                        <p> Add to List</p>
                        <p> Create a New List </p>
                    </div>
                </div>
            </SwipeableBottomSheet>
        </div>
    );
};
