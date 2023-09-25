import React from "react";
import { TextRow, RadioDropdown, TagComponent, MobileTagComponent, MinLoader, TypeRow } from "components";
import { CheckUserType, getId, ORGADMIN } from "utils";
import { Svg } from "assets";
import { Checkbox } from "@mui/material";
import { membersService } from "../../store/members/member.service";
import { RadioGroupModal } from "./fragments/modals/radioGroupModal";

export const roleList = [
  {
    label: "Admin",
    type: "ORGADMIN"
  },
  {
    label: "Manager",
    type: "ORGMANAGER"
  },
  {
    label: "Member",
    type: "ORGMEMBER"
  }
];

export const status = [
  {
    label: "ALL",
    type: "All"
  },
  {
    label: "Verified",
    type: "VERIFIED"
  },
  {
    label: "Unverified",
    type: "UNVERIFIED"
  }
];

const renderUserType = (type) => {
  switch (type) {
    case "ORGADMIN":
      return "Admin";
    case "ORGMANAGER":
      return "Manager";
    case "ORGMEMBER":
      return "Member";
    default:
      return "Not Set";
  }
};

const renderUserStatus = (type) => {
  switch (type) {
    case "All":
      return "All";
    case "VERIFIED":
      return "Verified";
    case "UNVERIFIED":
      return "Unverified";
    case "PENDING":
      return "Pending";
    default:
      return "Not Set";
  }
};

export const memberHead = (handleSelect, fullList, selected, width, link) => {
  if (width > 1279) {
    return [
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
      { name: "username", title: "Username" },
      { name: "email", title: "Email address" },
      { name: "created Date", title: "Phone Number" },
      {
        name: "userType", title: "Role", type: "role", labelTitle: "Filter the Role", link: link,
        list: [
          {
            value: "ALL",
            label: "All"
          },
          {
            value: "ORGADMIN",
            label: "Admin"
          },
          {
            value: "ORGMANAGER",
            label: "Manager"
          },
          {
            value: "ORGMEMBER",
            label: "Member"
          }
        ]
      },
      {
        name: "tag", title: "Tag", type: "tag", labelTitle: "Filter the Tags"
      },
      { name: "status", title: "Status" }
    ];
  } else {
    return [
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
      { name: "username", title: "User Info" },
      {
        name: "tag", title: "Tag", type: "tag", labelTitle: "Filter the Tags",
        list: [
          {
            value: "ALL",
            label: "All"
          },
          {
            value: "ADMIN",
            label: "Admin"
          },
          {
            value: "Manager",
            label: "Manager"
          },
          {
            value: "Member",
            label: "Member"
          }
        ]
      },
      {
        name: "userType", title: "Role", type: "role", labelTitle: "Filter the Role", link: "/members",
        list: [
          {
            value: "ALL",
            label: "All"
          },
          {
            value: "ORGADMIN",
            label: "Admin"
          },
          {
            value: "ORGMANAGER",
            label: "Manager"
          },
          {
            value: "ORGMEMBER",
            label: "Member"
          }
        ]
      },
      { name: "status", title: "Status" }
    ];
  }
};

const label = { inputProps: { "aria-label": "Color switch demo" } };

export const memberBody = (handleSelect, fullList, selected, width) => {
  if (width > 1279) {
    return [
      {
        button: (handle, item) => (
          <Checkbox
            {...label}
            onClick={(e) => handleSelect(e, item)}
            name={"checkBox"}
            style={{ padding: 0 }}
            checked={selected?.includes(item?.member?.id) || selected?.includes(item?.id)}
          />
        )
      },
      {
        rowText: (item) => <TextRow name={item?.member?.fullName} />
      },
      {
        rowText: (item) => <TextRow name={item?.member?.email} />
      },
      {
        rowText: (item) => <TextRow date={item?.member?.phoneNumber} />
      },
      CheckUserType() === ORGADMIN ?
        {
          button: (handle, item, load) => <RadioDropdown
            handleSelect={(e) => handle(e)}
            title={renderUserType(item?.userType)}
            currentValue={item?.userType}
            list={roleList}
            labelTitle={"Change User Role"}
            load={load}
          />
        }
        :
        {
          rowText: (item) => <div className="table-text-role">
            {renderUserType(item?.userType)}
          </div>
        },
      {
        button: (item, info) => (<TagComponent userInfo={info} />)
      },
      {
        rowText: (item) => <div className="table-text">{renderUserStatus(item?.auth?.status)}</div>
      }
    ];
  } else {
    return [
      {
        button: (handle, item) => (
          <div style={{ width: "28px" }}>
            <Checkbox
              {...label}
              onClick={(e) => handleSelect(e, item)}
              name={"checkBox"}
              style={{ padding: 0 }}
              checked={selected?.includes(item?.member?.id)}
            />
          </div>
        )
      },
      {
        rowText: (item) => <div>
          <TextRow name={item?.member?.fullName ? item?.member?.fullName : "Not Set"} textWidth={8} />
          <TextRow name={item?.member?.email} lightGray={true} textWidth={8} />
          <TextRow name={item?.member?.phoneNumber ? item?.member?.phoneNumber : "Not Set"} lightGray={true}
                   textWidth={8} />
        </div>
      },
      {
        button: (item, info) => (
          <div className="">
            <TagComponent userInfo={info} />
          </div>
        )
      },
      CheckUserType() === ORGADMIN ?
        {
          button: (handle, item, load) => <RadioDropdown
            handleSelect={(e) => handle(e)}
            title={renderUserType(item?.userType)}
            currentValue={item?.userType}
            list={roleList}
            labelTitle={"Change User Role"}
            load={load}
          />
        }
        :
        {
          rowText: (item) => <div className="table-text-role">
            {renderUserType(item?.userType)}
          </div>
        },
      {
        rowText: (item) => <div className="table-text">{renderUserStatus(item?.auth?.status)}</div>
      }
    ];
  }
};

