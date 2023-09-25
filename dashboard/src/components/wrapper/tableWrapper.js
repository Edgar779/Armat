import React from "react";
import { ButtonsTab } from "../buttons/tab";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Svg } from "assets/images";
import { TableSelect } from "components/table";

export const TableWrapper = ({ wrapperTitle, wrapperInfo, addButton, icon, handleClickButton, filterMenu, children }) => {
  return (
    <div>
      <div className="wrapper-header">
        <div className="header-title">
          <div className="flex">
            <p className='title'>{wrapperTitle}</p>
            {wrapperInfo && <span className='wrapper-subtitle'>{wrapperInfo}</span>}
          </div>
        </div>
        <div className="header-btn">
          <div className="wrapper-btn">
            <button onClick={handleClickButton} className="add-button-style">
              <p> + </p>
            </button>
          </div>
          {filterMenu}
        </div>
      </div>

      <div className="wrapper-box">
        <div className="box-table">
          <div className="header-title">
            <div className="flex">
              <p className='title'>{wrapperTitle}</p>
              {wrapperInfo && <span className='wrapper-subtitle'>{wrapperInfo}</span>}
            </div>
          </div>
          <div className="wrapper-btn">
            {addButton &&
              <button onClick={handleClickButton} className="add-button-style">
                <img src={icon} alt="Invite Members" />
                <span style={{ marginRight: 10, marginBottom: 5 }} />
                {addButton}
              </button>
            }


            {filterMenu &&
              <div className='tab-select-wrapper'>
                {filterMenu }
              </div>
            }
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
