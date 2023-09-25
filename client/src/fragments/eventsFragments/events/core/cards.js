import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Box } from '@material-ui/core';
import { GridCard } from './gridCard';
import { ListCard } from './listCard';
import { cardsStyles } from './styles';
import { SortBar, FilterButton, Icon } from 'components';
import { EventsActions } from 'store';
import { SVGNames } from 'constants/index';
import useWindowDimensions from '../../../../utils/width';
import { Colors } from 'utils';

export const Cards = ({ data, handleEditEvent, pageType, handleChangeFilterModal }) => {
    const classes = cardsStyles();
    const router = useRouter();
    const width = useWindowDimensions();
    const dispatch = useDispatch();
    // const userType = checkUser();
    // let { openModal } = useContext(ModalContext);
    // const token = typeof window !== 'undefined' && localStorage.getItem('access-token') ? localStorage.getItem('access-token') : '';
    const [viewChange, setViewChange] = useState(pageType === 'subscriptions');

    useEffect(() => {
        if (width.width < 768 && viewChange === false) {
            setViewChange(true);
        }
    }, [width]);

    const handleGridViewChange = () => {
        setViewChange(false);
    };

    const handleListViewChange = () => {
        setViewChange(true);
    };

    const handleDelEvent = (ev) => {
        dispatch(EventsActions.deleteEvent(ev));
    };

    const handleEdit = (ev) => {
        handleEditEvent(ev);
    };

    const handleViewDetails = (id) => {
        if (pageType !== 'subscriptions') {
            router.push(`singleEvent?eventid=${id.eventId}`);
        }
    };

    // const title =
    //     pageType === 'subscriptions'
    //         ? 'My Subscriptions'
    //         : pageType === 'pastEvents'
    //         ? 'Past Events'
    //         : pageType === 'upcomingEvents'
    //         ? 'Upcoming Events'
    //         : 'My Events';

    // const handleCreate = () => {
    //     if (token) {
    //         window.location.replace('/createEvent');
    //     } else {
    //         openModal.auth();
    //     }
    // };

    return (
        <Box className={classes.cardsWrapper}>
            <Box className={classes.cardsContSearchAnfFilter}>
                <div className={classes.cardsContSearchAnfFilterWrapper}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <SortBar type={pageType} />

                            {pageType !== 'subscriptions' && (
                                <Box className="desktop">
                                    <Box className={classes.ListViewWrapperButtons}>
                                        <Box
                                            onClick={handleGridViewChange}
                                            style={{
                                                background: `${viewChange === false ? Colors.ThemeGreen : Colors.ThemeWhite}`,
                                            }}
                                            className={classes.ListViewButton}>
                                            <Icon
                                                name={SVGNames.GridViewFill}
                                                color={`${viewChange === true ? Colors.ThemeGreen : 'white'}`}
                                            />
                                        </Box>
                                        <Box
                                            onClick={handleListViewChange}
                                            style={{
                                                marginLeft: '16px',
                                                background: `${viewChange === true ? Colors.ThemeGreen : Colors.ThemeWhite}`,
                                            }}
                                            className={classes.ListViewButton}>
                                            <Icon
                                                name={SVGNames.ListingViewFill}
                                                color={`${viewChange === false ? Colors.ThemeGreen : 'white'}`}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            )}
                            <div style={{ margin: '0 8px' }}>
                                <FilterButton handleOpenModal={handleChangeFilterModal} />
                            </div>
                        </div>
                    </div>

                    <div>
                        {/*{title !== 'Past Events' && userType === false ? (*/}
                        {/*    <OrangeButton*/}
                        {/*        width={width.width < 768 ? '106px' : '160px'}*/}
                        {/*        height={'48px'}*/}
                        {/*        buttonText={`Create event`}*/}
                        {/*        handleClick={handleCreate}*/}
                        {/*    />*/}
                        {/*) : (*/}
                        {/*    ''*/}
                        {/*)}*/}
                    </div>
                </div>
            </Box>

            {/*{Loader === false ? (*/}
            <>
                <Box className={classes.GridCardWrapper}>
                    {viewChange &&
                        data &&
                        data.map((d, i) => (
                            <GridCard
                                handleViewDetails={(id) => handleViewDetails(id)}
                                pageType={pageType}
                                editEvent={handleEdit}
                                deleteEvent={(ev) => handleDelEvent(ev)}
                                data={d}
                                key={i}
                            />
                        ))}
                </Box>

                <Box className={classes.ListCardWrapper}>
                    {!viewChange &&
                        data &&
                        data.map((d, i) => (
                            <ListCard
                                creatorInfo={true}
                                handleViewDetails={(id) => handleViewDetails(id)}
                                pageType={pageType}
                                editEvent={handleEdit}
                                deleteEvent={(ev) => handleDelEvent(ev)}
                                data={d}
                                key={i}
                            />
                        ))}
                </Box>
            </>
            {/*) : (*/}
            {/*    <BigLoader />*/}
            {/*)}*/}
        </Box>
    );
};

export default Cards;
