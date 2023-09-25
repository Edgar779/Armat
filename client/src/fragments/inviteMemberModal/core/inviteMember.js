import { forgotPasswordStyles, imageStyles } from './style';
import { inviteMember } from './constants';
import { Box, Typography } from '@material-ui/core';
import { Logo } from 'components/logo';
import { Picture } from 'components/picture';
import { InviteMemberForm } from '../../../components/forms/authForms/inviteMemberForm';
import { Colors } from '../../../utils';

export const InviteMember = ({ open, close }) => {
    const classes = forgotPasswordStyles();
    const imgClasses = imageStyles();

    return (
        <Box style={{ width: '100%', display: 'flex', flexDirection: 'row', overflow: 'hidden', background: 'white' }}>
            <div className={classes.rightPanelImg}>
                <Logo classes={classes} />
                <div>
                    <Picture image={inviteMember.image} classNameWrapper={imgClasses.picture} />
                </div>
            </div>
            <Box
                style={{ margin: '0 auto' }}
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                my={{ xs: 9, md: 3, lg: 4.25 }}
                mx={2}>
                <div className={classes.content}>
                    <div className={classes.root}>
                        <p className={classes.title}>{inviteMember.title}</p>
                        {/*<Typography style={{ color: Colors.ThemeBlack }} variant="h4" display="block">*/}
                        {/*    <Box fontWeight={600} fontSize={{ xs: 18, sm: 30 }}>*/}
                        {/*        {inviteMember.title}*/}
                        {/*    </Box>*/}
                        {/*</Typography>*/}
                        <Box mt={2} mb={{ xs: 3.75, lg: 5 }}>
                            <Typography style={{ color: Colors.ThemeLightGray }} variant="body1" color="textSecondary" display="block">
                                {inviteMember.body}
                            </Typography>
                        </Box>
                        <InviteMemberForm open={open} close={close} classes={classes} inviteMember={inviteMember} />
                    </div>
                </div>
            </Box>
        </Box>
    );
};

export default InviteMember;
