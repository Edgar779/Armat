import { noteStyles } from './styles';
import {CloseButton, CreateCancel, ErrMessage} from 'components';
import React, { useState } from 'react';
import { EventsActions } from 'store';
import { useDispatch } from 'react-redux';
import {Images} from "theme";

export const NoteModal = ({ handleOpenClose, info, addNote, orgId, orgInfo, modalNote, eventInfo, eventSponsor, editOr }) => {
    const classes = noteStyles();
    const dispatch = useDispatch();
    const [desc, setDesc] = useState(modalNote ? modalNote.note : '');
    const [disable, setDisable] = useState(!!modalNote);
    const [err, setErr] = useState('');
    const [editNote, setEditeNote] = useState(false);

    const handleChange = (ev) => {
        setDesc(ev.target.value)
            setErr('');
    };

    const sendData = () => {
        if (desc) {
            if (editOr) {
                const eventId = eventInfo.eventId;
                const info = {
                    orgId: modalNote.org ? modalNote.org : orgId,
                    note: desc,
                };
                dispatch(EventsActions.editNote(info, eventId));
            } else {
                const obj = {
                    org: orgId,
                    note: desc,
                };
                addNote(obj);
            }
            handleOpenClose();
            setDesc('');
        } else {
            setErr('desc');
        }
    };

    const handleView = () => {
        setEditeNote(!editNote);
        setDisable(!disable);
    };

    const text = editNote === true ? 'Edit Note' : modalNote ? 'Note' : 'Add Note';
    const buttonText = editNote === true ? 'Save' : info ? 'Save' : 'Add';

    return (
        <div className={classes.noeModalWrapper}>

            <CloseButton handleClick={handleOpenClose} />
            <p className={classes.title}>{text}</p>
            {!modalNote && <p className={classes.subtitle}>To leave a note when requesting sponsorship, please fulfill the below field.</p>}

            {modalNote && (
                <div className={classes.editButtonWrapper}>
                    <button onClick={handleView}>
                        <img src={Images.edit} alt="Badge" />
                        Edit
                    </button>
                </div>
            )}
            <textarea
                value={desc}
                disabled={disable}
                name={'note'}
                onChange={handleChange}
                className={classes.inputText}
                maxLength={100}
                placeholder={'Add the note here...'}
            />
            {err === 'desc' && <ErrMessage text={'Input is not field'} />}
            <p className={classes.inputSubtitle}>Max 100 characters</p>
            {disable === false && (
                <div className={classes.buttons}>
                    <CreateCancel
                        style={{ display: 'flex', width: '100%' }}
                        width={'100%'}
                        handleCreate={sendData}
                        handleCancel={handleOpenClose}
                        Create={buttonText}
                        Cancel={'Cancel'}
                    />
                </div>
            )}
        </div>
    );
};
