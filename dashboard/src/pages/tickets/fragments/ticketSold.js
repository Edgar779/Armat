import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { DateRow, Loader, NoDataComponent, PriceRow, TextRow } from "components";
import { FindLoad } from "utils";
import BasicPopover from "../../../components/table/poper";
import { ticketsActions } from "store";

export const TicketSold = ({ id }) => {
  const { soldTickets } = useSelector((state) => ({
    soldTickets: state.tickets.soldTickets
  }));
  const params = useParams();
  const dispatch = useDispatch();
  const loader = FindLoad("GET_SOLD_TICKETS");
  const location = useLocation();
  const info = location?.state;

  useEffect(() => {
    const pushInfo = {}
    if (info?.status && info?.status !== "ALL") {
      pushInfo.status = info?.status;
    } else {
      delete pushInfo.status;
    }
    const currentId = id ? id : params?.id
    dispatch(ticketsActions.getSoldTicket(currentId, pushInfo));
  }, [info]);

  if (loader?.length) {
    return <Loader />;
  }

  return (
    <div className="ticket-sold-wrapper">
      {soldTickets?.length ?
        <>
          <div className="desktop-page-view">
            <div className="sold-table-header">
              <div style={{ width: "30%" }} className="sold-table-header-item">Attendee Name</div>
              <div style={{ width: "25%" }} className="sold-table-header-item">Ticket ID</div>
              <div style={{ width: "15%" }} className="sold-table-header-item">Ticket Price</div>
              <div style={{ width: "15%" }} className="sold-table-header-item">Purchase Date</div>
              <div style={{ width: "15%" }} className="sold-table-header-item">
                <BasicPopover
                  link={location?.search}
                  name={"status"}
                  title={"Status"}
                  list={
                    [
                      {
                        value: "ALL",
                        label: "All"
                      },
                      {
                        value: "NOTCHECKED",
                        label: "Not Checked"
                      },
                      {
                        value: "CHECKED",
                        label: "Checked"
                      }
                    ]
                  }
                  labelTitle={"Filter the status"}
                />
              </div>
            </div>
            <div className="sold-table-body-wrapper">
              {
                soldTickets?.map((i, j) => (
                  <div className="sold-table-body" key={j}>
                    <div style={{ width: "30%" }} className="sold-table-body-item">
                      <TextRow name={i?.memberId} />
                    </div>
                    <div style={{ width: "25%" }} className="sold-table-body-item">
                      <TextRow name={i?.ticketId?.displayId} className="sold-table-body-item" />
                    </div>
                    <div style={{ width: "15%" }} className="sold-table-body-item">
                      <PriceRow info={i?.ticketId?.price ? i?.ticketId?.price : 0} />
                    </div>
                    <div style={{ width: "15%" }} className="sold-table-body-item">
                      <DateRow date={i?.createdAt} />
                    </div>
                    <div style={{ width: "15%" }} className="sold-table-body-item">
                      {i?.status === "NOTCHECKED" ?
                        <p className="not-checked-in">Not Checked In</p>
                        :
                        <p className="checked-in">Checked In</p>
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="mobile-page-view">
            {soldTickets?.map((i, j) => (
              <div className="sold-table-mobile-card" key={j}>
                <p className="attend-title">
                  <TextRow name={"Attendee Name"} />
                </p>
                <div className="mobile-card-item">
                  <p className="attend-row-title">Ticket ID: </p>
                  <div className="attend-row-value">
                    <TextRow name={i?.ticketId?.displayId} />
                  </div>
                </div>
                <div className="mobile-card-item">
                  <p className="attend-row-title">Ticket Price: </p>
                  <div className="attend-row-value">
                    <PriceRow info={i?.ticketId?.price ? i?.ticketId?.price : 0} />
                  </div>
                </div>
                <div className="mobile-card-item">
                  <p className="attend-row-title">Purchase Date: </p>
                  <div className="attend-row-value">
                    <DateRow date={new Date()} />
                  </div>
                </div>
                <div className="mobile-card-item" style={{ border: "none" }}>
                  <p className="attend-row-title">Status: </p>
                  <div className="attend-row-value">
                    {i?.status === "NOTCHECKED" ?
                      <p className="not-checked-in">Not Checked In</p>
                      :
                      <p className="checked-in">Checked In</p>
                    }
                  </div>
                </div>
              </div>
            ))
            }
          </div>
        </>
        :
        <NoDataComponent />
      }
    </div>
  );
};