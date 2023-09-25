import { Box } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { paginationStyles } from './styles';

export const Pages = () => {
    const classes = paginationStyles();
    return (
        <Box className={classes.pagesCont}>
            <Pagination count={10} size="small" />
        </Box>
    );
};

export default Pages;
