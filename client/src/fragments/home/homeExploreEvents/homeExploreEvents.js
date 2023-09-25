import { Box, Typography } from '@material-ui/core';
import { Event, homeExploreEventsStyles, image, title, desc, options, but, fakeEvents } from './core';
import { Icon, OrangeButton, TitleIcon } from 'components';
import { SVGNames } from 'constants/index';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { EventsActions } from 'store';
import { useRouter } from 'next/router';
import { Description } from '../homeHeader/core';

export const HomeExploreEvents = ({ openModal, token }) => {
    const route = useRouter();
    const classes = homeExploreEventsStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(EventsActions.GetPublicEvents());
    }, []);

    const { events } = useSelector(
        (state) => ({
            events: state.event.publicEvents,
        }),
        shallowEqual
    );

    const button = {
        width: '100%',
        display: 'flex',
        margin: '0 auto',
        maxWidth: '324px',
        '@media (max-width: 767px)': {
            maxWidth: '290px',
            width: '100%',
        },
    };

    return (
        <Box className={classes.exploreCont}>
            <Box className={classes.headerCont}>
                <TitleIcon text={title} />
                <Description classes={classes} desc={desc} />
            </Box>
            <Box className={classes.exploreEventsCont}>
                <Box className={classes.cont}>
                    <Box className={classes.eventsCont}>
                        {events !== 'NoPublic' && events.length && events.length >= 4
                            ? events.slice(0, 4).map((e) => <Event key={e.id} classes={classes} data={e} openModal={openModal} />)
                            : fakeEvents.map((e) => <Event fake={true} key={e.id} classes={classes} data={e} openModal={openModal} />)}
                    </Box>
                </Box>
                <Box className={classes.imgCont}>
                    <img src={image.xlJPG} alt="" width={942} height={753} className={classes.i} />
                </Box>
            </Box>
            <Box className={classes.options}>
                {options.map((o, j) => (
                    <div key={j} className={classes.optionCont}>
                        <Icon name={SVGNames.Checkmark} width={'24px'} height={'24px'} />
                        <Typography className={classes.option}>{o.title}</Typography>
                    </div>
                ))}
            </Box>
            <Box className={classes.exploreButton}>
                <OrangeButton
                    width={'290px'}
                    height={'48px'}
                    button={button}
                    buttonText={but}
                    handleClick={token ? () => route.push('/upcomingEvents') : openModal.auth}
                />
            </Box>
        </Box>
    );
};
