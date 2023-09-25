import { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './styles';

export const Loader = ({ text }) => {
    const classes = useStyles();
    const [firstLineStyles, setFirstLineStyles] = useState({});
    const [secondLineStyles, setSecondLineStyles] = useState({});
    const [thirdLineStyles, setThirdLineStyles] = useState({});

    const [firstDotStyles, setFirstDotStyles] = useState({});
    const [lastDotStyles, setLastDotStyles] = useState({});

    useEffect(() => {
        let count = 0;
        let id = setInterval(() => {
            // Set loading lines styles
            if (count === 0) {
                setThirdLineStyles({ width: '30px' });
                setSecondLineStyles({ top: '70px' });
                setFirstLineStyles({ width: '100px' });
            }
            if (count === 1) {
                setFirstLineStyles({ width: '30px' });
                setSecondLineStyles({ height: '100px', top: '0px' });
            }
            if (count === 2) {
                count = 0;
                setSecondLineStyles({ height: '30px', top: '0px' });
                setThirdLineStyles({ width: '100px' });
                // Set loading dots styles
                setFirstDotStyles({ left: '12px' });
                setLastDotStyles({ left: '12px' });
            } else {
                count++;
                // Set loading dots styles
                setFirstDotStyles({ left: '0px' });
                setLastDotStyles({ left: '24px' });
            }
        }, 400);
        return () => clearInterval(id);
    }, []);

    return (
        <Box className={classes.main}>
            <Box className={classes.loadBox}>
                <div className={classes.loadLine} style={firstLineStyles} />
                <div className={classes.loadLine} style={secondLineStyles} />
                <div className={classes.loadLine} style={thirdLineStyles} />
            </Box>
            <Box className={classes.text} color="textPrimary">
                {text !== 'noText' && (
                    <>
                        Signing In
                        <Box textAlign="center" className={classes.dots}>
                            <span className={classes.dot} style={firstDotStyles}>
                                .
                            </span>
                            <span className={classes.dot}>.</span>
                            <span className={classes.dot} style={lastDotStyles}>
                                .
                            </span>
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default Loader;
