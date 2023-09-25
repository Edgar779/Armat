import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { FormControlLabel } from "@mui/material";
import { renderColor, SaveParams, useModal } from "utils";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux";
import { Svg } from "../../assets";
import FormGroup from "@mui/material/FormGroup";

export function FilterTags({}) {
  const { close } = useModal()
  const location = useLocation();
  const navigate = useNavigate();
  const info = location?.state;
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const { tagList } = useSelector((state) => ({
    tagList: state.members.tagList
  }));

  useEffect(() => {
    if (tagList) {
      setList(tagList);
    }
  }, [tagList]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const pushInfo = ( list ) => {
    const filteredInfo = {
      ...info
    };
    list?.length ? filteredInfo.tags = list : delete filteredInfo.tags;
    SaveParams(location?.pathname, navigate, { ...filteredInfo });
  }

  const handleClickRadio = (e, id) => {
    if (e.target.checked) {
      setSelectedIds([...selectedIds, id]);
      pushInfo([...selectedIds, id])
    } else {
      const filtered = selectedIds?.filter((i) => i !== id);
      setSelectedIds(filtered);
      pushInfo(filtered)
    }
  };

  const handleFilter = (e) => {
    setSearch(e.target.value);
    const newList = tagList?.filter((el) => el?.name?.toString().toLowerCase().indexOf(e.target.value?.toString().toLowerCase()) > -1);
    setList(newList);
  };

  const removeSearched = () => {
    setSearch("");
    setList(tagList);
  };

  return (
    <div className="table-menu">
      <div className="desktop-page-view">
        <div onClick={handleClick} style={{ cursor: "pointer" }} className="open-button">
          <p> Tag </p>
          <Button aria-describedby={id} variant="contained">
            {open ? <ExpandLessIcon style={{ color: "#506C84" }} /> : <ExpandMoreIcon style={{ color: "#506C84" }} />}
          </Button>
        </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}>
          <div className="tag-filtering-wrapper">

            <div className="tag-filtering-search">
              <input
                type="text"
                className="tag-filter-input"
                placeholder="Tag Name"
                onChange={handleFilter}
                value={search}
              />
              <button className="close-tag-filter" onClick={removeSearched}>
                <img src={Svg.closeFilter} alt="" />
              </button>
            </div>

            <div className="tag-filtering-body">
              <FormGroup>
                {tagList?.length ? list?.map((i, k) => (
                    <div key={k} className="check-label">
                      <FormControlLabel
                        label={null}
                        value={i?.id}
                        control={
                          <div className="checkbox-wrapper">
                            <Checkbox
                              style={{ color: "#9F9F9F" }}
                              checked={info?.tags?.includes(i?.id)}
                              onClick={(e) => handleClickRadio(e, i?.id)}
                            />
                            <div
                              style={{ background: renderColor(i?.color).background }}
                              className="filter-tag-style">
                              <p style={{ color: renderColor(i?.color).color }}>{i?.name}</p>
                            </div>
                          </div>
                        }
                      />
                    </div>
                  ))
                  :
                  <p>No Tags Yet</p>
                }
              </FormGroup>
            </div>
          </div>
        </Popover>
      </div>


      <div className="mobile-page-view">
        <div className="swipe-header-center mobile-page-flex">
          <p className="mobile-head-title"> Filter by Tags</p>
          <button type="button" onClick={() => close()} className="submit-mobile">
            Done
          </button>
        </div>
        <div className="tag-filtering-wrapper">

          <div className="tag-filtering-search">
            <input
              type="text"
              className="tag-filter-input"
              placeholder="Tag Name"
              onChange={handleFilter}
              value={search}
            />
            <button className="close-tag-filter" onClick={removeSearched}>
              <img src={Svg.closeFilter} alt="" />
            </button>
          </div>

          <div className="tag-filtering-body">
            <FormGroup>
              {tagList?.length ? list?.map((i, k) => (
                  <div key={k} className="check-label">
                    <FormControlLabel
                      onClick={(e) => handleClickRadio(e, i?.id)}
                      label={null}
                      value={i?.id}
                      control={
                        <div className="checkbox-wrapper">
                          <Checkbox
                            style={{ color: "#9F9F9F" }}
                            checked={info?.tags?.includes(i?.id)}
                          />
                          <div
                            style={{ background: renderColor(i?.color).background }}
                            className="filter-tag-style">
                            <p style={{ color: renderColor(i?.color).color }}>{i?.name}</p>
                          </div>
                        </div>
                      }
                    />
                  </div>
                ))
                :
                <p>No Tags Yet</p>
              }
            </FormGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
