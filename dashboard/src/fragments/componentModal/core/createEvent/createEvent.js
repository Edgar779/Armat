import React, { useState } from 'react';
import { Svg } from 'assets';

import { CreateCancel, CustomInput } from 'components';
import { List, ListItem, ListItemButton, ListItemIcon, Container, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useModal } from "../../../../utils";

export const CreatEvent = () => {
    /**
     * Hooks.
     */

    const { openModal, closeModal, params } = useModal();
    const [box, setBox] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            memebrs: '',
        },
    });

    const onSubmit = (data) => {
        const formData = {
            ...data,
        };
    };
    return (
        <div className="event-modal">
            <div className="overview-box">
                <div className="overview-title">
                    <h6> Overview </h6>
                </div>
                <div className="overview-links">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setBox()} sx={{ paddingY: '15px', paddingX: '30px' }}>
                                <ListItemIcon>
                                    <img src={Svg.BasicIcon} alt="Basic Info Green" />
                                </ListItemIcon>
                                <span className="item-title"> Basic Info </span>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ paddingY: '15px', paddingX: '30px' }}>
                                <ListItemIcon>
                                    <img src={Svg.EventGraphic} alt="Event Graphic Green" />
                                </ListItemIcon>
                                <span className="item-title"> Event Graphic </span>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ paddingY: '15px', paddingX: '30px' }}>
                                <ListItemIcon>
                                    <img src={Svg.DescriptionGreen} alt="Description Green" />
                                </ListItemIcon>
                                <span className="item-title"> Description</span>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ paddingY: '15px', paddingX: '30px' }}>
                                <ListItemIcon>
                                    <img src={Svg.BasicIcon} alt="Basic Info Green" />
                                </ListItemIcon>
                                <span className="item-title"> CTA Button Settings</span>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ paddingY: '15px', paddingX: '30px' }}>
                                <ListItemIcon>
                                    <img src={Svg.BasicIcon} alt="Basic Info Green" />
                                </ListItemIcon>
                                <span className="item-title"> Sponsors</span>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ paddingY: '15px', paddingX: '30px' }}>
                                <ListItemIcon>
                                    <img src={Svg.BasicIcon} alt="Basic Info Green" />
                                </ListItemIcon>
                                <span className="item-title"> Event Access </span>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </div>
            </div>
            <div className="global-box">
                <div className="box-banner">
                    <div className="flex-end">
                        <button type="button" className="close-button" onClick={() => closeModal()}>
                            <img src={Svg.CloseModal} alt="Close-Modal" />
                        </button>
                    </div>
                    <div className="banner-title">
                        <h5>Create an Event </h5>
                    </div>
                </div>
                <Container>
                    <Grid container>
                        <form>
                            <div className="basic-info">
                                <h6 className="title">Basic Info</h6>
                                <p className="subtitle">
                                    Provide some basic event info to let attendees know when and where to go for their next event.
                                </p>
                            </div>
                            <div className="global-body">
                                <form onSubmit={handleSubmit(onSubmit)} className="form-messages">
                                    <Grid item md={6}>
                                        <CustomInput
                                            name="title"
                                            control={control}
                                            rules={{ required: true }}
                                            type="text"
                                            label="Event title*"
                                            placeholder={'Enter group name'}
                                        />
                                    </Grid>

                                    <Grid item md={6}>
                                        <CustomInput
                                            name="type"
                                            control={control}
                                            rules={{ required: true }}
                                            type="text"
                                            label="Event Type*"
                                            placeholder={'Enter group name'}
                                        />
                                    </Grid>

                                    <Grid item>
                                        <CustomInput
                                            name="address"
                                            control={control}
                                            rules={{ required: true }}
                                            type="text"
                                            label="Location*"
                                            placeholder={'Enter group name'}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <CustomInput
                                            name="address"
                                            control={control}
                                            rules={{ required: true }}
                                            type="text"
                                            label="Location*"
                                            placeholder={'Enter group name'}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <CustomInput
                                            name="address"
                                            control={control}
                                            rules={{ required: true }}
                                            type="text"
                                            label="Location*"
                                            placeholder={'Enter group name'}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <CustomInput
                                            name="address"
                                            control={control}
                                            rules={{ required: true }}
                                            type="text"
                                            label="Location*"
                                            placeholder={'Enter group name'}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <CustomInput
                                            name="address"
                                            control={control}
                                            rules={{ required: true }}
                                            type="text"
                                            label="Location*"
                                            placeholder={'Enter group name'}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <CustomInput
                                            name="address"
                                            control={control}
                                            rules={{ required: true }}
                                            type="text"
                                            label="Location*"
                                            placeholder={'Enter group name'}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <CustomInput
                                            name="address"
                                            control={control}
                                            rules={{ required: true }}
                                            type="text"
                                            label="Location*"
                                            placeholder={'Enter group name'}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <CustomInput
                                            name="address"
                                            control={control}
                                            rules={{ required: true }}
                                            type="text"
                                            label="Location*"
                                            placeholder={'Enter group name'}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <CustomInput
                                            name="address"
                                            control={control}
                                            rules={{ required: true }}
                                            type="text"
                                            label="Location*"
                                            placeholder={'Enter group name'}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <CustomInput
                                            name="address"
                                            control={control}
                                            rules={{ required: true }}
                                            type="text"
                                            label="Location*"
                                            placeholder={'Enter group name'}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <CustomInput
                                            name="address"
                                            control={control}
                                            rules={{ required: true }}
                                            type="text"
                                            label="Location*"
                                            placeholder={'Enter group name'}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <CustomInput
                                            name="address"
                                            control={control}
                                            rules={{ required: true }}
                                            type="text"
                                            label="Location*"
                                            placeholder={'Enter group name'}
                                        />
                                    </Grid>
                                </form>
                            </div>
                            <div className="global-footer">
                                <div className="btn-box">
                                    <CreateCancel title="Create" cancelBtn={() => {}} />
                                </div>
                            </div>
                        </form>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};
