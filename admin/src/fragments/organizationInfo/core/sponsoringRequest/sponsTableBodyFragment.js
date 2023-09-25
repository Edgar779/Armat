import React from 'react';
import { useDispatch } from 'react-redux';
import { organizationActions } from 'store';
import { suggestedStyle } from './style';
import { TableBody, TableRow, TableCell } from '@material-ui/core';
import { Cancel, CheckCircle } from '@material-ui/icons';
import { FindLoad } from 'utils';
import { ButtonMiniLoader } from 'components';
import * as moment from "moment";

export const SponsTableBodyFragment = ({ info }) => {
    const classes = suggestedStyle();
    const dispatch = useDispatch();
    const [lodId, setLoadId] = React.useState('');
    const [type, setType] = React.useState('');
    const loader = FindLoad('APPROVE_REJECT_SPONSOR');

    const handleApprove = (status, id) => {
        setLoadId(id);
        setType(status);
        const date = {
            eventId: info.eventId,
            statusInfo: {
                status: status,
                orgId: info.orgId,
            },
        };
        dispatch(organizationActions.approveOrRejectSponsor(date));
    };


    return (
        <TableBody>

            <TableRow className={classes.tableRow}>
                <TableCell >
                    {info.createdAt ? moment(info.createdAt).format('MM/DD/YYYY') : '...'}
                </TableCell>

                <TableCell >{info && info.requesterName}</TableCell>
                <TableCell >{info && info.eventTitle}</TableCell>
                <TableCell className={classes.TableRowIndex}>{info.note ? info.note : <span style={{color:'#545F7EB3'}}>No Note</span>}</TableCell>

                <TableCell>
                    <div className={classes.actionsButtons}>
                        <button onClick={() => handleApprove('APPROVED', info.id)}>
                            {lodId === info.id && loader.length && type === 'APPROVED' ? (
                                <ButtonMiniLoader color={'#4FDC6F'}/>
                            ) : (
                                <CheckCircle style={{ color: '#4FDC6F', fontSize: '24px' }} />
                            )}
                        </button>
                        <button onClick={() => handleApprove('REJECTED', info.id)}>
                            {lodId === info.id && loader.length && type === 'REJECTED' ? (
                                <ButtonMiniLoader color={'#F07379'}/>
                            ) : (
                                <Cancel style={{ color: '#F07379', fontSize: '24px' }} />
                            )}
                        </button>
                    </div>
                </TableCell>
            </TableRow>
        </TableBody>
    );
};
