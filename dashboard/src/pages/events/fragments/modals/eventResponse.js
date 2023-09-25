import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Tabs, Tab, Box } from "@mui/material";
import { Svg } from "assets";
import { FindLoad } from "utils";
import { Loader } from "components";

export const EventResponse = ({ item }) => {
  const { eventRsvp } = useSelector((state) => ({
    eventRsvp: state.events.eventRsvp
  }));
  const [tab, setTab] = useState("ALL");
  const loader = FindLoad("GET_EVENT_RSVP");
  const [rsvpList, setRsvpList] = useState([]);
  const goingCount = rsvpList?.filter((i) => i?.status === "GOING");
  const notGoingCount = rsvpList?.filter((i) => i?.status === "NOTGOING");
  const interested = rsvpList?.filter((i) => i?.status === "INTERESTED");

  const headerList = [
    { name: "All", value: "ALL", count: eventRsvp?.count ? eventRsvp?.count : 0 },
    { name: "Going", value: "GOING", count: goingCount?.length ? goingCount?.length : 0, icon: Svg.CheckCircle },
    { name: "Not Going", value: "NOTGOING", count: notGoingCount?.length ? notGoingCount?.length : 0, icon: Svg.Close },
    {
      name: "Interested",
      value: "INTERESTED",
      count: interested?.length ? interested?.length : 0,
      icon: Svg.Interested
    }
  ];

  useEffect(() => {
    if (eventRsvp) {
      setRsvpList(eventRsvp?.rsvp);
    }
  }, [eventRsvp]);

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div className="response-modal">
      {loader?.length ?
        <Loader />
        :
        <Box sx={{ width: "100%" }}>
          <p className='rsvp-response'>RSVP Response </p>
          <Tabs value={tab} onChange={handleChangeTab} textColor={"inherit"} aria-label="tabs">

            {headerList?.map((i, j) => (
              <Tab key={j} value={i?.value}
                label={
                  <div className="tab-info">
                    {i?.icon && <img src={i.icon} alt="Check Circle" />}
                    {i?.name}
                    <span className="badge-title">{i?.count}</span>
                  </div>
                }
              />
            ))
            }
          </Tabs>

          <Box className="tab-content">
            {rsvpList?.length ? rsvpList?.map((item, index) => {
                if (tab === "ALL" ? true : tab === item?.status) {
                  return (
                    <div className="response-card" key={index}>
                      <div className="response-img">
                        <img src={Svg.ResponseAccount} alt="Response Account" />
                      </div>
                      <div className="response-info">
                        <h5 className="response-title">{item?.memberId?.fullName}</h5>
                        <p className="response-subtile">{item?.memberId?.email}</p>
                      </div>
                    </div>
                  );
                }
              })
              :
              <p className="no-item">No RSVP Yet</p>
            }
          </Box>
        </Box>
      }
    </div>
  );
};
