import { useState } from 'react';
import { Box, Tooltip, Typography, withStyles } from '@material-ui/core';
import { Icon, UnsubscribeEventModal } from 'components';
import { SVGNames } from 'constants/index';
import { noImage } from 'fragments';
import { gridCardStyles } from './styles';
import { CalendarToday, Room } from '@material-ui/icons';
import ReactHtmlParser from 'react-html-parser';
import { EventsActions, organizationActions } from '../../../../store';
import { useDispatch } from 'react-redux';
import { Colors } from '../../../../utils';
import { multiConverter } from '../../../../utils/dateConverter';
import { TextRow } from '../../../../components/screens/slicedText';

export const GridCard = ({ data, deleteEvent, editEvent, pageType, handleViewDetails, shiwtch }) => {
    const classes = gridCardStyles();
    const date = new Date(data && data.startDate);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    // const handleEditData = () => {
    //     editEvent(data);
    //     dispatch(EventsActions.getEventSponsorsForEdit(data.eventId));
    //     dispatch(organizationActions.getOrg('ALL', 'ACTIVE'));
    // };

    const disabledInfo = data && data.status === 'UNPUBLISHED';
    const HtmlTooltip = withStyles((theme) => ({
        tooltip:
            pageType === 'subscriptions' && disabledInfo !== false
                ? {
                      maxWidth: 396,
                      background: Colors.lightGreen,
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
        handleViewDetails(data);
        if (pageType === 'myEvents') {
            sessionStorage.setItem('windowPath', pageType);
        }
    };

    return (
        <>
            <HtmlTooltip
                title={
                    pageType === 'subscriptions' &&
                    disabledInfo !== false && (
                        <Box className={classes.toolTip}>
                            <Box>
                                <Icon name={SVGNames.Unpublished} />
                            </Box>
                            <Box>This event is temporarily unpublished.</Box>
                        </Box>
                    )
                }
                placement="top-end">
                <Box
                    style={
                        pageType === 'subscriptions' && disabledInfo === true
                            ? { background: '#545F7E1A 0% 0% no-repeat padding-box' }
                            : { background: '#FFFFFF 0% 0% no-repeat padding-box' }
                    }
                    className={classes.gridCardCont}>
                    <Box
                        className={classes.leftBorderStyle}
                        style={
                            pageType !== 'subscriptions'
                                ? {
                                      borderLeft: `2px solid ${
                                          data.status === 'PUBLISHED'
                                              ? '#4FDC6F'
                                              : data.status === 'DISAPPROVED'
                                              ? '#F07379'
                                              : data.status === 'UNPUBLISHED'
                                              ? '#387DFF'
                                              : data.status === 'PENDING'
                                              ? '#545F7E80'
                                              : ''
                                      }`,
                                  }
                                : {}
                        }
                    />
                    <Box className={classes.gridImgStyle}>
                        <Box
                            onClick={() => viewDetails(data.eventId)}
                            className={pageType !== 'subscriptions' ? classes.gridInfoContent : classes.gridInfoContentNoCursor}>
                            {pageType === 'subscriptions' && disabledInfo === true ? (
                                <Box className={classes.badge}>
                                    <img src={'/assets/images/events/OrganizerBadge.svg'} alt="Badge" />
                                </Box>
                            ) : (
                                pageType === 'subscriptions' &&
                                data &&
                                data.creatorType === 'ORGANIZER' && (
                                    <Box className={classes.badge}>
                                        <img src={'/assets/images/events/OrganizerBadge.svg'} alt="Badge" />
                                    </Box>
                                )
                            )}

                            <Box>
                                <img
                                    className={classes.gridImgCont}
                                    src={data?.images?.length > 0 ? data.images[data.eventImage ? data.eventImage : 0].url : noImage.lgJPG}
                                    alt=""
                                />
                            </Box>

                            <Box>
                                <Typography className={classes.eventTitle}>{data?.title}</Typography>
                                <Typography className={classes.eventAddress}>
                                    {data.description.length > 60
                                        ? ReactHtmlParser(data.description.slice(0, 50))
                                        : ReactHtmlParser(data.description)}
                                </Typography>
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <Box
                                style={pageType !== 'subscriptions' ? { cursor: 'pointer' } : {}}
                                onClick={() => viewDetails(data.eventId)}
                                className={classes.infoCont}>
                                <Box style={{ display: 'flex', alignItems: 'center' }}>
                                    <CalendarToday
                                        style={{ color: Colors.ThemeGreen, width: '15px', height: '17px', marginRight: '11px' }}
                                    />
                                    <Typography className={classes.fullDate}>
                                        {multiConverter(data.startDate, data.startTime, data.timezoneOffset, 'MM/DD/YYYY')}
                                    </Typography>
                                </Box>

                                <Box style={{ display: 'flex', alignItems: 'center', marginTop: '9px' }}>
                                    {data.address && data.address.formattedAddress && (
                                        <Room
                                            style={{
                                                color: Colors.ThemeGreen,
                                                width: '15px',
                                                height: '17px',
                                                marginRight: '11px',
                                            }}
                                        />
                                    )}
                                    <Typography className={classes.fullDate}>
                                        {
                                            data.locationType === 'VIRTUAL' ? 'Virtual' : <TextRow name={data.address.formattedAddress} />
                                            // data.address ? data.address.formattedAddress && data.address.formattedAddress.length > 40
                                            //       ? `${data.address.formattedAddress.slice(0, 40)}...`
                                            //       : data.address.formattedAddress
                                            //   : ''
                                        }
                                    </Typography>
                                </Box>
                            </Box>

                            {pageType !== 'upcomingEvents' && (
                                <>
                                    {pageType === 'pastEvents' ? null : pageType !== 'subscriptions' ? (
                                        <Box className={classes.optCont}>
                                            <Box onClick={() => deleteEvent(data.eventId)} className={classes.deleteCont}>
                                                <Box className={classes.deleteIconCont}>
                                                    <Icon name={SVGNames.DeleteOutline} width="100%" height="100%" color="#F07379" />
                                                </Box>
                                                <Typography className={classes.deleteEditText}>Delete</Typography>
                                            </Box>

                                            {/*<Box onClick={handleEditData} className={classes.editCont}>*/}
                                            {/*    <Box className={classes.editIconCont}>*/}
                                            {/*        <Icon*/}
                                            {/*            name={SVGNames.EditOutline}*/}
                                            {/*            width="100%"*/}
                                            {/*            height="100%"*/}
                                            {/*            color={Colors.ThemeGreen}*/}
                                            {/*        />*/}
                                            {/*    </Box>*/}
                                            {/*    <Typography className={classes.deleteEditText}>Edit</Typography>*/}
                                            {/*</Box>*/}
                                        </Box>
                                    ) : (
                                        shiwtch !== 'noSwitch' && (
                                            <UnsubscribeEventModal disabled={disabledInfo} openInfo={open} data={data} />
                                        )
                                    )}
                                </>
                            )}
                        </Box>
                    </Box>

                    <Box className={classes.infoContMobile}>
                        <Box style={{ display: 'flex' }}>
                            <Box style={{ display: 'flex', alignItems: 'center' }}>
                                <CalendarToday style={{ color: Colors.ThemeGreen, width: '15px', height: '17px', marginRight: '11px' }} />
                                <Typography className={classes.fullDate}>
                                    {multiConverter(data.startDate, data.startTime, data.timezoneOffset, 'MM/DD/YYYY')}
                                </Typography>
                            </Box>

                            <Box style={{ display: 'flex', alignItems: 'center', marginLeft: '18px' }}>
                                {data.address && data.address.formattedAddress && (
                                    <Room style={{ color: Colors.ThemeGreen, width: '15px', height: '17px', marginRight: '11px' }} />
                                )}
                                <Typography className={classes.fullDate}>
                                    {data.locationType === 'VIRTUAL'
                                        ? 'Virtual'
                                        : data.address
                                        ? data.address.formattedAddress && data.address.formattedAddress.length > 50
                                            ? `${data.address.formattedAddress.slice(0, 50)}...`
                                            : data.address.formattedAddress
                                        : ''}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        className={classes.mobileBottomBorderStyle}
                        style={
                            pageType !== 'subscriptions'
                                ? {
                                      borderBottom: `2px solid ${
                                          data.status === 'PUBLISHED'
                                              ? '#4FDC6F'
                                              : data.status === 'DISAPPROVED'
                                              ? '#F07379'
                                              : data.status === 'UNPUBLISHED'
                                              ? '#387DFF'
                                              : data.status === 'PENDING'
                                              ? '#545F7E80'
                                              : ''
                                      }`,
                                  }
                                : {}
                        }
                    />
                </Box>
            </HtmlTooltip>
        </>
    );
};

export default GridCard;
