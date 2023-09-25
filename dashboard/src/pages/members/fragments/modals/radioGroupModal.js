import React, { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl, Radio, RadioGroup } from "@mui/material";
import { useModal } from "utils";

export const RadioGroupModal = ({ defaultValue, list, handleClickRadio }) => {
  const { close } = useModal();

  const handleClick = (type) => {
    close()
    handleClickRadio(type)
  }

  return (
    <div>
      <div className="swipe-header-center mobile-page-flex">
        <p className="mobile-head-title">Change User Role</p>
      </div>
      <div className="member-swipe-body">
        <FormControl className="status-popper-wrapper">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            // defaultValue={defaultChecked}
          >
            {list?.map((i, k) => (
              <div onClick={() => handleClick(i?.type)} key={k} className="check-label">
                <FormControlLabel
                  className="control-label"
                  value={i?.type}
                  label={i?.label}
                  control={
                    <Radio
                      // value={i?.type}
                      // defaultChecked={defaultValue === i?.type}
                      checked={defaultValue === i?.type}
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