import { PageTitle } from 'components';
import { Box, Chip } from '@material-ui/core';

export const Tags = ({ classes, data, locationBoolean }) => {
    return (
        <Box className={locationBoolean === false ? classes.tagsContRowNoLocation : classes.tagsContRow}>
            <Box className={classes.titleCont1}>
                <div className={classes.titleIcon} />
                <PageTitle title={'Tags'} style={classes.title} />
            </Box>
            <Box className={classes.chipsCont}>
                {data.tags && data.tags.map((d) => <Chip label={d} className={classes.chip} key={data.eventId} />)}
            </Box>
        </Box>
    );
};
