import React from 'react';
import Button from '@material-ui/core/Button';
import { ButtonsStyle } from './styles';
import { Icon } from '../icon';
import { SVGNames } from 'constants/index';

export const FilterButton = ({ handleOpenModal }) => {
    const classes = ButtonsStyle();

    return (
        <Button className={classes.filtersButtonStyle} onClick={handleOpenModal}>
            <p>Filters</p>
            <Icon name={SVGNames.Filter} width={'16px'} height={'16px'} />
        </Button>
    );
};

export const FilterButtonMobile = ({ handleOpenModal }) => {
    const classes = ButtonsStyle();

    return (
        <Button className={classes.filtersButtonMobileStyle} onClick={handleOpenModal}>
            <p>Filters</p>
            <Icon name={SVGNames.Filter} width={'16px'} height={'16px'} />
        </Button>
    );
};
