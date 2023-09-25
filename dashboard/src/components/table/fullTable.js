import React, { useEffect, useState, Fragment } from "react";
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { FindLoad, FindSuccess, SendPageSave } from "utils";
import { PaginationItem, Loader, NoDataComponent } from "components";
import BasicPopover from "./poper";
import { FilterTags } from "../tagFltering";

export const FullTable = ({
                            head,
                            body,
                            list,
                            loadingType,
                            handleClick,
                            margin,
                            listCount,
                            handleClickButton,
                            listName,
                            openDrawer
                          }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const info = location?.state;
  const loader = FindLoad(loadingType ? loadingType : "");
  const miniLoadSuccess = FindSuccess("MINI_LOAD");
  const [listInfo, setListInfo] = useState("");

  useEffect(() => {
    if (list) {
      setListInfo(list);
    }
  }, [list]);

  const changePage = (number) => {
    SendPageSave(navigate, number, info, location?.pathname);
  };

  const renderItems = (i, item) => {
    if(listName === 'events'){
      if (item) {
        if (item?.button) {
          return item?.button((name) => handleClickButton(i, name), i,
            miniLoadSuccess &&  miniLoadSuccess.data === i?.eventId )
        } else {
          return item?.rowText(i);
        }
      }
    }else{
    if (item) {
      if (item?.button) {
        return item?.button((name) => handleClickButton(i, name), i,
          miniLoadSuccess &&  miniLoadSuccess?.data === i?.id  )
      } else {
        return item?.rowText(i);
      }
    }
    }
  };

  if (loader?.length) {
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <Loader style={"absolute"} />
      </div>
    );
  }


  return (
    <div className="full-table-styles">
      <div style={margin ? { margin: 0 } : {}} className="table-wrapper">
        <TableContainer className="table-container" component={Paper}>
          <Table stickyHeader className="table" size="small" aria-label="a dense table">
            <TableHead className="table-head">
              <TableRow>
                {head && head.map((i, j) => i !== false && (
                    <TableCell key={j}>
                      {i?.type === 'tag' ?
                        <div>
                          <FilterTags/>
                        </div>
                        :
                        i?.list ? (
                          <BasicPopover
                            name={i?.name}
                            title={i?.title}
                            list={i?.list}
                            labelTitle={i?.labelTitle}
                            link={i?.link}
                          />
                        ) :
                        i?.component ?
                          <div>{i?.component}</div>
                          :
                          <div>{i?.title}</div>
                      }
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <tbody>
            {listInfo?.length ? (
              listInfo?.map((i, j) => (
                <Fragment key={j}>
                  <TableRow style={handleClick ? {cursor:'pointer'} : {}} className="table-row">
                    {body?.map((item, ke) => {
                      if (item) {
                        return (
                          <TableCell
                            className=""
                            key={ke}
                            onClick={() => item?.notClickable !== true && handleClick && handleClick(i.id)}>
                            {renderItems(i, item) || "Not Set"}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                </Fragment>
              ))
            ) : (

              <div style={{ height: "100%", width: "100%", position: "absolute" }}>
            {listName="tickets" ?
              <NoDataComponent listName="tickets" handleClick={openDrawer}  />
              :
              <NoDataComponent />
            }
              </div>
            )}
            </tbody>
          </Table>

          {listCount > 0 && (
            <PaginationItem
              page={info?.page ? info?.page : 1}
              handleReturn={(number) => changePage(number)}
              count={listCount}
              listName={listName}
            />
          )}
        </TableContainer>
      </div>
    </div>
  );
};
