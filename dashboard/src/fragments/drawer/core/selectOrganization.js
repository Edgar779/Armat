import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { IconButton, Popover, MenuItem, Divider } from "@mui/material";
import { Svg } from "assets";
import { FindLoad, useModal } from "utils";
import { CreateOrganization } from "../../componentModal/core";
import { organizationActions } from "store";

const ACTION_TYPE = "GET_ORG_BY_USER";

export const SelectOrganization = ({ list, currentOrg, setCurrentOrg }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const { openModal } = useModal();
  const loafer = FindLoad(ACTION_TYPE);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelect = (event) => {
    dispatch(organizationActions.setCurrentOrganization(event?.id));
    setAnchorEl(null);
    window.location.reload()
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const createOrganization = () => {
    setAnchorEl(null);
    openModal(<CreateOrganization />);
  };

  return (
    <div className="organization-menu">
      <div className="menu-button select-size">
        <div className="btn-opening" onClick={handleClick}>
          <div className="flex">
            <img
              src={currentOrg?.avatar ? currentOrg?.avatar?.url : Svg.noAvatar}
              alt="Organization-Logo"
              className="logo-img"
            />
            <span style={{ marginRight: 5 }} />
            <p className="current-org-name">
              {loafer?.length ? "..." : currentOrg?.name}
            </p>
          </div>
          <Button aria-describedby={id} variant="contained">
            {open ? <ExpandLessIcon style={{ color: "#222222" }} /> : <ExpandMoreIcon style={{ color: "#222222" }} />}
          </Button>
        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        className="menu-list"
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}>
        <div className="menu-item-wrapper">
          {list?.map((item, index) => (
            <MenuItem style={{ padding: 0, borderRadius: "8px", marginBottom: "8px" }}
                      onClick={() => handleSelect(item, item?.id)} key={index}>
              <div className="menu-item-row">
                <img src={item?.avatar?.url ? item?.avatar?.url : Svg.noAvatar}
                  alt="Organization-Logo" className="logo-img"
                />
                <div className="menu-item-row-text">
                  <span>{item.name}</span>
                </div>
                {currentOrg?.id === item?.id && <img src={Svg.CheckboxIcon} alt="Checkbox Icon" />}
              </div>
            </MenuItem>
          ))}
        </div>
        <div className="add-org-button" onClick={createOrganization}>
          <Divider />
          <IconButton >
            <img src={Svg.AddGreenIcon} alt="Add Green Icon" />
          </IconButton>
          <p className='add-organization-text'>Add Organization</p>
        </div>
      </Popover>
    </div>
  );
};
