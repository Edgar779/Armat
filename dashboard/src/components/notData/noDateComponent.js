import React from "react";
import { Svg } from "../../assets";

export const NoDataComponent = () => {
  return (
    <div className="data-container">
      <div className="data-img">
        <img src={Svg.EmptyBox} alt="Employ-Box" />
      </div>
      <div className="data-box">
        <div className="title-box">
          <h5 className="date-title">No data to show you!</h5>
        </div>
        <div className="subtitle-box">
          <p className="date-subtitle">
            <span>Looks like you haven’t added a info, no worries.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
