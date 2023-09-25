import React from 'react';
import { Svg } from "../../../assets";
import { IconButton, Badge } from '@mui/material';
import { SelectProfile } from 'components';

export const UserInfo = ({}) => {

    return (
        <div className="user-info">
            <div className="user-info-wrapper">
                <div className="avatar-desktop">
                    <img src={Svg.AvatarIcon} alt="Avatar-Icon" />
                </div>
                <div className="">
                    <SelectProfile />
                </div>
                {/*<IconButton>*/}
                {/*    <Badge badgeContent={4} color="error">*/}
                {/*        <img src={Svg.NotificationIcon} alt="Notification-Icon" />*/}
                {/*    </Badge>*/}
                {/*</IconButton>*/}
            </div>
        </div>
    );
};
