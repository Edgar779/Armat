import { makeStyles } from '@material-ui/core';

export const billingStyles = makeStyles(() => ({
    paymentMethodWrapper: {
        width: '100%',
        height: '100%',
        marginTop: '24px',

        '@media (min-width: 768px)': {
            marginTop: '40px',
            padding: '24px',
            background: '#FFF',
            borderRadius: '16px',
        },
        '@media (min-width: 1440px)': {
            marginTop: '70px',
            padding: '40px',
        },
    },
    paymentMethodTitle: {
        color: '#222222',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '18px',
        '@media (min-width: 768px)': {
            fontSize: '24px',
            lineHeight: '36px',
        },
    },
    cardInformationWrapper: {
        borderRadius: '8px',
        border: '1px solid #E9E9EB',
        background: '#FFF',
        padding: '24px',
        marginTop: '16px',
        '@media (min-width: 768px)': {
            marginTop: '24px',
            background: 'transparent',
        },
        '@media (min-width: 1440px)': {
            padding: '32px 48px',
        },
    },
    invoicesSection: {
        marginTop: '46px',
        '@media (min-width: 768px)': {
            marginTop: '54px',
        },
        '@media (min-width: 1440px)': {
            marginTop: '80px',
        },
    },
    invoicesTableWrapper: {
        marginTop: '24px',
    },
    cardInformationTitle: {
        color: '#222',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '28px',
        marginBottom: '15px',
    },
    noCardWrapper: {
        width: '275px',
        height: '164px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        border: '1px solid #EFEFEF',
        cursor: 'pointer',
    },
    addCardBtn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        '& span': {
            color: '#139B56',
            fontSize: '40px',
            fontWeight: '400',
            lineHeight: '20px',
        },
        '& p': {
            color: '#139B56',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '20px',
            marginTop: '16px',
        },
    },
    addCardWrapper: {
        width: '360px',
        padding: '24px',
        height: 'auto',
        maxHeight: '70vh',
        overflow: 'auto',
        borderRadius: '8px',
        background: '#FFF',
        '@media (min-width: 768px)': {
            width: '543px',
            padding: '32px',
        },
    },

    invoiceTableHead: {
        width: '100%',
        height: '52px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '8px 8px 0px 0px',
        background: '#E9E9EB',
    },
    invoiceTableHeadItem: {
        padding: '16px 32px',
        color: '#222',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '20px',
    },
    invoiceTableBodyWrapper: {
        maxHeight: '400px',
        height: 'auto',
        overflow: 'auto',
    },
    invoiceTableBody: {
        width: '100%',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        background: '#FAFAFA',
        borderBottom: '1px solid #E1E1E1',
    },
    invoiceTableBodyItem: {
        padding: '0 32px',
        color: '#494949',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20px',
        display: 'flex',
        alignItems: 'center',
    },
    downloadButton: {
        background: 'transparent',
        marginRight: '16px',
        border: 'none',
        cursor: 'pointer',
    },
    linkButton: {
        marginTop: '2px',
        cursor: 'pointer',
    },
    currentCardWrapper: {
        borderRadius: '8px',
        border: '1px solid #C4C4C4',
        background: '#FAFAFA',
        padding: '24px',
        width: '275px',
        height: '164px',
    },
    weAcceptWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '18px',
    },
    weAcceptText: {
        color: '#222',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '20px',
        marginRight: '8px',
    },
    cardsWrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    cardTitleType: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: '14px',
        fontWeight: 600,
        color: '#222222',
    },
    numberAndDate: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        color: '#222',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '24px',
    },
    cardActionsBtn: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: '32px',
        '& button': {
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
        },
    },
    editBtn: {
        color: '#49B776',
        marginRight: '16px',
    },
    deleteBtn: {
        color: '#FF453A',
    },
    desktopView: {
        display: 'none',
        '@media (min-width: 768px)': {
            display: 'block',
        },
    },
    mobileView: {
        display: 'block',
        '@media (min-width: 768px)': {
            display: 'none',
        },
    },
    invoicesMobileCardWrapper: {
        borderRadius: '8px',
        background: '#FFF',
        width: '100%',
        minHeight: '152px',
        padding: '16px 24px',
        marginTop: '16px',
    },
    infoRow: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '12px',
    },
    rowTitle: {
        color: '#222222',
        marginRight: '16px',
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '20px',
        width: '90px',
    },
    rowSubTitle: {
        color: '#494949',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '20px',
    },
    infoEndRow: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
    },

    invoicesMobileWrapper: {
        height: 'auto',
        maxHeight: '50vh',
        overflow: 'auto',
    },
}));
