import React from "react";
import { AntSwitch, MinLoader, TextRow, TypeRow } from "components";
import { Checkbox, Switch } from "@mui/material";
import { Svg } from "assets";
import moment from "moment";
import { CheckUserType, ORGADMIN } from "../../utils";

const label = { inputProps: { "aria-label": "Color switch demo" } };

export const ACTION_TYPE = "GET_EVENTS";

export const status = [
  {
    value: "ALL",
    label: "All"
  },
  {
    value: "Verified",
    label: "VERIFIED"
  },
  {
    value: "Unverified",
    label: "UNVERIFIED"
  }
];

export const eventStatus = [
  {
    value: "ALL",
    label: "All"
  },
  {
    value: "ACTIVE",
    label: "Active"
  },
  {
    value: "PENDING",
    label: "Pending"
  },
  {
    value: "INACTIVE",
    label: "Inactive"
  }
];

export const eventHead = (handleSelect, fullList, selected) => {
  return [
    CheckUserType() === ORGADMIN &&
    {
      component:
        <Checkbox
          {...label}
          onClick={(e) => handleSelect(e, "", "all")}
          name={"checkBox"}
          style={{ padding: 0 }}
          checked={fullList?.length === selected?.length}
        />
    },
    { name: "event", title: "Event Title" },
    { name: "date", title: "Date and Time" },
    {
      name: "locationType",
      title: "Type",
      type: "type",
      list: [
        {
          value: "ALL",
          label: "All"
        },
        {
          value: "PHYSICAL",
          label: "Physical"
        },
        {
          value: "VIRTUAL",
          label: "Virtual"
        }
      ]
    },
    {
      name: "status",
      title: "Status",
      type: "status",
      list: [
        {
          value: "ALL",
          label: "All"
        },
        {
          value: "PENDING",
          label: "Pending"
        },
        {
          value: "PUBLISHED",
          label: "Published"
        },
        {
          value: "REJECTED",
          label: "Rejected"
        },
        {
          value: "UNPUBLISHED",
          label: "Unpublished"
        }
      ]
    },
    { name: "attendess", title: "Attendees" },
    { name: "action", title: "Action" }
  ];
};


export const eventBody = (handleSelect, fullList, selected) => [
  CheckUserType() === ORGADMIN &&
  {
    button: (handle, item) => (
      <Checkbox
        {...label}
        onClick={(e) => handleSelect(e, item)}
        name={"checkBox"}
        style={{ padding: 0 }}
        checked={selected?.includes(item?.eventId)}
      />
    )
  },
  {
    rowText: (item) => <TextRow name={item?.title} />
  },
  {
    rowText: (item) => <div className="">{
       item?.startTime ? moment(item?.startDate).format("MM/DD/YYYY hh:mm") :
         item?.allDay === true ? 'All Day' :
         'Not Set'}</div>
  },
  {
    rowText: (item) => <div className=""> <TypeRow text={item?.locationType} /> </div>
  },
  {
    button: (handle, info, load) => (
      <div className="flex">
        <div style={{marginRight:'16px', width:'80px'}}>
          <TypeRow text={info?.status} />
        </div>
        <div style={{width:'30px'}}>
        {load ?
          <MinLoader color={"#49b776"} width={"15px"} height={"15px"} position={"relative"} margin={'0'} />
          :
          <AntSwitch checked={info.status === "PUBLISHED"} onChange={() => handle("setStatus")} name="checked" />
        }
        </div>
      </div>
    )
  },
  {
    button: (handle, info) => (
      <div className="flex">
        <div className="">
          <span> {info?.rsvpCount} </span> {"  "} Users
        </div>
        <button type="button" className="eye-btn" onClick={() => handle('attendees')}>
          <img src={Svg.EyeIcon} alt="Eye Icon" />
        </button>
      </div>
    )
  },
  {
    button: (handle) => (
      <div className="flex">
        <button onClick={() => handle('edit')} type="button" className="edit-btn">
          <img src={Svg.EditIcon} alt="Edit Icon" />
        </button>
      </div>
    )
  }
];



export const eventHeadMobile = () => {
  return [
    {
      rowText: (item) => <p className='table-head-title'>{item?.title ? item?.title  : '...'}</p>, type:'name' },
    {
      rowText: (item) =>
        <div className="mobile-table-text-full-width" style={{marginBottom:'8px'}}>
          <p className="table-head-text">Type:</p>
          <p style={{color:'#767676'}}>  <TypeRow text={item?.locationType} /></p>
        </div>
    },
    {
      rowText: (item) =>
        <div className="mobile-table-text-full-width" >
          <p className="table-head-text">Date & Time:</p>
          <div style={{color:'#767676'}}>{
            item?.startTime ? moment(item?.startDate).format("MM/DD/YYYY hh:mm") :
              item?.allDay === true ? 'All Day' :
                'Not Set'}
          </div>
        </div>
    }
  ];
};


export const eventBodyMobile = (openModal) => [
  {
    button: (handle, item, load) => {
     return <div className="mobile-table-body-text-full-width">
        <div className='mobile-table-text-full-width'>
          <p className="table-head-text">Status:</p>
          <div className='text-style'>
            <TypeRow text={item?.status} />
          </div>
        </div>
       {load ?
         <MinLoader color={"#49b776"} width={"15px"} height={"15px"} position={"relative"} margin={'0'} />
         :
          <AntSwitch checked={item.status === "PUBLISHED"} onChange={() => handle("setStatus")} name="checked" />
        }
      </div>
    }
  },
  {
    button: (handle, item) => (
      <div
        className="mobile-table-body-text-full-width"
        onClick={(e) => handle('attendees')
        }
      >
        <div className='mobile-table-text-full-width'>
          <p className="table-head-text">Attendees:</p>
          <div className='text-style' style={{color:'#767676'}}>
            {item?.rsvpCount}
          </div>
        </div>
        <img src={Svg.ArrowRight} alt="icon" />
      </div>
    )
  },
  {
    button: (handle) =>
      <div className='flex-end' style={{marginTop:'24px', height:'20px'}}>
        <button
          className='edit-event-btn'
          onClick={() => handle("edit")} >
          Edit
        </button>
      </div>,
    notClickable: true
  }

];

