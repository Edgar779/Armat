import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FindError, FindLoad, FindSuccess, getId, SaveParams, useModal } from "utils";
import { CustomInput, SubmitButton, DropDownList, MinLoader } from "components";
import { httpRequestsOnErrorsActions, httpRequestsOnSuccessActions } from "store";
import { membersActions } from "store";
import { roleList } from "../../constants";

const ACTION_TYPE = "INVITE_MEMBER";

export const InviteMember = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: ""
    }
  });
  const dispatch = useDispatch();
  const { close } = useModal();
  const [type, setType] = useState();
  const successType = FindSuccess(ACTION_TYPE);
  const backError = FindError(ACTION_TYPE);
  const navigate = useNavigate();
  const location = useLocation();
  const info = location?.state;
  const addLoader = FindLoad(ACTION_TYPE)

  useEffect(() => {
    return () => {
      dispatch(httpRequestsOnErrorsActions.removeError(ACTION_TYPE));
    };
  }, []);

  useEffect(() => {
    if (successType) {
      dispatch(httpRequestsOnSuccessActions.removeSuccess(ACTION_TYPE));
      SaveParams('/members', navigate, { ...info });
      close();
    }
  }, [successType]);

  const onSubmit = (data) => {
    const formData = {
      ...data,
      org: getId,
      userType: type?.type ? type?.type : "ORGMEMBER"
    };
    dispatch(membersActions.inviteMember(formData));
  };

  const handleSelect = (event) => {
    setType(event);
  };

  return (
   <form onSubmit={handleSubmit(onSubmit)}>
      <div className="invite-swipe-header mobile-page-flex" >
        <button type='button' onClick={() => close()} className='cancel-mobile'>Cancel</button>
        <p className='mobile-head-title'>Invite a member</p>
        <button type='submit' onClick={onSubmit}  className='submit-mobile'>
          {addLoader?.length ?
            <MinLoader color={'#49B776'}/>
            :
            'Invite'
          }</button>
      </div>
    <div className="member-modal">
      <p className="custom-modal-title desktop-page-view">Invite a member</p>
      <p className="modal-global-subtitle">Send an invite link to a team member. The role can be changed later.</p>

      <div className="form-messages">
        <div className="invite-modal-wrapper">
          <div style={{ width: "100%" }}>
            <CustomInput
              name="email"
              control={control}
              rules={{ required: true }}
              type="email"
              label=""
              placeholder={"Email"}
              errMessage={
                backError?.error === "member is exist" ? "Member is exist" :
                backError?.error === "User already invited" && "User already invited"
                  // backError?.error
              }
              noTop={true}
            />
            <CustomInput
              name="name"
              control={control}
              rules={{ required: true }}
              type="text"
              label=""
              placeholder={"Enter name"}
              noTop={true}
            />
          </div>
            <DropDownList
              list={roleList}
              title={type?.label ? type.label : "Member"}
              handleSelectRow={handleSelect}
            />
        </div>
        <div className="members-footer desktop-page-flex">
          <div className="btn-box">
            <SubmitButton
              title={"Invite"}
              type="submit"
              actionType={ACTION_TYPE}
            />
          </div>
        </div>
      </div>

    </div>
   </form>
  );
};
