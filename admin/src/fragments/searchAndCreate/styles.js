import { makeStyles } from '@material-ui/core/styles';

export const fixedComponentsStyle = makeStyles(() => ({
    SearchBoxWrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    
    SearchBoxWrapperBetween:{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        width:'100%',
    },

    SearchBoxSearchComponent: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },

    TotalMembers: {
        fontSize: '18px',
        fontWeight: '600',
        lineHeight: '30px',
        color: '#545F7E',
        marginLeft: '16px',
        '@media (min-width: 1281px)': {
            marginLeft: '32px',
        },
    },
}));
