import React, { useState } from "react";
import {  Popover, MenuItem,  } from "@mui/material";
import { Svg } from "assets";

export const TableSelect = ({ tabList, handleSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleSelectRow = ( name ) => {
    handleSelect(name)
    setAnchorEl(null);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <div className="table-select-wrapper">
      <button aria-describedby={id} onClick={handleClick} className="table-select-button">
        <img src={Svg.FillterMenu} alt="Filter Menu" />
      </button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        className="menu-list"
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}>
        <div className='popover-select-wrapper'>
        {tabList?.length && tabList.map((i, j) => (
          <MenuItem style={{ padding: 0, borderRadius: "8px", marginBottom: "8px" }}  key={j} onClick={() => handleSelectRow(i?.name)}>
            <div className='tab-icon-text-wrapper'>
              <img src={i?.icon} alt="Organization-Logo" className={"logo-img"} />
              <p
                style={i?.name === 'delete' ? {color:'#F07379'} : {}}
                className='popover-select-title'>{i?.title}</p>
            </div>
          </MenuItem>
        ))}
        </div>
      </Popover>
    </div>
  );
};
