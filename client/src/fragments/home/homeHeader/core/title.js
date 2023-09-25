import { Box, Typography } from '@material-ui/core';
export const Title = ({ classes, title }) => {
    return (
        <Box className={classes.titleCont}>
            <Typography className={classes.title}>{title}</Typography>
        </Box>
    );
};
