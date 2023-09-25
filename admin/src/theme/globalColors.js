export const Colors = {
    red: '#F07379',
    primary: '#387DFF',
    gray: '#545F7E',
    white: '#FFFFFF',
    head: '#387DFF1A',
    blue: '#387DFF',
};

export const Shadow = {
    normal: '0px 0px 12px #0052E01A',
};

export const Background = {
    table: '#FFFFFF 0% 0% no-repeat padding-box',
    backFone: '#F5FAFE 0% 0% no-repeat padding-box',
};

export const Table = {
    customTable: {
        background: `${Colors.white} 0% 0% no-repeat padding-box`,
        height: '100%',
        minHeight: '100vh',
        width: '100%',
        boxShadow: '0px 8px 12px #0052E01A',
        borderRadius: '8px',
        marginTop: '16px',
        marginBottom: '24px',
        paddingBottom: '76px',

        '& .MuiTableContainer-root': {
            boxShadow: 'none',
        },
    },
};
