import React, { useEffect, useState } from 'react';
import * as moment from 'moment';
import { useHistory } from 'react-router-dom';
import { FindLoad, FindSuccess } from 'utils';
import { Breadcrumbs, CreateButton, ModalPopup } from 'components';
import { Images } from 'theme';
import image from 'assets/images/image.png';
import { Claims, Item, SuggestedEdits, SponsoringReq, organizationInfoStyles } from './core';
import { useDispatch, useSelector } from 'react-redux';
import { httpRequestsOnSuccessActions, organizationActions } from 'store';

export const OrganizationInfo = ({ info, handleOpenImages, handleCreate, handleEdit, orgCategories, selected }) => {
    const classes = organizationInfoStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const success = FindSuccess('DELETE_ORGANIZATION');
    const loading = FindLoad('DELETE_ORGANIZATION');
    const [selectedInfo, setSelectedInfo] = useState('')

    useEffect(() => {
        if(selected){
            setSelectedInfo(selected)
        }
    }, [selected])

    const { claims, edits, pendingSponsors } = useSelector((state) => ({
        claims: state.orgs.claims,
        edits: state.orgs.edits,
        pendingSponsors: state.orgs.pendingSponsors,
    }));

    useEffect(() => {
        if (success.length) {
            dispatch(httpRequestsOnSuccessActions.removeSuccess('DELETE_ORGANIZATION'));
            handleClose();
            history.push('/organizations');
        }
    }, [success]);

    const handleArchive = (i) => {
        const data = {
            status: { status: i },
            info: info.id,
            type: info.type,
        };
        dispatch(organizationActions.setStatus(data, 'byId'));
    };

    const handleClose = () => {
        setOpen(false);
    };

    const DeleteEvent = () => {
        const infoType = 'BUSINESS';
        dispatch(organizationActions.deleteOrg(info.id, infoType));
    };

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div>
            <ModalPopup
                loading={!!loading.length}
                modalTitle={'Delete an Business'}
                modalText={`Delete an Business`}
                buttonText={'Delete'}
                bodyText={` ? Deleting a Business will permanently remove it from the system.`}
                handleClose={handleClose}
                handleDel={DeleteEvent}
                open={open}
            />
            <div className={classes.breadWrapper}>
                <Breadcrumbs
                    parentLink={'/organizations'}
                    parent={'Organizations Created by me'}
                    child={'Organization Details'}
                />
                <CreateButton
                    handleClick={handleCreate}
                    width={'250px'}
                    ButtonText={'Create an Organization'}
                />
            </div>
            <div className={classes.infoWrapper}>
                <div className={classes.flaxAble}>
                    <div className={classes.imageAndNameWrapper}>
                        <div className={classes.imageAndName}>
                            <div className={classes.nameDateWrapper}>
                                <img className={classes.businessImage}
                                     src={info?.images?.length ? info.images[info.mainImage ? info.mainImage : 0].url : Images.download}
                                     alt='image'
                                />
                                <div className={classes.nameDate}>
                                    <p className={classes.title}
                                       style={{ marginBottom: '16px' }}>{info && info.name}</p>
                                    <p className={classes.sub}>Created: {info && moment(info.createdAt).format('MM/DD/YYYY')}</p>
                                </div>
                            </div>
                            {info && info.images &&
                                <div>
                                    <button onClick={handleOpenImages} className={classes.photosButton}>
                                        <img src={image} alt={'image'} />
                                        <p>View Photos</p>
                                    </button>
                                </div>
                            }
                        </div>
                        <div className={classes.businessInfoWrapper}>
                            <Item title={'Name:'} value={info && info.name} />
                            {selectedInfo?.length ? <Item title={'Categories'} type={'Category'} column={true} categItem={selectedInfo} /> : null}
                            {info?.description?.length > 15 &&
                                <Item title={'Description'} value={info?.description} column={true} />}
                        </div>
                        <p style={{ marginTop: '30px' }} className={classes.title}>Contacts</p>
                        <div className={classes.businessInfoWrapper}>
                            {info?.address &&  <Item title={'Address:'} value={info?.address?.formattedAddress} />}
                            {info?.phoneNumber && <Item title={'Phone Number:'} value={info && info.phoneNumber} />}
                            {info?.email && <Item title={'Email:'} value={info && info.email} />}
                            {info?.website && <Item title={'Website:'} value={info && info.website} type='website' />}
                        </div>

                    </div>
                    <Claims
                        handleOpen={handleOpen}
                        handleEdit={handleEdit}
                        claims={claims}
                        item={info}
                        handleArchive={handleArchive}
                    />
                </div>
                <SuggestedEdits edits={edits} selected={selected} />
                <SponsoringReq info={pendingSponsors} />
            </div>
        </div>
    );
};