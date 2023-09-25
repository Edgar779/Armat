import React, { useState } from "react";
import { FindLoad, FindSuccess } from "utils";
import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Loader } from "../loaders/loader";
import { Svg } from "../../assets";
import { Fragment } from "react";
import { NoDataComponent } from "../notData";
import { Checkbox } from "@mui/material";

const label = { inputProps: { "aria-label": "Color switch demo" } };

export const MobileTablet = ({
                               title,
                               createIcon,
                               handleCreate,
                               moreActions,
                               list,
                               head,
                               body,
                               handleClick,
                               handleClickButton,
                               actionType,
                               noMoreActions,
                               selectType,
                               selected,
                               handleSelect,
                               listName,
                               handleFilter,
                               renderFilters,
                               showFilters,
                               noCreateButton
                             }) => {
  const navigate = useNavigate();
  const info = navigate?.location?.state;
  const loader = FindLoad(actionType ? actionType : "");
  const miniLoadSuccess = FindSuccess("MINI_LOAD");
  const [expanded, setExpanded] = React.useState(false);


  const renderItems = (i, item) => {
    if (listName === "events") {
      if (item) {
        if (item?.button) {
          return item?.button((name) => handleClickButton(i, name), i,
            miniLoadSuccess && miniLoadSuccess.data === i?.eventId);
        } else {
          return item?.rowText(i);
        }
      }
    } else {
      if (item) {
        if (item?.button) {
          return item?.button((name) => handleClickButton(i, name), i,
            miniLoadSuccess && miniLoadSuccess?.data === i?.id);
        } else {
          return item?.rowText(i);
        }
      }
    }
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (loader?.length) {
    return <Loader />;
  }

  return (
    <div className="mobile-table-wrapper">
      {!selectType &&
        <div className="mobile-table-header">
          <p className="mobile-table-title">{title}</p>
          <div className="flex">
            {!noCreateButton &&
              <button onClick={handleCreate} className="mobile-create-btn">
                <img src={createIcon} alt="icon" />
              </button>
            }

            <button onClick={handleFilter} className={showFilters ? "mobile-sort-btn-white" : "mobile-sort-btn"}>
              <img src={Svg.sort} alt="icon" className="sort-icon" />
            </button>

            {!noMoreActions &&
              <button onClick={moreActions} className="more-actions">
                <img src={Svg.moreIcon} alt="icon" />
              </button>
            }
          </div>
        </div>
      }

      {renderFilters && renderFilters}
      {list?.length ?
        list?.map((i, j) => (
          <div className="table-card-wrapper">
            {selectType &&
              <Checkbox
                {...label}
                onClick={(e) => handleSelect(e, i)}
                name={"checkBox"}
                style={{ padding: 0, marginRight: "16px" }}
                checked={title === "Events" ?
                  selected?.includes(i?.eventId)
                  :
                  selected?.includes(i?.member?.id) || selected?.includes(i?.id)
                }
              />
            }
            <Accordion key={j} expanded={expanded === j} onChange={handleChange(j)} style={{ width: "100%" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#49B776" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className="text-style">
                  <Fragment key={j}>
                    {head?.map((item, ke) => {
                      if (item) {
                        return (
                          <div
                            onClick={() => item?.notClickable !== true && handleClick && handleClick(i.id)}
                            key={ke}
                            className={
                              item?.type === "name" ? "text-style" :
                                expanded === j && "mobile-table-body-text-full-width"
                            }>
                            {renderItems(i, item) || "Not Set"}
                          </div>
                        );
                      }
                    })}
                  </Fragment>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Fragment key={j}>
                  {body?.map((item, ke) => {
                    if (item) {
                      return (
                        <div
                          key={ke}
                          style={{ cursor: "pointer" }}
                        >
                          {renderItems(i, item) || "Not Set"}
                        </div>
                      );
                    }
                  })}
                </Fragment>
              </AccordionDetails>
            </Accordion>
          </div>
        ))
        :
        <div style={{ height: "100%", width: "100%" }}>
          <NoDataComponent />
        </div>
      }
    </div>
  );
};
