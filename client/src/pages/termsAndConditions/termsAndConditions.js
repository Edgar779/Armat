import { TermAndCondition } from 'fragments';
import Box from '@material-ui/core/Box';
import useGlobalStyles from '../../theme/globalStyles';

export const TermsAndConditions = ({ pageType }) => {
    const classes = useGlobalStyles();
    return (
        <Box className={classes.container}>
            <TermAndCondition pageType={pageType} />
        </Box>
    );
};