export const ACTION_TYPE = "GET_MEMBERS";

export const downloadCsv = async () => {
  try {
    const response = await membersService.postOrgUserIdExportCsv(getId);
    const url = window.URL.createObjectURL(new Blob([response?.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `file.csv`);
    document.body.appendChild(link);
    link.click();
  } catch (e) {

  }
};

/** User Group List */

export const memberMobileHead = () => {
  return [
    {
      rowText: (item) => <p className="table-head-title">{item?.member?.fullName ? item?.member?.fullName : "..."}</p>,
      type: "name"
    },
    {
      rowText: (item) =>
        <div className="mobile-table-text-full-width" style={{ marginBottom: "8px" }}>
          <p className="table-head-text">Email:</p>
          <TextRow name={item?.member?.email ? item?.member?.email : "Not Set"} />
        </div>
    },
    {
      rowText: (item) =>
        <div className="mobile-table-text-full-width">
          <p className="table-head-text">Phone:</p>
          <TextRow name={item?.member?.phone ? item?.member?.phone : "Not Set"} />
        </div>
    }
  ];
};

export const memberMobileBody = (openModal) => {
  return [
    CheckUserType() === ORGADMIN ?
      {
        button: (handle, item, load) => (
          <div
            className="mobile-table-body-text-full-width"
            onClick={(e) => openModal(
              <RadioGroupModal
                list={roleList}
                defaultValue={item?.userType}
                handleClickRadio={(e) => handle(e)}
              />,
              { type: "swipe" }
            )
            }
          >
            <div className="mobile-table-text-full-width">
              <p className="table-head-text">Role:</p>
              <div className="text-style">
                {renderUserType(item?.userType)}
              </div>
            </div>
            {load ?
              <MinLoader color={"#49b776"} width={"15px"} height={"15px"} position={"relative"} />
              :
              <img src={Svg.ArrowRight} alt="icon" />
            }
          </div>
        )
      }
      :
      {
        rowText: (item) => (
          <div className="mobile-table-body-text-full-width">
            <div className="mobile-table-text-full-width">
              <p className="table-head-text">Role:</p>
              <div className="text-style">
                {renderUserType(item?.userType)}
              </div>
            </div>
          </div>
        )
      },
    {
      rowText: (item) => (
        <div className="mobile-table-body-text-full-width">
          <div className="mobile-table-text-full-width">
            <p className="table-head-text">Status:</p>
            <div className="text-style">
              {renderUserStatus(item?.auth?.status)}
            </div>
          </div>
        </div>
      )
    },
    {
      button: (item, info) => (
        <div className="mobile-table-body-text-full-width" style={{ border: "none", width: "100%" }}>
          <MobileTagComponent userInfo={info} />
        </div>
      )
    }
  ];
};

// Table.

export const tabList = (list) => {
  if (list?.length) {
    return [
      { name: "download", title: "Download CSV", icon: Svg.DownloadCSV },
      { name: "create", title: "Create a New List", icon: Svg.CreatePlusIcon },
      { name: "add", title: "Add to List", icon: Svg.AddToListIcon }
    ];
  } else {
    return [
      { name: "download", title: "Download CSV", icon: Svg.DownloadCSV },
      { name: "create", title: "Create a New List", icon: Svg.CreatePlusIcon }
    ];
  }
};

export const tabListMobile = () => {
  if (CheckUserType() === ORGADMIN) {
    return [
      { name: "download", title: "Download CSV", icon: Svg.DownloadCSV },
      { name: "create", title: "Create a New List", icon: Svg.CreatePlusIcon },
      { name: "add", title: "Add to List", icon: Svg.AddToListIcon },
      { name: "delete", title: "Delete Members", icon: Svg.TrashRed }
    ];
  } else {
    return [
      { name: "download", title: "Download CSV", icon: Svg.DownloadCSV },
      { name: "create", title: "Create a New List", icon: Svg.CreatePlusIcon },
      { name: "add", title: "Add to List", icon: Svg.AddToListIcon }
    ];
  }

};

export const groupUserTabList = () => {
  return [
    { name: "download", title: "Download CSV", icon: Svg.DownloadCSV },
    { name: "duplicate", title: "Duplicate list", icon: Svg.DuplicateIcon },
    { name: "delete", title: "Delete List", icon: Svg.TrashRed }
  ];
};

export const memberTabListMobile = () => {
  return [
    { name: "download", title: "Download CSV", icon: Svg.DownloadCSV },
    { name: "remove", title: "Remove Members", icon: Svg.removeBlack },
    { name: "duplicate", title: "Duplicate list", icon: Svg.DuplicateIcon },
    { name: "delete", title: "Delete Members", icon: Svg.TrashRed }
  ];
};
