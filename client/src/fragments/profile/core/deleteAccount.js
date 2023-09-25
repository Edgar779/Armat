import React, { useEffect } from 'react';
import { authActions } from 'store';
import { PageTitle } from 'components';
import { Button, Typography, Box, CircularProgress } from '@material-ui/core';
import { deleteStyles } from './styles';
import { useDispatch } from 'react-redux';
import { FindLoad, FindSuccess } from 'utils';

const DeleteAccount = ({ handleClose, info }) => {
    const classes = deleteStyles();
    const dispatch = useDispatch();

    const handleDeleteAccount = () => {
        dispatch(authActions.deleteAccount(info.id));
    };

    const loader = FindLoad('DELETE_ACCOUNT');
    const success = FindSuccess('DELETE_ACCOUNT');

    useEffect(() => {
        if (success.length) {
            window.location.replace('/');
        }
    }, [success]);
    return (
        <Box className={classes.modalWrapper}>
            <Box className={classes.modalTitleCont}>
                <PageTitle title={'Delete Account'} style={classes.modalTitle} />
            </Box>

            <Box className={classes.modalDescCont} align={'center'}>
                <Typography className={classes.modalDesc}>
                    {"Are you sure you want to delete your account? If you delete your account, you'll permanently lose your profile."}
                </Typography>
            </Box>
            <Box className={classes.modalButtonsCont}>
                <Button className={classes.cancelButton} onClick={handleClose}>
                    Cancel
                </Button>
                <Button className={classes.deleteButton} onClick={handleDeleteAccount}>
                    {loader.length ? (
                        <CircularProgress
                            style={{
                                width: '20px',
                                height: '20px',
                                position: 'relative',
                                left: 0,
                                right: 0,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                color: 'white',
                            }}
                        />
                    ) : (
                        'Delete Account'
                    )}
                </Button>
            </Box>
        </Box>
    );
};

export default DeleteAccount;
