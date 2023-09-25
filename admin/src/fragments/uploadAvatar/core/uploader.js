import React from 'react';
import { CardActions} from '@material-ui/core';
import { MaxWidthModal } from 'components';
import { useStyles } from '../styles';
import Editor from './editor';

export const Uploader = ({ ref, openModal, handleClose, setEditorRef, handleSave, img, zoom, handleZoomSlider }) => {
    const classes = useStyles();

    return (
        <CardActions className={classes.avatarUploadTextCont}>
            <div>
                <form
                    method="post">
                    <input
                        ref={ref}
                        type="file"
                        id="file"
                        accept=".png, .jpg, .jpeg"
                        style={{
                            display: 'none',
                        }}
                    />
                </form>
            </div>
            {openModal ? (
                <MaxWidthModal
                    modal={openModal}
                    styles={{ maxWidth: '400px', width: '100%' }}
                    handleClose={handleClose}
                    closeButton={false}>
                    <Editor
                        editor={setEditorRef}
                        cancel={handleClose}
                        save={handleSave}
                        img={img}
                        zoom={zoom}
                        handleZoomSlider={handleZoomSlider}
                    />
                </MaxWidthModal>
            ) : null}
        </CardActions>
    );
};
