import React, {useState} from 'react';
import {membersFragmentStyle} from './style';
import {TableHead, TableRow, TableCell} from '@material-ui/core';
import {SortByAz} from 'components';
import {useDispatch} from 'react-redux';
import {organizationActions} from 'store';
import {OrgPopover} from "./common/popover";

export const OrgansTableHeadFragment = ({type, info}) => {
    const [ByAz, setByAz] = useState(false);
    const [ByAzTitle, setByAzTitle] = useState(false);
    const dispatch = useDispatch();

    const filterByAlphabetical = (name) => {
        dispatch(organizationActions.aToZ(name, type));
        name === 'Organizer' ? setByAz(true) : setByAzTitle(true);
    };

    const removeFilterByAlphabetical = (name) => {
        dispatch(organizationActions.atoZDefault(type));
        setByAz(false);
        setByAzTitle(false);
    };

    const classes = membersFragmentStyle();
    return (
        <TableHead className={classes.tableHead}>
            <TableRow>
                <TableCell style={{borderLeft:'5px solid #387DFF1A'}} className={classes.TableHeadNumber}>Name
                    <SortByAz
                        filterLoader={false}
                        ByAz={ByAzTitle}
                        filterByAlphabetical={filterByAlphabetical}
                        removeFilterByAlphabetical={() => removeFilterByAlphabetical('Event')}
                    />
                </TableCell>
                {type === 'users' && <TableCell>Ctreated by</TableCell>}
                <TableCell>Address</TableCell>
                <TableCell>Phone Number</TableCell>
                {type === 'my' && <TableCell>Email</TableCell>}
                <TableCell>Edits</TableCell>
                <TableCell>Action</TableCell>
                <TableCell/>
                <TableCell>
                    Status
                    <OrgPopover
                        info={info}
                        className={'BigLeft'}
                        filterType={'Filter the Status'}
                        List={type === 'my' ? [`Approved`, `Archived`] : [`Approved`, `Rejected`, `Archived`]}
                    />
                </TableCell>
            </TableRow>
        </TableHead>
    );
};
