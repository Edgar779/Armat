import { Box, Typography } from '@material-ui/core';
import { homeHeaderStyles } from './styles';

export const Description = ({ classes, desc }) => {
    const classesCustom = homeHeaderStyles();
    return (
        <Box className={classes.descriptionCont}>
            <Box className={classesCustom.descriptionContInner}>
                <Typography className={classesCustom.description}>{desc}</Typography>
            </Box>
        </Box>
    );
};
