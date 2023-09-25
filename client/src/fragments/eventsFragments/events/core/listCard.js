import { Box, Typography } from '@material-ui/core';
import { Icon } from 'components';
import { SVGNames } from 'constants/index';
import { noImage } from 'fragments';
import { listCardStyles } from './styles';
import { EventsActions, organizationActions } from 'store';
import { useDispatch } from 'react-redux';
import { Colors } from 'utils';
import { dateConverter, multiConverter } from '../../../../utils/dateConverter';

export const ListCard = ({ deleteEvent, data, editEvent, pageType, handleViewDetails, creatorInfo, sponsor }) => {
    const classes = listCardStyles();
    const localConvert = dateConverter(data);
    const dispatch = useDispatch();

    // const handleEditData = () => {
    //     editEvent(data);
    //     dispatch(EventsActions.getEventSponsorsForEdit(data.eventId));
    //     dispatch(organizationActions.getOrg('ALL', 'ACTIVE'));
    // };

    const viewDetails = () => {
        handleViewDetails(data);
        if (pageType === 'myEvents') {
            sessionStorage.setItem('windowPath', pageType);
        }
    };

    return (
        <Box className={classes.cardCont}>
            <Box onClick={() => viewDetails(data?.eventId)} className={classes.imgCont}>
                <img
                    src={data?.images?.length > 0 ? data?.images[data?.eventImage ? data?.eventImage : 0].url : noImage.lgJPG}
                    width={'100%'}
                    height={'100%'}
                    alt=""
                />
            </Box>
            <Box className={classes.infoCont}>
                <Box className={classes.dateCont}>
                    <Box>
                        <Typography className={classes.dateMonth}>{localConvert.slice(0, 3)}</Typography>
                    </Box>
                    <Box>
                        <Typography className={classes.dateDay}>
                            {multiConverter(data?.startDate, data?.startTime, data?.timezoneOffset, 'DD')}
                        </Typography>
                    </Box>
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'space-between', width: '85%' }}>
                    <Box className={classes.descCont}>
                        <Typography className={classes.eventTitle}>
                            {data?.title?.length > 25 ? `${data?.title?.slice(0, 25)}...` : data?.title}
                        </Typography>
                        <Typography className={classes.eventAddress}>
                            {data?.locationType === 'VIRTUAL'
                                ? 'Virtual'
                                : data?.address
                                ? data?.address?.formattedAddress && data?.address?.formattedAddress?.length > 50
                                    ? `${data?.address?.formattedAddress.slice(0, 50)}...`
                                    : data?.address?.formattedAddress
                                : ''}
                        </Typography>
                    </Box>
                    {pageType !== 'upcomingEvents' && pageType !== 'pastEvents' && creatorInfo === true ? (
                        <Box className={classes.optCont}>
                            <Box onClick={() => deleteEvent(data?.eventId)} className={classes.deleteCont}>
                                <Box className={classes.deleteIconCont}>
                                    <Icon name={SVGNames.DeleteOutline} width="100%" height="100%" color="#F07379" />
                                </Box>
                            </Box>
                            {/*{sponsor !== 'sponsor' && (*/}
                            {/*    <Box onClick={handleEditData} className={classes.editCont}>*/}
                            {/*        <Box className={classes.editIconCont}>*/}
                            {/*            <Icon name={SVGNames.EditOutline} width="100%" height="100%" color={Colors.ThemeGreen} />*/}
                            {/*        </Box>*/}
                            {/*    </Box>*/}
                            {/*)}*/}
                        </Box>
                    ) : (
                        ''
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default ListCard;
