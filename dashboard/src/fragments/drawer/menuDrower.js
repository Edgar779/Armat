import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RoutersInfo, Routers } from "router";
import { getId, useModal } from "utils";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { UserInfo, SelectOrganization } from "./core";
import { Images, Svg } from "assets";
import { membersActions, organizationActions } from "store";
import { CustomListItem } from "./core/listItem";
import { CreateOrganization } from "../componentModal/core";

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

export const DrawerMenu = () => {
  const { organizationsList, currentOrg, userGroupList } = useSelector((state) => ({
    organizationsList: state.organizations.organizationsList,
    currentOrg: state.organizations.currentOrg,
    userGroupList: state.members.userGroupList
  }));
  const routersList = RoutersInfo();
  const dispatch = useDispatch();
  const { openModal } = useModal();
  const [open, setOpen] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    dispatch(membersActions.getUserGroupList());
  }, []);

  const handleDrawerOpenClose = () => {
    setOpen(!open);
  };

  const handleOpenLeftMenu = () => {
    setOpenMenu(!openMenu);
  };

  const setCurrentOrg = (event) => {
    if (event?.id !== getId) {
      dispatch(organizationActions.setCurrentOrganization(event?.id));
      setOpenMenu(false);
      window.location.reload();
    }
  };

  const createOrganization = () => {
    setOpenMenu(false);
    openModal(<CreateOrganization />);
  };

  return (
    <Box className="menu-bar-wrapper">
      <div className="header-wrapper">
        <div className="desktop-logo">
          <SelectOrganization
            setCurrentOrg={setCurrentOrg}
            currentOrg={currentOrg}
            list={organizationsList}
          />
        </div>
        <div className="mobile-logo">
          <button className="hanburger-btn" onClick={handleOpenLeftMenu}>
            <img src={openMenu ? Svg.CloseHanburger : Svg.HanburberIcon} alt="Hanburger" />
          </button>
        </div>
        <UserInfo />
      </div>

      {/* Mobilr */}
      <SwipeableDrawer
        open={openMenu}
        onOpen={handleOpenLeftMenu}
        onClose={handleOpenLeftMenu}
        className="mobile-drawer"
      >
        <div className="mobile-drawer-head">
          <button className="close-mobile-drawer" onClick={handleOpenLeftMenu}>
            <img src={Svg.CloseHanburger} alt="icon" />
          </button>
          <p className="my-organization">My Organizations</p>
          {organizationsList?.length ? <div style={{ height: "100%", maxHeight: "120px", overflow: "auto" }}>
            {organizationsList?.map((i, j) => (
              <div key={j} onClick={() => setCurrentOrg(i)}>
                <div className="current-organization-mobile"
                     style={{ background: i?.id === getId ? "#FAFAFA" : "white" }}
                >
                  <img
                    src={i?.avatar?.url ? i?.avatar?.url : Svg.noAvatar}
                    alt="Organization-Logo" className="logo-img"
                    width={24}
                  />
                  <span className="item-text"
                        style={{ fontWeight: i?.id === getId ? 600 : 400 }}
                  > {i?.name}</span>
                </div>
              </div>
            ))}
          </div> : ""}
          <div className="current-organization-mobile-bottom">
            <button onClick={createOrganization} className="add-organization-button">
              <img src={Svg.AddGreenIcon} alt="Add Green Icon" />
              <span className="item-text">Add Organization</span>
            </button>
          </div>
        </div>
        <List style={{ padding: "16px 0" }} className="list-style ">
          {routersList?.map((item, j) => (
            <div key={j}>
              <CustomListItem
                title={item?.name}
                open={open}
                path={item?.path}
                activeIcon={item.activeIcon}
                passiveIcon={item.icon}
                userGroupList={userGroupList}
                setOpenMenu={setOpenMenu}
              />
            </div>
          ))}
        </List>
      </SwipeableDrawer>

      {/* Desktop */}
      <Drawer variant="permanent" open={open} className="desktop-drawer">
        <DrawerHeader>
          <div>
            <IconButton className="icon-button" onClick={handleDrawerOpenClose}>
              <img src={Svg.CollapseButton} alt="Collapse Button" />
            </IconButton>
          </div>
        </DrawerHeader>
        <List style={open ? { padding: "16px 0" } : { padding: "16px 8px" }} className="list-style ">
          {routersList?.map((item, j) => (
            <div key={j}>
              <CustomListItem
                title={item?.name}
                open={open}
                path={item?.path}
                activeIcon={item.activeIcon}
                passiveIcon={item.icon}
                userGroupList={userGroupList}
              />
            </div>
          ))}
        </List>
        {open && (
          <Box className="drawer-img">
            <img src={Images.ArmatImage} alt="Armat Image" />
          </Box>
        )}
      </Drawer>
      <Box className="body-wrapper" component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader style={{ minHeight: "50px" }} />
        <Box sx={{ marginTop: "50px" }}></Box>
        <div className="">
          <Routers />
        </div>
      </Box>
    </Box>
  );
};
