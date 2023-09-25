import React from 'react';
import { CreateEventStyle } from './styles';
import { UploadAvatar } from '../../../uploadAvatar';

export const UploadOrgAvatar = ({ getAvatar, avatar, orgInfo }) => {
    const classes = CreateEventStyle();
    const handleSendPhoto = (img) => {
        getAvatar(img);
    };
    return (
        <div className={classes.uploadAvatar}>
            <UploadAvatar handleSendPhoto={handleSendPhoto} type={'organization'} info={orgInfo} orgInfo={orgInfo}/>
        </div>
    );
};
