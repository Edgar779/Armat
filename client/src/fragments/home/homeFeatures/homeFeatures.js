import { TitleIcon } from 'components';
import { Box } from '@material-ui/core';
import { Card, HomeFeaturesStyles, cards } from './core';

export const HomeFeatures = () => {
    const classes = HomeFeaturesStyles();
    return (
        <Box className={classes.featuresCont}>
            <Box className={classes.featureTitle}>
                <TitleIcon text={'FEATURES'} />
            </Box>
            <Box className={classes.cardsCont}>
                {cards.map((d,j) => (
                    <Card
                        key={j}
                        classes={classes}
                        title={d.title}
                        desc={d.desc}
                        image={d.image}
                        back={d.blueBack}
                        back2={d.greyBack}
                    />
                ))}
            </Box>
        </Box>
    );
};
