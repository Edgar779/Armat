import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FilterTags, MobileFilterChip } from "components";
import { FilterUserRoleMobile } from "./filterUserRoleMobile";
import { SaveParams, useModal, useWindowDimensions } from "utils";

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
              title={"Role"}
              active={info?.userType && info?.userType !== "ALL"}
              handleClick={() => openModal(<FilterUserRoleMobile />, { type: "swipe" })}
            />
            <MobileFilterChip
              title={"Tag"}
              active={info?.tags?.length}
              handleClick={() => openModal(<FilterTags />, { type: "swipe" })}
            />
          </div>
          {(info?.userType && info?.userType !== "ALL" || info?.tags?.length) ?
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