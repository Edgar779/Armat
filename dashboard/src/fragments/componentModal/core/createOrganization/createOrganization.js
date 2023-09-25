import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { FindError, FindSuccess, useModal } from "utils";
import { CustomInput, AddressInput, MaskInput, CreateCancel } from "components";
import { FormControl, FormControlLabel, Radio, RadioGroup, Box } from "@mui/material";
import { CategoryItems } from "pages/organization/fragments/categoryItems";
import { httpRequestsOnErrorsActions, httpRequestsOnSuccessActions, organizationActions } from "store";

const REQUEST_TYPE = "CREATE_ORGANIZATION";

export const CreateOrganization = () => {
  const { categories } = useSelector((state) => ({
    categories: state.organizations.categories
  }));
  const successType = FindSuccess(REQUEST_TYPE);
  const backError = FindError(REQUEST_TYPE);
  const dispatch = useDispatch();
  const { close } = useModal();
  const [radioValue, setRadioValue] = useState("BUSINESS");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [categoryArray, setCategoryArray] = useState([]);
  const [newCategList, setNewCategList] = useState([]);
  const arr = [];
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      type: radioValue
    }
  });

  useEffect(() => {
    return () => {
      dispatch(httpRequestsOnErrorsActions.removeError(REQUEST_TYPE));
    };
  }, []);

  useEffect(() => {
    if (successType) {
      close();
      dispatch(httpRequestsOnSuccessActions.removeSuccess(REQUEST_TYPE));
    }
  }, [successType]);

  useEffect(() => {
    dispatch(organizationActions.getOrgCategories());
  }, []);

  useEffect(() => {
    if (categories?.length) {
      getTree(categories);
    }
  }, [categories]);

  const getTree = (org) => {
    org.length &&
    org.map((it) => {
      arr.push(it);
      if (it.items) {
        return getTree(it.items);
      }
      setCategoryArray(arr);
    });
  };

  const onSubmit = (data) => {
    const formData = {
      ...data
    };
    if (data?.email) {
      formData.email = data.email;
    } else {
      delete formData.email;
    }
    if (enteredAddress) {
      formData.address = enteredAddress;
    }
    if (data?.phoneNumber) {
      formData.phoneNumber = `${parseInt(data?.phoneNumber.replace(/[^0-9]/g, ""))}`;
    } else {
      delete formData.phoneNumber;
    }
    if (newCategList?.length) {
      formData.categories = newCategList;
    }
    dispatch(organizationActions.createOrganization(formData));
  };

  const handelChangeRadio = (event) => {
    setRadioValue(event.target.value);
  };

  function handleAddressChange(selectedAddress) {
    setEnteredAddress(selectedAddress);
  }

  const mobileError =
    backError?.error === "This Organization has a driver with this data."
      ? "This Organization has a driver with this data."
      : backError?.error && backError?.error?.[0] === "phone must be a valid phone number"
        ? "phone must be a valid phone number"
        : backError?.error && backError?.error?.[0] === "phoneNumber must be a valid phone number"
          ? "phoneNumber must be a valid phone number"
          : "";


  return (
    <div className="organization-modal">
      <div className="invite-container">
        <p className="custom-modal-title">Create an Organization</p>
        <div className="subtitle-box">
          <h3 className="subtitle">Organization Type<span className="red-color">*</span></h3>
        </div>
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
                value="BUSINESS"
                control={<Radio />}
                label="Business"
                className={radioValue === "BUSINESS" ? "radio-label-selected" : "radio-label"}
              />
              <Box sx={{ marginX: 5 }} className='form-control-label-row'/>
              <FormControlLabel
                value="NON_PROFIT"
                control={<Radio />}
                label="None-profit"
                className={radioValue === "NON_PROFIT" ? "radio-label-selected" : "radio-label"}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-messages">
          <CustomInput
            name="name"
            control={control}
            rules={{ required: true }}
            type="text"
            label="Organization name"
            placeholder={"Enter group name"}
            required={true}
          />
          <AddressInput
            label={"Location"}
            errorBoolean={
              backError?.error === "Unable to verify the address" ? "Unable to verify the address" : errors?.address
            }
            onTrigger={handleAddressChange}
            enteredValue={enteredAddress}
          />
          <CustomInput
            name="email"
            control={control}
            rules={{ required: false }}
            type="email"
            label="Email address"
            placeholder={"Enter group name"}
            noIcon={true}
          />
          <MaskInput
            name="phoneNumber"
            label="Phone Number"
            control={control}
            rules={{ required: false }}
            type="phone"
            placeholder={"Write Phone Number"}
            errMessage={!!mobileError}
            backError={backError}
            errMessageToShow={
              mobileError === "phone must be a valid phone number"
                ? "Phone must be a valid phone number"
                : mobileError === "This Organization has a driver with this data."
                  ? "This Organization has a driver with this data."
                  : backError?.error && backError?.error?.[0] === "phoneNumber must be a valid phone number"
                    ? "phoneNumber must be a valid phone number"
                    : ""
            }
          />

          <CategoryItems
            selectedIdInfos={[]}
            selectedInfo={[]}
            categories={categoryArray}
            allCategories={categories}
            handleGetNewList={(newArr) => setNewCategList(newArr)}
          />


          <div className="modal-footer">
            <CreateCancel title="Create" actionType={REQUEST_TYPE} flex={true} />
          </div>
        </form>
      </div>
    </div>
  );
};
