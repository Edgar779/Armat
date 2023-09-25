import { CommonStyle } from './styles';
import { Icon, Stars } from 'components';
import React from 'react';
import { SVGNames } from 'constants/index';
import {Colors} from "../../../../../utils";

export const Card = ({ item }) => {
    const classes = CommonStyle();

    return (
        <div className={classes.cardWrapper}>
            <div className={classes.iconTitleStars}>
                <div style={{ width: '45px', height: '45px' }}>
                    <Icon name={SVGNames.UserAvatarFill} color={Colors.ThemeGreen} width={'45px'} height={'45px'} />
                </div>
                <div className={classes.infoWrapper}>
                    <p className={classes.name}>{item.authorName}</p>
                    <Stars stars={item.rating} />
                    <p className={classes.description}>{item.text}</p>
                </div>
            </div>
        </div>
    );
};
