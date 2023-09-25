import React, { useState, useEffect, Fragment } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { eventActions, httpRequestsOnErrorsActions, httpRequestsOnSuccessActions, ticketsActions } from "store";
import { FindError, FindSuccess, useWindowDimensions } from "utils";
import { CreateCancel, CustomInput, CustomSelect, CustomTextArea, AntSwitch } from "components";
import { Autocomplete, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Svg } from "assets";
import { useLocation } from "react-router-dom";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const ACTION_TYPE = "CREATE_TICKET";

export const CreateTicket = ({ state, handleClose }) => {
  const { control, handleSubmit, setValue, clearErrors, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: null,
      eventId: null,
      accessStatus: null,
      listIds: null,
      capacity: null,
      price: null,
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null,
      minOrder: null,
      maxOrder: null,
      description: null,
    }
  });
  const { eventsList, eventById, userGroupList } = useSelector((state) => ({
    eventsList: state.events.eventsList,
    eventById: state.events.eventById,
    userGroupList: state.members.userGroupList
  }));
  const dispatch = useDispatch();
  const backError = FindError(ACTION_TYPE);
  const success = FindSuccess(ACTION_TYPE);
  const [free, setFree] = useState(false);
  const [status, setStatus] = useState(true);
  const [selectAccess, handleSelectAccess] = useState(true);
  const [usersList, setUsersList] = useState([]);
  const [eventId, setEventId] = useState('');
  const [capacity, setCapacity ] = useState(null)
  const [startDate, setStartDate ] = useState(null)
  const [endDate, setEndDate ] = useState(null)
  const { width } = useWindowDimensions();
  const location = useLocation();
  const info = location?.state;

  const renderParams = () => {
    const filteredInfo = {
      ...info
    };
    if(width > 767) {
      filteredInfo.skip = info?.skip ? info?.skip : 0;
      filteredInfo.limit = 10;
    }
    if (info?.status && info?.status !== "ALL") {
      filteredInfo.status = info.status;
    } else {
      delete filteredInfo.status;
    }
    if (info?.access && info?.access !== "ALL") {
      filteredInfo.access = info.access;
    } else {
      delete filteredInfo.access;
    }
    delete filteredInfo.page;
    return filteredInfo
  }

  useEffect(() => {
    dispatch(eventActions.getEvents());

    return() => { closeDrawer() }
  }, []);

  useEffect(() => {
    if (success) {
      closeDrawer();
      dispatch(httpRequestsOnSuccessActions.removeSuccess(ACTION_TYPE));
    }
  }, [success]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    closeDrawer();
    if (backError) {
      dispatch(httpRequestsOnErrorsActions.removeError(ACTION_TYPE));
    }
  };

  const onSubmit = (body) => {
    const sendInfo = {
      ...body,
      "status": status === true ? "ACTIVE" : "INACTIVE"
    };

    let listIds = [];
    body?.listIds?.length && body?.listIds?.filter((i) => listIds.push(i?.id));
    sendInfo.capacity = +body.capacity;
    sendInfo.price = +body.price;
    listIds?.length ? sendInfo.listIds = listIds : delete sendInfo.listIds;
    body?.minOrder ? sendInfo.minOrder = +body?.minOrder : delete sendInfo?.minOrder
    body?.maxOrder ? sendInfo.maxOrder = +body?.maxOrder : delete sendInfo?.maxOrder

    body?.description ? sendInfo.description = body.description : delete sendInfo.description
    body?.endDate ? sendInfo.endDate = body.endDate : delete sendInfo.endDate
    body?.endTime ? sendInfo.endTime = body.endTime : delete sendInfo.endTime
    body?.startDate ? sendInfo.startDate = body.startDate : delete sendInfo.startDate
    body?.startTime ? sendInfo.startTime = body.startTime : delete sendInfo.startTime
    dispatch(ticketsActions.createTicket(sendInfo, renderParams()));
    listIds = [];
  };

  const getEvent = (id) => {
    setEventId(id)
    dispatch(eventActions.getEventById(id));
  };

  const whoCan = () => {
    if (eventById?.access?.status === "LISTS") {
      return [
        { name: "LISTS", title: "Limited to User Lists", icon: Svg.limited }
      ];
    } else if (eventById?.access?.status === "MEMBERS") {
      return [
        { name: "LISTS", title: "Limited to User Lists", icon: Svg.limited },
        { name: "MEMBERS", title: "Members Only", icon: Svg.membersOnly }
      ];
    } else {
      return [
        { name: "PUBLIC", title: "Public", icon: Svg.publicEvent },
        { name: "LISTS", title: "Limited to User Lists", icon: Svg.limited },
        { name: "MEMBERS", title: "Members Only", icon: Svg.membersOnly }
      ];
    }
  };

  const handleSetFree = () => {
    setFree(!free)
    if(!free) {
      clearErrors("price");
      setValue('price', 0)
    }else{
      setValue('price', null)
    }
  }

  const closeDrawer = () => {
    reset({
      name: '',
      eventId: '',
      accessStatus: '',
      listIds: '',
      capacity: '',
      price: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      minOrder: '',
      maxOrder: '',
      description: '',
    })
    handleClose();
    setFree(false)
    setStatus(true)
    handleSelectAccess(true)
    setUsersList([])
    setEventId('')
    setCapacity('')
    setStartDate('')
    setEndDate('')
  }

  return (
    <Fragment key={"right"}>
      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        <div className="create-ticket-wrapper">
          <div className='close-btn-wrapper'>
            <button type="button" className="close-button" onClick={closeDrawer}>
              <img src={Svg.CloseModal} alt="Close-Modal" />
            </button>
          </div>
          <div className="create-ticket-title">
            <p className="custom-modal-title" style={{ margin: 0 }}>Create New Ticket</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="form-messages">
            <div style={{ width: "100%" }}>
              <CustomInput
                name="name"
                control={control}
                rules={{ required: true }}
                type="text"
                label="Ticket Name"
                required={true}
                placeholder={"Enter ticket name"}
              />
              <CustomSelect
                name={"eventId"}
                handleBlur={(e) => getEvent(e.target.value)}
                control={control}
                rules={{ required: true }}
                listSelect={eventsList?.events}
                displayValue={"eventId"}
                displayName={"title"}
                label="Select an Event"
                placeholder={"Select an Event"}
                required={true}
                defaultValue={''}
              />
              {/*{eventId && eventById &&*/}
                <div className="autocomplete-input autocomplete-top">
                  <p className="autocomplete-title">Ticket Access <span
                    style={{ color: "#FF453A", marginLeft: "-3px" }}>*</span></p>
                  <Controller
                    control={control}
                    name={"accessStatus"}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
                     return <>
                        <Autocomplete
                          disabled={!eventId && !eventById }
                          sx={{ minHeight: "48px" }}
                          id="checkboxes-tags"
                          placeholder={"Select the event access option"}
                          defaultValue={value ? value : null}
                          options={whoCan()}
                          onChange={(e, ev) => {
                            onChange(ev?.name);
                            handleSelectAccess(ev?.name);
                            }
                          }
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
                              defaultValue={''}
                              placeholder="Select the event access option"
                              error={error?.type === "required" && "This Field is required"}
                            />}
                        />
                        <p className="custom-error-messages">
                          {error?.type === "required" ? "This Field is required" : ""}
                        </p>
                      </>
                    }}
                  />
                </div>
              {/*}*/}

              { (selectAccess === "LISTS" || eventById?.access?.status === "LISTS"
                  // || eventById?.access?.status === "MEMBERS"
                )
                &&
                <div className="autocomplete-input autocomplete-top">
                  <p className="autocomplete-title">Select User Lists</p>
                  <Controller
                    control={control}
                    name={"listIds"}
                    rules={{ required: selectAccess === "LISTS" }}
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                      <>
                        <Autocomplete
                          multiple
                          sx={{ minHeight: "48px" }}
                          id="checkboxes-tags"
                          placeholder={"Select the event user list"}
                          options={
                            eventById?.access?.status === "PUBLIC" ? userGroupList :
                              eventById?.access?.status === "MEMBERS" ? userGroupList :
                                eventById?.access?.status === "LISTS" ? eventById?.access?.listIds :
                                  []
                          }
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
              <CustomInput
                handleChange={(e) => setCapacity(e.target.value)}
                name="capacity"
                control={control}
                rules={{ required: true }}
                type="number"
                label="Ticket Capacity"
                required={true}
                placeholder={"Enter the number of tickets available for this ticket type."}
              />
              <CustomInput
                name="price"
                control={control}
                disabled={free}
                rules={{ required: true }}
                type="number"
                label="Price Per Ticket "
                required={true}
                placeholder={"Enter the price the purchaser pays for one ticket."}
                dollar={true}
              />
              <FormGroup className="set-as-free" >
                <FormControlLabel control={
                  <Checkbox onClick={() => handleSetFree() } checked={free} />} label="Set as Free" />
              </FormGroup>
              <div className="flex-input">
                <CustomInput
                  max={endDate}
                  handleChange={(e) => setStartDate(e.target.value)}
                  name="startDate"
                  control={control}
                  rules={{ required: false }}
                  type="date"
                  label="Sales Start"
                  placeholder={"Select the start selling date"}
                />
                <div className="right-ceil">
                  <CustomInput
                    name="startTime"
                    control={control}
                    rules={{ required: false }}
                    type="time"
                    label="Start Time"
                    placeholder={"Select the start selling time"}
                  />
                </div>
              </div>
              <div className="flex-input">
                <CustomInput
                  min={startDate}
                  handleChange={(e) => setEndDate(e.target.value)}
                  name="endDate"
                  control={control}
                  rules={{ required: false }}
                  type="date"
                  label="Sales End"
                  placeholder={"Select the start selling date"}
                />
                <div className="right-ceil">
                  <CustomInput
                    name="endTime"
                    control={control}
                    rules={{ required: false }}
                    type="time"
                    label="End Time"
                    placeholder={"Select the start selling time"}
                  />
                </div>
              </div>
              <div className="flex-input">
                <CustomInput
                  disabled={!capacity}
                  max={capacity}
                  name="minOrder"
                  control={control}
                  rules={{ required: false }}
                  type="number"
                  label="Min Per Order"
                  placeholder={"e.g. 5"}
                  errMessage={
                    backError?.error === "The minimum order must be less than or equal to the capacity." ? 'The minimum order must be less than or equal to the capacity.'
                      :''}
                />
                <div className="right-ceil">
                  <CustomInput
                    disabled={!capacity}
                    max={capacity}
                    name="maxOrder"
                    control={control}
                    rules={{ required: false }}
                    type="number"
                    label="Max Per Order"
                    placeholder={"e.g. 100"}
                    errMessage={
                      backError?.error === "The maximum order must be less than or equal to the capacity." ? 'The maximum order must be less than or equal to the capacity.'
                        :''}
                  />
                </div>
              </div>
              <CustomTextArea
                name={"description"}
                id={"text"}
                control={control}
                defaultValue={""}
                label={"Ticket Description"}
                placeholder={"Enter the Description here..."}
                height="big"
                showMaxCount={true}
              />
            </div>
            <div className="status-switch">
              <p>Activate Ticket</p>
              <AntSwitch
                checked={status}
                inputProps={{ "aria-label": "ant design" }}
                onChange={(e) => setStatus(e.target.checked)}
              />
            </div>
            <div className="create-ticker-footer">
              <div className="create-ticker-footer-box">
                <CreateCancel
                  handleClose={closeDrawer}
                  title="Create"
                  actionType={ACTION_TYPE}
                />
              </div>
            </div>
          </form>
        </div>
      </SwipeableDrawer>
    </Fragment>
  );
};
