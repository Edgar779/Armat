import { Box } from '@material-ui/core';
import { HeaderButton, Description, Background, homeHeaderStyles, desc, image } from './core';

export const HomeHeader = ({ token }) => {
    const classes = homeHeaderStyles();
    return (
        <Box className={classes.homeHeaderCont}>
            <Background classes={classes} image={image} />
            <Box className={classes.content}>
                <Box className={classes.innerContent}>
                    <span className={classes.homeTitle}>
                        Join the Armenian <br /> Community
                    </span>
                    <Description classes={classes} desc={desc} />
                    <HeaderButton token={token} buttonCont="Check Out Events" />
                </Box>
            </Box>
        </Box>
    );
};
