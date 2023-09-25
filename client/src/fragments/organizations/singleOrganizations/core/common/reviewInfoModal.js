import { CommonStyle } from './styles';
import { CloseButton, Stars } from 'components';
import React from 'react';
import { Card } from './card';

export const ReviewInfoModal = ({ info, modalType, handleClose }) => {
    const classes = CommonStyle();
    let text = modalType === 'Google' ? 'Google Reviews' : modalType === 'Yelp' ? 'Yelp Reviews' : '';

    return (
        <div className={classes.reviewsWrapper}>
            <div className={classes.closeButton}>
                <CloseButton handleClick={handleClose} />
            </div>
            <div>
                <p className={classes.reviewTitle}>{text}</p>
                <div className={classes.stars}>
                    <p>{`Reviews (${info.numReviews})`}</p>
                    <Stars stars={info.rating} />
                </div>

                <div className={classes.cardBody}>
                    {info.reviews &&
                        info.reviews.map((i, j) => (
                            <React.Fragment key={j}>
                                <Card item={i} />
                            </React.Fragment>
                        ))}
                </div>
            </div>
        </div>
    );
};
