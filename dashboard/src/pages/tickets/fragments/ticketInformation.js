import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { AntSwitch, CreateCancel, CustomInput, CustomSelect, CustomTextArea } from "components";
import { eventActions, httpRequestsOnSuccessActions, ticketsActions } from "store";
import { CheckUserType, FindError, FindSuccess, ORGADMIN } from "utils";
import moment from 'moment';

const ACTION_TYPE = 'EDIT_TICKET'

export const TicketInformation = ({ ticketById }) => {
  const { eventsList } = useSelector((state) => ({
    eventsList: state.events.eventsList
  }));
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: ticketById?.name,
      eventId: ticketById?.eventId || ticketById?.eventId?.id,
      accessStatus: ticketById?.access?.status,
      capacity: ticketById?.capacity,
      price: ticketById?.price,
      startDate: moment(ticketById?.startDate).format('YYYY-MM-DD') ,
      startTime: ticketById?.startTime,
      endDate:   moment(ticketById?.endDate).format('YYYY-MM-DD') ,
      endTime: ticketById?.endTime,
      minOrder: ticketById?.minOrder,
      maxOrder: ticketById?.maxOrder,
      description: ticketById?.description,
    },
  });

  const dispatch = useDispatch();
  const backError = FindError(ACTION_TYPE);
  const success = FindSuccess(ACTION_TYPE);
  const [free, setFree] = useState(false);
  const [status, setStatus] = useState(true);
  const [capacity, setCapacity ] = useState(null)
  const [startDate, setStartDate ] = useState(null)
  const [endDate, setEndDate ] = useState(null)

  useEffect(() => {
    if(ticketById?.status){
      setStatus(ticketById?.status === 'ACTIVE')
    }
    if(ticketById?.capacity){
      setCapacity(ticketById?.capacity)
    }
    if(ticketById?.startDate){
      setStartDate( moment(ticketById?.startDate).format('YYYY-MM-DD'))
    }
    if(ticketById?.endDate){
      setEndDate( moment(ticketById?.endDate).format('YYYY-MM-DD'))
    }

  }, [ticketById])

  useEffect(() => {
    dispatch(eventActions.getEvents());
  }, []);

  useEffect(() => {
    if (success) {
      dispatch(httpRequestsOnSuccessActions.removeSuccess(ACTION_TYPE));
    }
  }, [success]);

  const onSubmit = (body) => {
    const sendInfo = {
      ...body,
      "status": status === true ? 'ACTIVE' : 'INACTIVE'
    };
    sendInfo.capacity = +body.capacity;
    sendInfo.price = +body.price;
    body?.minOrder ? sendInfo.minOrder = +body?.minOrder : delete sendInfo?.minOrder
    body?.maxOrder ? sendInfo.maxOrder = +body?.maxOrder : delete sendInfo?.maxOrder
    dispatch(ticketsActions.editTicket(ticketById?.id, sendInfo));
  };

  const handleReset = () => {
    reset({
      name: ticketById?.name,
      eventId: ticketById?.eventId || ticketById?.eventId?.id,
      accessStatus: ticketById?.access?.status,
      capacity: ticketById?.capacity,
      price: ticketById?.price,
      startDate: moment(ticketById?.startDate).format('YYYY-MM-DD') ,
      startTime: ticketById?.startTime,
      endDate:   moment(ticketById?.endDate).format('YYYY-MM-DD') ,
      endTime: ticketById?.endTime,
      minOrder: ticketById?.minOrder,
      maxOrder: ticketById?.maxOrder,
      description: ticketById?.description,
    })
  }

  return(
    <div className='ticket-information-wrapper'>
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
                control={control}
                rules={{ required: true }}
                listSelect={eventsList?.events}
                displayValue={"eventId"}
                displayName={"title"}
                label="Select an Event"
                placeholder={"Select an Event"}
                required={true}
              />
              <CustomSelect
                name={"accessStatus"}
                control={control}
                rules={{ required: true }}
                listSelect={[
                  { name: "Public", value: "PUBLIC" },
                  { name: "Lists", value: "LISTS" },
                  { name: "Members", value: "MEMBERS" }
                ]}
                displayValue={"value"}
                displayName={"name"}
                label="Ticket Access"
                placeholder={"Select the access level for this ticket."}
                required={true}
              />
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
                rules={{ required: true }}
                type="number"
                label="Price Per Ticket "
                required={true}
                placeholder={"Enter the price the purchaser pays for one ticket."}
                dollar={true}
              />
              <FormGroup className='set-as-free' onChange={() => setFree(!free)}>
                <FormControlLabel control={<Checkbox checked={free} />} label="Set as Free" />
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
                       // backError?.error[0] === "The maximum order must be less than or equal to the capacity." ? 'The maximum order must be less than or equal to the capacity.'
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
            <div className='status-switch' style={{justifyContent:'flex-start'}}>
              <p>Activate Ticket</p>
              <AntSwitch
                checked={status}
                inputProps={{ 'aria-label': 'ant design' }}
                onChange={(e) => setStatus(e.target.checked)}
              />
            </div>
            {CheckUserType() === ORGADMIN &&
              <div className="create-ticker-footer">
                <div className="create-ticker-footer-box">
                  <CreateCancel
                    handleClose={handleReset}
                    title="Save"
                    actionType={ACTION_TYPE}
                  />
                </div>
              </div>
            }
          </form>
    </div>
  )
}