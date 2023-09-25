import React from 'react';
import { CardContent, Avatar } from '@material-ui/core';
import { useStyles } from '../styles';

export const CustomAvatar = ({ image }) => {
    const classes = useStyles;
    return (
        <CardContent className={classes.avatarHeader}>
            <Avatar className={classes.avatarPhoto} src={image} alt="image" />
        </CardContent>
    );
};

export default CustomAvatar;
