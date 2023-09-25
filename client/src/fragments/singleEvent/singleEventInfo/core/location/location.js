import { PageTitle, Icon } from 'components';
import { SVGNames } from 'constants/index';
import { Box } from '@material-ui/core';
import MapLoc from './map';
import { Colors } from '../../../../../utils';
import React from "react";

export const Location = ({ classes, data }) => {
    return (
        <Box className={classes.locationCont}>
            <Box className={classes.locTitleCont}>
                <div className={classes.titleIcon} />
                <PageTitle title={'Event Location'} style={classes.title} />
            </Box>

            <Box className={classes.adressCont}>
                {data.address.formattedAddress && data.locationType !== 'VIRTUAL' ? (
                    <div className={classes.addressAndDirection}>
                        <div className={classes.adress}>
                            <Icon
                                name={SVGNames.MapFill}
                                color={Colors.ThemeGreen}
                                style={{ width: '24px', height: '24px', marginRight: '4px' }}
                            />
                            <p className={classes.loc}>{data.address.formattedAddress}</p>
                        </div>
                        <Box className={classes.getDirection}>
                            <a
                                target={'_blank'}
                                href={`https://www.google.com/maps?saddr=My+Location&daddr=${data.address.lat},${data.address.lng}`}
                                rel="noreferrer">
                                Get Direction
                                <Icon name={SVGNames.GetDirection} style={{ marginLeft: '8px' }} color={Colors.ThemeGreen} />
                            </a>
                        </Box>
                    </div>

                ) : null}
            </Box>
            <Box className={classes.mapCont}>
                <MapLoc data={data} />
            </Box>
        </Box>
    );
};
