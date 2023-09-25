import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { RadioGroup, FormControl, FormControlLabel, Radio } from "@mui/material";
import { CustomInput, AddressInput, MaskInput } from "components";
import { RichInput } from "fragments";
import { FindError, useWindowDimensions } from "utils";
import { CreateCancel } from "components/buttons";
import { CategoryItems } from "./categoryItems";
import { organizationActions } from "store";

export const BasicInfo = ({ orgById, orgCategories, editActionType }) => {
  const dispatch = useDispatch();
  const backError = FindError(editActionType);
  const [enteredAddress, setEnteredAddress] = useState("business");
  const [radioValue, setRadioValue] = useState("");
  const [selectedCategs, setSelectedCategs] = useState(orgById ? orgById.categories && [...orgById.categories] : "");
  const [categoryArray, setCategoryArray] = useState([]);
  const [newCategList, setNewCategList] = useState([]);
  const [selected, setSelected] = useState([]);
  const [description, setDescription] = useState("");
  const arr = [];
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (orgById?.description) {
      setDescription(orgById?.description);
    }
  }, [orgById]);

  useEffect(() => {
    if (orgById) {
      setRadioValue(orgById?.type);
    }
  }, [orgById]);
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: orgById?.name,
      phone: orgById?.phoneNumber,
      email: orgById?.email
    }
  });

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


  useEffect(() => {
    if (orgCategories?.length) {
      getTree(orgCategories);
    }
  }, [orgCategories]);

  const getTree = (org) => {
    org?.length &&
    org.map((it) => {
      arr.push(it);
      if (it.items) {
        return getTree(it.items);
      }
      setCategoryArray(arr);
    });
  };

  function getParent(model, id) {
    let path,
      item = {
        id: model.id,
        text: model.text
      };
    if (!model || typeof model !== "object") return;
    if (model.id === id) return [item];
    (model.items || []).some((child) => (path = getParent(child, id)));
    return path && [item, ...path];
  }

  const handleGetTree = async () => {
    const newItems = (await orgCategories?.length) && orgById?.categories.map((h) => orgCategories.map((i) => getParent(i, h.id)));
    const arr = [];
    newItems && newItems.filter((k) => k.map((l) => l !== undefined && arr.push(l)));
    setSelected([...arr]);
  };

  useEffect(() => {
    if (orgById?.categories) {
      handleGetTree();
    }
  }, [orgById]);

  const onSubmit = (data) => {
    const formData = {
      ...data
    };
    if (compareList(newCategList, selectedCategs) !== undefined) {
      formData["categories"] = compareList(newCategList, selectedCategs);
    }else if(!newCategList?.length){
      formData.categories = []
    }
    data?.phoneNumber ? formData.phoneNumber = `${parseInt(data?.phoneNumber.replace(/[^0-9]/g, ""))}` : delete formData.phoneNumber;
    enteredAddress ? formData.address = enteredAddress : delete formData.address;
    data?.email ? formData.email = data.email : delete formData.email;
    description ? formData.description = description : delete formData.description;
    dispatch(organizationActions.editOrganization(orgById?.id, formData));
  };

  const compareList = function(newList, oldList) {
    if (!newList || newList.length < 1) return;
    if (!oldList || newList.length !== oldList.length) return newList;
    const newSet = new Set();
    for (let i = 0; i < newList.length; i++) {
      newSet.add(newList[i]);
    }
    for (let i = 0; i < oldList.length; i++) {
      if (!newSet.has(oldList[i].id)) return newList;
    }
    return undefined;
  };

  return (
    <>
      <div className="subtitle-box">
        <h3 className="subtitle">
          Organization Type<span className="red-color">*</span>
        </h3>
      </div>
          <div className="radio-box">
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="radio-buttons-group"
                name="radio-buttons"
                onChange={handelChangeRadio}
                value={radioValue}>
                <FormControlLabel style={{ marginRight: width > 1279 ? "50px" : "20px" }} value="BUSINESS"
                                  control={<Radio />} label="Business" className="radio-label" />
                <FormControlLabel value="NON_PROFIT" control={<Radio />} label="None-profit" className="radio-label" />
              </RadioGroup>
            </FormControl>
          </div>
      <div className="info-form">
        <form onSubmit={handleSubmit(onSubmit)} className="form-messages">
          <div>
            <CustomInput
              name="name"
              control={control}
              rules={{ required: true }}
              type="text"
              label="Organization name"
              color={"#494949"}
              required={true}
            />
            <div>
              <AddressInput
                label={"Location"}
                errorBoolean={
                  backError?.error === "Unable to verify the address" ? "Unable to verify the address" : errors?.address
                }
                onTrigger={handleAddressChange}
                enteredValue={enteredAddress}
                color={"#494949"}
              />
            </div>
            <div>
              <div className="input-flex-able">
                <MaskInput
                  name="phone"
                  label="Phone Number"
                  control={control}
                  rules={{ required: false }}
                  type="phone"
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
                  color={"#494949"}
                />
                <div className="right-able">
                  <CustomInput
                    name="email"
                    control={control}
                    rules={{ required: false }}
                    type="text"
                    label="Email address"
                    color={"#494949"}
                  />
                </div>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <CategoryItems
                eventInfo={orgById}
                selectedIdInfos={selectedCategs}
                selectedInfo={selected}
                categories={categoryArray}
                allCategories={orgCategories}
                handleGetNewList={(newArr) => setNewCategList(newArr)}
                color={"#494949"}
                title={"Categories"}
              />
            </div>
            <div style={{ width: "100%" }}>
              <div className="description-box">
                <p className="description-title">Description</p>
                <p className="description-subtitle">
                  Include any additional information about the organization that you might want users to know
                  about.{" "}
                </p>
                <div className="rich-box">
                  <RichInput
                    description={description}
                    setDescription={setDescription}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="info-feature">
            <div className="info-brn">
              <CreateCancel title="Save" actionType={editActionType} t />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
