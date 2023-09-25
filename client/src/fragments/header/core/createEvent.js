import React from 'react';
import { useRouter } from 'next/router';
import { useStyles } from './styles';
import { Box, Button } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { HtmlTooltip } from 'components';

export const CreateEvent = ({ openModal, userInfo, token }) => {
    const classes = useStyles();
    const route = useRouter();

    const handleChangeScreen = () => {
        token ? route.push('/createEvent') : openModal.auth();
    };

    return (
        <>
            {userInfo && userInfo.auth && userInfo.auth.role === 'MEMBER' ? (
                <HtmlTooltip title={<Box>You can't create event</Box>} placement="top-end">
                    <Button
                        style={{ borderRadius: '18px', border: '1px solid white' }}
                        variant="outlined"
                        className={classes.button}
                        startIcon={<AddIcon m={1} />}>
                        Create an Event
                    </Button>
                </HtmlTooltip>
            ) : (
                <Button
                    style={{ borderRadius: '18px', border: '1px solid white' }}
                    onClick={handleChangeScreen}
                    variant="outlined"
                    className={classes.button}
                    startIcon={<AddIcon m={1} />}>
                    Create an Event
                </Button>
            )}
        </>
    );
};
