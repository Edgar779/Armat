import { Logo, Picture } from 'components';
import { Box, Button, Typography } from '@material-ui/core';
import { useGlobalStyles } from 'theme';
import { image, welcome } from './constants';
import { welcomeStyles } from './style';
import { forgotPasswordStyles } from 'fragments/inviteMemberModal/core';
import { Colors } from 'utils';

export const Welcome = ({ close }) => {
    const button = {
        background: Colors.ThemeGreen,
        borderRadius: '24px',
    };
    const globalClasses = useGlobalStyles({ button: button });
    const classes = welcomeStyles();
    const customStyles = forgotPasswordStyles();
    return (
        <Box className={customStyles.modalWrap}>
            <div className={customStyles.rightPanelImgSignIn}>
                <Logo classes={customStyles} />
                <div>
                    <Picture classNameWrapper={classes.pictureSignin} image={image} />
                </div>
            </div>

            <Box className={customStyles.contentPaddings}>
                <div className={customStyles.content}>
                    <div className={customStyles.root}>
                        <Typography variant="h4" display="block">
                            <Box style={{ color: Colors.ThemeBlack }} textAlign="center" fontWeight={600} fontSize={{ xs: 18, sm: 30 }}>
                                {welcome.title}
                            </Box>
                        </Typography>
                        <div className={classes.pictureBox}>
                            <Picture image={welcome.image} classNameWrapper={classes.picture} />
                        </div>
                        <Typography variant="h4" display="block">
                            <Box style={{ color: Colors.ThemeBlack }} textAlign="center" fontWeight={700} fontSize={{ xs: 18, sm: 30 }}>
                                {welcome.subTitle}
                            </Box>
                        </Typography>
                        <Box textAlign="center" mt={2}>
                            <Typography variant="body1" color="textSecondary" display="block">
                                {welcome.description}
                            </Typography>
                        </Box>
                        <Box display="table" mx="auto" mt={{ xs: 3.75, lg: 4.25 }}>
                            <Button
                                style={{
                                    borderRadius: '24px',
                                    padding: 0,
                                    fontSize: '16px',
                                    background: Colors.ThemeGreen,
                                    width: '150px',
                                }}
                                onClick={() => close()}
                                className={globalClasses.button}>
                                Done
                            </Button>
                        </Box>
                    </div>
                </div>
            </Box>
        </Box>
    );
};
