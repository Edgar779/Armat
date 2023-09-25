import { Box, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { EventsActions } from 'store';
import { useDispatch } from 'react-redux';

export const ViewNav = ({ setView, view, handleChange }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleChangeScreen = (type) => {
        setView(type);
        dispatch(EventsActions.searchEvents(''));
        handleChange();
    };

    return (
        <Box className={classes.viewNavCont}>
            <Box onClick={() => handleChangeScreen('Listing/Grid')}>
                <Typography className={view === 'Listing/Grid' ? classes.viewNavTextActive : classes.viewNavText}>
                    {'Listing/Grid View'}
                </Typography>

                {view === 'Listing/Grid' && <div className={classes.viewNavContItemGridListing} />}
            </Box>
            <Box onClick={() => handleChangeScreen('Calendar')}>
                <Typography className={view === 'Calendar' ? classes.viewNavTextActive : classes.viewNavText}>{'Calendar View'}</Typography>
                {view === 'Calendar' && <div className={classes.viewNavContItemGridCalendar} />}
            </Box>
            <Box onClick={() => handleChangeScreen('Map')}>
                <Typography className={view === 'Map' ? classes.viewNavTextActive : classes.viewNavText}>{'Map View'}</Typography>
                {view === 'Map' && <div className={classes.viewNavContItemGridMap} />}
            </Box>
        </Box>
    );
};

export default ViewNav;
