import React from 'react';
import { useDispatch } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { useRouter } from 'next/router';
import { Icon } from 'components';
import { EventsActions } from 'store';
import { SVGNames } from 'constants/index';
import { Box, Chip, Typography } from '@material-ui/core';
import { popupStyles } from './styles';
import { Wifi, Room, Close, ViewWeek } from '@material-ui/icons';
import { Colors } from 'utils';
import { dateConverter, multiConverter } from '../../../../utils/dateConverter';
import { noImage } from '../../../singleEvent';

export const Popup = ({ data, handleClickClose, handleEditEvent, pageType }) => {
    const classes = popupStyles();
    const dispatch = useDispatch();
    const router = useRouter();
    const cat = data && data.categories && data.categories.length && data.categories.length > 2 && data.categories.slice(0, 2);
    const handleViewDetails = () => {
        router.push(`singleEvent?eventid=${data.eventId}`);
    };

    const handleDelete = () => {
        handleClickClose();
        dispatch(EventsActions.deleteEvent(data.eventId));
    };

    // const editEvent = () => {
    //     handleEditEvent(data);
    //     handleClickClose();
    // };

    const dateConvert = dateConverter(data);
    const desc = data.description.length > 50 ? data.description.slice(0, 50) + '...' : data.description;

    return (
        <Box className={classes.popupCont}>
            <Box className={classes.buttonsCont}>
                {pageType === 'myEvents' && (
                    <>
                        <Box onClick={handleDelete} className={classes.deleteIconCont}>
                            <Icon name={SVGNames.DeleteOutline} width="100%" height="100%" color="#545F7E" />
                        </Box>

                        {/*<Box onClick={editEvent} className={classes.editIconCont}>*/}
                        {/*    <Icon name={SVGNames.EditOutline} width="100%" height="100%" color={Colors.ThemeGreen} />*/}
                        {/*</Box>*/}
                    </>
                )}

                <button onClick={handleClickClose}>
                    <Close style={{ width: '12px', height: '12px' }} />
                </button>
            </Box>

            <Box className={classes.dataCont}>
                <Box className={classes.imgCont}>
                    <img
                        src={data?.images?.length > 0 ? data.images[data.eventImage ? data.eventImage : 0].url : noImage.lgJPG}
                        width={'50px'}
                        height={'50px'}
                        alt=""
                    />
                </Box>
                <Box className={classes.infoCont}>
                    <Box className={classes.titleCont}>
                        <p className={classes.title}>{data.title.length > 15 ? `${data.title.slice(0, 15)}...` : data.title}</p>
                    </Box>
                    <Box className={classes.dateCont}>
                        <Typography className={classes.month}>{dateConvert}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.detailsCont}>
                <Box className={classes.typeCont}>
                    {data.locationType === 'VIRTUAL' ? (
                        <Wifi style={{ color: Colors.ThemeGreen, width: '12px', height: '14px', marginRight: '12px' }} />
                    ) : (
                        <Room style={{ color: Colors.ThemeGreen, width: '12px', height: '14px', marginRight: '12px' }} />
                    )}
                    <Typography className={classes.text}>
                        {data.locationType === 'VIRTUAL'
                            ? `Virtual Event`
                            : data.address && data.address.formattedAddress && data.address.formattedAddress}
                    </Typography>
                </Box>
                <Box className={classes.typeCont}>
                    <ViewWeek style={{ color: Colors.ThemeGreen, width: '12px', height: '14px', marginRight: '12px' }} />
                    <div>
                        {data && data.categories && data.categories.length ? (
                            data.categories.length > 2 ? (
                                cat.map((d) => (
                                    <Chip style={{ marginRight: '4px' }} label={d} className={classes.chip} key={data.eventId} />
                                ))
                            ) : (
                                data.categories.map((d) => (
                                    <Chip style={{ marginRight: '4px' }} label={d} className={classes.chip} key={data.eventId} />
                                ))
                            )
                        ) : (
                            <p>No categories yet</p>
                        )}
                    </div>
                </Box>
                <Box className={classes.typeCont}>
                    <Icon
                        name={SVGNames.DescriptionFill}
                        color={Colors.ThemeGreen}
                        style={{ marginRight: '12px' }}
                        width={'12px'}
                        height={'14px'}
                    />
                    <Typography className={classes.text}>{ReactHtmlParser(desc)}</Typography>
                </Box>
            </Box>
            <Box className={classes.moreCont}>
                <button onClick={handleViewDetails}>View Details</button>
            </Box>
        </Box>
    );
};

export default Popup;
