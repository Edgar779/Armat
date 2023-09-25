import React from "react";

export const MobileActions = ({ tabList, handleSelect, height }) => {
  return (
    <div className="mobile-actions-wrapper" style={height === 'auto' ? {height:'auto'} : {}}>
      {tabList?.map((i, j) => (
        <button className="action-button-wrapper" key={j} onClick={() => handleSelect(i?.name)}>
          <img src={i?.icon} alt="Organization-Logo" className={"logo-img"} />
          <p style={i?.name === "delete" ? { color: "#F07379" } : {}}
            className="popover-select-title">{i?.title}</p>
        </button>
      ))}
    </div>
  );
};