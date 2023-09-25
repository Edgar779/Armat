import React, { useEffect } from 'react';
import { useModal, MinLoader } from 'components';
import { useDispatch } from 'react-redux';
import { membersActions, httpRequestsOnSuccessActions } from 'store';
import { FindLoad, FindSuccess } from 'utils';

export const DeleteTag = () => {
    /**
     * Hooks.
     */

    const { closeModal, params } = useModal();

    const dispatch = useDispatch();
    const sendId = params?.sendId;
    const sendOrgId = params?.sendOrgId;
    const tagId = params?.tagId;
    // Load Type Tags.
    const deleteTagSuccess = FindSuccess('PATCH_ORG_USER_TAG_DELETE');
    const deleteTagLoad = FindLoad('PATCH_ORG_USER_TAG_DELETE');

    const handleRemove = () => {
        const sendInfo = {};
        sendInfo.id = params?.sendId;
        sendInfo.member = {};
        sendInfo.org = params?.sendOrgId;
        sendInfo.userType = params?.userType;
        sendInfo.tags = [params?.tagInput];
        dispatch(membersActions.patchOrgUserIdOrgIdTagIdDelete(sendId, sendOrgId, tagId, sendInfo));
    };

    useEffect(() => {
        if (deleteTagSuccess) {
            dispatch(httpRequestsOnSuccessActions.removeSuccess('PATCH_ORG_USER_TAG_DELETE'));
            closeModal();
        }
    }, [deleteTagSuccess]);

    return (
        <div className="">
            <div className="tag-banner">
                <h4 className="banner-title">Are you sure you want to remove this tag?</h4>
            </div>
            <div className="btn-wrapper">
                <button type="button" className="btn-keep" onClick={() => closeModal()}>
                    No, keep it
                </button>

                <button type="button" className="btn-remove" onClick={() => handleRemove()}>
                    {deleteTagLoad?.length ? <MinLoader color={'#49b776'} /> : <span> No, keep it </span>}
                </button>
            </div>
        </div>
    );
};
