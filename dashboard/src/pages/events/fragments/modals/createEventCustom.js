import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Autocomplete, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Popover from "@mui/material/Popover";
import { Svg } from "assets";
import { FindSuccess, getId, useWindowDimensions } from "utils";
import { AddressInput, CreateCancel, CustomInput, CustomSelect, TextRow } from "components";
import { eventType, overviewList, timeZoneList, whoCan, whoCanDefault } from "./constants";
import { eventActions, httpRequestsOnLoadActions, httpRequestsOnSuccessActions } from "store";
import { UploadImage } from "./core/uploadImage";
import { RichInput } from "fragments";
import { CallToActions } from "./core/callToActions";
import { Sponsors } from "./core/sponsors";


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const CreateEventCustom = ({ handleOpenClose, eventInfo }) => {
  const CREATE_ACTION_TYPE = eventInfo?.eventId ? "EDIT_EVENT" : "CREATE_EVENT";
  const { control, handleSubmit, setError, clearErrors, reset, formState: { errors } } = useForm({});
  const { eventCategories, userGroupList, eventTags, organizationsList, eventSponsor } = useSelector((state) => ({
    eventCategories: state.events.eventCategories,
    eventTags: state.events.eventTags,
    userGroupList: state.members.userGroupList,
    organizationsList: state.organizations.organizationsList,
    eventSponsor: state.events.eventSponsor
  }));
  const location = useLocation();
  const info = location?.state;
  const dispatch = useDispatch();
  const [error, setCustomError] = useState({});
  const [enteredAddress, setEnteredAddress] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [actions, setActions] = useState(null);
  const [img, setImg] = useState(eventInfo && eventInfo.images && eventInfo.images.length ? [...eventInfo.images] : []);
  const [imgPush, setImgPush] = useState([]);
  const [imgIndex, setIndex] = useState(0);
  const [deletedImg, setDeletedImg] = useState([]);
  const [sponsorsId, setSponsorsId] = useState([]);
  const [deletedR, setDeleted] = useState([]);
  const [accessStatus, setAccessStatus] = useState("");
  const [allDay, setAllDay] = useState(false);
  const [dateToBe, setDateToBe] = useState(false);
  const [addressToBe, setAddressToBe] = useState(false);
  const timeRequired = dateToBe === false && allDay === false;
  const [sponsors, setSponsors] = useState(eventInfo?.sponsors ? eventInfo.sponsors : []);
  const [organizations, setOrganizations] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const success = FindSuccess(CREATE_ACTION_TYPE);
  const { width } = useWindowDimensions();

  const renderParams = () => {
    const filteredInfo = {
      ...info
    };
    if (width > 767) {
      filteredInfo.skip = info?.skip ? info?.skip : 0;
      filteredInfo.limit = 10;
    }
    if (info?.status && info?.status !== "ALL") {
      filteredInfo.status = info.status;
    } else {
      delete filteredInfo.status;
    }
    if (info?.locationType && info?.locationType !== "ALL") {
      filteredInfo.locationType = info.locationType;
    } else {
      delete filteredInfo.locationType;
    }
    delete filteredInfo.page;
    return filteredInfo;
  };

  useEffect(() => {
    if (eventSponsor?.length) {
      const newOrganizations = [];
      organizationsList?.map((i) => eventSponsor?.map((l) => l.orgName === i.name && newOrganizations.push(i)));
      setSponsors(newOrganizations);

      const newSponsorList = [];
      eventSponsor?.map((k) =>
        newSponsorList.push({
          org: k.orgId,
          note: k.note ? k.note : ""
        })
      );
      setSponsorsId(newSponsorList);
    }
  }, [eventSponsor]);

  useEffect(() => {
    if (success) {
      handleOpenClose();
      dispatch(httpRequestsOnSuccessActions.removeSuccess(CREATE_ACTION_TYPE));
    }
  }, [success]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (eventInfo) {
      reset({
        title: eventInfo?.title,
        locationType: eventInfo?.locationType,
        timezoneOffset: eventInfo?.timezoneOffset,
        startDate: moment(eventInfo?.startDate).format("YYYY-MM-DD"),
        startTime: eventInfo?.startTime,
        endDate: moment(eventInfo?.endDate).format("YYYY-MM-DD"),
        endTime: eventInfo?.endTime,
        tags: eventInfo?.tags,
        description: eventInfo?.description,
        accessStatus: eventInfo?.access?.status
      });
      setStartDate(eventInfo?.startDate);
      setEndDate(eventInfo?.endDate);
      setAccessStatus(eventInfo?.access?.status);
      setEnteredAddress(eventInfo?.address?.formattedAddress);
      setAllDay(eventInfo?.allDay);
      setDateToBe(eventInfo?.tbd);
      setActions(eventInfo?.cta);
      setAddressToBe(eventInfo?.address === null);

      if (eventInfo?.access?.listIds?.length) {
        const list = userGroupList?.filter((i) => (
          eventInfo?.access?.listIds?.filter((k) => i?.id === k)
        ));
        setUsersList(list);
      }
    }
  }, [eventInfo]);

  useEffect(() => {
    dispatch(eventActions.getEventCategories());
    dispatch(eventActions.getEventTags());
  }, []);


  const handleRemoveList = (ev) => {
    const newList = usersList?.filter((i) => (i?.id !== ev?.id));
    setUsersList(newList);
  };

  const handleClearImg = (key, item) => {
    setIndex(0);

    const deletedImages = [...imgPush];
    deletedImages.splice(key, 1);
    setImgPush(deletedImages);

    const deletedImagesFile = [...img];
    deletedImagesFile.splice(key, 1);
    setImg(deletedImagesFile);

    const newArr = [...deletedImg, item];
    setDeletedImg(newArr);
  };

  const handleFileChange = (e) => {
    const newArr = [...img];
    const imageArr = [...imgPush];
    for (let item of e) {
      if (item && item.size > 2097152) {
        // setError(true);
      } else {
        // setError("");

        newArr.push({
          url: URL.createObjectURL(new File([item], "image", { type: "text/json;charset=utf-8" })),
          id: newArr.length + 1
        });
        setImg(newArr);

        imageArr.push(new File([item], `img${newArr.length + 1}`));
        setImgPush(imageArr);
      }
    }
  };


  const handleCreate = async (data) => {
    const addressCheck =
      addressToBe === true ? true :
        data?.locationType === "PHYSICAL" ? !!enteredAddress : true;

    if (addressCheck) {

      let listIds = [];
      if (eventInfo && usersList?.length && !data?.listIds?.length) {
        usersList?.filter((i) => listIds.push(i?.id));
      } else {
        data?.listIds?.filter((i) => listIds.push(i?.id));
      }

      const formData = new FormData();
      const endpoint = `/files/uploadMany?includeThumbnail=true`;
      imgPush?.length && imgPush.map((i) => formData.append("files", i));
      const uploadedImg = imgPush?.length && (
        dispatch(httpRequestsOnLoadActions.appendLoading(CREATE_ACTION_TYPE)),
          await axios.post(endpoint, formData, { auth: true })
            .then((res) => {
              return res.data;
            })
            .catch((e) => {
              dispatch(httpRequestsOnLoadActions.removeLoading(CREATE_ACTION_TYPE));
            }));

      const editImage = uploadedImg && uploadedImg.length ? { imagesToAdd: [...uploadedImg] } : "";
      const uploadedArr = uploadedImg ? uploadedImg : [];
      let filteredImages = img.filter((i) => i.thumbUrl);
      const allPhotos = [...filteredImages, ...uploadedArr];
      const eventAvatar = allPhotos.length && +imgIndex !== eventInfo?.eventImage ? { eventImage: +imgIndex } : { eventImage: eventInfo?.eventImage };
      const deletedImages = deletedImg.length ? { imagesToRemove: [...deletedImg] } : "";
      let deletedSponsors = [...new Set(deletedR)];
      const deleted = deletedSponsors.length ? { removeSponsors: deletedSponsors } : "";
      const newList = sponsorsId.filter((a) => eventSponsor?.findIndex((u) => u.orgId === a.org) < 0);
      const addedSponsor = newList.length > 0 ? { addSponsors: [...newList] } : " ";

      const body = eventInfo ?
        {
          ...data,
          org: getId,
          allDay: allDay,
          tbd: dateToBe,
          ...eventAvatar,
          ...editImage,
          ...deletedImages,
          ...deleted,
          ...addedSponsor
        }
        :
        {
          ...data,
          org: getId,
          allDay: allDay,
          tbd: dateToBe
        };

      body.startTime = dateToBe ? null : data.startTime;
      body.endTime = dateToBe ? null : data.endTime;
      uploadedImg ? (body["eventImage"] = +imgIndex) : delete body.eventImage;
      uploadedImg ? (body["images"] = [...uploadedImg]) : delete body.images;
      listIds?.length ? body.listIds = listIds : delete body.listIds;
      body.address = addressToBe === true ? null : enteredAddress;
      actions ? body.cta = actions : delete body.actions;
      sponsorsId?.length ? body.sponsors = [...sponsorsId] : delete body.sponsors;

      if (eventInfo) {
        if (data?.listIds?.length) {
          let newList = [];
          data?.listIds?.map((i) => newList.push(i?.id));
          await axios.patch(`/events/${eventInfo?.eventId}/list/add`, null, {
            params: { listIds: newList },
            auth: true
          });
          newList = [];
        }
        if (eventInfo?.accessStatus !== data?.accessStatus) {
          dispatch(eventActions.editEventAccess(eventInfo?.eventId, data?.accessStatus));
        }
        dispatch(eventActions.editEvent(body, renderParams(), eventInfo?.eventId));
      } else {
        dispatch(eventActions.createEvent(body, renderParams()));
      }

      listIds = [];
    } else {
      if (data?.locationType === "PHYSICAL" && !enteredAddress) {
        setError("address", {
          type: "required",
          message: "This Field is required"
        });
      }
    }
  };

  const handleAllDay = () => {
    setAllDay(!allDay);
    setDateToBe(false);
    clearErrors("startTime");
    clearErrors("endTime");
  };

  const dateTbd = () => {
    setDateToBe(!dateToBe);
    setAllDay(false);
    clearErrors("startTime");
    clearErrors("endTime");
  };

  const handleAddressToBe = () => {
    setAddressToBe(!addressToBe);
    setEnteredAddress("");
  };

  const handleChangeAddress = (e) => {
    setEnteredAddress(e);
    clearErrors("address");
  };

  const handleSelectAccess = (name) => {
    setAccessStatus(name);
    if (name !== "LISTS") {
      clearErrors("listIds");
    }
  };

  const delElement = (e) => {
    if (eventInfo) {
      const newDeleted = [...deletedR];
      eventSponsor.map((i) => i.orgId === e && newDeleted.push(e));
      setDeleted(newDeleted);
    }

    const newList = [...sponsorsId];
    sponsorsId.filter((i, k) => i.org === e && newList.splice(k, 1));
    setSponsorsId(newList);

    const newSponsors = [...sponsors];
    sponsors.filter((i, k) => i.id === e && newSponsors.splice(k, 1));
    setSponsors(newSponsors);

    const newOrganizations = [...organizations];
    organizationsList.filter((i) => e === i.id && newOrganizations.push(i));
    setOrganizations(newOrganizations);
  };

  const handleSendNote = (e) => {
    const newList = [...sponsorsId];
    sponsorsId.filter((i, k) => (i.org === e.org ? (newList[k].note = e.note) : ""));
    setSponsorsId(newList);
  };

  const handleChangeSponsors = (event) => {
    const nuwOrganizations = [];
    organizations.filter((i) => event.target.value.id !== i.id && nuwOrganizations.push(i));
    setOrganizations(nuwOrganizations);
    const newList = [...sponsorsId];
    newList.push({
      org: event.target.value.id
    });
    setSponsorsId(newList);
    setSponsors([...sponsors, event.target.value]);
  };

  return (
    <div className="create-event-modal">
      <div className="left-side-wrapper">
        <div className="left-side-header">
          <p>Overview</p>
        </div>
        <div style={{ position: "fixed" }}>
          {overviewList?.map((i, j) => (
            <a href={i?.href} className="overview-link">
              <button key={j} className="overview-button">
                <img src={i.icon} alt="icon" />
                <p>  {i?.name}</p>
              </button>
            </a>
          ))}
        </div>
      </div>

      <div className="right-side-wrapper">

        <div className="overlay-mobile">
          <button onClick={handleClick}>
            <img src={Svg.overviewButton} alt="icon" />
          </button>
        </div>

        <div className="right-side-header">
          <p>Create an Event</p>
          <button type="button" className="close-button close-event" onClick={handleOpenClose}>
            <img src={Svg.CloseModal} alt="Close-Modal" />
          </button>
        </div>
        <form onSubmit={handleSubmit(handleCreate)} className="form-messages">
          <div className="event-inputs-wrapper" id={"basic"}>
            <div className="text-wrapper">
              <p className="title-text">Basic Info</p>
              <p className="sub-title">Provide some basic event info to let attendees know when and where to go for
                their next event.</p>
            </div>
            <div className="inputs-wrapper">
              <div className="flex-inputs">
                <div className="right-margin">
                  <CustomInput
                    name="title"
                    control={control}
                    rules={{ required: true }}
                    type="text"
                    label="Event title"
                    required={true}
                    placeholder={"Enter the title of the event"}
                    color={"#222222CC"}
                  />
                </div>
                <CustomSelect
                  name={"locationType"}
                  control={control}
                  rules={{ required: true }}
                  listSelect={eventType}
                  displayValue={"value"}
                  displayName={"title"}
                  label="Event Type"
                  placeholder={"Select event type"}
                  required={true}
                  color={"#222222CC"}
                />
              </div>
              <div className="flex-inputs" style={{ alignItems: "flex-start" }}>
                <div className="right-margin">
                  <AddressInput
                    label={"Location"}
                    errorBoolean={errors?.address?.type === "required"}
                    errMessage={errors?.address?.message}
                    onTrigger={handleChangeAddress}
                    enteredValue={enteredAddress}
                  />
                  <FormGroup onChange={handleAddressToBe}>
                    <FormControlLabel control={<Checkbox checked={addressToBe} />} label="To Be Determined" />
                  </FormGroup>
                </div>
                <CustomSelect
                  name={"timezoneOffset"}
                  control={control}
                  rules={{ required: true }}
                  listSelect={timeZoneList}
                  displayValue={"value"}
                  displayName={"text"}
                  label="Time zone"
                  placeholder={"Select the time zone for the event"}
                  required={true}
                  color={"#222222CC"}
                />
              </div>
              <div className="flex-inputs-no-colum">
                <div className="right-margin-response">
                  <CustomInput
                    handleChange={(e) => setStartDate(e.target.value)}
                    name="startDate"
                    control={control}
                    rules={{ required: true }}
                    type="date"
                    label="Start Date"
                    required={true}
                    placeholder={"Start date of the event (MM/DD/YYYY)"}
                    color={"#222222CC"}
                    max={endDate ? moment(endDate).format("YYYY-MM-DD") : ""}
                  />
                </div>
                <CustomInput
                  handleChange={(e) => {
                    setAllDay(false);
                    setDateToBe(false);
                  }}
                  name="startTime"
                  control={control}
                  rules={{ required: timeRequired }}
                  type="time"
                  label="Start Time"
                  required={timeRequired}
                  placeholder={"Enter the start time of the event"}
                  color={"#222222CC"}
                />
              </div>
              <div className="flex-inputs-no-colum">
                <div className="right-margin-response">
                  <CustomInput
                    handleChange={(e) => setEndDate(e.target.value)}
                    name="endDate"
                    control={control}
                    rules={{ required: true }}
                    type="date"
                    label="End Date"
                    required={true}
                    placeholder={"End date of the event (MM/DD/YYYY)"}
                    color={"#222222CC"}
                    min={startDate ? moment(startDate).format("YYYY-MM-DD") : ""}
                  />
                  <FormGroup onChange={dateTbd}>
                    <FormControlLabel control={<Checkbox checked={dateToBe} />} label="To Be Determined" />
                  </FormGroup>
                </div>
                <div style={{ width: "100%" }}>
                  <CustomInput
                    handleChange={() => {
                      setAllDay(false);
                      setDateToBe(false);
                    }}
                    name="endTime"
                    control={control}
                    rules={{ required: timeRequired }}
                    type="time"
                    label="End Time"
                    required={timeRequired}
                    placeholder={"Enter the end time of the event"}
                    color={"#222222CC"}
                  />
                  <FormGroup onChange={handleAllDay}>
                    <FormControlLabel control={<Checkbox checked={allDay} />} label="All Day" />
                  </FormGroup>
                </div>
              </div>

              <div className="autocomplete-input autocomplete-top">
                <p className="autocomplete-title">Tags*</p>
                <Controller
                  control={control}
                  name={"tags"}
                  rules={{ required: false }}
                  render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <Autocomplete
                      multiple
                      defaultValue={eventInfo?.tags}
                      sx={{ minHeight: "48px" }}
                      id="checkboxes-tags"
                      options={eventTags}
                      onChange={(e, ev) => onChange(ev)}
                      disableCloseOnSelect
                      getOptionLabel={(option) => option}
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }}
                                    checked={selected} />
                          {option}
                        </li>
                      )}
                      renderInput={(params) => <TextField {...params} placeholder="Select Tags" />}
                    />
                  )}
                />
              </div>
              <div className="autocomplete-input autocomplete-top">
                <p className="autocomplete-title">Categories*</p>
                <Controller
                  control={control}
                  name={"categories"}
                  rules={{ required: false }}
                  render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <Autocomplete
                      multiple
                      defaultValue={eventInfo?.categories}
                      sx={{ minHeight: "48px" }}
                      id="checkboxes-tags"
                      options={eventCategories}
                      onChange={(e, ev) => onChange(ev)}
                      disableCloseOnSelect
                      getOptionLabel={(option) => option}
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }}
                                    checked={selected} />
                          {option}
                        </li>
                      )}
                      renderInput={(params) => <TextField {...params} placeholder="Select Event Category" />}
                    />
                  )}
                />
              </div>
            </div>


            <div id="graphic">
              <div className="section-wrapper" id="eventAccess">
                <p className="title-text">Event Graphic</p>
                <p className="sub-title">
                  Images will be visible in a gallery and in other parts of Armat.
                  The main image is used when displaying the organization in lists and as the face image of the
                  organization.
                </p>
              </div>
              <UploadImage
                imgIndex={imgIndex}
                loaderUpload={false}
                eventInfo={null}
                // eventInfo={eventInfo}
                handleSelectIndex={(i) => setIndex(i)}
                error={error}
                handleClearImg={handleClearImg}
                handleChange={handleFileChange}
                imgSrc={img}
              />
            </div>

            <div className="section-wrapper" id="description">
              <p className="title-text">Description</p>
              <p className="sub-title">Include any additional information about the event that you might want users to
                know about (parking, payment info, contact info, important links, etc.).</p>
            </div>

            <Controller
              control={control}
              name={"description"}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <RichInput
                  description={value}
                  setDescription={onChange}
                  error={error}
                />
              )}
            />

            <div className="section-wrapper" id="cta">
              <p className="title-text">CTA Button Settings</p>
              <p className="sub-title">To have CTA buttons in event detail page, please fulfill the below fields in
                accordance with the buttons.</p>
            </div>

            <CallToActions setActions={setActions} actions={actions} />

            <div className="section-wrapper" id="sponsors">
              <p className="title-text">Sponsorship Request</p>
              <p className="sub-title">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC.
              </p>
            </div>
            <Sponsors
              eventSponsor={eventSponsor ? eventSponsor : null}
              delElement={delElement}
              handleSendNote={handleSendNote}
              eventInfo={eventInfo}
              handleChangeSponsors={handleChangeSponsors}
              organizations={organizationsList}
              sponsors={sponsors}
              sponsorsId={sponsorsId}
            />
            <div className="section-wrapper" id="eventAccess">
              <p className="title-text">Event Access</p>
              <p className="sub-title">
                Choose who can view your event - make it public for everyone, limit it to
                selected members or lists, or keep it exclusive to your organization's members only.
              </p>
            </div>
            <div className="autocomplete-input autocomplete-top">
              <p className="autocomplete-title">Who can see it ?</p>
              <Controller
                control={control}
                name={"accessStatus"}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                  <>
                    <Autocomplete
                      isOptionEqualToValue={(option, value) => option.value === value.value}
                      defaultValue={whoCanDefault(eventInfo?.access?.status)}
                      sx={{ minHeight: "48px" }}
                      id="checkboxes-tags"
                      placeholder={"Select the event access option"}
                      options={whoCan}
                      onChange={(e, ev) => {
                        onChange(ev?.value);
                        handleSelectAccess(ev?.value);
                      }}
                      getOptionLabel={(option) => option?.title}
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <div className="who-can-wrapper">
                            <img src={option?.icon} alt="icon" />
                            <p>{option?.title}</p>
                          </div>
                        </li>
                      )}
                      renderInput={(params) =>
                        <TextField
                          {...params}
                          placeholder="Select the event access option"
                          error={error?.type === "required" && "This Field is required"}
                        />}
                    />
                    <p className="custom-error-messages">
                      {error?.type === "required" ? "This Field is required" : ""}
                    </p>
                  </>
                )}
              />
            </div>
            {accessStatus === "LISTS" &&
              <div className="autocomplete-input autocomplete-top">
                <p className="autocomplete-title">Selected User Lists</p>
                <Controller
                  control={control}
                  name={"listIds"}
                  rules={{ required: eventInfo && usersList?.length ? false : accessStatus === "LISTS" }}
                  render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <>
                      <Autocomplete
                        multiple
                        defaultValue={eventInfo ? usersList : []}
                        sx={{ minHeight: "48px" }}
                        id="checkboxes-tags"
                        placeholder={"Select the event access option"}
                        options={userGroupList}
                        value={usersList}
                        onChange={(e, ev) => onChange(ev) && setUsersList(ev)}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option?.name}
                        renderOption={(props, option, { selected }) => (
                          <li {...props}>
                            <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }}
                                      checked={selected} />
                            {option?.name}
                          </li>
                        )}
                        renderInput={(params) =>
                          <TextField
                            {...params}
                            placeholder="Selected User Lists"
                            error={error?.type === "required" && "This Field is required"}
                          />
                        }
                      />
                      <p className="custom-error-messages">
                        {error?.type === "required" ? "This Field is required" : ""}
                      </p>
                    </>
                  )}
                />
              </div>
            }
            <div className="user-group-ist-wrapper" id="userList">
              {usersList?.length ?
                usersList?.map((i, j) => (
                  <div className="user-list-wrapper" key={i?.id}>
                    <p className="user-list-name">
                      <TextRow name={i?.name} textWidth={9} />
                    </p>
                    <button className="remove-user-list" onClick={() => handleRemoveList(i)}>Remove</button>
                  </div>
                ))
                : null
              }
            </div>
            <div className="event-action-buttons">
              <div className="btn-box">
                <CreateCancel
                  style={{ display: "flex", width: "100%" }}
                  width={"100%"}
                  title={eventInfo ? "Save" : "Create"}
                  actionType={CREATE_ACTION_TYPE}
                  handleClose={handleOpenClose}
                />
              </div>
            </div>
          </div>
        </form>
      </div>


      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}>
        <div className="mobile-overview-wrapper">
          {overviewList?.map((i, j) => (
            <a href={i?.href} className="overview-link" onClick={handleClose}>
              <button key={j} className="overview-button">
                <img src={i.icon} alt="icon"
                     style={i?.name === "Event Access" ? { width: "20px", marginLeft: "4px" } : {}} />
                <p>  {i?.name}</p>
              </button>
            </a>
          ))}
        </div>
      </Popover>
    </div>
  );
};