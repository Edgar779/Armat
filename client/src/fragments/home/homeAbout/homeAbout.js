import { Picture, TitleIcon } from 'components';
import { Box, Typography } from '@material-ui/core';
import { homeAboutStyles, image } from './core';

export const HomeAbout = () => {
    const classes = homeAboutStyles();
    return (
        <Box className={classes.aboutCont}>
            <Box className={classes.about}>
                <Box className={classes.whoTitle}>
                    <TitleIcon text={'WHO WE ARE'} />
                </Box>
                <Box>
                    <Typography className={classes.desc}>
                        We’re a team of dedicated individuals who seek to connect Armenians worldwide with their culture and community.
                        Armat means root in Armenian. We provide the tools for Armenians to connect with their roots, regardless of where
                        they might be. We enjoy seeing people become as passionate about their heritage as we are and wish to be a part of
                        that journey.
                    </Typography>
                </Box>
            </Box>
            <Box className={classes.image}>
                <Picture image={image} />
            </Box>
        </Box>
    );
};
