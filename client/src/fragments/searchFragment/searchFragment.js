import { searchStyle } from './core/styles';
import React, { useState } from 'react';
import { useGlobalStyles } from '../../theme/globalStyles';
import MapMobile from '../eventsFragments/events/core/map';
import { Icon } from '../../components/icon';
import { SVGNames } from 'constants/index';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Cards } from './core/cards';
import { NoResult, PaginationItem, SortBar } from 'components';
import useWindowDimensions from '../../utils/width';
import { Colors } from '../../utils';

const SwipeableBottomSheet = dynamic(() => import('react-swipeable-bottom-sheet'), { ssr: false });

export const SearchFragment = ({ date, page, changePage, allDate, searchedDataReserve }) => {
    const classes = searchStyle();
    const global = useGlobalStyles();
    const rout = useRouter();
    const width = useWindowDimensions();
    const [open, setOpen] = useState(false);
    const [selectedType, setSelectedType] = useState(null);

    const handleOpenClose = () => {
        setOpen(!open);
    };

    const styles = {
        title: {
            backgroundColor: '#00bcd4',
            padding: '16px 0',
            boxSizing: 'border-box',
            color: 'white',
            minHeight: '100px',
            fontSize: '24px',
            textAlign: 'center',
        },
        text: {
            padding: '10px',
            boxSizing: 'border-box',
            backgroundColor: 'white',
            fontSize: '18px',
            height: '300px',
            overflow: 'auto',
        },
    };

    const textForShow = () => {
        if (rout.query.lat && rout.query.lng && rout.query.search) {
            return `${rout.query.search}  ${rout.query.address}`;
        } else if (rout.query.lat && rout.query.lng) {
            return ` ${rout.query.address}`;
        } else if (rout.query.search) {
            return rout.query.search;
        } else {
            return 'noTypedText';
        }
    };

    return (
        <div
            style={{
                marginBottom: '50px',
                height: 'auto',
                minHeight: width.width > 768 ? '100vh' : '100%',
            }}>
            <div className={global.tableteSearch}>
                {date && (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p className={classes.headerTitle}>
                            {textForShow() === 'noTypedText' ? 'Search Results' : `Search Results for "${textForShow()}"`}
                        </p>
                        <div>
                            <SortBar type={'searched'} info={searchedDataReserve} />
                        </div>
                    </div>
                )}
            </div>

            <div className={global.tableteSearch}>
                {date ? (
                    <div style={{ display: 'flex', marginTop: '30px' }}>
                        <div className={classes.GridCardWrapper}>
                            {date &&
                                date.map(
                                    (d, i) =>
                                        d !== undefined && (
                                            <div key={i} style={{ cursor: 'pointer' }}>
                                                <Cards pageType={'subscriptions'} shiwtch={'noSwitch'} key={i} data={d} />
                                            </div>
                                        )
                                )}
                            {date && date.length ? (
                                <PaginationItem
                                    type={'center'}
                                    page={page}
                                    handleReturn={(number) => changePage(number)}
                                    count={allDate && allDate.length}
                                />
                            ) : (
                                ''
                            )}
                        </div>

                        <div>
                            <MapMobile events={date} type={'searched'} Searched={date && date[0].address} pos={date && date[0].address} />
                        </div>
                    </div>
                ) : (
                    <NoResult noButton={'noButton'} events={'events'} />
                )}
            </div>

            <div className={global.desktopM}>
                {date ? (
                    <>
                        <button onClick={() => rout.push('/')} className={classes.backButton}>
                            <Icon name={SVGNames.BackFromEnd} width={'24px'} height={'24px'} color={Colors.ThemeGreen} />
                        </button>

                        <div style={{ marginLeft: '-16px' }}>
                            <MapMobile
                                events={date}
                                type={'mobileSearched'}
                                // Searched={Searched} pos={pos}
                            />
                        </div>

                        <SwipeableBottomSheet overflowHeight={98} open={open} onChange={handleOpenClose} overlay={false}>
                            <div
                                style={{ height: '98px', bottom: 0, width: '100%', borderRadius: '20px 20px 0 0' }}
                                onClick={handleOpenClose}
                                className={classes.swipeHeader}>
                                <div className={classes.line} />
                                <p className={classes.title}>Results for “events”</p>
                            </div>

                            <div style={styles.text}>
                                {date &&
                                    date.map(
                                        (d, i) =>
                                            d !== undefined && (
                                                <div key={i} style={{ cursor: 'pointer' }}>
                                                    <Cards pageType={'subscriptions'} shiwtch={'noSwitch'} key={i} data={d} />
                                                </div>
                                            )
                                    )}
                                {date && date.length ? (
                                    <PaginationItem
                                        type={'center'}
                                        page={page}
                                        handleReturn={(number) => changePage(number)}
                                        count={allDate && allDate.length}
                                    />
                                ) : (
                                    ''
                                )}
                            </div>

                            <div style={{ boxShadow: '0px 0px 12px #0052E01A' }} className={classes.footerWrapper}>
                                <button className={classes.mapButton} onClick={handleOpenClose}>
                                    Map <Icon name={SVGNames.MapIcon} width={'18px'} height={'18px'} />
                                </button>
                                <SortBar top="noTop" type={'searched'} info={searchedDataReserve} />
                            </div>
                        </SwipeableBottomSheet>
                    </>
                ) : (
                    <NoResult noButton={'noButton'} events={'events'} />
                )}
            </div>
        </div>
    );
};
