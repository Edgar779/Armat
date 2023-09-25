import { withStyles } from '@material-ui/core';

export const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {
        "input[type='number']::-webkit-inner-spin-button, input[type='number']::-webkit-outer-spin-button": {
            '-webkit-appearance': 'none',
            margin: 0,
        },
        'a, li': {
            listStyleType: 'none',
        },
        'input:-internal-autofill-selected': {
            background: 'none !important',
            color: 'none !important',
        },
        '.justify-content-evenly': {
            justifyContent: 'space-evenly !important',
        },
        a: {
            textDecoration: 'none !important',
        },
        '.logo': {
            fontSize: '20px',
            color: 'white',
        },
        '.cursorPointer': {
            cursor: 'pointer',
        },
    },
})(() => null);

export default GlobalCss;
