import { Tooltip, withStyles } from '@material-ui/core';

export const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        maxWidth: 396,
        background: '#545F7E',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '6px',
        fontSize: '14px',
        color:'white',
        padding:'6px 16px',
    },
}))(Tooltip);
