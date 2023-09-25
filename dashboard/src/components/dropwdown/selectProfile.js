import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Box, Popover, MenuItem } from "@mui/material";
import { Svg } from "assets";
import { TextRow } from "../table";

export const organizationlist = [
  {
    name: "Content View",
    link: "/mySubscriptions",
    icon: Svg.DashboardView
  },
  {
    name: "Sign Out",
    link: "/",
    icon: Svg.LogOutIcon
  }
];

export const SelectProfile = ({  }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const removeItem = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("user");
    localStorage.removeItem("orgId");
    window.location.replace("/");
  };

  const handleSelect = (event) => {
    if (event === "Sign Out") {
      axios.get(`/auth/logout`, { auth: true }).then(() => {
        removeItem();
      }).catch(() => {
        removeItem();
      });
    } else {
      window.location.replace("/");
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="organization-menu">
      <div className="menu-button">
        <div className="btn-opening" onClick={handleClick}>
          <p className="dropdown-title">
            <TextRow name={userInfo?.fullName} color={"#222222CC"} textWidth={8} />
          </p>
          <Button aria-describedby={id} variant="contained" className="">
                        <span className="avatar-mobile">
                            <img src={Svg.AvatarIcon} alt="Avatar-Icon" />
                        </span>
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
        {organizationlist?.map((item, index) => (
          <MenuItem onClick={() => handleSelect(item?.name)} key={index}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center"
              }}>
              <img src={item.icon} alt="Organization-Logo" className={"logo-img"} />
              <Box sx={{ marginX: 2, marginY: 1 }}> {item.name}</Box>
            </Box>
          </MenuItem>
        ))}
      </Popover>
    </div>
  );
};
