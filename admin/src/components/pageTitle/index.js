import { Box, Typography } from '@material-ui/core';
import Icon from '../icon';
import { useStyles } from './style';

export const PageTitle = ({ title, style, iconStyle, icon, pageType }) => {
    const classes = useStyles();
    return (
        <Box className={classes.titleWrapper}>
            {icon ? (
                <div className={iconStyle}>
                    <Icon name={icon} />
                </div>
            ) : null}
            <Typography className={style}>{title}</Typography>
        </Box>
    );
};

export default PageTitle;
