import {OrganizationInfo, ShowImages} from "fragments";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {organizationActions, organizerActions} from "store";
import {FindLoad} from "utils";
import {Loader} from "components";
import {OrgsModal} from "../../fragments/createOrgs/orgsModal";

export const SingleOrganization = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const loader = FindLoad('GET_ORGANIZATION_BY_ID')
    const [open, setOpen] = useState(false)
    const [modalOpen, setOpenModal] = useState(false)
    const [eventInfo, setEventInfo] = useState('')
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        dispatch(organizationActions.getOrgById(params.id));
        dispatch(organizationActions.getClaims(params.id));
        dispatch(organizationActions.getEdits(params.id))
        dispatch(organizationActions.getPendingSponsors(params.id))
        dispatch(organizerActions.getOrgCat())
    }, [])

    const {organizationsById, claims, orgCategories} = useSelector((state) => ({
        organizationsById: state.orgs.organizationsById,
        claims: state.orgs.claims,
        orgCategories: state.orgCategories.orgCategories,
    }));

    const handleOpenClose = () => {
        setOpen(!open);
    };

    const handleOpenCreateModal = () => {
        setOpenModal(!modalOpen)
        setEventInfo(organizationsById)
    }

    const handleCloseInfoModal = () => {
        setOpenModal(!modalOpen)
        setEventInfo('')
    }

    function getParent(model, id) {
        let path,
            item = {
                id: model.id,
                text: model.text,
            };
        if (!model || typeof model !== 'object') return;
        if (model.id === id) return [item];
        (model.items || []).some((child) => (path = getParent(child, id)));
        return path && [item, ...path];
    }

    const handleGetTree = () => {
        const newItems = (orgCategories.length) && organizationsById.categories.map((h) => orgCategories.map((i) => getParent(i, h.id)));
        const arr = [];
        newItems && newItems.filter((k) => k.map((l) => l !== undefined && arr.push(l)));
        setSelected([...arr]);
    };

    useEffect(() => {
        if (organizationsById.categories && orgCategories) {
            handleGetTree();
        }
    }, [organizationsById && orgCategories]);

    return (
        <div style={{paddingBottom: '20px'}}>
            <OrgsModal
                type={'byId'}
                eventInfo={eventInfo}
                open={modalOpen}
                handleClose={handleCloseInfoModal}
            />
            {loader.length ?
                <Loader/>
                :
                open === true ?
                    <ShowImages
                        handleClick={handleOpenClose}
                        images={organizationsById && organizationsById.images && organizationsById.images}
                    />
                    :
                    <OrganizationInfo
                        selected={selected}
                        orgCategories={orgCategories}
                        handleEdit={handleOpenCreateModal}
                        handleCreate={handleCloseInfoModal}
                        handleOpenImages={handleOpenClose}
                        info={organizationsById}
                        claims={claims}
                    />
            }
        </div>
    )
}