import { makeStyles } from '@material-ui/core/styles';
import { Colors } from '../../utils';

export const availabilityStyles = makeStyles(() => ({
    availableHours: {
        width: '100%',
        padding: '16px',
        background: '#FAFAFA 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    availableHoursHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        paddingLeft: 10,
    },
    availableHoursBlock: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        overflow: 'hidden',
        height: 'auto',
        overflowY: 'scroll',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        paddingLeft: 10,
    },
    noItems: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4B5C6880',
        margin: '0 auto',
    },
    availableHoursTitle: {
        color: '#4B5C68',
        fontSize: 18,
        fontWeight: 'bold',
    },
    availableHoursBox: {
        display: 'flex',
        width: '100%',
        borderRadius: 4,
        marginBottom: 15,
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        padding: '13px 24px',
    },
    availableHoursBoxHeader: {
        width: '70px',
        color: Colors.ThemeBlack,
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    availableHoursBoxBody: {
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        gap: '8px',
    },
    availableHoursBoxBodyInfo: {
        color: Colors.ThemeLightGray,
        fontSize: 16,
    },
    AddAvailabilityScheduel: {
        width: '634px',
        padding: '40px',
        borderRadius: '8px',
        backgroundColor: 'white',
        position: 'relative',
        '@media (max-width: 1400px)': {
            width: '618px',
            padding: '32px',
        },
    },

    availableHoursDayName: {
        color: '#347AF0',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 16,
    },
}));
