import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { InputNoForm, MinLoader } from "components";
import { FindLoad, FindSuccess, useModal } from "utils";
import { httpRequestsOnSuccessActions, membersActions } from "store";
import { useNavigate } from "react-router-dom";

const actionType = 'DELETE_GROUPED_LIST'

export const DeleteUserGroupedList = ({ userGroupById }) => {
  const { close } = useModal();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const loader = FindLoad(actionType);
  const success = FindSuccess(actionType);
  const [groupName, setGroupName] = useState()
  const [error, setError] = useState('')

  useEffect(() => {
    if (success) {
      navigate('/members')
      close();
      dispatch(httpRequestsOnSuccessActions.removeSuccess(actionType))
    }
  }, [success]);

  const handleChange = (e) => {
    setError('')
    setGroupName(e.target.value)
  }

  const handleDelete = () => {
    if(groupName && groupName === userGroupById?.list?.name){
      dispatch(membersActions.deleteGroupList(userGroupById?.list?.id))
    }else{
      setError(groupName ? 'notMath' : 'groupName')
    }
  }

  return (
    <div className="delete-form">
      <div style={{justifyContent:'flex-start'}}>
        <p className="want-delete">
          {'Confirm List Deletion'}
        </p>
        <div style={{marginTop:'32px'}}>
        <InputNoForm
          onChange={handleChange}
          errMessage={error === "groupName" ? "Input is not field" :
            error === 'notMath' ? 'Not correct name' : ""}
          value={groupName}
          placeholder={"Enter name"}
          label="Enter List Name to Delete"
          type={"text"}
          name="groupName"
          required={true}
        />
        </div>
      </div>
      <div className="delete-modal-buttons-wrapper" style={{marginTop:'16px'}}>
        <button className="cancel-button" onClick={close}>
          Cancel
        </button>
        <button className="delete-button" onClick={handleDelete}>
          {loader ? <MinLoader color={'white'} /> :  'Delete'}
        </button>
      </div>
    </div>
  );
};
