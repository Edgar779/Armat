import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MobileFilterChip } from "components";
import { SaveParams, useModal, useWindowDimensions } from "utils";
import { FilterTicketMobile } from "./filterTicketMobile";

export const RenderFilters = ({ showFilters }) => {
  const location = useLocation();
  const info = location?.state;
  const { openModal } = useModal();
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  const handleResetAll = () => {
    const filteredInfo = {};
    if (width > 767) {
      filteredInfo.skip = info?.skip ? info?.skip : 0;
      filteredInfo.limit = 10;
    }
    SaveParams(location?.pathname, navigate, { ...filteredInfo });
  };

  return (
    <>
      {showFilters &&
        <div className="mobile-filters-wrapper">
          <div className="mobile-filters-chips">
            <MobileFilterChip
              title={"Access"}
              active={info?.access && info?.access !== "ALL"}
              handleClick={() => openModal(<FilterTicketMobile type={'access'} />, { type: "swipe" })}
            />
            <MobileFilterChip
              title={"status"}
              active={info?.status && info?.status !== "ALL"}
              handleClick={() => openModal(<FilterTicketMobile type={'status'}  />, { type: "swipe" })}
            />
          </div>
          {(info?.access && info?.access !== "ALL" || info?.status && info?.status !== "ALL") ?
            <div className="clear-all-btn">
              <button onClick={handleResetAll}>Clear all</button>
            </div>
            :
            ""}
        </div>
      }
    </>
  );
};