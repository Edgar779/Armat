import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Tab, Tabs } from "@mui/material";
import { organizationActions } from "store";
import { FindLoad, useWindowDimensions } from "utils";
import { BasicInfo, ImagesFragment, SocialFragment } from "./fragments";
import { AvailabilitySchedule, Loader } from "components";

const ACTION_TYPE = "GET_ORGANIZATION_BY_ID";
const EDIT_ACTION_TYPE = "EDIT_ORGANIZATION";

export const Organization = ({}) => {
  const { orgById, categories } = useSelector((state) => ({
    orgById: state.organizations.orgById,
    categories: state.organizations.categories
  }));
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);
  const loader = FindLoad(ACTION_TYPE);
  const { width } = useWindowDimensions();

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  useEffect(() => {
    dispatch(organizationActions.getOrgById());
    dispatch(organizationActions.getOrgCategories());
    dispatch(organizationActions.getOrganizationSocial());

  }, []);

  if (loader?.length) {
    return <Loader />;
  }

  return (
    <div className="organization-container page-container">
      <div className="container-title">
        <h1 className="organization-title">Organization Info</h1>
      </div>
      <div className="organization-tab">
        <AppBar className={"tab-btns"} position="static" style={{ width: "100%" }}>
          <Tabs
            value={tab}
            style={{ width: width > 769 ? "100%" : "300px" }}
            onChange={handleChangeTab}
            variant="scrollable"
            scrollButtons={width <= 769}
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            <Tab label="Basic Info" />
            <Tab label="Images" />
            <Tab label="Hours" />
            <Tab label="Social" />
          </Tabs>
        </AppBar>
      </div>
        <div className="basic-info">
          <div className="basic-info-wrapper">
            {tab === 0 && (
              <BasicInfo
                orgById={orgById}
                orgCategories={categories}
                editActionType={EDIT_ACTION_TYPE}
              />
            )}
            {tab === 1 && (
              <ImagesFragment
                orgById={orgById}
                editActionType={EDIT_ACTION_TYPE}
              />
            )}
            {tab === 2 && (
              <AvailabilitySchedule
                orgById={orgById}
                editActionType={EDIT_ACTION_TYPE}
              />
            )}
            {tab === 3 && (
              <SocialFragment
                orgById={orgById}
                editActionType={EDIT_ACTION_TYPE}
              />
            )}
          </div>
        </div>
    </div>
  );
};
