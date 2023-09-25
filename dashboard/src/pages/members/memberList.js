import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FullTable, TableWrapper, TableSelect, MobileTablet } from "components";
import {
  memberBody,
  memberHead,
  downloadCsv,
  groupUserTabList,
  memberMobileHead,
  memberMobileBody,
  memberTabListMobile
} from "./constants";
import { FindSuccess, getId, useModal, useWindowDimensions } from "utils";
import { Svg } from "assets/images";
import { membersActions } from "store/members";
import { DeleteModal } from "fragments/componentModal/core";
import { httpRequestsOnSuccessActions } from "store";
import { Box } from "@mui/material";
import { AddUserToList, DuplicateList } from "./fragments";
import { DeleteUserGroupedList } from "./fragments/modals/deleteUserGroupedList";
import { MobileActions, RenderFilters } from "./fragments/modals";

const ACTION_TYPE = "GET_GROUP_LIST_BY_ID";
const CREATE_ACTION_TYPE = "CREATE_TAG";
const EDIT_TAG_ACTION_TYPE = "EDIT_TAG";
const DELETE_ACTION_TYPE = "DELETE_TAG";
const REMOVE_ACTION_TYPE = "REMOVE_TAG_FROM_MEMBER";
const ADD_TAG_TO_MEMBER = "ADD_TAG_TO_MEMBER";

