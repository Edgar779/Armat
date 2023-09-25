import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { paymentActions } from 'store';
import { useGlobalStyles } from 'theme';
import { Loader } from 'components';
import { FindLoad } from 'utils';
import { billingStyles, CardInformation, Invoices } from './fragments';
import { InvoicesMobile } from './fragments/invoicesMobile';

export const Billing = () => {
    const global = useGlobalStyles();
    const classes = billingStyles();
    const loader = FindLoad('GET_CURRENT_CARD');
    const dispatch = useDispatch();
    const { currentCard, invoices } = useSelector((state) => ({
        currentCard: state.payments.currentCard,
        invoices: state.payments.invoices,
    }));

    useEffect(() => {
        dispatch(paymentActions.getCurrentCard());
        dispatch(paymentActions.getInvoices());
    }, []);

    if (loader.length) {
        return <Loader text={'noText'} />;
    }

    return (
        <div className={global.singleEventCont} style={{ background: '#FAFAFA' }}>
            <div>
                <p className={global.headerTitle}>Billing Info</p>
                <div className={classes.paymentMethodWrapper}>
                    <p className={classes.paymentMethodTitle}>Payment Method</p>
                    <CardInformation currentCard={currentCard} />

                    {invoices?.length ? (
                        <div className={classes.invoicesSection}>
                            <p className={classes.paymentMethodTitle}>Invoices</p>

                            <div className={classes.desktopView}>
                                <Invoices invoices={invoices} />
                            </div>

                            <div className={classes.mobileView}>
                                <div className={classes.invoicesMobileWrapper}>
                                    <InvoicesMobile invoices={invoices} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
};
