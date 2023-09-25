import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FullTable, MobileTablet, TableWrapper } from "components";
import { ACTION_TYPE, eventBody, eventBodyMobile, eventHead, eventHeadMobile } from "./constants";
import { CheckUserType, FindSuccess, ORGADMIN, useModal, useWindowDimensions } from "utils";
import { eventActions } from "store/events";
import { Svg } from "assets/images";
import { Box } from "@mui/material";
import { SimpleModal } from "../../components/modal/modalBase";
import { httpRequestsOnSuccessActions } from "store";
import { EventResponse, RenderFilters } from "./fragments";
import { DeleteModal } from "../../fragments/componentModal/core";
import { CreateEventCustom } from "./fragments/modals/createEventCustom";
import { MobileActions } from "../members/fragments/modals";

const CREATE_ACTION_TYPE = "CREATE_EVENT";

export const Events = () => {
  const { eventsList } = useSelector((state) => ({
    eventsList: state.events.eventsList
  }));
  const { openModal, close } = useModal();
  const { width } = useWindowDimensions();
  const location = useLocation();
  const info = location?.state;
  const dispatch = useDispatch();
  const [selectedList, setSelectedList] = useState([]);
  const [createEventModal, setCreateEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const success = FindSuccess(CREATE_ACTION_TYPE);
  const [selectType, setSelectType] = useState("");
  const [showFilters, setShowFilters] = useState(false);

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
    if (success) {
      setCreateEventModal(false);
      dispatch(httpRequestsOnSuccessActions.removeSuccess(CREATE_ACTION_TYPE));
    }
  }, [success]);

  useEffect(() => {
    handleGetMembers();
  }, [info]);

  const deleteModal = () => {
    openModal(
      <DeleteModal
        handleDelete={() => dispatch(eventActions.deleteEvents(selectedList))}
        actionType="DELETE_EVENTS"
        page={"/events"}
        title="Are you sure you want to delete selected events?"
        deleteText="Yes, Delete"
        handleSuccess={() => setSelectedList([])}
      />
    );
  };

  const handleGetMembers = (load) => {
    const filteredInfo = renderParams();
    const loading = load === "noLoad" ? "noLoad" : "load";
    dispatch(eventActions.getEvents({ ...filteredInfo }, loading));
  };

  const handleCheck = (ev, item, name) => {
    if (name === "all") {
      const allList = [];
      if (ev?.target?.checked || ev === true) {
        eventsList?.events?.filter((i) => allList.push(i?.eventId));
      }
      setSelectedList(allList);
    } else {
      const list = [...selectedList];
      if (ev.target.checked) {
        list.push(item?.eventId);
      } else {
        list.indexOf(item?.eventId) !== -1 && list.splice(list.indexOf(item?.eventId), 1);
      }
      setSelectedList(list);
    }
  };

  const handleClick = (item, name) => {
    if (name === "attendees") {
      dispatch(eventActions.getEventRsvp(item?.eventId));
      openModal(<EventResponse item={item} />);
    }
    if (name === "edit") {
      dispatch(eventActions.getEventSponsorsForEdit(item?.eventId))
      setSelectedEvent(item);
      handleOpenClose();
    }
    if (name === "setStatus") {
      dispatch(eventActions.changeEventStatus({
          id: item?.eventId,
          status: item?.status === "PUBLISHED" ? "UNPUBLISHED" : "PUBLISHED"
        }, { ...renderParams() }
      ));
      dispatch(httpRequestsOnSuccessActions.appendSuccess("MINI_LOAD", item?.eventId));
    }
  };

  const handleClickMobile = (item, name) => {
    if (name === "attendees") {
      dispatch(eventActions.getEventRsvp(item?.eventId));
      openModal(<EventResponse item={item} />, { type: "swipe" });
    }
    if (name === "edit") {
      setSelectedEvent(item);
      handleOpenClose();
    }
    if (name === "setStatus") {
      dispatch(httpRequestsOnSuccessActions.appendSuccess("MINI_LOAD", item?.eventId));
      dispatch(eventActions.changeEventStatus(
        { id: item?.eventId, status: item?.status === "PUBLISHED" ? "UNPUBLISHED" : "PUBLISHED" }, { ...renderParams() }
      ));
    }
  };

  const handleOpenClose = () => {
    setCreateEventModal(!createEventModal);

  };

  const handleSelectMobile = async (name) => {
    if (name === "delete") {
      close();
      setSelectType(name);
    }
  };

  const openActionsTab = () => {
    openModal(
      <MobileActions
        tabList={[{ name: "delete", title: "Delete Events", icon: Svg.TrashRed }]}
        handleSelect={handleSelectMobile}
        height={"auto"}
      />, { type: "swipe" });
  };

  const handleCancel = () => {
    setSelectType("");
    setSelectedList([]);
  };

  const handleMobileActions = () => {
    if (selectType === "delete") {
      deleteModal();
    }
  };

  return (

    <div className="event-container page-container">
      <div className="desktop-page-view">
        <TableWrapper
          wrapperTitle={"Events"}
          addButton={"Create an Event"}
          icon={Svg.WhitePlus}
          handleClickButton={handleOpenClose}
          buttonsTab={false}
        >
          {selectedList?.length && eventsList?.events?.length ? (
            <Box className="from-to">
              <button className="delete-btn" onClick={() => deleteModal()}>
                <img src={Svg.DeleteRed} alt="Delete Red" />
                <span style={{ marginRight: 8 }} />
                <span> Delete </span>
              </button>
            </Box>
          ) : ""}
          <FullTable
            head={eventHead(handleCheck, eventsList?.events, selectedList, width)}
            body={eventBody(handleCheck, eventsList?.events, selectedList, width)}
            loadingType={ACTION_TYPE}
            list={eventsList?.events}
            listCount={eventsList?.count}
            handleClickButton={handleClick}
            listName={"events"}
          />
        </TableWrapper>
      </div>

      <div className="mobile-page-view">
        {selectType &&
          <div>
            <div className="selected-tab-wrapper">
              <div className="back-button-and-tex">
                <button onClick={openActionsTab}>
                  <img src={Svg.backButton} alt="icon" />
                </button>
                {selectedList?.length ? <p>{`${selectedList?.length} Selected`}</p> : ""}
              </div>
              {selectedList?.length ?
                <button
                  style={{ color: "#F07379" }}
                  className="add-to-btn"
                  onClick={handleMobileActions}
                >
                  {"Delete"}
                </button>
                :
                ""
              }
            </div>
            <div className="select-actions-btns">
              <button className="select" onClick={(e) => handleCheck(true, "", "all")}>
                Select All
              </button>
              <button className="cancel" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        }

        <MobileTablet
          title={"Events"}
          noMoreActions={CheckUserType() !== ORGADMIN}
          createIcon={Svg.WhitePlus}
          handleCreate={() => handleOpenClose()}
          moreActions={openActionsTab}
          head={eventHeadMobile()}
          body={eventBodyMobile(openModal)}
          list={eventsList?.events}
          actionType={ACTION_TYPE}
          handleClickButton={handleClickMobile}
          selectType={selectType}
          selected={selectedList}
          handleSelect={handleCheck}
          listName={`events`}
          renderFilters={<RenderFilters showFilters={showFilters} />}
          handleFilter={() => setShowFilters(!showFilters)}
          showFilters={showFilters}
        />
      </div>

      <SimpleModal
        openDefault={createEventModal}
        onClose={handleOpenClose}
        content={
          <div style={{ outline: "none" }} className="create-event-modal-wrapper">
            <CreateEventCustom
              handleOpenClose={handleOpenClose}
              eventInfo={selectedEvent ? selectedEvent : null}
            />
          </div>
        }
      />
    </div>
  );
};
