import Link from 'next/link';
import { Typography, Grid } from '@material-ui/core';
import { useFooterStyles, LinkTypography } from './styles';
import { copyright, links } from './constants';

export const Copyright = () => {
    const classes = useFooterStyles();
    return (
        <>
            <Grid item sm={6} xs={12}>
                <Typography className={classes.link} variant="caption" display="inline">
                    {copyright.text}&nbsp;
                    <a className={classes.link} href={copyright.link} target="_blank" rel="noreferrer">
                        {copyright.linkName}
                    </a>
                </Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
                <LinkTypography variant="caption" display="block" align="right">
                    {links.map((item, index) => (
                        <Link href={item.link} key={index}>
                            <a className={`${classes.link} ${index === 0 ? classes.linkSpace : ''}`}>{item.name}</a>
                        </Link>
                    ))}
                </LinkTypography>
            </Grid>
        </>
    );
};
