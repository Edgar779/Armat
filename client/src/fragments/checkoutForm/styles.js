import { makeStyles } from '@material-ui/core';

export const checkoutStyles = makeStyles(() => ({
    addCardTitle: {
        color: '#2A374E',
        fontSize: '32px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '36px',
    },

    addCardForm: {
        marginTop: '32px',
    },
    cardTitle: {
        color: '#494949',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '24px',
    },
    cardInputWrapper: {
        width: '100%',
        height: '48px',
        padding: '12px',
        borderRadius: '8px',
        border: '1px solid #9D9D9D',
    },
    cardEmailInput: {
        width: '100%',
        height: '48px',
        padding: '12px',
        borderRadius: '8px',
        border: '1px solid #9D9D9D',

        '& input': {
            border: 'none',
            background: 'transparent',
            width: '100%',
            height: '100%',
            outline: 'none',
        },
    },
    checkboxWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '16px',
    },
    acceptText: {
        color: '#4B5C68',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '22px',
    },
    linkText: {
        color: '#49B776',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '22px',
        marginLeft: '4px',
    },
    buttonsWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '33px',
    },
    addButton: {
        width: '100%',
        border: 'none',
        height: '48px',
        marginLeft: '16px',
        background: '#49B776',
        borderRadius: '8px',
        color: 'white',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
        cursor: 'pointer',
    },
    cancelButton: {
        width: '100%',
        border: 'none',
        height: '48px',
        background: '#F4F4F4',
        borderRadius: '8px',
        color: '#4B5C68',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
        cursor: 'pointer',
    },
    closeButton: {
        '& button': {
            position: 'absolute',
            marginTop: '-20px',
            marginRight: '-20px',
        },
    },
}));
