import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FindSuccess, SaveParams, useModal } from "utils";
import { SubmitButton } from "components";
import { httpRequestsOnErrorsActions, httpRequestsOnSuccessActions, membersActions } from "store";
import Checkbox from "@mui/material/Checkbox";
import { Autocomplete, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { MobileHead } from "fragments";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const label = { inputProps: { "aria-label": "Color switch demo" } };
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ACTION_TYPE = "ASSIGN_USERS_TO_GROUP_LIST";

export const AddUserToList = ({ page, params }) => {
  const { userGroupById, allMembers, userGroupAllUsers } = useSelector((state) => ({
    userGroupById: state.members.userGroupById,
    allMembers: state.members.allMembers,
    userGroupAllUsers: state.members.userGroupAllUsers
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { close } = useModal();
  const successType = FindSuccess(ACTION_TYPE);
  const [error, setError] = useState("");
  const [enteredList, setEnteredList] = useState();
  const [enteredIds, setEnteredIds] = useState([]);

  useEffect(() => {
    return () => {
      dispatch(httpRequestsOnErrorsActions.removeError(ACTION_TYPE));
    };
  }, []);

  useEffect(() => {
    if (successType) {
      close();
      dispatch(httpRequestsOnSuccessActions.removeSuccess(ACTION_TYPE));
      SaveParams(page, navigate, { ...params });
    }
  }, [successType]);

  const handleSubmit = () => {
    if (enteredList?.length) {
      const sendInfo = {
        "members": enteredIds
      };
      dispatch(membersActions.assignUserToGroupList(userGroupById?.list?.id, sendInfo));
    } else {
      setError("list");
    }
  };

  const handleChangeList = (ev, newEv) => {
    setEnteredList(newEv);
    let arr = [];
    newEv?.filter((i) => arr.push(i?.id));
    setEnteredIds(arr);
    arr = [];
    setError("");
  };

  const filteredUsers = allMembers?.orgUsers?.filter(function(array_el) {
    return (
      userGroupAllUsers?.list?.members?.filter(function(anotherOne_el) {
        return array_el?.member?.id === anotherOne_el?.member?.id;
      }).length === 0
    );
  });


  const handleSelectUsers = (value) => {
    let list = enteredList?.length ? [...enteredList] : [];
    const searched = list?.filter((i) => i?.id === value?.id);

    if (searched?.length) {
      list.filter((i, j) => i?.id === value?.id && list.splice(j, 1));
    } else {
      list.push(value);
    }

    setEnteredList(list);
    let arr = [];
    list?.filter((i) => arr.push(i?.id));
    setEnteredIds(arr);
    arr = [];
    setError("");
  };

  return (
    <>
      <div className="mobile-page-view">
        <MobileHead
          title="Add Users"
          addButton="Add"
          actionType={ACTION_TYPE}
          onSubmit={handleSubmit}
        />
        {enteredList?.length ?
        <div className="selected-items-mobile">
          {enteredList?.map((i,j) =>(
            <div key={j} className='user-chip'>{i?.member?.email}</div>
          ))}
        </div> : ''
        }

        <div className="add-user-to-list-mobile-modal">

          <FormGroup>
            {filteredUsers?.map((i, j) => (
              <FormControlLabel
                onChange={() => handleSelectUsers(i)}
                value={i}
                key={j}
                label={i?.member?.email}
                // checked={enteredList?.includes(i?.id)}
                control={
                  <Checkbox />

                  // <Checkbox checked={enteredList?.includes(i?.id)}/>
                }
              />
            ))}
          </FormGroup>
        </div>

      </div>

      <div className="desktop-page-view">
        <div className="duplicate-modal">
          <p className="custom-modal-title">Add Users to List</p>
          <div className="form-messages">
            <div className="duplicate-modal-wrapper autocomplete-input">
              <label className="label" style={{ marginBottom: "4px" }}>Select Users to Add to List</label>
              <Autocomplete
                multiple
                sx={{ minHeight: "48px" }}
                id="checkboxes-tags"
                options={filteredUsers}
                onChange={handleChangeList}
                disableCloseOnSelect
                getOptionLabel={(option) => option?.member?.email}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
                    {option?.member?.email}
                  </li>
                )}
                renderInput={(params) => <TextField {...params} placeholder="" error={error === "list"} />}
              />
              <p className="custom-error-messages">
                {error === "list" ? "Input is not field" : ""}
              </p>
            </div>
            <div className="members-footer">
              <div className="flex-end">
                <SubmitButton
                  styles={{ width: "110px" }}
                  title={"Add"} type="button" actionType={ACTION_TYPE} handleSubmit={handleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
