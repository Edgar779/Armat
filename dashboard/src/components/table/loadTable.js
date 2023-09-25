import React, { useState, useEffect, Fragment } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FindLoad, SendPageSave } from 'utils';
import { PaginationItem, Loader } from 'components';
import { TableNoInfo } from './tableNoInfo';
import BasicPopover from './poper';

export const LoadTable = ({
    head,
    body,
    entries,
    list,
    loadingType,
    handleClick,
    noText,
    margin,
    status,
    listCount,
    handleClickButton,
    handleOpenCollapse,
}) => {
    /**
     * Hooks.
     */

    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const info = navigate?.location?.state;
    const loader = FindLoad(loadingType);
    const miniLoadSuccess = false;
    const [listInfo, setListInfo] = useState('');
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (list) {
            setListInfo(list);
        }
    }, [list]);

    const changePage = (number) => {
        SendPageSave(number, info, navigate);
    };

    const handleName = (item, name) => {
        handleClickButton(item, name);
    };

    const renderItems = (i, item) => {
        if (item) {
            if (item?.button) {
                return item?.button((name) => handleName(i, name), i, miniLoadSuccess?.data === i.id);
            } else {
                return item?.rowText(i);
            }
        }
    };

    const handleCollapse = (e, index) => {
        setOpen(index === open ? '' : index);
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    if (loader?.length) return <Loader />;

    return (
        <div className="load-table-styles">
            <div style={margin ? { margin: 0 } : {}} className="table-wrapper">
                <TableContainer className="table-container" component={Paper}>
                    <Table stickyHeader className="table" size="small" aria-label="adense table">
                        <TableHead className="table-head">
                            <TableRow>
                                {head &&
                                    head.map((i, j) => (
                                        <TableCell key={j}>
                                            {i?.type === 'status' ? (
                                                <BasicPopover
                                                    name={i?.name}
                                                    title={i?.title}
                                                    list={i?.list}
                                                    labelTitle={i?.type === 'status' ? 'Filter the Status' : 'Filter the Type'}
                                                />
                                            ) : (
                                                <div>{i?.title}</div>
                                            )}
                                        </TableCell>
                                    ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listInfo?.length ? (
                                listInfo?.map((i, index) => (
                                    <Fragment key={index}>
                                        <TableRow className="table-row">
                                            {body?.length &&
                                                body?.map((item, key) => {
                                                    if (item) {
                                                        return (
                                                            <TableCell
                                                                key={key}
                                                                onClick={() =>
                                                                    item?.notClickable !== true && handleClick && handleClick(i.id)
                                                                }>
                                                                {renderItems(i, item) || 'Not Set'}
                                                            </TableCell>
                                                        );
                                                    }
                                                })}
                                        </TableRow>
                                    </Fragment>
                                ))
                            ) : (
                                <div style={{ height: '100px' }}>
                                    <TableNoInfo text={`No ${noText} Yet`} />
                                </div>
                            )}
                        </TableBody>
                    </Table>
                    {listCount > 0 ? (
                        <PaginationItem
                            listLength={listCount}
                            entries={entries}
                            page={page}
                            handleReturn={(number) => changePage(number)}
                            count={listCount}
                        />
                    ) : (
                        ''
                    )}
                </TableContainer>
            </div>
        </div>
    );
};
