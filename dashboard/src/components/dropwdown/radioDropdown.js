import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Popover from "@mui/material/Popover";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { MinLoader } from "../loaders/miniLoader";

export const RadioDropdown = ({ title, list, labelTitle, currentValue, handleSelect, load }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickRadio = (event) => {
    setAnchorEl(null);
    handleSelect(event)
  };

  return (
    <div>
      <button aria-describedby={id} onClick={handleClick} className="radio-dropdown-button">
        {load ?
          <MinLoader color={'#49b776'} />
          :
          <>
            <p> {title}</p>
            {open ? <ExpandLessIcon style={{ color: "#222222" }} /> : <ExpandMoreIcon style={{ color: "#222222" }} />}
          </>
        }
      </button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}>
        <FormControl className="status-popper-wrapper">
          <FormLabel id="demo-radio-buttons-group-label"> {labelTitle} </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={currentValue}
            name="radio-buttons-group">
            {list?.map((i, k) => (
              <div onClick={() => handleClickRadio(i?.type)} key={k} className="check-label">
                <FormControlLabel className="control-label" value={i?.type} control={<Radio />} label={i?.label} />
              </div>
            ))}
          </RadioGroup>
        </FormControl>
      </Popover>
    </div>
  );
};
