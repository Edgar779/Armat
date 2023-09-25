import React from 'react';
import AvatarEditor from 'react-avatar-editor';
import { Grid, Box, Button, Slider, Input } from '@material-ui/core';
import { useGlobalStyles } from 'theme/globalStyles';
import { PageTitle } from 'components';
import { userEditorStyles } from '../styles';
import { Colors } from 'theme';

export const Editor = ({ handleZoomSlider, save, zoom, img, cancel, editor }) => {
    const classes = userEditorStyles();
    const button = {
        background: `transparent linear-gradient(270deg, #5690FF 0%, #766DE8 100%) 0% 0% no-repeat padding-box`,
        borderRadius: '24px',
        '@media (min-width: 320px)': {
            height: '42px',
            width: '100%',
        },
        '@media (min-width: 768px)': {
            height: '48px',
            width: '116px',
        },
        '@media (min-width: 1240px)': {
            height: '48px',
            width: '116px',
        },
        '@media (min-width: 1920px)': {
            height: '48px',
            width: '116px',
        },
    };

    const globalClasses = useGlobalStyles({ button: button });
    return (
        <div className={classes.profileEditorCont}>
            <div className={classes.profileEditorTitleCont}>
                <div className={classes.profileEditorTitle}>
                    <PageTitle title={'Upload Profile Picture'} style={classes.profileEditorTitleText} />
                </div>
            </div>
            <div className={classes.editProfileImgCont}>
                <AvatarEditor
                    style={{ borderRadius: '6px', width: '100%', height: '100%', cursor: 'all-scroll', }}
                    ref={editor}
                    image={img}
                    border={50}
                    color={[0, 0, 0, 0.6]}
                    borderRadius={100}
                    scale={zoom}
                    rotate={0}
                />
            </div>

            <div className={classes.editProfileButtonCont}>
                <input
                    type={'range'}
                    step={0.1}
                    max={4}
                    min={1}
                    style={{
                        width: '100%',
                        height: '10px',
                        background: '#E7E7E7 0% 0% no-repeat padding-box',
                        borderRadius: '10px',
                        outline: 'none',
                    }}
                    value={zoom}
                    onChange={handleZoomSlider}
                />
            </div>

            <div className={classes.editProfileButton}>
                <Button
                    className={globalClasses.cancelButton}
                    style={{
                        padding: '13px 32px',
                        background: '#387DFF1A 0% 0% no-repeat padding-box',
                        color: '#545F7E',
                        borderRadius: '24px',
                        marginRight: '16px',
                    }}
                    onClick={cancel}>
                    Cancel
                </Button>

                <Button
                    style={{
                        padding: '13px 38px',
                        background: Colors.primary,
                        boxShadow: 'none',
                        color: 'white',
                        borderRadius: '24px',
                    }}
                    className={globalClasses.button}
                    onClick={save}>
                    Save
                </Button>
            </div>
        </div>
    );
};

export default Editor;
