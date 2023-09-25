import React, { useContext, useState } from 'react';
import router from 'next/router';
import { Loader, FilterButton, OrangeButton, PaginationItem, SimpleModal, NoResult } from 'components';
import { Cards, Filters, organizationsStyle } from './organizationNonProfit';
import { MobileFilter } from './organizationNonProfit/core';
import { FindLoad } from 'utils';
import useGlobalStyles from '../../theme/globalStyles';
import { ModalContext } from '../../contexts';

export const OrganizationsInfo = ({ organizations, orgCategories, type }) => {
    const classes = organizationsStyle();
    const global = useGlobalStyles();
    const loading = FindLoad('LOAD_SCREEN');
    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);
    const organizationsList = organizations[page - 1];
    const token = typeof window !== 'undefined' && localStorage.getItem('access-token') ? localStorage.getItem('access-token') : '';
    let { openModal } = useContext(ModalContext);

    const handleClick = () => {
        if (token) {
            router.push({
                pathname: '/createOrganizations',
                query: { type: type },
            });
        } else {
            openModal.auth();
        }
    };

    return (
        <div className={'container'}>
            <SimpleModal
                start="start"
                openDefault={open}
                handleOpenClose={() => setOpen(!open)}
                content={<MobileFilter type={type} orgCategories={orgCategories} close={() => setOpen(!open)} />}
            />
            <>
                <div className={classes.headerWrapper}>
                    <div className={classes.filterCreate}>
                        <p className={global.headerTitle}>{type}</p>
                        {token && (
                            <OrangeButton width={'200px'} height={'48px'} buttonText={`Suggest a ${type}`} handleClick={handleClick} />
                        )}
                    </div>
                    <div className={classes.filterButton}>
                        <FilterButton handleOpenModal={() => setOpen(!open)} />
                    </div>
                </div>
                <div className={classes.filterButtonTablete}>
                    <FilterButton handleOpenModal={() => setOpen(!open)} />
                </div>
                {loading.length ? (
                    <Loader text={'noText'} />
                ) : (
                    <div className={classes.organizationsWrapper}>
                        <div className={classes.filtersWrapper}>
                            <Filters type={type} orgCategories={orgCategories} token={token} />
                        </div>

                        {organizations && organizations.length === 0 ? (
                            <div className={classes.headerContPast}>
                                <NoResult events={'noOrgs'} type={type === 'Nonprofit' ? 'Nonprofits' : 'Businesses'} top={'noTop'} />
                            </div>
                        ) : (
                            <div className={classes.organizationsCards}>
                                {loading.length ? (
                                    <Loader text={'noText'} />
                                ) : (
                                    organizationsList &&
                                    organizationsList.map((i, j) => (
                                        <React.Fragment key={j}>
                                            <Cards item={i} />
                                        </React.Fragment>
                                    ))
                                )}

                                <PaginationItem page={page} handleReturn={(number) => setPage(number)} count={organizations.length} />
                            </div>
                        )}
                    </div>
                )}
            </>
        </div>
    );
};
