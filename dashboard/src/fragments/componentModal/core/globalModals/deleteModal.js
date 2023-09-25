import React, { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { MinLoader } from 'components';
import { FindLoad, FindSuccess, SavePage, useModal } from "utils";
import { httpRequestsOnSuccessActions } from "store";

export const DeleteModal = ({ actionType, page, title, subTitle, deleteText, handleDelete, handleSuccess, customSuccess }) => {
    const { close } = useModal();
    const dispatch = useDispatch()
    const loader = FindLoad(actionType);
    const success = FindSuccess(actionType);
    const navigate = useNavigate();
    const location = useLocation();
    const info = location?.state;

    useEffect(() => {
      if(customSuccess && success){
        close();
        dispatch(httpRequestsOnSuccessActions.removeSuccess(actionType))
      }else {
        if (success) {
          close();
          handleSuccess && handleSuccess()
          dispatch(httpRequestsOnSuccessActions.removeSuccess(actionType))
          SavePage(navigate, info, info, page);
        }
      }
    }, [success]);

    return (
        <div className="delete-form">
            <div className="delete-modal-title">
                {/*{params?.noTitle ? (*/}
                {/*    ' '*/}
                {/*) : (*/}
                    <p className="want-delete">
                      {title}
                        {/*Are you sure you want to*/}
                        {/*<br />*/}
                        {/*delete selected members <span className="want-delete"> ? </span>*/}
                    </p>
                {/*)}*/}
            </div>
            <div className="delete-subtitle">{subTitle ? subTitle : ''}</div>
            <div className="delete-modal-buttons-wrapper">
                <button className="cancel-button" onClick={close}>
                    Cancel
                </button>
              <button className="delete-button" onClick={() => handleDelete()}>
                {loader ? <MinLoader color={'white'} /> : deleteText ? deleteText : 'Yes, Delete'}
              </button>
            </div>
        </div>
    );
};
