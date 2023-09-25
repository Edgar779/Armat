import React, { useState } from "react";
import { NoteModal } from "./noteModal";
import { inputsStyle } from "../../../../../components/inputs/style";
import { CreateEventStyle } from "../../../../organization/fragments/styles";
import { SimpleModal } from "../../../../../components/modal/modalBase";
import { Autocomplete, MenuItem, Select, TextField } from "@mui/material";
import { Svg } from "../../../../../assets";
import { TextRow } from "components";
import FormControl from "@material-ui/core/FormControl";

export const Sponsors = ({
                           handleChangeSponsors,
                           organizations,
                           sponsors,
                           handleSendNote,
                           delElement,
                           sponsorsId,
                           eventInfo,
                           eventSponsor
                         }) => {
  const inputClasses = inputsStyle();
  const classes = CreateEventStyle();
  const [open, setOpen] = useState(false);
  const [orgId, setOrgId] = useState("");
  const [modalNote, setModalNote] = useState("");
  const [editOr, setEditOr] = useState(false);

  const handleOpenClose = (item) => {
    item && setOrgId(item.id);
    setOpen(!open);
    setModalNote("");
  };

  const handleOpenCloseNote = (info) => {
    setModalNote(info);
    setOpen(!open);
  };

  const handleChancel = (id) => {
    delElement(id);
  };
  const handleSetNote = (e) => {
    handleSendNote(e);
  };

  const handleClick = (it) => {
    if (eventSponsor) {
      const filtered = eventSponsor && eventSponsor.filter((i) => i.orgId === it.id);
      setEditOr(!!filtered.length);
    }
  };

  const filteredOrganizations = organizations?.filter(function(array_el) {
    return (
      sponsors?.filter(function(anotherOne_el) {
        return array_el?.id === anotherOne_el?.id;
      }).length === 0
    );
  });

  return (
    <div>
      <SimpleModal
        handleClick={handleOpenClose}
        onClose={() => setOpen(false)}
        openDefault={open}
        content={
          <NoteModal
            editOr={editOr}
            eventInfo={eventInfo}
            modalNote={modalNote}
            addNote={handleSetNote}
            handleOpenClose={handleOpenClose}
            orgId={orgId}
          />
        }
      />
      <div className="autocomplete-input autocomplete-top">
        <div style={{ width: "100%", marginTop: "16px" }} className={classes.selectTag}>
          <p className="autocomplete-title">Sponsors</p>
          <div style={{ width: "100%" }} className={inputClasses.selectInputStyle}>
            {/*<Autocomplete*/}
            {/*  multiple*/}
            {/*  // defaultValue={whoCanDefault(eventInfo?.access?.status)}*/}
            {/*  sx={{ minHeight: "48px" }}*/}
            {/*  id="checkboxes-tags"*/}
            {/*  placeholder={"Select Sponsors"}*/}
            {/*  options={filteredOrganizations}*/}
            {/*  onChange={(e, ev) => {*/}
            {/*    handleChangeSponsors(e, ev);*/}
            {/*  }}*/}
            {/*  getOptionLabel={(option) => option?.name}*/}
            {/*  renderOption={(props, option, { selected }) => (*/}
            {/*    <li {...props} key={option?.id}>*/}
            {/*      <div className="who-can-wrapper">*/}
            {/*        <p>{option?.name}</p>*/}
            {/*      </div>*/}
            {/*    </li>*/}
            {/*  )}*/}
            {/*  renderInput={(params) =>*/}
            {/*    <TextField*/}
            {/*      {...params}*/}
            {/*      placeholder="Select Sponsors"*/}
            {/*    />*/}
            {/*  }*/}
            {/*/>*/}
            <FormControl variant="outlined" className={inputClasses.formControl}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                value={''}
                onChange={handleChangeSponsors}>
                {filteredOrganizations && filteredOrganizations.map((i, j) => (
                    <MenuItem key={j} value={i}>{i.name}</MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>

      <div className={classes.responseItemsWrapper}>
        {sponsors.length ? sponsors.map((i, j) => (
            <div key={j} className='user-list-wrapper'>

                <p className={classes.spnsorName}>
                  <TextRow name={i?.name} textWidth={8} />
                </p>

              <div className={classes.noteAction}>
                <button
                  type={"button"}
                  style={{ color: "#49B776" }}
                  onBlur={() => handleClick(i)}
                  onClick={() => (sponsorsId[j].note ? handleOpenCloseNote(sponsorsId[j]) : handleOpenClose(i))}
                >
                  <img src={Svg.noteIcon} alt="icon" className="mobile-page-view" />
                  <p className="desktop-page-view">{sponsorsId[j].note ? "View Note" : "Add Note"}</p>
                </button>
                <button
                  type={"button"}
                  onClick={() => handleChancel(i.id)} style={{ color: "#F07379" }}
                >
                  <img src={Svg.RemoveRed} alt="icon" className="mobile-page-view" />
                  <p className="desktop-page-view">Cancel Request</p>
                </button>
              </div>
            </div>
          ))
          : ""}
      </div>
    </div>
  );
};