export const MemberList = () => {
  const { userGroupById } = useSelector((state) => ({
    userGroupById: state.members.userGroupById,
    allMembers: state.members.allMembers,
    userGroupAllUsers: state.members.userGroupAllUsers
  }));
  const params = useParams();
  const location = useLocation();
  const info = location?.state;
  const { openModal, close } = useModal();
  const dispatch = useDispatch();
  const [selectedList, setSelectedList] = useState([]);
  const deleteSuccess = FindSuccess(DELETE_ACTION_TYPE);
  const removeSuccess = FindSuccess(REMOVE_ACTION_TYPE);
  const createSuccess = FindSuccess(CREATE_ACTION_TYPE);
  const editTagSuccess = FindSuccess(EDIT_TAG_ACTION_TYPE);
  const addTagSuccess = FindSuccess(ADD_TAG_TO_MEMBER);
  const { width } = useWindowDimensions();
  const [selectType, setSelectType] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const pageLink = `/membersList/${params?.id}`;

  useEffect(() => {
    if (deleteSuccess) {
      handleGetMembers("noLoad");
      dispatch(httpRequestsOnSuccessActions.removeSuccess(DELETE_ACTION_TYPE));
    }
    if (removeSuccess) {
      handleGetMembers("noLoad");
      dispatch(httpRequestsOnSuccessActions.removeSuccess(DELETE_ACTION_TYPE));
    }
    if (createSuccess) {
      handleGetMembers("noLoad");
      dispatch(httpRequestsOnSuccessActions.removeSuccess(CREATE_ACTION_TYPE));
    }
    if (editTagSuccess) {
      handleGetMembers("noLoad");
      dispatch(httpRequestsOnSuccessActions.removeSuccess(EDIT_TAG_ACTION_TYPE));
    }
    if (addTagSuccess) {
      handleGetMembers("noLoad");
      dispatch(httpRequestsOnSuccessActions.removeSuccess(ADD_TAG_TO_MEMBER));
    }
  }, [deleteSuccess, removeSuccess, createSuccess, editTagSuccess, addTagSuccess]);

  useEffect(() => {
    dispatch(membersActions.getAllMembers());
    dispatch(membersActions.getTags());
  }, []);

  useEffect(() => {
    handleGetMembers();
  }, [info]);

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
    if (info?.userType && info?.userType !== "ALL") {
      filteredInfo.userType = info.userType;
    } else {
      delete filteredInfo.userType;
    }
    delete filteredInfo.page;
    return filteredInfo;
  };

  const handleGetMembers = (load) => {
    const filteredInfo = renderParams();
    const loader = info?.tags?.length ? "noLoad" :
      load === "noLoad" ? "noLoad" : "loading";
    dispatch(membersActions.getUserGroupById(params?.id, filteredInfo, loader));
  };

  const deleteModal = () => {
    openModal(
      <DeleteModal
        handleDelete={() => dispatch(membersActions.unassignUserToGroupList(userGroupById?.list?.id, { members: selectedList }))}
        actionType="UNASSIGN_USERS_TO_GROUP_LIST"
        page={pageLink}
        title="Are you sure you want to remove selected users?"
        deleteText="Yes, Delete"
        handleSuccess={() => setSelectedList([])}
      />
    );
  };

  const handleClick = (item, name) => {
    if (name === "ORGADMIN" || name === "ORGMANAGER" || name === "ORGMEMBER") {
      const filteredInfo = renderParams();

      dispatch(httpRequestsOnSuccessActions.appendSuccess("MINI_LOAD", item.id));
      dispatch(membersActions.changeRole({
        "member": item?.member?.id,
        "email": item?.member?.email,
        "org": getId,
        "userType": name,
        "name": item?.member?.fullName
      }, filteredInfo, 'memberList', params?.id));
    }
  };

  const handleSelect = async (name) => {
    if (name === "download") {
      await downloadCsv();
    }
    if (name === "duplicate") {
      openModal(<DuplicateList userGroupById={userGroupById} />);
    }
    if (name === "delete") {
      openModal(<DeleteUserGroupedList userGroupById={userGroupById} />);
    }
  };

  const handleCheck = (ev, item, name) => {
    if (name === "all") {
      const allList = [];
      if (ev?.target?.checked || ev === true) {
        userGroupById?.list?.members?.filter((i) => allList.push(i?.member?.id));
      }
      setSelectedList(allList);
    } else {
      const list = [...selectedList];
      if (ev.target.checked) {
        list.push(item?.member?.id);
      } else {
        list.indexOf(item?.member?.id) !== -1 && list.splice(list.indexOf(item?.member?.id), 1);
      }
      setSelectedList(list);
    }
  };

  const handleSelectMobile = async (name) => {
    if (name === "download") {
      await downloadCsv();
    }
    if (name === "delete") {
      handleSelect("delete");
    }
    if (name === "duplicate") {
      close();
      openModal(<DuplicateList userGroupById={userGroupById} />, { type: "swipe" });
    }
    if (name === "remove") {
      close();
      setSelectType(name);
    }
  };

  const openActionsTab = () => {
    openModal(
      <MobileActions
        tabList={memberTabListMobile()}
        handleSelect={handleSelectMobile}
      />, { type: "swipe" });
  };

  const handleMobileActions = () => {
    if (selectType === "remove") {
      deleteModal();
    }
  };

  const handleCancel = () => {
    setSelectType("");
    setSelectedList([]);
  };

  return (
    <div className="members-container page-container">
      <div className="desktop-view desktop-box">
        <TableWrapper
          wrapperTitle={userGroupById?.list?.name ? userGroupById?.list?.name : ""}
          addButton={"Add Users"}
          wrapperInfo={userGroupById?.count ? `${userGroupById?.count} members` : ""}
          icon={Svg.WhitePlus}
          handleClickButton={() => openModal(
            <AddUserToList
              page={pageLink}
              params={renderParams()}
            />
          )}
          buttonsTab={true}
          filterMenu={
            <TableSelect
              tabList={groupUserTabList()}
              handleSelect={handleSelect}
            />
          }
        >
          {selectedList?.length && userGroupById?.list?.members?.length ? (
            <Box className="from-to">
              <button className="delete-btn" onClick={() => deleteModal()}>
                <img src={Svg.RemoveRed} alt="Delete Red" />
                <span style={{ marginRight: 8 }} />
                <span> Remove </span>
              </button>
            </Box>
          ) : ""}

          <FullTable
            head={memberHead(handleCheck, userGroupById?.list?.members, selectedList, width, pageLink)}
            body={memberBody(handleCheck, userGroupById?.list?.members, selectedList, width)}
            loadingType={ACTION_TYPE}
            list={userGroupById?.list?.members}
            listCount={userGroupById?.count}
            handleClickButton={handleClick}
            listName={"members"}
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
                  style={{ color: selectType === "add" ? "#222222" : "#F07379" }}
                  className="add-to-btn"
                  onClick={handleMobileActions}
                >
                  {selectType === "add" ? "Add to List" : "Remove"}
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
          title={userGroupById?.list?.name ? userGroupById?.list?.name : ""}
          createIcon={Svg.WhitePlus}
          handleCreate={() => openModal(
            <AddUserToList
              page={pageLink}
              params={renderParams()}
            />, { type: "swipe" })
          }
          moreActions={openActionsTab}
          head={memberMobileHead()}
          body={memberMobileBody(openModal)}
          list={userGroupById?.list?.members}
          listCount={userGroupById?.count}
          actionType={ACTION_TYPE}
          handleClickButton={handleClick}
          selectType={selectType}
          selected={selectedList}
          handleSelect={handleCheck}

          renderFilters={<RenderFilters showFilters={showFilters} />}
          handleFilter={() => setShowFilters(!showFilters)}
          showFilters={showFilters}
        />
      </div>
    </div>
  );
};
