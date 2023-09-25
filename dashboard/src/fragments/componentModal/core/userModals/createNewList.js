import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Autocomplete } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { CreateCancel, InputNoForm, MinLoader } from "components";
import Checkbox from "@mui/material/Checkbox";
import { httpRequestsOnSuccessActions, membersActions } from "store";
import { FindLoad, FindSuccess, useModal } from "utils";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ACTION_TYPE = "CREATE_USER_LIST";

export const CreateNewList = ({ userList }) => {
  const dispatch = useDispatch()
  const success = FindSuccess(ACTION_TYPE)
  const { close } = useModal()
  const [enteredList, setEnteredList] = useState();
  const [enteredIds, setEnteredIds] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [error, setError] = useState("");
  const addLoader = FindLoad(ACTION_TYPE)

  useEffect(() => {
    if(success){
        close()
         dispatch(httpRequestsOnSuccessActions.removeSuccess(ACTION_TYPE))
    }
  }, [success])

  const handleSubmit = ( ) => {
    if (groupName) {
      const sendInfo = {
        "listName": groupName,
      }
      enteredIds?.length ? sendInfo.members = enteredIds : delete sendInfo.members
      dispatch(membersActions.createUserList(sendInfo))
    } else {
      setError(
        !groupName?.length ? "groupName" : ""
      );
    }
  };

  const handleChangeList = (ev, newEv) => {
    setEnteredList(newEv);
    let arr = []
    newEv?.filter((i) => arr.push(i.id))
    setEnteredIds(arr)
    arr = []
  };

  const changeName = (ev) => {
    setGroupName(ev.target.value);
    setError('')
  };

  return (
    <div>

      <div className="invite-swipe-header mobile-page-flex" >
        <button onClick={() => close()} className='cancel-mobile'>Cancel</button>
        <p className='mobile-head-title'>Create a New List</p>
        <button type='button' onClick={handleSubmit} className='submit-mobile'>
          {addLoader?.length ?
            <MinLoader color={'#49B776'}/>
            :
            'Create'
          }</button>
      </div>

      <div className="organization-modal">
        <div className="invite-container">
        <p className="custom-modal-title desktop-page-view">Create a New List</p>
          <div className='create-new-list-wrapper'>
        <InputNoForm
          onChange={changeName}
          label={"User List name"}
          errMessage={error === "groupName" ? "Input is not field" : ""}
          value={groupName}
          placeholder={"Enter group name"}
          type={"text"}
          name="groupName"
          required={true}
        />
        <label className="label">Members</label>
        <Autocomplete
          multiple
          sx={{ minHeight: "48px" }}
          id="checkboxes-tags"
          options={userList}
          onChange={handleChangeList}
          disableCloseOnSelect
          getOptionLabel={(option) => option.member?.email}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                checked={selected}
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
              />
              {option?.member?.email}
            </li>
          )}
          renderInput={(params) => <TextField {...params} placeholder="" />}
        />
          </div>
        <div className="modal-footer tag-desktop-page-view">
          <CreateCancel
            actionType={ACTION_TYPE}
            title="Create"
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
      </div>
    </div>
  );
};
