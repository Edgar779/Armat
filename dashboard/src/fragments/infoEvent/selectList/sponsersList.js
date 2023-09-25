import { Icon, InputTitle } from 'components';
import React, { useState } from 'react';
import { MaxWidthModal } from 'components';
import { NoteModal } from './common/noteModal';
import { SVGNames } from 'constants/index';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
// import { inputsStyle } from '../../../../components/inputs/styles';

export const SponsorsList = ({
    classes,
    selectedTag,
    handleChangeSponsors,
    organizationsReserve,
    sponsors,
    handleSendNote,
    delElement,
    sponsorsId,
    eventInfo,
    eventSponsor,
}) => {
    const [open, setOpen] = useState(false);
    const [inputs, setInputs] = useState(false);
    const [orgId, setOrgId] = useState('');
    const [orgInfo, setOrgInfo] = useState('');
    const [modalNote, setModalNote] = useState('');
    // const inputClasses = inputsStyle();

    const handleOpenClose = (item) => {
        // if (eventInfo) {
        //     const info = eventSponsor.filter((i) => item.id === i.eventId);
        //     setOrgInfo(info);
        // } else {
        item && setOrgId(item.id);
        // }
        setOpen(!open);
        setModalNote('');
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

    const [editOr, setEditOr] = useState(false);
    const handleClick = (it) => {
        const filtered = eventSponsor.filter((i) => i.orgId === it.id);
        setEditOr(!!filtered.length);
    };

    return (
        <div>
            <MaxWidthModal modal={open} styles={{ maxWidth: '400px', width: '100%' }} handleClose={handleOpenClose} closeButton={false}>
                <NoteModal
                    editOr={editOr}
                    eventSponsor={eventSponsor}
                    eventInfo={eventInfo}
                    modalNote={modalNote}
                    orgInfo={orgInfo}
                    addNote={handleSetNote}
                    handleOpenClose={handleOpenClose}
                    orgId={orgId}
                />
            </MaxWidthModal>

            <div style={{ width: '100%', marginTop: '16px' }} className={classes.selectTag}>
                <InputTitle text={'Sponsors'} />

                <div style={{ width: '100%' }} className={inputClasses.selectInputStyle}>
                    <FormControl variant="outlined" className={inputClasses.formControl}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            value={''}
                            onChange={handleChangeSponsors}>
                            {organizationsReserve &&
                                organizationsReserve.map((i, j) => (
                                    <MenuItem key={j} value={i}>
                                        {i.name}
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                </div>
            </div>

            <div className={classes.responseItemsWrapper}>
                {sponsors.length
                    ? sponsors.map((i, j) => (
                          <div key={j} className={classes.responseItems}>
                              <div>
                                  <p className={classes.spnsorName}>{i && i.name}</p>
                              </div>
                              <div className={classes.noteAction}>
                                  <button
                                      style={{ color: '#49b776' }}
                                      onBlur={() => handleClick(i)}
                                      onClick={() => (sponsorsId[j].note ? handleOpenCloseNote(sponsorsId[j]) : handleOpenClose(i))}>
                                      {/* <Icon name={SVGNames.Note} color={Colors.ThemeGreen} width={'21px'} height={'23px'} /> */}
                                      <p>{sponsorsId[j].note ? 'View Note' : 'Add Note'}</p>
                                  </button>
                                  <button onClick={() => handleChancel(i.id)} style={{ color: '#F07379' }}>
                                      {/* <Icon name={SVGNames.Remove} color={'#F07379'} width={'21px'} height={'23px'} /> */}
                                      <p>Cancel Request</p>
                                  </button>
                              </div>
                          </div>
                      ))
                    : ''}
            </div>
        </div>
    );
};
