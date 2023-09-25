import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { Colors, SaveParams, useWindowDimensions } from "utils";
import { Accordion, AccordionDetails, AccordionSummary, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { membersActions } from "store";

export const CustomListItem = ({ title, path, open, activeIcon, passiveIcon, userGroupList, setOpenMenu }) => {
  const navigate = useNavigate();
  const windowLoc = window.location.pathname;
  const checkPath = windowLoc === `/dashboard${path}`;
  const checkUserList = windowLoc.slice(0,11) === '/membersLis';
  const location = useLocation();
  const info = location?.state;
  const dispatch = useDispatch()
  const { width } = useWindowDimensions();

  const handleNavigate=(link) => {
    dispatch(membersActions.removeUserGroupById())
    SaveParams(link, navigate, { ...info });
  }

  const handleNavigateLinks = ( path ) => {
    navigate(path)
    if( width < 1279 ){
      setOpenMenu(false)
    }
  }

  return (
    <>
      {path === "/members" ?
        <div className={"accordion-styles"}>
          <Accordion
          defaultExpanded={checkUserList}
          >
            <AccordionSummary
              className={checkPath || checkUserList ? "active-accordion" : ""}
              onClick={() => navigate(path)}
              expandIcon={userGroupList?.length ?
                open && <ExpandMoreIcon style={{ color: checkPath || checkUserList ? "#49B776" : "#222222", }} />
                : ""}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <div className={"accordion-title"}>

                <Box className="list-item-icon" sx={{ mr: open ? "8px" : "2px" }}>
                  <img src={checkPath || checkUserList ? activeIcon : passiveIcon} alt={"MEMBERS ICON"} />
                </Box>
                {open && (
                  <p style={{
                    color: checkPath || checkUserList ? Colors.theme.main : "",
                    fontWeight:checkPath || checkUserList ? 600 : 400,
                    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                    margin: 0,
                  }}>
                    {title}
                  </p>
                )}
              </div>
            </AccordionSummary>
            {userGroupList?.length ?
              <AccordionDetails>

                <div className='user-list-buttons-wrapper'>
                  {userGroupList?.map((i, j) => (
                    <button
                      key={j}
                      className={windowLoc === `/membersList/${i?.id}` ? "buttons-style-active" : "buttons-style"}
                      onClick={() => handleNavigate(`/membersList/${i?.id}`)}
                    >
                      {i?.name}
                    </button>
                  ))}
                </div>

              </AccordionDetails>
              :
              ''
            }
          </Accordion>
        </div>
        :
        <ListItemButton
          onClick={() => handleNavigateLinks(path)}
          className={checkPath ? "items-wrapper-active" : "items-wrapper"}
          sx={{
            px: 2.5,
            background: checkPath ? "#E5F4EB !important" : "transparent"
          }}>
          <ListItemIcon className="list-item-icon" sx={{ mr: open ? "8px" : "2px" }}>
            <img src={checkPath ? activeIcon : passiveIcon} alt={"MEMBERS ICON"} />
          </ListItemIcon>
          <ListItemText
            className={"list-item-text"}
            style={{
              color: checkPath ? Colors.theme.main : '#494949'
            }}
            primary={title}
            sx={{ opacity: open ? 1 : 0 }}
          />


        </ListItemButton>

      }
    </>
  );
};