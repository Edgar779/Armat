import React from 'react';
import { myProfilePage } from './styles';
import Avatar from 'assets/images/avatar.svg';
import {Images} from "../../../theme";

export const UserAvatar = ({ handleClick, image, AccountType, type, handleRemove }) => {
    const admin = JSON.parse(localStorage.getItem('userInfo'));
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
                    <img src={image ? image : admin.avatar ? admin.avatar.url : Avatar} alt="Avatar" />
                )
            ) : AccountType === 'ORGANIZER' ? (
              <div>
                  <img src={Images.companyIcon} alt="Avatar" />
              </div>
            ) : type === 'organization' ? (
                <div className={classes.orgAvatar}>
                    <img src={Images.companyIcon} alt="Avatar" />
                </div>
            ) : (
                <img src={image ? image : admin && admin.avatar ? admin.avatar.url : Avatar} alt="Avatar" />
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
                type === 'organization' ?
                    <button onClick={handleClick}>{'Upload Logo'}</button>
                    :
                    <p onClick={handleClick}>Upload Profile Picture</p>

            )}
        </div>
    );
};
