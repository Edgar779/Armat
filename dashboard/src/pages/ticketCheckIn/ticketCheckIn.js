import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Loader, NoDataComponent, TableWrapper } from "components";
import { FindLoad } from "utils";
import { ticketsActions } from "store";
import { TicketSold } from "../tickets/fragments/ticketSold";
import { CheckTicket } from "./fragments/checkTicket";

const ACTION_TYPE = "GET_SOLD_TICKETS_INFORMATION";

export const TicketCheckIn = () => {
  const dispatch = useDispatch();
  const loader = FindLoad(ACTION_TYPE);
  const location = useLocation();
  const link = location?.search;
  const ticketIdPos = link && link?.slice(link.search("ticketId="));
  const ticketId = ticketIdPos && ticketIdPos.substring(9, 33);
  const ticketOrderIdPos = link && link?.slice(link.search("ticketOrderId="));
  const ticketOrderId = ticketOrderIdPos && ticketOrderIdPos.substring(14);

  useEffect(() => {
    if(ticketOrderId) {
      dispatch(ticketsActions.getSoldTicketInfo(ticketOrderId));
    }
  }, []);

  if (loader?.length) {
    return <Loader />;
  }

  return (
    <div className="members-container page-container">
      {ticketOrderId && ticketId ?
        <div>
          <TableWrapper
            wrapperTitle={"Tickets Check-In"}
            noAddButton={true}
          >
            <div className="tickets-check-in-wrapper">
              <CheckTicket />
              <div className="ticket-check-wrapper">
                <p className="attendees">Attendees</p>
                <TicketSold id={ticketId} />
              </div>
            </div>
          </TableWrapper>
        </div>
        :
        <NoDataComponent />
      }
    </div>
  );
};
