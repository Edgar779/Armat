import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {httpRequestsOnSuccessActions, userActions} from "store";
import {TableHeadFragment, TableBodyFragment, membersFragmentStyle} from './core'
import {InviteModal, DoneMessage, Loader, PaginationItem} from "components";
import {TableContainer, Table, Paper} from "@material-ui/core";
import {SearchAndCreate} from 'fragments'
import {FindLoad, FindSuccess} from "../../utils";

export const Members = ({}) => {
    const classes = membersFragmentStyle()
    const dispatch = useDispatch()
    const [userId, setUserId] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [removeType, SetRemoveType] = useState(true)
    const [page, setPage] = useState(1)

    const {users, reserveUsers, message, errMessage} = useSelector(
        (state) => ({
            users: state.user.users,
            reserveUsers: state.user.reserveUsers,
            message: state.invite.message,
            errMessage: state.invite.errMessage,
        }),
    );

    useEffect(() => {
        if (errMessage || message) {
            setOpenModal(false)
        }
    }, [errMessage, message])

    const handleRemoveTypes = () => {
        SetRemoveType(true)
    }

    const handleClearRemoveTypes = () => {
        SetRemoveType(false)
    }

    const handleChange = (ev) => {
        SetRemoveType(false)
        setUserId(ev.target.value)
        dispatch(userActions.searchUser(ev.target.value))
    }

    const ClearSearchInput = () => {
        SetRemoveType(false)
        setUserId('')
        dispatch(userActions.searchUser(''))
    }

    const openInviteModal = () => {
        setOpenModal(!openModal)
    }

    const changePage = (number) => {
        setPage(number)
    }

    const loader = FindLoad('GET_USERS')

    const success = FindSuccess('SET_ROLE_INVITE')

    useEffect(() => {
        if (success.length) {
            setOpenModal(false)
            dispatch(httpRequestsOnSuccessActions.removeSuccess('SET_ROLE_INVITE'))
        }
    }, [success])

    return (
        <div>
            {errMessage ?
                <DoneMessage
                    type={'Error'}
                    text={'This user is already a verified member'}
                />
                :
                message &&
                <DoneMessage
                    text={message}
                />
            }
            <InviteModal
                ModalTittle={'Want to Invite People?'}
                ModalBody={'Inviting people enables them to become Organizer or Verified Members after registration'}
                open={openModal}
                handleClose={openInviteModal}
            />

            <SearchAndCreate
                handleClearInput={ClearSearchInput}
                handleChangeSearch={handleChange}
                handleCreate={openInviteModal}
                value={userId}
                placeholder={'SearchPage Members'}
                total={reserveUsers.length}
                type={'Members'}
                buttonText={'Invite People'}
            />


            <div className={classes.membersTableWrapper}>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHeadFragment
                            reserveUsers={reserveUsers}
                            handleClearRemoveTypes={handleClearRemoveTypes}
                            handleRemoveType={handleRemoveTypes}
                            removeType={removeType}
                        />
                        {!!loader.length ?
                            <Loader/>
                            :
                            <TableBodyFragment usersList={users[page - 1]}/>
                        }
                    </Table>

                    <PaginationItem
                        page={page}
                        handleReturn={(number) => changePage(number)}
                        count={users.length}/>

                </TableContainer>

            </div>

        </div>

    )
}