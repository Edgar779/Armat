import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {OrgansTableHeadFragment, OrgansTableBodyFragment, membersFragmentStyle} from './core';
import {TableContainer, Table, Paper} from '@material-ui/core';
import {SearchAndCreate} from 'fragments';
import {organizationActions} from 'store';
import {Loader, PaginationItem, SectionsButtons} from 'components';
import {FindLoad} from "utils";

export const Organizations = ({buttonText, handleCreate, handleClose, handleGetEventValues, type, }) => {
    const classes = membersFragmentStyle();
    const dispatch = useDispatch();
    const loader = FindLoad('GET_ORGANIZATION')
    const [userId, setUserId] = useState(null);
    const [page, setPage] = useState(1);

    const {organizations, organizationsReserve} = useSelector((state) => ({
        organizations: state.orgs.organizations,
        organizationsReserve: state.orgs.organizationsReserve,
    }));

    const handleChange = (ev) => {
        setUserId(ev.target.value);
        dispatch(organizationActions.searchOrg(ev.target.value));
    };

    const ClearSearchInput = (ev) => {
        setUserId('');
        dispatch(organizationActions.searchOrg(''));
    };

    const EventsValues = (ev) => {
        if (handleGetEventValues) {
            handleGetEventValues(ev);
        }
    };

    const changePage = (number) => {
        setPage(number);
    };

    const changeInfo = ( item ) =>{
        const orgType = item === 'Business' ? 'BUSINESS' : 'NON_PROFIT'
        const orgBy = type === 'my'
        dispatch(organizationActions.getOrg(orgType, orgBy))
    }

    return (
        <div>
            <div style={{display:'flex', width:'100%'}}>
             <div style={{marginRight:'24px'}}>
               <SectionsButtons
                   changeScreen={changeInfo}
                   first={ 'Business'}
                   second={'Nonprofit'}

               />
             </div>
                <SearchAndCreate
                    width={'250px'}
                    spaceBetween={true}
                    handleClearInput={ClearSearchInput}
                    handleChangeSearch={handleChange}
                    handleClose={handleClose}
                    handleCreate={handleCreate}
                    value={userId}
                    buttonText={type === 'my' && buttonText}
                    placeholder={'SearchPage Organizations'}
                    total={organizationsReserve.length}
                    type={''}
                />
            </div>

            <div className={classes.membersTableWrapper}>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <OrgansTableHeadFragment type={type} info={organizationsReserve}/>
                        {!!loader.length ? (
                            <Loader/>

                        ) : (
                            <OrgansTableBodyFragment
                                local={type}
                                type={type}
                                handleCreate={EventsValues}
                                eventsData={organizations[page - 1]}
                            />
                        )}
                    </Table>

                    <PaginationItem page={page} handleReturn={(number) => changePage(number)} count={organizations.length}/>
                </TableContainer>
            </div>
        </div>
    );
};
