// import { Box, Typography } from '@material-ui/core';
// import { Icon } from 'components';
// import { SVGNames } from 'constants/index';
// import { noImage } from 'fragments';
// import { carouselStyle } from './styles';
//
// export const ResCards = ({ deleteEvent, data, editEvent, pageType, handleViewDetails }) => {
//     const classes = carouselStyle();
//     const mount = data.startDate;
//     const date = new Date(mount);
//     const month = date.toLocaleString('en-AU', { month: 'long' });
//     const day = date.getDate();
//
//     const handleEditData = () => {
//         editEvent(data);
//     };
//
//     const viewDetails = () => {
//         handleViewDetails(data);
//         if (pageType === 'myEvents') {
//             sessionStorage.setItem('windowPath', pageType);
//         }
//     };
//
//     return (
//         <Box className={classes.cardCont}>
//             <Box onClick={() => viewDetails(data.eventId)} className={classes.imgCont}>
//                 <img
//                     src={data.eventImage || data.eventImage === 0 ? data.images[data.eventImage].url : noImage.lgJPG}
//                     width={'100%'}
//                     height={'100%'}
//                     alt=""
//                 />
//             </Box>
//
//             <Box className={classes.infoCont}>
//                 <Box className={classes.dateCont}>
//                     <Box>
//                         <Typography className={classes.dateMonth}>{month.slice(0, 3)}</Typography>
//                     </Box>
//                     <Box>
//                         <Typography className={classes.dateDay}>{day < 10 ? `0${day}` : day}</Typography>
//                     </Box>
//                 </Box>
//
//                 <Box style={{ display: 'flex', justifyContent: 'space-between', width: '85%' }}>
//                     <Box className={classes.descCont}>
//                         <Typography className={classes.eventTitle}>
//                             {data.title.length > 20 ? `${data.title.slice(0, 20)}...` : data.title}
//                         </Typography>
//                         <Typography className={classes.eventAddress}>
//                             {data.locationType === 'VIRTUAL'
//                                 ? 'Virtual'
//                                 : data.address
//                                 ? data.address.formattedAddress && data.address.formattedAddress.length > 20
//                                     ? `${data.address.formattedAddress.slice(0, 20)}...`
//                                     : data.address.formattedAddress
//                                 : ''}
//                         </Typography>
//                     </Box>
//
//                     {/*{pageType !== 'upcomingEvents' && pageType !== 'pastEvents' ? (*/}
//                     <Box className={classes.optCont}>
//                         <Box onClick={() => deleteEvent(data.eventId)} className={classes.deleteCont}>
//                             <Box className={classes.deleteIconCont}>
//                                 <Icon name={SVGNames.DeleteOutline} width="100%" height="100%" color="#F07379" />
//                             </Box>
//                         </Box>
//                         <Box onClick={handleEditData} className={classes.editCont}>
//                             <Box className={classes.editIconCont}>
//                                 <Icon name={SVGNames.EditOutline} width="100%" height="100%" color="#387DFF" />
//                             </Box>
//                         </Box>
//                     </Box>
//                     {/*) : (*/}
//                     {/*    ''*/}
//                     {/*)}*/}
//                 </Box>
//             </Box>
//         </Box>
//     );
// };
//
// export default ResCards;
