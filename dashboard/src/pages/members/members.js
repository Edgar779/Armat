import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FullTable, TableWrapper, TableSelect, MobileTablet } from "components";
import {
  ACTION_TYPE,
  memberBody,
  memberHead,
  tabList,
  downloadCsv,
  memberMobileHead,
  memberMobileBody,
  tabListMobile
} from "./constants";
import { CheckUserType, getId, ORGADMIN, ORGMANAGER, useModal, useWindowDimensions } from "utils";
import { Svg } from "assets/images";
import { membersActions } from "store/members";
import { InviteMember } from "./fragments";
import { AddUserList, CreateNewList, DeleteModal } from "fragments/componentModal/core";
import { httpRequestsOnSuccessActions } from "store";
import { Box } from "@mui/material";
import { MobileActions, RenderFilters } from "./fragments/modals";

export const Members = () => {
  const { membersList } = useSelector((state) => ({
    membersList: state.members.membersList,
  }));
  const { width } = useWindowDimensions();
  const location = useLocation();
  const info = location?.state;
  const { openModal, close } = useModal();
  const dispatch = useDispatch();
  const [selectedList, setSelectedList] = useState([]);
  const [selectedMemberList, setSelectedMemberList] = useState([]);
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
    if (info?.userType && info?.userType !== "ALL") {
      filteredInfo.userType = info.userType;
    } else {
      delete filteredInfo.userType;
    }
    delete filteredInfo.page;
    return filteredInfo;
  };

  useEffect(() => {
    dispatch(membersActions.getTags());
  }, []);

  useEffect(() => {
    handleGetMembers();
  }, [info]);

  const handleGetMembers = (load) => {
    const filteredInfo = renderParams();
    const loading = info?.tags?.length ? "noLoad" :
      load === "noLoad" ? "noLoad" : "load";
    dispatch(membersActions.getMembersList({ ...filteredInfo }, loading));
  };

  const deleteModal = () => {
    openModal(
      <DeleteModal
        handleDelete={() => dispatch(membersActions.deleteMembers({ org: getId, members: selectedMemberList }))}
        actionType="DELETE_MEMBERS"
        page={"/members"}
        title="Are you sure you want to delete selected members?"
        deleteText="Yes, Delete"
        handleSuccess={() => setSelectedMemberList([])}
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
      }, filteredInfo));
    }
  };

  const handleSelect = async (name) => {
    if (name === "download") {
      await downloadCsv();
    }
    if (name === "create") {
      openModal(<CreateNewList userList={membersList?.orgUsers} />);
    }
    if (name === "add") {
      openModal(<AddUserList enteredIds={selectedList} />);
    }
  };

  const handleSelectMobile = async (name) => {
    if (name === "download") {
      await downloadCsv();
    }
    if (name === "create") {
      openModal(<CreateNewList userList={membersList?.orgUsers} />, { type: "swipe" });
    }
    if (name === "add") {
      close();
      setSelectType(name);
    }
    if (name === "delete") {
      close();
      setSelectType(name);
    }
  };

  const handleCheck = (ev, item, name) => {
    if (name === "all") {
      const allList = [];
      const allMemberIdList = [];
      if (ev?.target?.checked || ev === true) {
        membersList?.orgUsers?.filter((i) => allList.push(i?.id));
        membersList?.orgUsers?.filter((i) => allMemberIdList.push(i?.member?.id));
      }
      setSelectedMemberList(allMemberIdList);
      setSelectedList(allList);
    } else {
      const list = [...selectedList];

      if (ev.target.checked) {
        list.push(item?.id);
      } else {
        list.indexOf(item?.id) !== -1 && list.splice(list.indexOf(item?.id), 1);
      }
      setSelectedList(list);

      const deleteList = [...selectedList];
      if (ev.target.checked) {
        deleteList.push(item?.member?.id);
      } else {
        deleteList.indexOf(item?.member?.id) !== -1 && deleteList.splice(deleteList.indexOf(item?.member?.id), 1);
      }
      setSelectedMemberList(deleteList);
    }
  };

  const handleCancel = () => {
    setSelectType("");
    setSelectedList([]);
  };

  const handleMobileActions = () => {
    if (selectType === "add") {
      openModal(<AddUserList enteredIds={selectedList} />, { type: "swipe" });
    }
    if (selectType === "delete") {
      deleteModal();
    }
  };

  const openActionsTab = () => {
    openModal(
      <MobileActions
        tabList={tabListMobile()}
        handleSelect={handleSelectMobile}
      />, { type: "swipe" });
  };

  return (
    <div className="members-container page-container">
      <div className="desktop-page-view">
        <TableWrapper
          wrapperTitle={"Members"}
          // addButton={ "Invite a Members" }
          addButton={CheckUserType() === ORGADMIN ? "Invite a Members" : null}
          icon={Svg.InviteMembers}
          handleClickButton={() => openModal(<InviteMember />)}
          buttonsTab={true}
          filterMenu={
            <TableSelect
              tabList={tabList(selectedList)}
              handleSelect={handleSelect}
            />
          }
        >
          {CheckUserType() === ORGADMIN && selectedList?.length && membersList?.orgUsers?.length ? (
            <Box className="from-to">
              <button className="delete-btn" onClick={() => deleteModal()}>
                <img src={Svg.DeleteRed} alt="Delete Red" />
                <span style={{ marginRight: 8 }} />
                <span> Delete </span>
              </button>
            </Box>
          ) : ""}

          <FullTable
            head={memberHead(handleCheck, membersList?.orgUsers, selectedList, width)}
            body={memberBody(handleCheck, membersList?.orgUsers, selectedList, width)}
            loadingType={ACTION_TYPE}
            list={membersList?.orgUsers}
            listCount={membersList?.count}
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
                  {selectType === "add" ? "Add to List" : "Delete"}
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
          noCreateButton={CheckUserType() !== ORGADMIN}
          title={"Members"}
          createIcon={Svg.InviteMembers}
          handleCreate={() => openModal(<InviteMember />, { type: "swipe" })}
          moreActions={openActionsTab}
          head={memberMobileHead()}
          body={memberMobileBody(openModal)}
          list={membersList?.orgUsers}
          listCount={membersList?.count}
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
