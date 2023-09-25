import { makeStyles } from '@material-ui/core/styles';
import { Colors } from 'utils';

export const menuStyle = makeStyles(() => ({
    burger: {
        width: '30px',
        height: '15px',
        position: 'relative',
        '& span': {
            display: 'block',
            height: '4px',
            color: Colors.ThemeGreen,
            borderRadius: '35px',
            width: '100%',
            background: Colors.ThemeGreen,
            transitionTiming: 'ease',
            transitionDuration: '0.5s',
            transformOrigin: 'center',
            position: 'absolute',
            marginTop: '-1px',
            transform: 'translate3d(0px, 15px, 0px) rotate(0deg)',
        },
    },
}));
