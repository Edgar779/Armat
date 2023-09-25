import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FindError, FindSuccess, useModal } from "utils";
import { CustomInput, CreateCancel } from "components";
import { httpRequestsOnErrorsActions, httpRequestsOnSuccessActions, membersActions } from "store";
import { MobileHead } from "../../../../fragments";

const ACTION_TYPE = "DUPLICATE_LIST";

export const DuplicateList = ({ userGroupById }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: ""
    }
  });
  const dispatch = useDispatch();
  const { close } = useModal();
  const successType = FindSuccess(ACTION_TYPE);
  const backError = FindError(ACTION_TYPE);

  useEffect(() => {
    return () => {
      dispatch(httpRequestsOnErrorsActions.removeError(ACTION_TYPE));
    };
  }, []);

  useEffect(() => {
    if (successType) {
      close();
      dispatch(httpRequestsOnSuccessActions.removeSuccess(ACTION_TYPE));
    }
  }, [successType]);

  const onSubmit = (data) => {
    const formData = {
      listName:data?.listName,
      listId: userGroupById?.list?.id,
    };
    dispatch(membersActions.duplicateList(formData))
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className="mobile-page-view">
        <MobileHead
          title="Duplicate List"
          addButton="Save"
          actionType={ACTION_TYPE}
          // onSubmit={onSubmit}
        />

        <div className='duplicate-mobile'>
          <p className='duplicate-mobile-subtitle'>Enter a new name for the duplicated list</p>
          <CustomInput
            name="listName"
            control={control}
            rules={{ required: true }}
            type="text"
            placeholder={"Enter name"}
          />
        </div>
      </div>

    <div className="duplicate-modal desktop-page-view">
      <p className="custom-modal-title desktop-page-view">Duplicate List</p>
      <div className="form-messages">
        <div className="duplicate-modal-wrapper">
          <CustomInput
            name="listName"
            control={control}
            rules={{ required: true }}
            type="text"
            label="Enter a new name for the duplicated list"
            placeholder={"Enter name"}
          />
        </div>
        <div className="members-footer">
          <div className="btn-box">
            <CreateCancel
              style={{ display: 'flex', width: '100%' }}
              width={'100%'}
              title={'Duplicate List'}
              actionType={ACTION_TYPE}
            />
          </div>
        </div>
      </div>
    </div>
    </form>
  );
};
