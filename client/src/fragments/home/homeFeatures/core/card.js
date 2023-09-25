import { PageTitle } from 'components';
import { Box, Typography } from '@material-ui/core';

export const Card = ({ classes, title, desc, image, back, back2 }) => {
    return (
        <Box className={classes.card}>
            <Box className={classes.cardHeader}>
                <img width={'100%'} src={back} alt="img" />
                <img width={'100%'} src={back2} alt="img" className={classes.back2Img} />
                <img src={image} alt="img" className={classes.img} />
            </Box>
            <Box className={classes.cardDesc}>
                <PageTitle title={title} style={classes.title} />
                <Box className={classes.cardDescText}>
                    <Typography className={classes.text}>{desc}</Typography>
                </Box>
            </Box>
        </Box>
    );
};
