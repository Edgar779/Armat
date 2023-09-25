import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Copyright, bgImage, socialMedia, Contact, Subscribe, useFooterStyles, TitleTypography } from './core';
import { DoneMessage, Icon, Logo, Picture } from 'components';
import { useGlobalStyles } from 'theme';
import { Box, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { MailerActions } from 'store';

export const Footer = () => {
    const dispatch = useDispatch();
    const { screensErrorInfo, screensInfo } = useSelector((state) => ({
        screensInfo: state.mailer.screensInfo,
        screensErrorInfo: state.mailer.screensErrorInfo,
    }));

    useEffect(() => {
        if (screensInfo || screensErrorInfo) {
            setTimeout(() => dispatch(MailerActions.removeError()), 3000);
        }
    }, [screensInfo || screensErrorInfo]);

    const globalClasses = useGlobalStyles();
    const classes = useFooterStyles();
    const router = useRouter();
    return (
        <Box component="footer"
            display={router.pathname === '/socialLogin' ? 'none' : 'block'}
            className={`${globalClasses.containerFluid} ${classes.footer}`}
            >
            <div className={classes.imageBox}>
                <Picture image={bgImage} type={'footer'}/>
            </div>

            <Grid container justify="space-between" className={classes.grid}>
                <Grid item md={6} xs={12}>
                    <Contact />
                </Grid>
                <Grid item lg={4} md={5} xs={12}>
                    <Subscribe />
                    <Grid container justify="space-between" className={classes.socialBoxCont}>
                        <Grid item xs={6} className={classes.socialBox}>
                            <TitleTypography variant="h4">{socialMedia.title}</TitleTypography>
                            <div className={classes.socialBoxContIcons}>
                                {socialMedia.socialMedia.items.map((item, index) => (
                                    <div className={classes.iconsItems} key={index}>
                                        <a className={classes.socialLink} href={item.link} target="_blank" rel="noreferrer">
                                            <Icon name={item.icon} width="20px" height="20px" color="white" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </Grid>
                        <Logo blue={true} classes={classes} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className={classes.gridCopyright}>
                <Copyright />
            </Grid>

            {screensInfo && (
                <DoneMessage text={screensInfo === 'contactSend' ? 'Your contacts sended' : 'You subscribe to Our Newsletter'} />
            )}
            {screensErrorInfo && (
                <DoneMessage type={'Error'} text={screensErrorInfo === 'contactError' ? 'Oops some error' : 'some error'} />
            )}
        </Box>
    );
};
