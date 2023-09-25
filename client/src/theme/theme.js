import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import GlobalCss from './globalCss';

const defaultTheme = createMuiTheme();
export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#387DFF1A',
            main: '#387DFF',
            dark: '#26608C',
            contrastText: '#fff',
        },
        secondary: {
            main: '#766DE8',
            contrastText: '#fff',
        },
        text: {
            primary: '#545F7E',
            secondary: '#252E48',
            hint: '#545F7EB3',
        },
        error: {
            main: '#F07379',
        },
        success: {
            main: '#4FDC6F',
        },
        backfround: {
            main: '#F5FAFE',
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                'html, body': {
                    fontSize: '16px',
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    backgroundColor: '#ffffff !important',
                    [defaultTheme.breakpoints.down('sm')]: {
                        fontSize: '14px',
                    },
                },
            },
        },
        MuiButton: {
            root: {
                color: '#fff',
                textTransform: 'initial',
            },
        },
    },
    spacing: 8,
});

export const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalCss />
        <CssBaseline />
        {children}
    </ThemeProvider>
);
