import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions} from 'store';
import { membersFragmentStyle } from './style';
import { TableHead, TableCell, TableRow } from '@material-ui/core';
import { SimplePopover, SortByAz } from 'components';

export const TableHeadFragment = ({ removeType, handleRemoveType, handleClearRemoveTypes, reserveUsers }) => {
    const [ByAz, setByAz] = useState(false);
    const classes = membersFragmentStyle();
    const dispatch = useDispatch();
    const { filterLoader } = useSelector((state) => ({
        filterLoader: state.user.filterLoader,
    }));

    const filterByAlphabetical = () => {
        dispatch(userActions.ByAlphabeticalUsers());
        setByAz(true);
        handleRemoveType();
        handleClearRemoveTypes();
    };

    const removeFilterByAlphabetical = () => {
        dispatch(userActions.ByAlphabeticalUsersDefault());
        setByAz(false);
        handleClearRemoveTypes();
    };

    return (
        <TableHead className={classes.tableHead}>
            <TableRow>
                <TableCell> № </TableCell>
                <TableCell>
                    Full Name
                    <SortByAz
                        filterLoader={filterLoader}
                        ByAz={ByAz}
                        filterByAlphabetical={filterByAlphabetical}
                        removeFilterByAlphabetical={removeFilterByAlphabetical}
                    />
                </TableCell>
                <TableCell>Invited By</TableCell>
                <TableCell>Email Address</TableCell>
                <TableCell>Phone Number</TableCell>

                <TableCell>
                    Role
                    {/*<SimplePopover*/}
                    {/*    handleRemoveType={handleRemoveType}*/}
                    {/*    removeType={removeType}*/}
                    {/*    filterType={'Filter the Role'}*/}
                    {/*    List={['Organizer', 'Verified User', 'Unverified User']}*/}
                    {/*/>*/}
                </TableCell>

                <TableCell>Action</TableCell>
                <TableCell>Status</TableCell>
            </TableRow>
        </TableHead>
    );
};
