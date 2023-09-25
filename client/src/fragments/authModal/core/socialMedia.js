import { Divider, Box, Link, Typography } from '@material-ui/core';
import { Icon } from 'components';
import { useSocialStyles } from './style';
import { API_BASE } from 'store';

export const SocialMedia = ({ data, title }) => {
    const classes = useSocialStyles();

    return (
        <div style={{ width: '100%' }}>
            <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center" className={classes.dividers}>
                <Divider className={classes.divider} />
                <Typography color="textSecondary">
                    <Box component="span" fontWeight={500}>
                        OR
                    </Box>
                </Typography>
                <Divider className={classes.divider} />
            </Box>
            <Typography color="textSecondary" align="center">
                {title}
            </Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="center" className={classes.socialMedia}>
                {data.map((item, index) => (
                    <Link key={index} href={API_BASE + item.link} className={classes.socialLink}>
                        <Icon name={item.icon} width="25px" height="25px" className={`icon-${item.icon}`} color={item.color ?? null} />
                    </Link>
                ))}
            </Box>
        </div>
    );
};
