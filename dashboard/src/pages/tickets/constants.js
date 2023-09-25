import React from "react";
import { TextRow, PriceRow, TypeRow, AntSwitch, MinLoader } from "components";


export const status = [
  {
    label: "ALL",
    type: "All"
  },
  {
    label: "On Sale",
    type: "ACTIVE"
  },
  {
    label: "Inactive",
    type: "INACTIVE"
  }
];


export const ticketHead = (width) => {
  if (width > 1279) {
    return [
      { name: "ticketName", title: "Ticket Name" },
      { name: "price", title: "Price" },
      { name: "eventName", title: "Event Name" },
      {
        name: "access", title: "Access",  labelTitle: "Filter the Access", link: '/tickets',
        list: [
          {
            value: "ALL",
            label: "All"
          },
          {
            value: "PUBLIC",
            label: "Public"
          },
          {
            value: "LISTS",
            label: "Lists"
          },
          {
            value: "MEMBERS",
            label: "Members"
          }
        ]
      },
      { name: "capacity", title: "Capacity" },
      {
        name: "status", title: "Status", labelTitle: "Filter the status", link: "/tickets",
        list: [
          {
            value: "ALL",
            label: "All"
          },
          {
            value: "ACTIVE",
            label: "On Sale",
          },
          {
            value: "INACTIVE",
            label: "Inactive",
          }
        ]
      },
      { name: "action", title: "Action" }
    ];
  } else {
    return [
      { name: "ticketName", title: "Ticket Details" },
      { name: "eventName", title: "Event Info" },
      { name: "ticketAvailability", title: "Ticket Availability" },
      { name: "action", title: "Action" }
    ];
  }
};


export const ticketBody = (width) => {
  if (width > 1279) {
    return [
      {
        rowText: (item) => <TextRow name={item?.name} />
      },
      {
        rowText: (item) => <PriceRow info={item?.price} />
      },
      {
        rowText: (item) => <TextRow name={item?.eventId?.title} />
      },
      {
        rowText: (item) => <TypeRow text={item?.access?.status} />
      },
      {
        rowText: (item) => <TextRow name={item?.capacity} />
      },
      {
        rowText: (item) => <div>{item?.status === "ACTIVE" ? "On Sale" : "Inactive"}</div>
      },
      {
        button: (handle, item, load) =>
          load ?
            <MinLoader color={"#49b776"} width={"15px"} height={"15px"} position={"relative"} />
            :
            <AntSwitch checked={item?.status === "ACTIVE"} onChange={() => handle("setStatus")} name="checked" />,
        notClickable: true
      }
    ];
  } else {
    return [
      {
        rowText: (item) => (
          <div>
            <TextRow name={item?.name} />
            <PriceRow info={item?.price} lightGray={true} />
          </div>
        )
      },
      {
        rowText: (item) => (
          <div>
            <TextRow name={item?.eventId?.title} />
            <p className="text-style-light">
              <TypeRow text={item?.access?.status} />
            </p>
          </div>
        )
      },
      {
        rowText: (item) => (
          <div>
            <TextRow name={item?.capacity} />
            <div className="text-style-light">{item?.status === "ACTIVE" ? "On Sale" : "Inactive"}</div>
          </div>
        )
      },
      {
        button: (handle, item, load) =>
          load ?
            <MinLoader color={"#49b776"} width={"15px"} height={"15px"} position={"relative"} />
            :
            <AntSwitch checked={item?.status === "ACTIVE"} onChange={() => handle("setStatus")} name="checked" />,
        notClickable: true
      }
    ];
  }
};

export const ACTION_TYPE = "GET_TICKETS";

export const ticketMobileHead = () => {
  return [
    {
      rowText: (item) => <p className='table-head-title'>{item?.name ? item?.name  : '...'}</p>, type:'name'
    },
    {
      rowText: (item) =>
        <div className="mobile-table-text-full-width" style={{marginBottom:'8px'}}>
          <p className="table-head-text">Price:</p>
          <PriceRow info={item?.price ? item?.price : 0}  />
        </div>
    },
    {
      rowText: (item) =>
        <div className="mobile-table-text-full-width" >
          <p className="table-head-text">Event Name:</p>
          <TextRow   name={item?.eventId?.title  ? item?.eventId?.title : 'Not Set'} />
        </div>
    }
  ];
};

export const ticketMobileBody = ( ) => {
  return [
    {
      rowText: ( item) => (
        <div className="mobile-table-body-text-full-width">
          <div className='mobile-table-text-full-width'>
            <p className="table-head-text">Access:</p>
            <div className='text-style'>
              <TypeRow text={item?.access?.status} />
            </div>
          </div>
        </div>
      )
    },
    {
      rowText: ( item) => (
        <div className="mobile-table-body-text-full-width">
          <div className='mobile-table-text-full-width'>
            <p className="table-head-text">Capacity:</p>
            <div className='text-style'>
              {item?.capacity}
            </div>
          </div>
        </div>
      )
    },  {
      rowText: ( item) => (
        <div className="mobile-table-body-text-full-width">
          <div className='mobile-table-text-full-width'>
            <p className="table-head-text">Status:</p>
            <div className='text-style'>
              {item?.status === "ACTIVE" ? "On Sale" : "Inactive"}
            </div>
          </div>
        </div>
      )
    },
    {
      button: (handle, item, load) =>
        <div className='flex-end' style={{marginTop:'24px', height:'20px'}}>
          {load ?
            <MinLoader color={"#49b776"} width={"16px"} height={"17px"} position={"relative"} margin={'0px'} />
            :
            <AntSwitch checked={item?.status === "ACTIVE"} onChange={() => handle("setStatus")} name="checked" />
          }
        </div>,
      notClickable: true
    }

  ];
};
