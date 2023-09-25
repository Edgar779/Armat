import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { buyTicketStyles } from '../styles';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import { Icon } from 'components';
import { SVGNames } from '../../../../../constants';
import moment from 'moment';
import { TextRow } from '../../../../../components/screens/slicedText';
import { dateConverter } from '../../../../../utils/dateConverter';

export const TicketCategory = ({ eventTickets, setSelectedTickets, selectedTickets, changeScreen, event }) => {
    const classes = buyTicketStyles();
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleChangeCount = (e, item, key) => {
        if (expanded !== key) {
            setExpanded(key);
        }

        const current = selectedTickets?.find((i) => i.id === item?.id);
        const availableCount = item?.capacity - item?.soldOut;
        const currentCount = +e?.target?.value;
        const checkMax = !item?.maxOrder ? true : !current ? true : item?.maxOrder && currentCount <= item?.maxOrder;

        if (checkMax && currentCount <= availableCount) {
            if (e?.target?.value === '0') {
                const newObj = [...selectedTickets];
                newObj?.filter((i, j) => {
                    if (i?.id === item?.id) {
                        newObj.splice(j, 1);
                    }
                });
                setSelectedTickets(newObj);
            } else {
                if (current) {
                    const newObj = [...selectedTickets];
                    newObj?.filter((i, j) => {
                        if (i?.id === item?.id) {
                            newObj[j].count = +e?.target?.value;
                        }
                    });
                    setSelectedTickets(newObj);
                } else {
                    const ticket = [
                        ...selectedTickets,
                        {
                            name: item?.name,
                            price: item?.price,
                            count: +e?.target?.value,
                            id: item?.id,
                        },
                    ];
                    setSelectedTickets(ticket);
                }
            }
        }
    };

    const handleAdd = (e, item, key) => {
        e.preventDefault();
        e.stopPropagation();
        if (expanded !== key) {
            setExpanded(key);
        }
        const availableCount = item?.capacity - item?.soldOut;
        const current = selectedTickets?.find((i) => i.id === item?.id);
        const currentCount = current?.count ? current?.count + 1 : 0;
        const checkMax = !item?.maxOrder ? true : !current ? true : item?.maxOrder && currentCount <= item?.maxOrder;

        if (checkMax && currentCount <= availableCount)
            if (current) {
                const newObj = [...selectedTickets];
                newObj?.filter((i, j) => {
                    if (i?.id === item?.id) {
                        newObj[j].count = i?.count + 1;
                    }
                });
                setSelectedTickets(newObj);
            } else {
                const ticket = [
                    ...selectedTickets,
                    {
                        name: item?.name,
                        price: item?.price,
                        count: 1,
                        id: item?.id,
                    },
                ];
                setSelectedTickets(ticket);
            }
    };

    const handleRemove = (e, item, key) => {
        e.preventDefault();
        e.stopPropagation();
        if (expanded !== key) {
            setExpanded(key);
        }
        const current = selectedTickets?.find((i) => i.id === item?.id);
        if (current?.count - 1 === 0) {
            const newObj = [...selectedTickets];
            newObj?.filter((i, j) => {
                if (i?.id === item?.id) {
                    newObj.splice(j, 1);
                }
            });
            setSelectedTickets(newObj);
        } else {
            const newObj = [...selectedTickets];
            newObj?.filter((i, j) => {
                if (i?.id === item?.id) {
                    newObj[j].count = i?.count - 1;
                }
            });
            setSelectedTickets(newObj);
        }
    };

    const renderCurrent = (item) => {
        const current = selectedTickets?.find((i) => i.id === item?.id);
        if (current) {
            return current;
        } else {
            return null;
        }
    };

    const checkCount = (item) => {
        if (item?.soldOut < item?.capacity) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <>
            <div>
                <div className={classes.ticketCategoryEventTitle}>
                    <p className={classes.mobileEventTitle}>
                        <TextRow name={event?.title} textWidth={10} />
                    </p>
                    <p className={classes.mobileEventDate}>{`${dateConverter(event)} ${
                        event?.allDay ? 'All Day' : dateConverter(event, 'LT')
                    } `}</p>
                </div>
                <p className={classes.choseTicketTitle}>Choose Ticket Category</p>
                <div className={classes.ticketsWrapper}>
                    <div className={classes.ticketInfoWrapper}>
                        {eventTickets?.tickets?.map(
                            (i, j) =>
                                checkCount(i) && (
                                    <Accordion
                                        key={j}
                                        expanded={expanded === j}
                                        onChange={i?.status === 'INACTIVE' ? () => {} : handleChange(j)}
                                        style={{ width: '100%' }}
                                        className={classes.accordionWrapper}>
                                        <AccordionSummary
                                            style={i?.status === 'INACTIVE' ? { opacity: '0.5' } : {}}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            className={classes.accordionSummary}>
                                            <div className={classes.accordionSummaryWrapper}>
                                                <div className={classes.titleAndPrice}>
                                                    <p className={classes.ticketTitle}>
                                                        <TextRow name={i?.name} textWidth={10} />
                                                    </p>
                                                    <p className={classes.ticketPrice}>
                                                        <NumericFormat
                                                            placeholder={!i?.price ? 0 : ''}
                                                            value={i?.price ? i?.price : null}
                                                            displayType={'text'}
                                                            thousandSeparator={true}
                                                            prefix={'$'}
                                                        />
                                                    </p>
                                                </div>

                                                <div className={classes.showMoreAndCounter}>
                                                    <button className={classes.showMoreInfoBtn}>
                                                        Show more info
                                                        <Icon name={SVGNames.DownArrow} style={{ marginRight: '8px' }} />
                                                    </button>

                                                    <div className={classes.actionsStyle}>
                                                        <button
                                                            disabled={i?.status === 'INACTIVE'}
                                                            className={classes.removeBtn}
                                                            onClick={(e) => handleRemove(e, i, j)}>
                                                            <Icon name={SVGNames.Minuse} />
                                                        </button>
                                                        <input
                                                            disabled={i?.status === 'INACTIVE'}
                                                            type="number"
                                                            className={classes.inputStyle}
                                                            value={renderCurrent(i) ? renderCurrent(i)?.count : 0}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                            }}
                                                            onChange={(e) => handleChangeCount(e, i, j)}
                                                            max={i?.maxOrder}
                                                            min={i?.minOrder}
                                                        />
                                                        <button
                                                            disabled={i?.status === 'INACTIVE'}
                                                            className={classes.addBtn}
                                                            onClick={(e) => handleAdd(e, i, j)}>
                                                            <Icon name={SVGNames.Pluse} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{ width: '100%' }}>
                                                <p className={classes.accessDescription}>{i?.description}</p>

                                                <div className={classes.ticketInformation}>
                                                    <div>
                                                        {i?.endDate && <p>{`Sales end on  ${moment(i?.endDate).format('ll')}.`}</p>}
                                                        <div
                                                            className={classes.ticketCountWrapper}
                                                            style={{ display: 'flex', alignItems: 'center' }}>
                                                            <p>
                                                                Limited availability - only
                                                                <span style={{ fontWeight: 700 }} className={classes.ticketCount}>
                                                                    {i?.capacity - i?.soldOut}
                                                                </span>
                                                                tickets remaining.
                                                            </p>
                                                            {/*<p>Limited availability - only </p>*/}
                                                            {/*<span className={classes.ticketCount}>{i?.capacity - i?.soldOut}</span>*/}
                                                            {/*<p>tickets remaining.</p>*/}
                                                        </div>
                                                    </div>
                                                    {i?.maxOrder && (
                                                        <p
                                                            style={{
                                                                fontWeight: 600,
                                                                color: '#F07379',
                                                            }}>{`Maximum of ${i?.maxOrder} tickets per order.`}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                )
                        )}
                    </div>
                </div>
            </div>

            <div className={classes.continueBtnWrapper}>
                <button
                    disabled={!selectedTickets?.length}
                    className={classes.continueBtn}
                    style={!selectedTickets?.length ? { background: '#F4F4F4' } : {}}
                    onClick={() => changeScreen('paymentTypes')}>
                    Continue
                </button>
            </div>
        </>
    );
};
