import React, { useState } from 'react';
import { billingStyles } from './styles';
import { Icon, SimpleModal } from 'components';
import CheckoutPage from 'fragments/checkoutForm';
import { SVGNames } from '../../../constants';

export const CardInformation = ({ currentCard }) => {
    const classes = billingStyles();
    const [openModal, setOpenModal] = useState(false);

    const openClose = () => {
        setOpenModal(!openModal);
    };

    return (
        <>
            <div className={classes.cardInformationWrapper}>
                <p className={classes.cardInformationTitle}>Card Information</p>

                {currentCard ? (
                    <div className={classes.currentCardWrapper}>
                        <div className={classes.cardTitleType}>
                            <p>{currentCard?.card === 'visa' ? 'Visa Card' : currentCard?.card === 'mastercard' ? 'Master Card' : ''}</p>
                            <Icon
                                name={
                                    currentCard?.card === 'visa'
                                        ? SVGNames.VisaCard
                                        : currentCard?.card === 'mastercard'
                                        ? SVGNames.MasterCard
                                        : ''
                                }
                            />
                        </div>
                        <p className={classes.numberAndDate}>
                            <p>{`**** **** **** ${currentCard?.last4}`}</p>
                            <p>{`${currentCard?.exp_month}/${currentCard?.exp_year}`}</p>
                        </p>

                        <div className={classes.cardActionsBtn}>
                            <button className={classes.editBtn} onClick={openClose}>
                                Edit
                            </button>
                            <button className={classes.deleteBtn}>Delete</button>
                        </div>
                    </div>
                ) : (
                    <div onClick={openClose} className={classes.noCardWrapper}>
                        <button className={classes.addCardBtn}>
                            <span>+</span>
                            <p>Add Card</p>
                        </button>
                    </div>
                )}

                <div className={classes.weAcceptWrapper}>
                    <p className={classes.weAcceptText}>We Accept</p>
                    <div className={classes.cardsWrapper}>
                        <Icon name={SVGNames.VisaCard} style={{ marginRight: '9px' }} />
                        <Icon name={SVGNames.MasterCard} />
                    </div>
                </div>
            </div>

            <SimpleModal
                openDefault={openModal}
                onClose={openClose}
                content={
                    <div className={classes.addCardWrapper}>
                        <CheckoutPage onClose={openClose} />
                    </div>
                }
            />
        </>
    );
};
