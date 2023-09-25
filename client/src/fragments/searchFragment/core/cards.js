import React, { useState } from 'react';
import { Box, Tooltip, Typography, withStyles } from '@material-ui/core';
import { Icon, UnsubscribeEventModal } from 'components';
import { SVGNames } from 'constants/index';
import { noImage } from 'fragments';
import { CalendarToday, Room } from '@material-ui/icons';
import ReactHtmlParser from 'react-html-parser';
import { useRouter } from 'next/router';
import { searchStyle } from './styles';
import { Colors } from 'utils';

export const Cards = ({ data, pageType }) => {
    const classes = searchStyle();
    const date = new Date(data && data.startDate);
    const router = useRouter();

    const disabledInfo = data && data.status === 'UNPUBLISHED';
    const HtmlTooltip = withStyles((theme) => ({
        tooltip:
            pageType === 'subscriptions' && disabledInfo !== false
                ? {
                      maxWidth: 396,
                      background: Colors.ThemeBlack,
                      height: '46px',
                      display: 'flex',
                      alignItems: 'center',
                      borderRadius: '6px',
                  }
                : {
                      display: 'none',
                  },
    }))(Tooltip);

    const viewDetails = () => {
        if (data.type === 'EVENT') {
            router.push(`singleEvent?eventid=${data.id}`);
        }
        if (data.type === 'BUSINESS' || data.type === 'NON_PROFIT') {
            router.push(`singleOrganization?orgid=${data.id}`);
        }
    };

    const cardIconType =
        data !== null && data?.type === 'EVENT'
            ? SVGNames.CalendarSmall
            : data?.type === 'NON_PROFIT'
            ? SVGNames.NonIcon
            : data?.type === 'BUSINESS'
            ? SVGNames.BusinessesIcon
            : '';
    return (
        <>
            <Box onClick={viewDetails} style={{ background: '#FFFFFF 0% 0% no-repeat padding-box' }} className={classes.gridCardCont}>
                <Box className={classes.gridImgStyle}>
                    <Box className={classes.gridInfoContent}>
                        <Box>
                            <img className={classes.gridImgCont} src={data && data?.image ? data.image.url : noImage.lgJPG} alt="" />
                        </Box>

                        <Box>
                            <Typography className={classes.eventTitle}>
                                {data?.name ? (data.name.length > 20 ? `${data.name.slice(0, 20)}...` : data.name) : 'Not Set'}
                            </Typography>
                            <Typography className={classes.eventAddress}>
                                {data && data?.description && data.description.length > 60 ? (
                                    <span>{ReactHtmlParser(data.description.slice(0, 50))}</span>
                                ) : (
                                    ReactHtmlParser(data?.description)
                                )}
                            </Typography>
                        </Box>
                    </Box>

                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <Box style={{ cursor: 'pointer' }} onClick={() => viewDetails(data.eventId)} className={classes.infoCont}>
                            <div className={classes.itemsWrapper}>
                                <div style={{ width: '26px' }}>
                                    <Icon name={cardIconType} color={{ color: Colors.ThemeGreen }} />
                                </div>
                                <Typography style={{ fontWeight: '600' }} className={classes.fullDate}>
                                    {data && data?.type === 'EVENT'
                                        ? 'Event'
                                        : data?.type === 'BUSINESS'
                                        ? 'Business'
                                        : data?.type === 'NON_PROFIT'
                                        ? 'Nonprofit'
                                        : ''}
                                </Typography>
                            </div>

                            <div className={classes.itemsWrapper}>
                                {data?.address && data.address.formattedAddress && (
                                    <div style={{ width: '26px', marginLeft: '2px' }}>
                                        <Room
                                            style={{
                                                color: Colors.ThemeGreen,
                                                width: '15px',
                                                height: '17px',
                                                marginRight: '11px',
                                            }}
                                        />
                                    </div>
                                )}
                                <Typography className={classes.fullDate}>
                                    {data?.address
                                        ? data.address.formattedAddress && data.address.formattedAddress.length > 35
                                            ? `${data.address.formattedAddress.slice(0, 35)}...`
                                            : data.address.formattedAddress
                                        : ''}
                                </Typography>
                            </div>
                        </Box>
                    </Box>
                </Box>

                <Box className={classes.infoContMobile}>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <Icon name={cardIconType} color={{ color: Colors.ThemeGreen }} />
                            <Typography style={{ fontWeight: '600', marginLeft: '8px' }} className={classes.fullDate}>
                                {data && data?.type === 'EVENT'
                                    ? 'Event'
                                    : data?.type === 'BUSINESS'
                                    ? 'Business'
                                    : data?.type === 'NON_PROFIT'
                                    ? 'Nonprofit'
                                    : ''}
                            </Typography>
                        </Box>

                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            {data?.address && data.address.formattedAddress && (
                                <Room
                                    style={{
                                        color: Colors.ThemeGreen,
                                        width: '15px',
                                        height: '17px',
                                        marginRight: '8px',
                                    }}
                                />
                            )}
                            <Typography className={classes.fullDate}>
                                {data?.address
                                    ? data.address.formattedAddress && data.address.formattedAddress.length > 20
                                        ? `${data.address.formattedAddress.slice(0, 20)}...`
                                        : data.address.formattedAddress
                                    : ''}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Cards;
