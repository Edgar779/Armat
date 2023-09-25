import { Tooltip, withStyles } from '@material-ui/core';

export const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        maxWidth: 396,
        background: '#387DFF',
        height: '46px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '6px',
        fontSize: '16px',
    },
}))(Tooltip);
