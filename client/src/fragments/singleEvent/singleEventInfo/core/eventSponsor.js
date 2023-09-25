import React from 'react';
import Link from 'next/link';
import { Box } from '@material-ui/core';
import { Icon, PageTitle } from 'components';
import { SVGNames } from 'constants/index';
import { Colors } from 'utils';
import { CheckCircle } from '@material-ui/icons';

export const EventSponsor = ({ eventSponsor, classes }) => {
    return (
        <Box className={classes.descriptionCont}>
            <Box className={classes.titleCont}>
                <div className={classes.titleIcon} />
                <PageTitle title={'Sponsors'} style={classes.title} />
            </Box>
            <Box className={classes.sponsorsWrapper}>
                {eventSponsor &&
                    eventSponsor.map((i, j) => (
                        <div key={j} className={classes.sponsorItem}>
                            <div className={classes.between}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className={classes.sponsorImage}>
                                        <Icon name={SVGNames.Company} color={Colors.ThemeGreen} />
                                    </div>
                                    <Link href={`singleOrganization?orgid=${i?.orgId}`}>
                                        <p style={{ cursor: 'pointer', textDecoration: 'underline' }}>{i?.orgName}</p>
                                    </Link>
                                </div>
                                <CheckCircle style={{ color: '#4FDC6F', fontSize: '20px', marginRight: '10px' }} />
                            </div>
                        </div>
                    ))}
            </Box>
        </Box>
    );
};
