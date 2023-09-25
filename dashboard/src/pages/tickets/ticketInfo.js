import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Tab, Tabs } from "@mui/material";
import { TicketSold } from "./fragments/ticketSold";
import { TicketInformation } from "./fragments/ticketInformation";
import { eventActions, ticketsActions } from "store";
import { FindLoad } from "utils";
import { Loader } from "components";

const ACTION_TYPE = 'GET_TICKET_BY_ID'
export const TicketInfo = ({ }) => {
  const { ticketById } = useSelector((state) => ({
    ticketById: state.tickets.ticketById,
  }));
  const [tab, setTab] = useState(0);
  const loader = FindLoad(ACTION_TYPE);
  const params = useParams()
  const dispatch = useDispatch()

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  useEffect(() => {
    dispatch(ticketsActions.getTicketById(params?.id))
    dispatch(eventActions.getEvents());
  }, [])

  if(loader?.length){
    return <Loader/>
  }

  return(
    <div className="organization-container page-container">
      <div className="container-title">
        <h1 className="organization-title">Organization Info</h1>
      </div>
      <div className="organization-tab">
        <Box className="tab-btns">
          <Tabs
            value={tab}
            onChange={handleChangeTab}
            allowScrollButtonsMobile
            scrollButtons
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Basic Info" />
            <Tab label="Sold" />
          </Tabs>
        </Box>
      </div>
      <div className="ticket-info-wrapper">
        {tab === 0 && (
          <Box className="tab-container">
            <TicketInformation ticketById={ticketById}/>
          </Box>
        )}
        {tab === 1 && (
          <Box className="tab-container">
            <TicketSold />
          </Box>
        )}
      </div>
    </div>
  )
}