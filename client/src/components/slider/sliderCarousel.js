import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Carousel from 'nuka-carousel';
import { useRouter } from 'next/router';
import { carouselStyle } from './styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { EventsActions } from 'store';
import { CreateEventModal } from 'fragments';
import ListCard from '../../fragments/eventsFragments/events/core/listCard';

export const SliderCarousel = ({ info, screenType, creatorInfo, sponsor }) => {
    const classes = carouselStyle();
    const router = useRouter();
    const dispatch = useDispatch();
    const [editEventInfo, setEditEventInfo] = useState('');

    const [width, setWidth] = useState(typeof window !== 'undefined' && window?.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });
    }, []);

    const size =
        width && width > 320 && width < 499
            ? 1.1
            : width > 499 && width < 767
            ? 1.5
            : width > 767 && width < 1279
            ? 2
            : width > 1279
            ? 3.8
            : 1;

    const handleEdit = (ev) => {
        setEditEventInfo(ev);
    };

    const handleViewDetails = (id) => {
        router.push(`singleEvent?eventid=${id?.eventId}`);
    };

    const handleDelEvent = (ev) => {
        if (sponsor === 'sponsor') {
            const date = {
                eventId: ev,
                statusInfo: {
                    status: 'REJECTED',
                    orgId: router.query.orgid,
                },
            };
            dispatch(EventsActions.approveOrRejectSponsor(date));
        } else {
            dispatch(EventsActions.deleteEvent(ev, 'byCreator', router.query.orgid));
        }
    };

    return (
        <div className={classes.carouselWrapper}>
            {editEventInfo && (
                <CreateEventModal
                    eventInfo={editEventInfo}
                    handleClose={() => setEditEventInfo('')}
                    EventTitle={'Edit an Event'}
                    type="byOrgId"
                />
            )}
            {screenType === 'allEvents' ? (
                <div className={classes.eventColumns}>
                    {info
                        ? info.map((d, i) => (
                              <div className={classes.cards} key={i}>
                                  <ListCard
                                      sponsor={sponsor}
                                      creatorInfo={creatorInfo}
                                      handleViewDetails={(id) => handleViewDetails(id)}
                                      editEvent={handleEdit}
                                      deleteEvent={(ev) => handleDelEvent(ev)}
                                      data={d}
                                      key={i}
                                  />
                              </div>
                          ))
                        : ''}
                </div>
            ) : (
                <div className={classes.sliderWrapper}>
                    <Carousel
                        slidesToShow={size}
                        slidesToScroll={1}
                        style={{ outline: 'none' }}
                        renderBottomCenterControls={false}
                        renderCenterLeftControls={({ previousSlide }) =>
                            info &&
                            info?.length > size && (
                                <button style={{ marginLeft: '-20px' }} className={classes.leftButton} onClick={previousSlide}>
                                    <ChevronLeftIcon style={{ color: 'white' }} />
                                </button>
                            )
                        }
                        renderCenterRightControls={({ nextSlide }) =>
                            info &&
                            info?.length > size && (
                                <button style={{ marginRight: '-20px' }} className={classes.leftButton} onClick={nextSlide}>
                                    <ChevronRightIcon style={{ color: 'white' }} />
                                </button>
                            )
                        }>
                        {info &&
                            info.map((d, i) => (
                                <div className={classes.cards} key={i}>
                                    <ListCard
                                        sponsor={sponsor}
                                        creatorInfo={creatorInfo}
                                        handleViewDetails={(id) => handleViewDetails(id)}
                                        editEvent={handleEdit}
                                        deleteEvent={(ev) => handleDelEvent(ev)}
                                        data={d}
                                        key={i}
                                    />
                                </div>
                            ))}
                    </Carousel>
                </div>
            )}
        </div>
    );
};
