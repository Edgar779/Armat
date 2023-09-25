// Routers.
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { Members, Events, Organization, MemberList, Tickets, TicketInfo, TicketCheckIn } from "pages";

export const Routers = () => {

  return (
    <Fragment>
      <Routes>
        <Route path="/members" element={<Members />} />
        <Route path="/membersList/:id" element={<MemberList />} />

        <Route path="/events" element={<Events />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/ticket-info/:id" element={<TicketInfo />} />
        <Route path="/ticket" element={<TicketCheckIn />} />

        <Route path="/ticket/ticketId/:ticketId/ticketOrderId/:ticketOrderId" element={<TicketCheckIn />} />
        {/*<Route path="*" element={<Navigate to="/" replace />} />*/}
      </Routes>
    </Fragment>
  );
};
