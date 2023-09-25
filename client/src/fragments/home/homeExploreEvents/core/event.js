import { SVGNames } from 'constants/index';
import { Box, Typography } from '@material-ui/core';
import moment from 'moment';
import { Icon } from 'components';
import { useRouter } from 'next/router';
import { noImage } from 'fragments';
import ReactHtmlParser from 'react-html-parser';
import { Colors } from 'utils';

export const Event = ({ classes, data, fake }) => {
    const route = useRouter();

    const handleViewDetails = (data) => {
        route.push(`singleEvent?eventid=${data.eventId}`);
    };

    return (
        <Box className={classes.cardCont}>
            <Box className={classes.infoCont}>
                <Box className={classes.imgAndDescCont}>
                    <img
                        src={data.images?.length > 0 ? data.images[data.eventImage ? data.eventImage : 0].url :  data.thumbnailUrl ? data.thumbnailUrl :  noImage.lgJPG}
                        className={classes.eventImg}
                        alt=""
                    />
                    <Box className={classes.descripCont}>
                        <Typography className={classes.title1}>
                            {data.title.length > 25 ? `${data.title.slice(0, 25)}...` : data.title}
                        </Typography>
                        <Typography className={classes.descrip}>
                            {ReactHtmlParser(data.description.length > 30 ? data.description.slice(0, 30) : data.description)}
                        </Typography>
                    </Box>
                </Box>
                <Box className={fake === true ? classes.fakeDateCont : classes.dateCont}>
                    <Box className={classes.dateIconCont}>
                        <Icon name={SVGNames.CalendarOutline1} width="18px" height="18px" color={Colors.ThemeGreen} />
                        <Typography className={classes.date}>{moment(data.startDate).format('DD/MM/YYYY')}</Typography>
                    </Box>
                    {!fake && (
                        <Box className={classes.eventButtonCont} onClick={() => handleViewDetails(data)}>
                            <Typography className={classes.eventText}>View Details</Typography>
                            <Icon
                                name={SVGNames.ForwardArrow}
                                width="18px"
                                height="18px"
                                color={Colors.ThemeGreen}
                                style={{ margin: '5px 0 0 4px' }}
                            />
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};
