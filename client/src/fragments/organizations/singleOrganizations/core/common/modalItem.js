import { CommonStyle } from './styles';

export const MofalItem = ({ title, value }) => {
    const classes = CommonStyle();

    return (
        <div className={classes.modalItemWrapper}>
            <p>{title} </p>
            <span>{value}</span>
        </div>
    );
};
