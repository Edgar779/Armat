/**Login styles */

import { makeStyles } from '@material-ui/core/styles';
import {Colors} from "theme";

export const loginPage = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },

    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
        height: '50px',
        background: Colors.blue ,
        boxShadow: '0px 3px 16px #387DFF4D',
        color: 'white',
        fontWeight: 'bold',

        '& .Mui-disabled': {
            opacity: '0.5',
            color: 'white',
            fontWeight: 'bold',
        },
    },
}));
