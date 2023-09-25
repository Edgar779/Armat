import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl, Radio, RadioGroup } from "@mui/material";
import { SaveParams, useModal } from "utils";
import { useLocation, useNavigate } from "react-router-dom";

export const FilterEventMobile = ({ type }) => {
  const { close } = useModal();
  const navigate = useNavigate();
  const location = useLocation();
  const info = location?.state;

  const handleClick = (value) => {
    const pushInfo = {
      ...info
    };
    if (type === "locationType") {
      pushInfo.locationType = value;
    }
    if (type === "status") {
      pushInfo.status = value;
    }
    SaveParams(location?.pathname, navigate, { ...pushInfo });
    close();
  };

  const list = type === "locationType" ?
    [
      {
        type: "PHYSICAL",
        label: "Physical"
      },
      {
        type: "VIRTUAL",
        label: "Virtual"
      }
    ]
    :
    [
      {
        type: "PENDING",
        label: "Pending"
      },
      {
        type: "PUBLISHED",
        label: "Published"
      },
      {
        type: "REJECTED",
        label: "Rejected"
      },
      {
        type: "UNPUBLISHED",
        label: "Unpublished"
      }
    ];

  return (
    <div>
      <div className="swipe-header-center mobile-page-flex">
        <p className="mobile-head-title"> {type === "locationType" ? "Filter by type" : "Filter by Status"}</p>
        <button type="button" onClick={() => close()} className="submit-mobile">
          Done
        </button>
      </div>
      <div className="event-filter-swipe-body">
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
                      checked={info?.[type] === i?.type}
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