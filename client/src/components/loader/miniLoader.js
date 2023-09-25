import Loader from 'react-loader-spinner';
import React from 'react';
import { Colors } from 'utils';

export const MiniLoader = ({ width, color }) => {
    return <Loader type="ThreeDots" color={color ? color : Colors.ThemeGreen} height={16} width={width ? width : 16} />;
};
