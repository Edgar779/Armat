import { useStyles } from './style';

export const InputTitle = ({ text }) => {
    const classes = useStyles();
    return <p className={classes.inputTitle}>{text}</p>;
};
