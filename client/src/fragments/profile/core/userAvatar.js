import React from 'react';
import { myProfilePage } from './styles';
import { Avatar } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Icon } from 'components';
import { SVGNames } from 'constants/index';
import { Colors } from 'utils';

export const UserAvatar = ({ handleClick, image, AccountType, type, handleRemove }) => {
    const classes = myProfilePage();
    return (
        <div className={type === 'organization' ? classes.organizationAvatar : classes.profileAvatar}>
            <div className={type === 'organization' ? classes.organizationAvatarBackground : classes.profileAvatarBackground} />
            {image ? (
                type === 'organization' ? (
                    <div className={classes.orgAvatar}>
                        <img src={image} alt={'image'} />
                    </div>
                ) : (
                    <Avatar className={classes.avatarPhoto} src={image} alt="image" />
                )
            ) : AccountType === 'ORGANIZER' ? (
                <Avatar className={classes.companyAvatarPhoto}>
                    <Icon
                        name={SVGNames.CompanyIcon}
                        style={{ marginLeft: '14px', marginTop: '17px' }}
                        width="100%"
                        height="100%"
                        color="#387DFF"
                    />
                </Avatar>
            ) : type === 'organization' ? (
                <div className={classes.orgAvatar}>
                    <Icon
                        name={SVGNames.CompanyIcon}
                        style={{ marginLeft: '8px', marginTop: '6px' }}
                        width="60px"
                        height="60px"
                        color={Colors.ThemeGreen}
                    />
                </div>
            ) : (
                <Avatar className={classes.avatarPhoto}>
                    <AccountCircleIcon style={{ width: '100px', height: '100px', background: 'white', color: Colors.ThemeGreen }} />
                </Avatar>
            )}
            {type === 'organization' && image ? (
                <div className={classes.removeChange}>
                    <p className={classes.remove} onClick={handleRemove}>
                        Remove Logo
                    </p>
                    <p className={classes.change} onClick={handleClick}>
                        Change Logo
                    </p>
                </div>
            ) : (
                <button onClick={handleClick}>{type === 'organization' ? 'Upload Logo' : 'Upload Profile Picture'}</button>
            )}
        </div>
    );
};
