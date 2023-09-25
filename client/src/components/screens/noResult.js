import React, { useContext } from 'react';
import { Box, Typography } from '@material-ui/core';
import { noResultStyle } from './style';
import { Picture, TryAgain } from 'components';
import { image, onResultImage } from './constant';
import { useRouter } from 'next/router';
import { ModalContext } from 'contexts';

export const NoResult = ({ handleCLic, events, type, noButton, top }) => {
    const classes = noResultStyle();
    const route = useRouter();
    const url = typeof window !== 'undefined' && window.location.pathname;
    const buttonText = url === '/mySubscriptions' ? 'Upcoming Events' : '+ Create Event';
    const titlText = url === '/mySubscriptions' ? 'No Subscriptions Added Yet' : 'No Events Added Yet';
    const token = typeof window !== 'undefined' && localStorage.getItem('access-token');
    let { openModal } = useContext(ModalContext);

    const handleChangeScreen = () => {
        if (token) {
            if (url === '/mySubscriptions') {
                route.push(`/upcomingEvents`);
            } else {
                route.push(`/createEvent`);
            }
        } else {
            openModal.auth();
        }
    };

    return (
        <div style={top === 'noTop' ? {} : { marginTop: '100px' }}>
            {events === 'noResult' ? (
                <Box className={classes.noResultWrapperFirst}>
                    <Typography className={classes.noResultTitleFirst}>{titlText}</Typography>
                    <Box className={classes.image}>
                        <Picture image={onResultImage} />
                    </Box>
                    <Box className={classes.createButton}>
                        <TryAgain handleCLic={handleChangeScreen} text={buttonText} />
                    </Box>
                </Box>
            ) : events === 'noOrgs' ? (
                <Box className={classes.noResultWrapperFirst}>
                    <Typography className={classes.noResultTitleFirst}>{`No ${type} Yet`}</Typography>
                    <Box className={classes.image}>
                        <Picture image={onResultImage} />
                    </Box>
                    <Box className={classes.createButton}>
                        <TryAgain handleCLic={() => route.push(`/createOrganizations`)} text={`Suggest a ${type}`} />
                    </Box>
                </Box>
            ) : (
                <Box className={classes.noResultWrapper}>
                    <Box className={classes.image}>
                        <Picture image={image} />
                    </Box>
                    <Typography className={classes.noResultTitle}>Oops... No Results Found</Typography>
                    <Typography className={classes.noResultDescription}>
                        Try search for something more general, change the filters or check for spelling mistakes.
                    </Typography>

                    {noButton !== 'noButton' && <TryAgain handleCLic={handleCLic} text={'Try Again'} />}
                </Box>
            )}
        </div>
    );
};
