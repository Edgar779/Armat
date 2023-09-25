import { Box, Typography } from '@material-ui/core';
import { CloseButton } from 'components';
import { filtersStyles } from '../../../fragments/eventsFragments/events/core/styles';
import RangeFilter from './rangeFilter';

export const MobileFilter = ({ buttonsTab, handleChangeFilterModal }) => {
    const classes = filtersStyles();

    return (
        <Box className={classes.patEventView}>
            <Box className={classes.filterContMobile}>
                <Box className={classes.filterContMobileButtons}>
                    <Typography>Filters</Typography>
                    <CloseButton handleClick={handleChangeFilterModal} />
                </Box>

                <RangeFilter buttonsTab={buttonsTab} />
            </Box>
        </Box>
    );
};

export default MobileFilter;
