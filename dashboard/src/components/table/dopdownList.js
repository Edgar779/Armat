import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Checkbox } from "@mui/material";
import { SaveParams } from "utils";

export const DropdownList = ({ title, list, labelTitle, name }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const info = location?.state;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickRadio = (value) => {
    setAnchorEl(null);
    const pushInfo = {
      ...info
    };
    pushInfo[name] = value;
    SaveParams(navigate, {
      ...pushInfo
    });
  };

  return (
    <div>
      <button aria-describedby={id}  onClick={handleClick} className="dropdown-button">
        <p> {title}</p>
        {open ? <ExpandLessIcon style={{ color: "#222222" }} /> : <ExpandMoreIcon style={{ color: "#222222" }} />}
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
            defaultValue={info?.[name] ? info?.[name] : "ALL"}
            name="radio-buttons-group">
            {list?.map((i, k) => (
              <div onClick={() => handleClickRadio(i?.value)} key={k} className="check-label">
                <FormControlLabel className="control-label" value={i?.value} control={<Radio />} label={i?.label} />
              </div>
            ))}
          </RadioGroup>
        </FormControl>
      </Popover>
    </div>
  );
};
