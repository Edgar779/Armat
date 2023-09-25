import React from 'react';
import Link from 'next/link';
import { Picture } from 'components';
import { image, imageBlue } from './constants';
import { Box } from '@material-ui/core';

export const Logo = ({ classes, blue }) => {
    return (
        <Link href={'/'}>
            {blue ? (
                <Box style={{ width: '110px', height: '30px', cursor: 'pointer' }} className="logo">
                    <Picture image={image} className={classes.image} />
                </Box>
            ) : (
                <Box style={{ width: '110px', height: '30px', marginTop: '15px', cursor: 'pointer' }} className="logo">
                    <Picture image={imageBlue} className={classes.image} />
                </Box>
            )}
        </Link>
    );
};

export default Logo;
