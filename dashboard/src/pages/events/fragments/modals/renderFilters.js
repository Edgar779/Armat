import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MobileFilterChip } from "components";
import { SaveParams, useModal, useWindowDimensions } from "utils";
import { FilterEventMobile } from "./filterEventMobile";

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
              title={"Type"}
              active={info?.locationType && info?.locationType !== "ALL"}
              handleClick={() => openModal(<FilterEventMobile type={'locationType'} />, { type: "swipe" })}
            />
            <MobileFilterChip
              title={"Status"}
              active={info?.status && info?.status !== "ALL"}
              handleClick={() => openModal(<FilterEventMobile type={'status'}  />, { type: "swipe" })}
            />
          </div>
          {(info?.locationType && info?.locationType !== "ALL" || info?.status && info?.status !== "ALL") ?
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