import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalStyles } from 'theme';
import { Loader, Picture, SimpleModal } from 'components';
import { FindLoad } from 'utils';
import { myTicketsStyles } from './fragments/styles';
import { Filters, TicketCards } from './fragments';
import { ticketActions } from 'store';
import { Box, Typography } from '@material-ui/core';
import { image } from '../../components/screens/constant';
import { noResultStyle } from '../../components/screens/style';
import { FilterButtonMobile } from '../../components/buttons/filterButton';
import MobileFilter from './fragments/mobileFilter';

export const MyTickets = ({}) => {
    const { myTickets } = useSelector((state) => ({
        myTickets: state.tickets.myTickets,
    }));
    const global = useGlobalStyles();
    const classes = myTicketsStyles();
    const resultClasses = noResultStyle();
    const loader = FindLoad('GET_MY_TICKETS');
    const dispatch = useDispatch();
    const [buttonsTab, setButtonsTab] = useState('PRESENT');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        getMyTickets();
    }, [buttonsTab]);

    const getMyTickets = () => {
        const sendInfo = {
            time: buttonsTab,
        };
        dispatch(ticketActions.getMyTickets(sendInfo));
    };

    const handleOpenClose = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.ticketPageWrapper} style={{ background: '#FAFAFA' }}>
            {loader.length ? (
                <Loader text={'noText'} />
            ) : (
                <div>
                    <div className={classes.ticketHeaderWrapper}>
                        <div className={classes.miTicketFilter}>
                            <p className={global.headerTitle}>My Ticket</p>

                            <div className={classes.filterButtonMobile}>
                                <FilterButtonMobile handleOpenModal={handleOpenClose} />
                            </div>
                        </div>
                        <div className={classes.tabsWrapper}>
                            <button
                                className={buttonsTab === 'PRESENT' ? classes.activeButton : classes.passiveButton}
                                onClick={() => setButtonsTab('PRESENT')}>
                                Present
                            </button>
                            <button
                                className={buttonsTab === 'PAST' ? classes.activeButton : classes.passiveButton}
                                onClick={() => setButtonsTab('PAST')}>
                                Past
                            </button>
                        </div>
                    </div>

                    <div className={classes.filterButtonTablete}>
                        <FilterButtonMobile handleOpenModal={handleOpenClose} />
                    </div>

                    {myTickets?.length ? (
                        <div className={classes.ticketBodyWrapper}>
                            <Filters buttonsTab={buttonsTab} />
                            <TicketCards buttonsTab={buttonsTab} />
                        </div>
                    ) : (
                        <Box className={resultClasses.noResultWrapper}>
                            <Box className={resultClasses.image}>
                                <Picture image={image} />
                            </Box>
                            <Typography className={resultClasses.noResultTitle}>Oops... No Results Found</Typography>
                        </Box>
                    )}
                </div>
            )}

            <SimpleModal
                start="start"
                openDefault={open}
                handleOpenClose={handleOpenClose}
                content={<MobileFilter buttonsTab={buttonsTab} handleChangeFilterModal={handleOpenClose} />}
            />
        </div>
    );
};
