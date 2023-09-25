import React from 'react';
import {modalStyle} from './core/styles';
import {EventsStatus} from './core';
import {useDispatch, useSelector} from 'react-redux';
import {userActions} from 'store';
import {FormControlLabel, Popover, Radio} from '@material-ui/core';
import {ExpandMore, ExpandLess} from '@material-ui/icons';
import {useGlobalStyles} from "theme";

export const SimplePopover = ({List, filterType, removeType, handleRemoveType, style}) => {
  const classes = modalStyle();
  const globalClasses = useGlobalStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [role, setRole] = React.useState(null);
  const [reserveRole, setReserveRole] = React.useState(null);
  const {unverified, organizer, verified} = useSelector((state) => ({
    unverified: state.user.unverified,
    organizer: state.user.organizer,
    verified: state.user.verified,

  }));
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterByRole = (roleType) => {
    if (handleRemoveType) {
      handleRemoveType(true);
    }
    setAnchorEl(null);
    setRole(roleType);

    const Role =
      roleType === 'Organizer' ? 'ORGANIZER' : roleType === 'Unverified User'
        ? 'MEMBER' : roleType === 'Verified User' ? ' VERIFIED_MEMBER' : '';

    if (Role !== reserveRole) {
      dispatch(userActions.filterByRole(Role));
      setReserveRole(Role);
    } else {
      dispatch(userActions.getUsersList());
      setReserveRole('');
      setRole('');
    }
  };

  const handleFilterEventByRole = (roleType) => {
    if (handleRemoveType) {
      handleRemoveType(true);
    }
    setAnchorEl(null);
    setRole(roleType);

    const Role =
        roleType === 'Approved' ? 'PUBLISHED' :
          roleType === 'Disapproved' ? 'REJECTED' :
            roleType === 'Unpublished' ? 'UNPUBLISHED' :
             roleType === 'Pending' ? 'PENDING' : ''

    if (Role !== reserveRole) {
      dispatch(userActions.filterByRole(Role));
      setReserveRole(Role);
    } else {
      dispatch(userActions.getUsersList());
      setReserveRole('');
      setRole('');
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <React.Fragment>
      <button className={classes.SimplePopoverButton} onClick={handleClick}>
        {open === true ? <ExpandLess style={{...style}}/> : <ExpandMore style={{...style}}/>}
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        className={filterType === 'Filter the Status' ? classes.PopoverStatusStyle : classes.PopoverStyle}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        transformOrigin={{vertical: 'top', horizontal: 'center'}}>
        <div>
          <p className={classes.FilterType}>{filterType}</p>
          {filterType === 'Filter the Status' &&
          List.length &&
          List.map((i, item) => (
            <div key={item} onClick={() => handleFilterEventByRole(i)} className={classes.PopoverStatusListWrapper}>
              <EventsStatus item={i}/>
            </div>
          ))}

          {filterType === 'Filter the Role' &&
          List.length &&
          List.map((i, item) => (
            <div key={item} onClick={() => handleFilterByRole(i)} className={classes.PopoverListWrapper}>
              <FormControlLabel
                checked={removeType && i === role && true}
                control={<Radio style={{color: '#387DFF', marginLeft: '19px'}}/>}
                label={
                  i === 'Unverified User' ?
                    <p  className={globalClasses.lengthStyle}>{i} <span>{`(${unverified ? unverified.length : '0'})`}</span></p>
                   : i === 'Verified User' ?
                    <p  className={globalClasses.lengthStyle}>{i} <span>{`(${verified ? verified.length : '0'})`}</span></p>
                    : i === 'Organizer' ?
                    <p  className={globalClasses.lengthStyle}>{i} <span>{`(${organizer ? organizer.length : '0'})`}</span></p>
                    : ''
                }
              />
            </div>
          ))}
        </div>
      </Popover>
    </React.Fragment>
  );
};
