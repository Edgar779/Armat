import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import { Svg } from "assets";
import { httpRequestsOnSuccessActions, membersActions } from "store";
import { FindLoad, FindSuccess, getId, renderColor, tagColors, useModal, useWindowDimensions } from "utils";
import { MinLoader } from "../loaders/miniLoader";
import { DeleteModal } from "../../fragments/componentModal/core";

const CREATE_ACTION_TYPE = "CREATE_TAG";
const EDIT_TAG_ACTION_TYPE = "EDIT_TAG";
const DELETE_ACTION_TYPE = "DELETE_TAG";
const REMOVE_ACTION_TYPE = "REMOVE_TAG_FROM_MEMBER";
const ADD_TAG_TO_MEMBER = "ADD_TAG_TO_MEMBER";

export const MobileTagComponent = ({ userInfo }) => {
  const { tagList } = useSelector((state) => ({
    tagList: state.members.tagList
  }));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const dispatch = useDispatch();
  const createLoad = FindLoad(CREATE_ACTION_TYPE);
  const createSuccess = FindSuccess(CREATE_ACTION_TYPE);
  const deleteLoad = FindLoad(DELETE_ACTION_TYPE);
  const deleteSuccess = FindSuccess(DELETE_ACTION_TYPE);
  const removeFromList = FindLoad(REMOVE_ACTION_TYPE);
  const removeSuccess = FindSuccess(REMOVE_ACTION_TYPE);
  const editTagLoader = FindLoad(EDIT_TAG_ACTION_TYPE);
  const editTagSuccess = FindSuccess(EDIT_TAG_ACTION_TYPE);
  const addTagLoader = FindLoad(ADD_TAG_TO_MEMBER);
  const addTagSuccess = FindSuccess(ADD_TAG_TO_MEMBER);
  const [newTag, setNewTag] = useState("");
  const [editTag, setEditTag] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const location = useLocation();
  const info = location?.state;
  const [currentWidth, setCurrentWidth] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const checkExistTag = tagList?.find((i) => i?.name === newTag);
  const { openModal } = useModal();
  const { width } = useWindowDimensions();

  const curr = useCallback(node => {
    if (node !== null) {
      setCurrentWidth(node.getBoundingClientRect().width);
    }
  }, []);


  useEffect(() => {
    if (deleteSuccess) {
      setEditTag("");
      dispatch(httpRequestsOnSuccessActions.removeSuccess(DELETE_ACTION_TYPE));
    }
    if (removeSuccess) {
      setSelectedId("");
      dispatch(httpRequestsOnSuccessActions.removeSuccess(REMOVE_ACTION_TYPE));
    }
    if (createSuccess) {
      setNewTag("");
      dispatch(httpRequestsOnSuccessActions.removeSuccess(CREATE_ACTION_TYPE));
    }
    if (editTagSuccess) {
      setEditTag("");
      dispatch(httpRequestsOnSuccessActions.removeSuccess(EDIT_TAG_ACTION_TYPE));
    }
    if (addTagSuccess) {
      setEditTag("");
      setNewTag("");
      dispatch(httpRequestsOnSuccessActions.removeSuccess(ADD_TAG_TO_MEMBER));
    }

  }, [deleteSuccess, removeSuccess, createSuccess, editTagSuccess, addTagSuccess]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setEditTag(null);
    setNewTag(null);
  };

  const createTag = () => {
    const tag = {
      "org": getId,
      "name": newTag,
      "color": "#ff00cb"
    };
    dispatch(membersActions.createTag(tag));
  };

  useEffect(() => {
    if(open) {
      const newList = tagList?.filter(function(array_el) {
        return userInfo?.tags?.filter(function(anotherOne_el) {
          return anotherOne_el._id === array_el.id;
        }).length === 0;
      });
      setFilteredList(newList);
    }
  }, [tagList, userInfo, open]);

  const handleSelectTag = (item) => {
    setSelectedId(item?.id);
    dispatch(membersActions.addTagToMember(userInfo?.id, item?.id, info));
  };

  const handleEditTag = (event, tag) => {
    setEditTag(tag);
    event.stopPropagation();
    event.preventDefault();
  };

  const chengTagColor = (i) => {
    setEditTag({
      color: i,
      id: editTag?.id,
      name: editTag?.name,
      org: editTag?.org
    });
  };

  const handleChangeTagName = (e) => {
    setEditTag({
      color: editTag?.color,
      id: editTag?.id,
      name: e?.target?.value,
      org: editTag?.org
    });
  };

  const handleDelete = () => {
    setAnchorEl(null);
    openModal(<DeleteModal
        handleDelete={() => dispatch(membersActions.deleteTag(editTag?.id, info))}
        actionType={DELETE_ACTION_TYPE}
        title="Are you sure you want delete this tag?"
        deleteText="Yes, Delete"
        customSuccess={true}
      />
    );
  };

  const handleRemove = (tag) => {
    setSelectedId(tag?._id);
    dispatch(membersActions.removeTagFromMember(userInfo?.id, tag?._id, info));
  };

  const handleEdit = () => {
    dispatch(membersActions.editTag(editTag, info));
  };

  useEffect(() => {
    const defaultList = tagList?.filter(function(array_el) {
      return userInfo?.tags?.filter(function(anotherOne_el) {
        return anotherOne_el._id === array_el.id;
      }).length === 0;
    });
    const newList = defaultList?.filter((el) => el?.name?.toString().toLowerCase().indexOf(newTag?.toString().toLowerCase()) > -1);
    setFilteredList(newList);
  }, [newTag]);

  const handleSetNewTag = (e) => {
    setNewTag(e.target.value);
  };

  const swipeUp = {
    width: "100%",
    margin: "0 auto",
    borderRadius: "8px 8px 0 0",
    zIndex: 99999
  };

  return (
    <>
      <div className="table-tags-wrapper text-style" ref={curr}
           onClick={width <= 768 ? (e) => handleClick(e) : () => {
           }}
        // style={{width: currentWidth ? currentWidth : 'auto', whiteSpace:'nowrap', textOverflow:'ellipsis' }}
      >
        <div className="flex text-style">
          <div className="desktop-page-view">
            <button aria-describedby={id} onClick={handleClick} className="add-tag-button">
              <img src={Svg.PlusGreen} alt="Plus Green" />
            </button>
          </div>

          {userInfo?.tags?.length ? userInfo?.tags?.map((i, j) => (j <= 1 &&
              <div key={j}
                   className="table-tag-chip"
                   style={{
                     background: renderColor(i?.color).background,
                     color: renderColor(i?.color).color
                   }}
              >
                {i?.name}
              </div>
            ))
            : "Not Set"
          }

          {userInfo?.tags?.length > 2 ? <p>+{userInfo?.tags?.length - 2}</p> : ""}
        </div>
        <div className="mobile-page-view-no-width">
          <img src={Svg.ArrowRight} alt="icon" />
        </div>
      </div>


      <SwipeableBottomSheet
        style={{ ...swipeUp, background: "transparent" }}
        open={open}
        onChange={handleClose}
        className="swipe-up"
      >
        <div className="invite-swipe-header mobile-page-flex">

          <p className="mobile-head-title">Tags</p>
          <button type="button" onClick={handleClose} className="submit-mobile">
            Done
          </button>
        </div>


        <div className="tag-fragment-wrapper">
          {editTag ?
            <div className="edit-tag-wrapper">
              <div className="edit-tag-input-wrapper">
                <div className="flex">
                  <div className="tag-color-box" style={{ background: renderColor(editTag?.color).background }} />
                  <input
                    type="text"
                    style={{ color: renderColor(editTag?.color).color }}
                    className="edit-tag-input"
                    value={editTag?.name}
                    onChange={handleChangeTagName}
                  />
                </div>
                <button className="done-button" onClick={handleEdit}>
                  {editTagLoader?.length ?
                    <MinLoader color={"#49B776"} height={"12px"} width={"12px"} />
                    :
                    <img src={Svg?.CheckBoxIcon} alt="icon" />
                  }
                </button>
              </div>

              <button onClick={handleDelete} className="delete-tag-wrapper">
                {deleteLoad?.length ?
                  <MinLoader color={"#222222CC"} />
                  :
                  <>
                    <img src={Svg.trash} alt="delete" />
                    <p>Delete tag</p>
                  </>
                }
              </button>
              <p className="choose-tag-color">Choose tag color</p>
              <div className="color-cards-wrapper">
                {tagColors?.map((i, j) => (
                  <button
                    onClick={() => chengTagColor(i)} key={j}
                    style={{ background: i, border: `1px solid ${i}` }}
                    className="color-card"
                  />
                ))}
              </div>
            </div>
            :
            <>
              <div className="tag-fragment-header">
                <input
                  placeholder="Add tags"
                  className="add-tag-input"
                  type="text"
                  onChange={handleSetNewTag}
                  value={newTag}
                />
                <div className="user-tag-chip-wrapper">
                  {userInfo?.tags?.map((i, j) => (
                    <button

                      key={j}
                      className="user-tag-chip"
                      style={{
                        background: renderColor(i?.color).background,
                        color: renderColor(i?.color).color
                      }}
                    >
                      <p>{i?.name}</p>
                      {removeFromList?.length && selectedId === i?._id ?
                        <MinLoader color={renderColor(i?.color).color} height={"12px"} width={"12px"} />
                        :
                        <img onClick={() => handleRemove(i)} src={Svg.CloseChips} alt="remove-icon" />
                      }
                    </button>
                  ))
                  }
                </div>
              </div>

              <div className="tag-fragment-body">
                <p className="select-option">Select an option or create one</p>
                <div className="tag-items-wrapper">
                  {filteredList?.length ?
                    filteredList?.map((i, j) => (
                      <div onClick={() => handleSelectTag(i)} key={j} className="created-tags-wrapper">
                        <div className="created-tags"
                             style={{
                               background: renderColor(i?.color).background,
                               color: renderColor(i?.color).color
                             }}
                        >
                          {i?.name}
                        </div>
                        <button onClick={(e) => handleEditTag(e, i)} className="tag-edit-button">
                          {selectedId === i?.id && addTagLoader ?
                            <MinLoader color="#767676" />
                            :
                            <img src={Svg.TagBtn} alt="icon" />
                          }
                        </button>
                      </div>
                    ))
                    : ""
                  }
                </div>

                {newTag && !checkExistTag &&
                  <button onClick={createTag} className="create-tag-button">
                    {createLoad?.length ?
                      <MinLoader color="#D86FC4" />
                      :
                      <>
                        <p>Create</p>
                        <div className="create-tag-text"> {newTag} </div>
                      </>
                    }
                  </button>
                }
              </div>
            </>
          }
        </div>
      </SwipeableBottomSheet>
    </>
  );
};