import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Autocomplete, FormControl, RadioGroup, FormControlLabel, Radio, Box } from "@mui/material";
import { InputNoForm, MinLoader, SubmitButton } from "components";
import { httpRequestsOnSuccessActions, membersActions } from "store";
import { FindLoad, FindSuccess, useModal, useWindowDimensions } from "utils";

export const AddUserList = ({ enteredIds }) => {
  const { userGroupList, userGroupById } = useSelector((state) => ({
    userGroupList: state.members.userGroupList,
    userGroupById: state.members.userGroupById
  }));
  const [radioValue, setRadioValue] = useState("EXISTING");
  const [groupName, setGroupName] = useState("");
  const [error, setError] = useState("");
  const [enteredList, setEnteredList] = useState();
  const ACTION_TYPE = radioValue === "NEW" ? "CREATE_USER_LIST" : "ASSIGN_USERS_TO_LIST";
  const loader = FindLoad(ACTION_TYPE)
  const success = FindSuccess(ACTION_TYPE);
  const dispatch = useDispatch();
  const { close } = useModal();
  const { width } = useWindowDimensions();

  useEffect(() => {
    return() => resetValues()
  },[])

  const resetValues = ( ) => {
    setRadioValue(width > 767 ? 'EXISTING' : null)
    setGroupName(null)
    setError(null)
    setEnteredList(null)
  }

  useEffect(() => {
    if (success?.type === ACTION_TYPE) {
      close();
      dispatch(httpRequestsOnSuccessActions.removeSuccess(ACTION_TYPE));
    }
  }, [success]);

  const handelChangeRadio = (event) => {
    setRadioValue(event.target.value);
    setError("");
  };

  const changeName = (ev) => {
    setGroupName(ev.target.value);
    setError("");
  };

  const handleSubmit = () => {
    if (radioValue === "NEW") {
      if (groupName) {
        const sendInfo = {
          "listName": groupName,
          "members": enteredIds
        };
        dispatch(membersActions.createUserList(sendInfo));
      } else {
        setError(
          !groupName?.length ? "groupName" : ""
        );
      }
    } else {
      if (enteredList) {
        const filteredIds = userGroupById?.list?.members?.length ?
          enteredIds?.filter(function(array_el) {
            return (
              userGroupById?.list?.members?.filter(function(anotherOne_el) {
                return array_el === anotherOne_el?.id;
              }).length === 0
            );
          })
          : enteredIds;

        const sendInfo = {
          "members": enteredIds
        };
        dispatch(membersActions.assignUsersToList(enteredList?.id, sendInfo));
      } else {
        setError("list");
      }
    }
  };

  const handleSelectList = (ev, newEv) => {
    dispatch(membersActions.getUserGroupById(newEv?.id));
    setEnteredList(newEv);
    setError("");
  };

  const handelChangeMobileRadio = (type) => {
    setRadioValue(type);
    setError("");
  };

  const closeAndReset = () => {
    resetValues()
    close()
  }

  return (
    <>
      <div className="mobile-page-view">
        {radioValue ?
          <div>
            <div className="invite-swipe-header mobile-page-flex" >
              <button type='button' onClick={closeAndReset} className='cancel-mobile'>Cancel</button>
              <p className='mobile-head-title'>{ radioValue === 'NEW' ? 'Add to New List' : 'Add to Exciting List'}</p>
              <button type='submit' onClick={handleSubmit}  className='submit-mobile'>
                {loader?.length ?
                  <MinLoader color={'#49B776'}/>
                  :
                  radioValue === 'NEW' ? 'Create' : 'Add'
                }</button>
            </div>
            {radioValue === 'NEW' ?
              <div className='user-list-mobile-wrapper'>
                <p className="hod-do-you-mobile">{"New List Name"} <span style={{color:'#FF453A'}}>*</span></p>
                <div style={{ marginTop: "4px" }}>
                  <InputNoForm
                    onChange={changeName}
                    errMessage={error === "groupName" ? "Input is not field" : ""}
                    value={groupName}
                    placeholder={"Enter group name"}
                    type={"text"}
                    name="groupName"
                    required={true}
                  />
                </div>
              </div>
              :
              <div className='user-list-mobile-wrapper'>
                {userGroupList?.length ?
                  <FormControl style={{width:'100%'}}>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      {userGroupList?.map((i, j) => (
                      <FormControlLabel
                        onClick={() => handleSelectList('', i)}
                        key={j}
                        value={i?.id}
                        label={i?.name}
                        control={<Radio style={{color:'#49B776'}}/>}
                      />
                      ))}
                    </RadioGroup>
                  </FormControl>
                  :
                  <p>No Lists Yet</p>
                }
              </div>
            }
          </div>
          :
          <div className="add-to-list">
            <div className="add-to-list-texts">
              <p>Add Selected Members To a List</p>
              <span>Add the selected 10 members to an existing list or create a new one</span>
            </div>
            <div className="add-create-buttons">
              <button onClick={() => handelChangeMobileRadio('EXISTING')}>Add to Exciting List</button>
              <button onClick={() => handelChangeMobileRadio('NEW')}>Add to New List</button>
            </div>
            <button className="cancel-btn" onClick={closeAndReset}>Cancel</button>
          </div>
        }
      </div>

      <div className="organization-modal desktop-page-view">
        <div className="invite-container">
          <p className="custom-modal-title">Add Selected Tickets to a List</p>
          <p
            className="modal-global-subtitle">{`Add the selected ${enteredIds?.length} members to an existing list or create a new one`}</p>
          <div className="radio-row-wrapper">
            <p className="hod-do-you">How do you want to add selected members?</p>
            <div className="radio-box">
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="radio-buttons-group"
                  name="radio-buttons"
                  onChange={handelChangeRadio}
                  value={radioValue}
                >
                  <FormControlLabel
                    value="EXISTING"
                    control={<Radio />}
                    label="Exciting List"
                    className={radioValue === "EXISTING" ? "radio-label-selected" : "radio-label"}
                  />
                  <Box sx={{ marginX: 5 }} />
                  <FormControlLabel
                    value="NEW"
                    control={<Radio />}
                    label="New list"
                    className={radioValue === "NEW" ? "radio-label-selected" : "radio-label"}
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>

          <div>
            <label className="hod-do-you">{radioValue === "EXISTING" ? "Select a List to Add Tickets to" : "New List Name"}
              <span style={{color:'#FF453A'}}>*</span>
            </label>
            {radioValue === "EXISTING" ?
              <>
                <Autocomplete
                  id="checkboxes-tags"
                  options={userGroupList}
                  onChange={handleSelectList}
                  getOptionLabel={(option) => option.name}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Radio
                        checked={selected}
                        style={{ color: "#49B776" }}
                        name="radio-buttons"
                        inputProps={{ "aria-label": "A" }}
                      />
                      {option?.name}
                    </li>
                  )}
                  style={{ width: 500 }}
                  renderInput={(params) =>
                    <TextField {...params} error={error === "list"} />
                  }
                />
                <p className="custom-error-messages">
                  {error === "list" ? "Input is not field" : ""}
                </p>
              </>
              :
              <div style={{ marginTop: "8px" }}>
                <InputNoForm
                  onChange={changeName}
                  errMessage={error === "groupName" ? "Input is not field" : ""}
                  value={groupName}
                  placeholder={"Enter group name"}
                  type={"text"}
                  name="groupName"
                  required={true}
                />
              </div>
            }
          </div>
          <div className="modal-footer">
            <div className="footer-box">
              <SubmitButton
                styles={{ width: "172px" }}
                title="Add Tickets"
                type="button"
                actionType={ACTION_TYPE}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>

    </>

  );
};
