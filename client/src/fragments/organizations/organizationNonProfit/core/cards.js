import { organizationsStyle } from './style';
import * as moment from 'moment';
import { useRouter } from 'next/router';
import { Icon, SlicedText } from 'components';
import { SVGNames } from 'constants/index';
import { Button } from '@material-ui/core';
import React from 'react';
import DirectionsIcon from '@material-ui/icons/Directions';
import { Colors } from 'utils';

export const Cards = ({ item }) => {
    const classes = organizationsStyle();
    const route = useRouter();

    return (
        <div className={classes.cardWrapper}>
            <div className={classes.imeInfoWrapper}>
                <div className={classes.image}>
                    <img
                        src={
                            item?.images?.length
                                ? item.images[item.mainImage ? item.mainImage : 0].url
                                : '/assets/images/singleEvent/noImage.svg'
                        }
                        alt="icon"
                    />
                </div>

                <div className={classes.infoWrapper}>
                    <div className={classes.titleDateWrapper}>
                        <p>{item?.name}</p>
                        <span className={classes.created}>Created: {item && moment(item?.createdAt).format('MM/DD/YYYY')}</span>
                        <span className={classes.address}>{item ? item?.address?.formattedAddress : 'Not set'}</span>
                    </div>

                    <div className={classes.moreInfoWrapper}>
                        <div className={classes.moreInfo}>
                            {item?.address?.formattedAddress && (
                                <a
                                    target={'_blank'}
                                    href={`https://www.google.com/maps?saddr=My+Location&daddr=${item?.address?.lat},${item?.address?.lng}`}
                                    rel="noreferrer">
                                    <DirectionsIcon style={{ color: Colors.ThemeGreen }} color={Colors.ThemeGreen} />
                                    <p className={classes.infoSliced}>{item ? item?.address?.formattedAddress : 'Not set'}</p>
                                </a>
                            )}
                            {item?.phoneNumber && (
                                <a href={`tel:+${item && item?.phoneNumber}`}>
                                    <Icon name={SVGNames.PhoneFill} width={'16px'} height={'16px'} />
                                    <p className={classes.info}>{item?.phoneNumber}</p>
                                </a>
                            )}
                            {item?.email && (
                                <a href={`mailto:+${item && item?.email}`}>
                                    <Icon name={SVGNames.EmailFill} width={'16px'} height={'16px'} />
                                    <p className={classes.info}>{item?.email}</p>
                                </a>
                            )}
                        </div>

                        <div className={classes.viewDetails}>
                            <Button onClick={() => route.push(`singleOrganization?orgid=${item?.id}`)}>View Details</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.moreInfoMobileWrapper}>
                <div className={classes.viewDetailsMobile}>
                    {item?.phoneNumber && (
                        <a className={classes.detailsMobile} href={`tel:+${item && item?.phoneNumber}`}>
                            <Icon name={SVGNames.PhoneFill} width="25px" height="25px" />
                            <p>{item?.phoneNumber}</p>
                        </a>
                    )}
                    {item?.email && (
                        <a className={classes.detailsMobile} href={`mailto:+${item && item?.email}`}>
                            <Icon name={SVGNames.EmailFill} width="25px" height="25px" />
                            <SlicedText type={'email'} size={15} data={item?.email} />
                        </a>
                    )}
                </div>

                <div className={classes.viewDetails}>
                    <Button onClick={() => route.push(`singleOrganization?orgid=${item?.id}`)}>View Details</Button>
                </div>
            </div>
        </div>
    );
};
