import { makeStyles } from '@material-ui/core';

export const buyTicketStyles = makeStyles((theme) => ({
    addCardForm: {
        width: '100%',
        height: '100%',
        marginTop: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    spaceBetween: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
    },
    buyTicketWrapper: {
        width: '360px',
        height: 'auto',
        maxHeight: '80vh',
        overflow: 'auto',
        background: 'white',
        borderRadius: '8px',
        '@media (min-width: 767px)': {
            width: '718px',
            borderRadius: 0,
            height: '700px',
        },
        '@media (min-width: 1279px)': {
            width: '1275px',
            display: 'flex',
        },
    },
    ticketCategoryWrapper: {
        padding: '0 16px 24px',
        width: '100%',
        borderRight: '1px solid #E1E1E1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        overflow: 'auto',
        '@media (min-width: 768px)': {
            padding: '0 40px 40px',
        },
        '@media (min-width: 1279px)': {
            padding: '40px',
            width: '60%',
        },
    },

    choseTicketTitle: {
        color: '#222',
        fontSize: '18px',
        fontWeight: '700',
        '@media (min-width: 768px)': {
            fontSize: '22px',
        },
        '@media (min-width: 1279px)': {
            fontSize: '28px',
        },
    },
    bigTicketTitle: {
        color: '#222',
        fontSize: '28px',
        fontWeight: '700',
        // '@media (min-width: 768px)': {
        //     fontSize: '22px',
        // },
        // '@media (min-width: 1279px)': {
        //     fontSize: '28px',
        // },
    },

    ticketsWrapper: {
        margin: '16px 0',
        '@media (min-width: 768px)': {
            margin: '16px 0',
        },
        '@media (min-width: 1279px)': {
            margin: '40px 0',
        },
    },

    accordionWrapper: {
        marginBottom: '16px',
        '& .MuiAccordionSummary-root.Mui-expanded': {
            minHeight: 'auto',
        },
        '& .MuiAccordion-root:before': {
            display: 'none',
        },
        '& .MuiPaper-elevation1': {
            boxShadow: 'unset',
        },
        '& .MuiAccordionSummary-root': {
            minHeight: 'auto',
            padding: '12px 16px',
        },
        '& .MuiAccordionSummary-content': {
            margin: 0,
        },
        '& .MuiAccordionSummary-content.Mui-expanded': {
            margin: 0,
        },
    },

    accordionSummary: {
        borderBottom: '1px solid #F4F4F4',
        background: '#FAFAFA',
        padding: '12px 8px',
        '@media (min-width: 767px)': {
            padding: '12px 16px',
        },
    },
    accordionSummaryWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        // justifyContent: 'space-between',
        // alignItems: 'center',
    },
    titleAndPrice: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '12px',
    },
    showMoreAndCounter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    showMoreInfoBtn: {
        background: 'transparent',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        color: '#9F9F9F',
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '18px',
        padding: '0',
        cursor: 'pointer',
    },
    ticketTitle: {
        color: '#222',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '24px',
        marginRight: '16px',
        width: '100%',
    },
    ticketPrice: {
        color: '#49B776',
        fontSize: '18px',
        fontWeight: '600',
        lineHeight: '24px',
    },

    actionsStyle: {
        display: 'flex',
        '& button': {
            width: '42px',
            height: '42px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '4px',
            border: '1px solid #F4F4F4',
            background: '#FFF',
            cursor: 'pointer',
        },
    },

    inputStyle: {
        margin: '0 8px',
        width: '42px',
        height: '42px',
        display: 'flex',
        borderRadius: '4px',
        border: '1px solid #F4F4F4',
        background: '#FFF',
        padding: '0 8px',
        color: '#222',
        fontSize: '18px',
        fontWeight: '600',
        lineHeight: '21px',
    },
    accessDescription: {
        color: '#494949',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '18px',
        marginTop: '8px',
    },
    ticketInformation: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        marginTop: '16px',

        '@media (min-width: 767px)': {
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexDirection: 'row',
        },

        '& p': {
            color: '#BEBEBE',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '24px',
        },
    },

    ticketCountWrapper: {
        margin: '8px 0',
        '@media (min-width: 767px)': {
            margin: 0,
        },
    },

    ticketEventWrapper: {
        display: 'none',
        '@media (min-width: 1279px)': {
            width: '40%',
            background: '#FAFAFA',
            display: 'block',
            height: '100%',
            overflow: 'auto',
        },
    },
    closeButton: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
    },
    ticketEventBodyWrapper: {
        padding: '0 40px',
    },
    eventImageAndTitle: {
        display: 'flex',
        alignItems: 'flex-start',
        borderBottom: '1px solid #BEBEBE',
        padding: '0 0 24px 0',
        '& img': {
            width: '100px',
            height: '100px',
            borderRadius: '16px',
            marginRight: '16px',
            objectFit: 'cover',
        },
    },
    orderSummary: {
        color: '#626262',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '32px',
        marginTop: '8px',
    },
    eventTitle: {
        color: '#222',
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '32px',
    },
    eventInfo: {
        padding: '14px 0',
        borderBottom: '1px solid #BEBEBE',
    },
    titleAndInfo: {
        padding: '8px 0',
        marginBottom: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',

        '& p': {
            color: '#2E2E2E',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '24px',
            marginRight: '8px',
        },
        '& span': {
            color: '#222',
            textAlign: 'right',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '24px',
        },
    },
    continueBtnWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        marginTop: '24px',
        '@media (min-width: 767px)': {
            marginTop: 0,
        },
    },
    continueBtn: {
        height: '48px',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFF',
        fontSize: '18px',
        fontWeight: '600',
        borderRadius: '8px',
        background: '#49B776',
        border: 'none',
        cursor: 'pointer',
    },
    completeBtn: {
        width: '214px',
        height: '48px',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFF',
        fontSize: '18px',
        fontWeight: '600',
        borderRadius: '8px',
        background: '#49B776',
        border: 'none',
        cursor: 'pointer',
    },
    ticketCount: {
        fontWeight: 600,
        fontSize: '14px',
        margin: '0 4px',
    },
    selectTMethodTitle: {
        color: '#222',
        fontSize: '22px',
        fontWeight: '700',
    },
    paymentMethodWrapper: {
        width: '100%',
        height: '72px',
        padding: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '8px',
        borderBottom: '1px solid #FAFAFA)',
        cursor: 'pointer',
    },
    paymentMethodIconTitle: {
        display: 'flex',
        alignItems: 'center',
        '& p': {
            marginLeft: '8px',
            color: '#222',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '24px',
            '@media (min-width: 768px)': {
                fontSize: '16px',
                marginLeft: '16px',
            },
        },
    },
    paymentTypeSelector: {
        marginTop: '24px',
    },
    paymentIcon: {
        width: '58px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    savedCardOr: {
        margin: '8px 0 32px',
        color: '#767676',
        fontSize: '16px',
        fontWeight: '400',
    },
    paymentDetailCardWrapper: {
        borderRadius: '8px',
        border: '1px solid #E1E1E1',
        cursor: 'pointer',
        width: '100%',
        padding: '16px 12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',

        '@media (min-width: 767px)': {
            padding: '16px',
        },
    },
    cardInformationWrapper: {
        width: '100%',
        marginLeft: '10px',
        '@media (min-width: 768px)': {
            marginLeft: '16px',
        },
    },
    cardTypeText: {
        color: '#494949',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '24px',
        marginBottom: '4px',
    },
    cardInformationText: {
        color: '#494949',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '24px',
        marginBottom: '4px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        '@media (min-width: 768px)': {
            fontSize: '16px',
        },
    },
    flexAble: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    newCardWrapper: {
        borderRadius: '8px',
        border: '1px solid #E1E1E1',
        width: '100%',
        padding: '16px',
        marginBottom: '16px',
        height: 'auto',
        minHeight: '84px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    newCardWrapperHead: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    doneScreenWrapper: {
        width: '100%',
        padding: '0 16px 16px',
        '@media (min-width: 768px)': {
            padding: '0 40px 40px',
        },
    },
    flexEnd: {
        width: '100%',
        justifyContent: 'flex-end',
        display: 'flex',
    },
    flexEndMobile: {
        width: '100%',
        justifyContent: 'flex-end',
        display: 'flex',
        '@media (min-width: 1279px)': {
            display: 'none',
        },
    },
    letterWrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: '16px ',
        borderBottom: '1px solid #F4F4F4',
        flexDirection: 'column',
        '@media (min-width: 768px)': {
            padding: '16px 32px',
            flexDirection: 'row',
        },
    },
    thanksTitle: {
        margin: '16px 0',
        color: '#494949',
        fontSize: '18px',
        fontWeight: '700',
        '@media (min-width: 768px)': {
            fontSize: '24px',
            margin: '0 16px',
        },
        '@media (min-width: 1279px)': {
            fontSize: '28px',
        },
    },
    ticketEventInformationWrapper: {
        padding: '16px',
        borderRadius: '8px',
        background: '#FAFAFA',
        marginTop: '24px',
        '@media (min-width: 768px)': {
            padding: '32px 16px',
            marginTop: '32px',
        },
        '@media (min-width: 1279px)': {
            padding: '32px',
        },
    },
    goingTo: {
        marginBottom: '8px',
        color: '#222',
        fontSize: '16px',
        fontWeight: '600',
        '@media (min-width: 768px)': {
            fontSize: '18px',
        },
    },
    doneEventTitle: {
        color: '#222',
        fontSize: '16px',
        fontWeight: '700',
        textTransform: 'uppercase',
        '@media (min-width: 768px)': {
            fontSize: '24px',
        },
        '@media (min-width: 1279px)': {
            fontSize: '28px',
        },
    },
    title: {
        marginBottom: '8px',
        color: '#49B776',
        fontSize: '16px',
        fontWeight: '700',
        marginTop: '24px',
        '@media (min-width: 768px)': {
            marginTop: '32px',
        },
    },
    value: {
        color: 'rgba(34, 34, 34, 0.80)',
        fontSize: '18px',
        fontWeight: '400',
    },
    viewTickets: {
        margin: '40px auto 20px',
        width: '164px',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        border: '1px solid #E1E1E1',
        background: '#FFF',
        color: '#222',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        '@media (min-width: 768px)': {
            margin: '24px 0 0 0',
        },
    },
    ticketCategoryEventTitle: {
        padding: '0 0 12px',
        borderBottom: '1px solid #E1E1E1',
        width: '100%',
        display: 'block',
        marginBottom: '24px',
        '@media (min-width: 767px)': {
            marginBottom: '40px',
        },
        '@media (min-width: 1279px)': {
            display: 'none',
        },
    },
    mobileEventTitle: {
        color: '#222',
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '32px',
        marginBottom: '8px',
        width: '100%',
    },
    mobileEventDate: {
        color: '#626262',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: 'auto',
        '@media (min-width: 767px)': {
            lineHeight: '32px',
        },
    },
}));
