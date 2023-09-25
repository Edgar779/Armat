import React from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'store';
import { Images } from 'theme';
import { membersFragmentStyle } from './style';
import { ModalPopup, NoInfo, SlicedText, SliceText, TableDeleteButton } from 'components';
import { Switch, TableBody, TableRow, TableCell } from '@material-ui/core';
import { UserInfoModal } from './userInfoModal';
import { FilterUsersRole } from './filterUsersRole';
import { RoleText } from './common';
import { TypeRow } from "../../../components/texts";

export const TableBodyFragment = ({ usersList }) => {
    const classes = membersFragmentStyle();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [userModalInfo, setUserModalInfo] = React.useState(null);
    const [modalType, setModalType] = React.useState(null);
    const [disable, setDisable] = React.useState(false);
    const [openUserInfo, SetOpenUserInfo] = React.useState(false);

    const handleOpen = (row, modalType) => {
        setOpen(true);
        setUserModalInfo(row);
        setModalType(modalType);
    };

    const handleClose = () => {
        setOpen(false);
        setTimeout(() => handleClearState(), 1000);
    };

    const handleClearState = () => {
        setUserModalInfo(null);
        setModalType(null);
    };

    const handleDelUser = (id) => {
        dispatch(userActions.deleteUser(id));
        handleClose();
    };

    return (
        <TableBody>
            <ModalPopup
                modalTitle={'Delete a Member'}
                modalText={`${modalType}`}
                buttonText={modalType}
                bodyText={` ? Deleting a member will permanently remove him/her from the system.`}
                user={userModalInfo && userModalInfo.fullName}
                handleClose={handleClose}
                handleDel={() => handleDelUser(userModalInfo.id)}
                open={open}
            />
            <UserInfoModal handleClick={() => SetOpenUserInfo('')} open={openUserInfo} />

            {usersList ? (
                usersList.map((row, i) => (
                    <TableRow className={classes.tableRow} key={i}>
                        <TableCell
                            onClick={() => SetOpenUserInfo(row)}
                            style={{
                                borderLeft: `5px solid ${
                                    row?.auth && row?.auth?.role === 'ORGANIZER'
                                        ? '#387DFF'
                                        : row.auth && row.auth.role === 'MEMBER'
                                        ? '#F07379'
                                        : row.auth && row.auth.role === ' VERIFIED_MEMBER'
                                        ? '#4FDC6F'
                                        : row.auth && row.auth.role === 'VERIFIED_MEMBER'
                                        ? '#4FDC6F'
                                        : ''
                                }`,
                            }}
                            className={classes.TableRowIndex}>
                            {i + 1}
                        </TableCell>
                        <TableCell onClick={() => SetOpenUserInfo(row)} component="th" scope="row">
                            {
                                <div className={classes.userInfo}>
                                    <img
                                        className={classes.userAvatar}
                                        src={row && row?.avatar ? row?.avatar?.thumbUrl : Images.avatar}
                                        alt={'Avatar'}
                                    />
                                    <SliceText
                                        OnMouseEnter={() => setTimeout(() => setDisable(true), 1000)}
                                        OnMouseLeave={() => setTimeout(() => setDisable(false), 10)}
                                        disable={disable}
                                        row={row?.fullName ? row?.fullName : '...'}
                                    />
                                </div>
                            }
                        </TableCell>

                        <TableCell onClick={() => SetOpenUserInfo(row)}>
                            <SlicedText
                                type={'name'}
                                size={15}
                                data={row?.auth && row?.auth?.inviterName ? row.auth.inviterName : 'Not set'}
                            />
                        </TableCell>

                        <TableCell onClick={() => SetOpenUserInfo(row)}>
                            <SlicedText type={'email'} size={15} data={row.email ? row.email : 'Not set'} />
                        </TableCell>

                        <TableCell onClick={() => SetOpenUserInfo(row)}>
                            <p className={classes.tableRowGrayText}> {row.phoneNumber ? row.phoneNumber : 'Not Set'} </p>
                        </TableCell>

                        <TableCell>
                            <div className={classes.memberTypeStyle}>
                                <span style={{ textTransform: 'unset' }}>
                                    <TypeRow text={row?.auth?.role ? row?.auth?.role : 'Not Set'}/>
                                    {/*<RoleText row={row.auth && row.auth.role} r={row} />*/}
                                </span>
                                {/*{row?.auth?.role !== 'ADMIN' && (*/}
                                {/*    <FilterUsersRole*/}
                                {/*        type={row.auth && row.auth.role}*/}
                                {/*        userEmail={row.email}*/}
                                {/*        List={*/}
                                {/*            row.auth && row.auth.role === 'ADMIN'*/}
                                {/*                ? ['Verified User', 'Unverified User']*/}
                                {/*                : ['Organizer', 'Verified User', 'Unverified User']*/}
                                {/*        }*/}
                                {/*    />*/}
                                {/*)}*/}
                            </div>
                        </TableCell>
                        <TableCell className={classes.tableDeleteText}>
                            {'Delete'}
                            <TableDeleteButton handleClick={() => handleOpen(row, 'delete')} />
                        </TableCell>

                        <TableCell className={classes.switcherBox}>
                            {row.status ? row.status : 'Deactivate'}
                            <Switch
                                className={row.status === 'Activate' ? classes.ActiveSwitcher : classes.switcher}
                                checked={true}
                                name="checkedB"
                                color="primary"
                            />
                        </TableCell>
                    </TableRow>
                ))
            ) : (
                <NoInfo text={'No Users Yet'} />
            )}
        </TableBody>
    );
};
