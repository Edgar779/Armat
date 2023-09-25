import {makeStyles} from '@material-ui/core/styles';

export const settingsPage = makeStyles(() => ({
    settingsTittle: {
        fontSize: '18px',
        fontWeight: '600',
        lineHeight: '30px',
        color: '#545F7E',
    },

    settingsButtons: {
        width: '469px',
        height: '40px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #347AF033',
        borderRadius: '8px',
        padding: '2px',
    },

    passiveButton: {
        width: '231px',
        height: '36px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 600,
        background:'transparent',
        color: '#545F7E',
        cursor:'pointer',
        border:'none',
    },

    activeButton: {
        width: '231px',
        height: '36px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 600,
        color: 'white',
        cursor:'pointer',
        background: '#387DFB 0% 0% no-repeat padding-box',
        border:'none',
}

}))
;
