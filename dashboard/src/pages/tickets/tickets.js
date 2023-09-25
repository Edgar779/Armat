import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FullTable, MobileTablet, TableWrapper } from "components";
import { ACTION_TYPE, ticketHead, ticketBody, ticketMobileHead, ticketMobileBody } from "./constants";
import { FindLoad, FindSuccess, useWindowDimensions } from "utils";
import { Svg } from "assets/images";
import { httpRequestsOnSuccessActions, ticketsActions } from "store";
import { CreateTicket } from "./fragments/modals/createTicket";
import { RenderFilters } from "./fragments";

const EDIT_ACTION = "EDIT_ROLE";

export const Tickets = () => {
  const { ticketList } = useSelector((state) => ({
    ticketList: state.tickets.ticketList
  }));
  const location = useLocation();
  const info = location?.state;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const successEdit = FindSuccess(EDIT_ACTION);
  const [state, setState] = useState({ right: false });
  const { width } = useWindowDimensions();
  const [showFilters, setShowFilters] = useState(false);

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
    if (successEdit) {
      dispatch(httpRequestsOnSuccessActions.removeSuccess(EDIT_ACTION));
      handleGetMembers("noLoad");
    }
  }, [successEdit]);

  useEffect(() => {
    handleGetMembers();
  }, [info]);

  const handleGetMembers = (load) => {
    const filteredInfo = renderParams()
    const loading = load === "noLoad" ? "noLoad" : "load";
    dispatch(ticketsActions.getTickets({ ...filteredInfo }, loading));
  };

  const handleClick = (item, name) => {
    if (name === "setStatus") {
      const filteredInfo = renderParams()
      dispatch(httpRequestsOnSuccessActions.appendSuccess("MINI_LOAD", item.id));
      const status = item?.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
      dispatch(ticketsActions.changeTicketStatus(item?.id, status, filteredInfo));
    }
  };

  const openDrawer = () =>{
    setState({ ...state, ["right"]: true })
  }
  const CloseDrawer = () =>{
    setState({ ...state, ["right"]: false })
  }

  return (
    <div className="members-container page-container">
      <div className="desktop-page-view">
          <TableWrapper
            wrapperTitle={"Tickets"}
            addButton={"Create a Ticket"}
            icon={Svg.WhitePlus}
            handleClickButton={openDrawer}
          >
            <FullTable
              head={ticketHead(width)}
              body={ticketBody(width)}
              loadingType={ACTION_TYPE}
              list={ticketList?.tickets}
              listCount={ticketList?.count}
              handleClickButton={handleClick}
              handleClick={(id) => navigate(`/ticket-info/${id}`)}
              listName={"tickets"}
              openDrawer={openDrawer}
            />
          </TableWrapper>
      </div>

      <div className="mobile-page-view">
        <MobileTablet
          handleCreate={openDrawer}
          title={'Tickets'}
          noMoreActions={true}
          createIcon={Svg.WhitePlus}
          head={ticketMobileHead()}
          body={ticketMobileBody()}
          list={ticketList?.tickets}
          listCount={ticketList?.count}
          actionType={ACTION_TYPE}
          handleClickButton={handleClick}
          handleClick={(id) => navigate(`/ticket-info/${id}`)}

          renderFilters={<RenderFilters showFilters={showFilters} />}
          handleFilter={() => setShowFilters(!showFilters)}
          showFilters={showFilters}
        />
      </div>

      <CreateTicket
        state={state}
        handleClose={CloseDrawer}
      />
    </div>
  );
};
