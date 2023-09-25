import { Typography } from '@material-ui/core';
import { useStyles } from './style';

export const PagesTitle = ({ text }) => {
    const classes = useStyles();
    return <Typography className={classes.PagesTitle}>{text}</Typography>;
};
