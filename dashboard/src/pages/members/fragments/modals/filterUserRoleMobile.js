import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl, Radio, RadioGroup } from "@mui/material";
import { SaveParams, useModal } from "utils";
import { roleList } from "../../constants";
import { useLocation, useNavigate } from "react-router-dom";

export const FilterUserRoleMobile = ({ }) => {
  const { close } = useModal();
  const navigate = useNavigate();
  const location = useLocation();
  const info = location?.state;

  const handleClick = (value) => {
    const pushInfo = {
      ...info,
    };
    pushInfo.userType = value;
    SaveParams(location?.pathname, navigate, { ...pushInfo });
    close()
  };

  const  list =  [...roleList]

  return (
    <div>
      <div className="swipe-header-center mobile-page-flex">
          <p className="mobile-head-title">   Filter by role</p>
        <button type="button" onClick={() => close()} className="submit-mobile">
          Done
        </button>
      </div>
      <div className="member-swipe-body">
        <FormControl className="status-popper-wrapper">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            {list?.map((i, k) => (
              <div onClick={() => handleClick(i?.type)} key={k} className="check-label">
                <FormControlLabel
                  className="control-label"
                  value={i?.type}
                  label={i?.label}
                  control={
                    <Radio
                      checked={info?.userType === i?.type}
                      style={{ color: "#49B776" }}
                    />
                  }
                />
              </div>
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};