import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { MenuItem, Menu } from "@mui/material";

export const DropDownList = ({ list, title, handleSelectRow }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const idSimple = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (event) => {
    setAnchorEl(null);
    handleSelectRow(event);
  };

  return (
    <div>
      <button type={"button"} aria-describedby={idSimple} onClick={handleClick} className="dropdown-button">
        <p> {title}</p>
        <span>  {open ? <ExpandLessIcon style={{ color: "#222222" }} /> : <ExpandMoreIcon style={{ color: "#222222" }} />}</span>
      </button>
      <Menu
        id={idSimple}
        open={open}
        anchorEl={anchorEl}
        className="menu-list"
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}>
        <div className='drop-down-list-wrapper'>
        {list.map((item, index) => (
          <MenuItem onClick={() => handleSelect(item)} key={index}>
            {item?.label}
          </MenuItem>
        ))}
        </div>
      </Menu>
    </div>
  );
};
