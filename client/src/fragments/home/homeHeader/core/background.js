import { Box } from '@material-ui/core';
import { Picture } from 'components';
export const Background = ({ classes, image }) => {
    return (
        <Box className={classes.imageCont}>
            <Picture image={image} />
        </Box>
    );
};
