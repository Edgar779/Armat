import { PageTitle } from 'components';
import { Box } from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';

export const Description = ({ classes, data }) => {
    return (
        <Box className={classes.descriptionCont}>
            <Box className={classes.titleCont}>
                <div className={classes.titleIcon} />
                <PageTitle title={'Description'} style={classes.title} />
            </Box>
            <Box className={classes.descCont}>
                <p className={classes.desc}>{ReactHtmlParser(data.description)}</p>
            </Box>
        </Box>
    );
};
