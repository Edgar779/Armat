import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { CreateCancel, ErrMessage } from 'components';
import { SVGNames } from 'constants/index';
import { FindError, FindErrorItem, FindLoad, FindSuccess } from "utils";
import { EventsActions, httpRequestsOnSuccessActions } from 'store';
import { useRouter } from 'next/router';
import { CreateEventStyle, UploadImage, timeZoneList, Buttons, Sponsors, BoxShadowSection, InfoInputs } from './core';
import ArticleEditor from './core/richTextEditor';

export const CreateEventInputs = ({ eventInfo, handleCloseEdit, type, organizationsReserve, eventSponsor, edit }) => {
    const { categories, tags } = useSelector((state) => ({
        categories: state.manage.categories,
        tags: state.manage.tags,
    }));
    const params = useRouter();
    const router = useRouter();
    const dispatch = useDispatch();
    const classes = CreateEventStyle();
    const [inputs, setInputs] = useState(eventInfo ? { ...eventInfo } : '');
    const [buttons, setButtons] = useState(eventInfo ? { ...eventInfo.cta } : {});
    const [selectedCategories, setSelectedCategories] = useState(eventInfo ? (eventInfo.categories ? eventInfo.categories : []) : []);
    const [selectedTag, setSelectedTag] = useState(eventInfo ? (eventInfo.tags ? eventInfo.tags : []) : []);
    const [sponsors, setSponsors] = useState(eventInfo ? (eventInfo.sponsors ? eventInfo.sponsors : []) : []);
    const [error, setError] = React.useState(false);
    const [img, setImg] = useState(eventInfo?.images?.length > 0 ? [...eventInfo.images] : []);
    const [imgPush, setImgPush] = useState([]);
    const [imgIndex, setIndex] = useState(0);
    const [deletedImg, setDeletedImg] = useState([]);
    const [loaderUpload, setLoaderUpload] = useState(false);
    const [addressState, setAddressState] = useState(eventInfo ? !eventInfo.address : false);
    const [startEndDateCheck, setStartEndDateCheck] = useState(eventInfo ? eventInfo.tbd : false);
    const [allDay, setAllDay] = useState(eventInfo ? eventInfo.allDay : false);
    const [sponsorsId, setSponsorsId] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [deletedR, setDeleted] = useState([]);
    const loader = FindLoad('CREATE_EVENTS');
    const loaderEdit = FindLoad('EDIT_EVENTS');
    const timeZoneInfo = eventInfo ? timeZoneList.filter((i) => i.value === inputs.timezoneOffset) : '';
    const success = FindSuccess('CREATE_EVENTS');
    const successEdit = FindSuccess('EDIT_EVENTS');
    const backError = FindErrorItem(eventInfo ? 'EDIT_EVENTS' : 'CREATE_EVENTS');

    useEffect(() => {
        if (eventInfo?.eventImage) {
            setIndex(eventInfo.eventImage);
        }
    }, [eventInfo]);

    useEffect(() => {
        return () => dispatch(EventsActions.removeEventSponsorsList());
    }, []);

    useEffect(() => {
        if (eventInfo) {
            const newList = organizationsReserve.filter((a) => eventSponsor.findIndex((u) => u.orgId === a.id) < 0);
            setOrganizations(newList);
        } else {
            setOrganizations(organizationsReserve);
        }
    }, [organizationsReserve, eventSponsor]);

    useEffect(() => {
        if (eventSponsor.length) {
            const newOrganizations = [];
            organizationsReserve.map((i) => eventSponsor.map((l) => l.orgName === i.name && newOrganizations.push(i)));
            setSponsors(newOrganizations);

            const newSponsorList = [];
            eventSponsor.map((k) =>
                newSponsorList.push({
                    org: k.orgId,
                    note: k.note ? k.note : '',
                })
            );
            setSponsorsId(newSponsorList);
        }
    }, [eventSponsor]);

    useEffect(() => {
        if (success.length) {
            dispatch(httpRequestsOnSuccessActions.removeSuccess('CREATE_EVENTS'));
            router.push('/myEvents');
        }
    }, [success]);

    useEffect(() => {
        if (successEdit.length) {
            dispatch(httpRequestsOnSuccessActions.removeSuccess('EDIT_EVENTS'));
            handleCloseEdit();
        }
    }, [successEdit]);

    const handleClearImg = (key, item) => {
        setIndex(0);
        const deletedImages = [...imgPush];
        deletedImages.splice(key, 1);
        setImgPush(deletedImages);

        const deletedImagesFile = [...img];
        deletedImagesFile.splice(key, 1);
        setImg(deletedImagesFile);

        const newArr = [...deletedImg, item];
        setDeletedImg(newArr);
    };

    const handleFileChange = (e) => {
        const newArr = [...img];
        const imageArr = [...imgPush];
        for (let item of e) {
            if (item && item.size > 2097152) {
                setError(true);
            } else {
                setError('');

                newArr.push({
                    url: URL.createObjectURL(new File([item], 'image', { type: 'text/json;charset=utf-8' })),
                    id: newArr.length + 1,
                });
                setImg(newArr);

                imageArr.push(new File([item], `img${newArr.length + 1}`));
                setImgPush(imageArr);
            }
        }
    };

    const handleChangeTags = (event, values) => {
        setSelectedTag(values);
        error === 'tags' && setError('');
    };

    const handleChangeSponsors = (event) => {
        const nuwOrganizations = [];
        organizations.filter((i) => event.target.value.id !== i.id && nuwOrganizations.push(i));
        setOrganizations(nuwOrganizations);
        const newList = [...sponsorsId];
        newList.push({
            org: event.target.value.id,
        });
        setSponsorsId(newList);
        setSponsors([...sponsors, event.target.value]);
        error === 'tags' && setError('');
    };

    const handleChangeCategories = (event, values) => {
        setSelectedCategories(values);
        error === 'categories' && setError('');
    };

    const handleSendNote = (e) => {
        const newList = [...sponsorsId];
        sponsorsId.filter((i, k) => (i.org === e.org ? (newList[k].note = e.note) : ''));
        setSponsorsId(newList);
    };

    const delElement = (e) => {
        if (eventInfo) {
            const newDeleted = [...deletedR];
            eventSponsor.map((i) => i.orgId === e && newDeleted.push(e));
            setDeleted(newDeleted);
        }

        const newList = [...sponsorsId];
        sponsorsId.filter((i, k) => i.org === e && newList.splice(k, 1));
        setSponsorsId(newList);

        const newSponsors = [...sponsors];
        sponsors.filter((i, k) => i.id === e && newSponsors.splice(k, 1));
        setSponsors(newSponsors);

        const newOrganizations = [...organizations];
        organizationsReserve.filter((i) => e === i.id && newOrganizations.push(i));
        setOrganizations(newOrganizations);
    };

    const sendData = async () => {
        const add = eventInfo
            ? inputs.address && inputs.address.formattedAddress
                ? inputs.address.formattedAddress
                : inputs.address
            : inputs.address && inputs.address;
        const localType =
            inputs.locationType === 'Physical'
                ? 'PHYSICAL'
                : inputs.locationType === 'Virtual'
                ? 'VIRTUAL'
                : inputs.locationType === 'PHYSICAL'
                ? 'PHYSICAL'
                : inputs.locationType === 'VIRTUAL'
                ? 'VIRTUAL'
                : '';

        const stDateBool =
            allDay === false && startEndDateCheck === false
                ? inputs.startDate && inputs.endDate && inputs.startTime && inputs.endTime
                : startEndDateCheck === false
                ? inputs.startDate && inputs.endDate
                : true;

        const addressBool =
            addressState === true
                ? true
                : inputs.locationType !== 'Virtual' && inputs.locationType !== 'VIRTUAL'
                ? inputs.address
                : inputs.locationType !== 'PHYSICAL' && inputs.locationType !== 'Physical'
                ? true
                : eventInfo
                ? inputs.locationType !== 'PHYSICAL' && true
                : eventInfo.address
                ? inputs.address
                : addressState === false
                ? inputs.address
                : '';

        if (inputs.title && inputs.locationType && inputs.timezoneOffset && stDateBool && addressBool && inputs.description) {
            const formData = new FormData();
            const endpoint = `/files/uploadMany?includeThumbnail=true`;
            imgPush?.length && imgPush.map((i) => formData.append('files', i));
            const uploadedImg =
                imgPush?.length &&
                (setLoaderUpload(true),
                await axios
                    .post(endpoint, formData, { auth: true })
                    .then((res) => {
                        setLoaderUpload(false);
                        return res.data;
                    })
                    .catch(() => setLoaderUpload(false)));

            if (eventInfo) {
                const editImage = uploadedImg && uploadedImg.length ? { imagesToAdd: [...uploadedImg] } : '';
                const uploadedArr = uploadedImg ? uploadedImg : [];
                let filteredImages = img.filter((i) => i.thumbUrl);
                const allPhotos = [...filteredImages, ...uploadedArr];
                const eventAvatar =
                    allPhotos.length && +imgIndex !== eventInfo.eventImage
                        ? { eventImage: +imgIndex }
                        : { eventImage: eventInfo?.eventImage };
                const deletedImages = deletedImg.length ? { imagesToRemove: [...deletedImg] } : '';
                let deletedSponsors = [...new Set(deletedR)];
                const deleted = deletedSponsors.length ? { removeSponsors: deletedSponsors } : '';
                const newList = sponsorsId.filter((a) => eventSponsor.findIndex((u) => u.orgId === a.org) < 0);
                const addedSponsor = newList.length > 0 ? { addSponsors: [...newList] } : ' ';

                const editDate = {
                    title: inputs.title,
                    address: addressState === true ? null : add,
                    locationType: localType,
                    categories: selectedCategories,
                    tags: selectedTag,
                    description: inputs.description,
                    startDate: inputs.startDate,
                    endDate: inputs.endDate,
                    startTime: inputs.startTime,
                    endTime: inputs.endTime,
                    tbd: startEndDateCheck,
                    timezoneOffset: inputs.timezoneOffset,
                    ...eventAvatar,
                    ...editImage,
                    ...deletedImages,
                    ...deleted,
                    ...addedSponsor,
                    cta: { ...buttons },
                };
                // eventInfo && params.query.orgid ? (date['org'] = params.query.orgid) : '';
                if (type === 'byOrgId') {
                    dispatch(EventsActions.editEvent(editDate, eventInfo.eventId, 'byOrgId', router.query.orgid));
                } else {
                    dispatch(EventsActions.editEvent(editDate, eventInfo.eventId));
                }
            } else {
                const date = {
                    title: inputs.title,
                    address: addressState === true ? null : add,
                    locationType: localType,
                    categories: selectedCategories,
                    tags: selectedTag,
                    description: inputs.description,
                    startDate: inputs.startDate,
                    endDate: inputs.endDate,
                    startTime: inputs.startTime,
                    allDay: allDay,
                    tbd: startEndDateCheck,
                    endTime: inputs.endTime,
                    timezoneOffset: inputs.timezoneOffset,
                    cta: { ...buttons },
                    sponsors: [...sponsorsId],
                };
                params.query.orgid ? (date['org'] = params.query.orgid) : '';
                uploadedImg ? (date['eventImage'] = +imgIndex) : '';
                uploadedImg ? (date['images'] = [...uploadedImg]) : '';

                dispatch(EventsActions.createEvent(date));
            }
        } else {
            setError(
                !inputs.title
                    ? 'title'
                    : !inputs.locationType
                    ? 'locationType'
                    : !inputs.timezoneOffset
                    ? 'timezoneOffset'
                    : !inputs.startDate
                    ? 'startDate'
                    : !inputs.endDate
                    ? 'endDate'
                    : startEndDateCheck === false && allDay === false && !inputs.startTime
                    ? 'startTime'
                    : startEndDateCheck === false && allDay === false && !inputs.endTime
                    ? 'endTime'
                    : inputs.locationType !== 'Virtual' && inputs.locationType !== 'VIRTUAL' && addressState === false && !inputs.address
                    ? 'address'
                    : !inputs.description
                    ? 'text'
                    : ''
            );
        }
    };

    const handleChangeInputs = (e) => {
        if (e.target.name === 'startDate') {
            setInputs((prevState) => ({ ...prevState, ['startDate']: e.target.value }));
            !inputs.endDate && setInputs((prevState) => ({ ...prevState, ['endDate']: e.target.value }));
        } else {
            if (
                e.target.name === 'startTime'
                // || 'endTime'
            ) {
                setAllDay(false);
            }

            setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
        }
        e.target.name === error && setError('');
    };

    const handleAllDay = () => {
        setAllDay(!allDay);
        setStartEndDateCheck(false);
        setInputs((prevState) => ({ ...prevState, ['startTime']: null, ['endTime']: null }));
        error === 'startTime' && setError('');
        error === 'endTime' && setError('');
    };

    const handleClose = () => {
        if (eventInfo) {
            handleCloseEdit();
        } else {
            router.push('/upcomingEvents');
        }
    };

    const EventTypeLocal = inputs.locationType === 'PHYSICAL' ? 'Physical' : inputs.locationType === 'Physical' ? 'Physical' : 'Virtual';

    const handleChange = (event) => {
        if (event.target.name === 'address') {
            setAddressState(!addressState);
            error === 'address' && setError('');
            setInputs((prevState) => ({ ...prevState, ['address']: '' }));
        } else {
            setStartEndDateCheck(!startEndDateCheck);
            setAllDay(false);
            setInputs((prevState) => ({ ...prevState, ['startDate']: null, ['endDate']: null, ['startTime']: null, ['endTime']: null }));
            error === 'startTime' && setError('');
            error === 'endTime' && setError('');
        }
    };

    const handleChangeButtons = (e) => {
        setButtons((prevState) => ({ ...prevState, [e.target.name]: e.target.value ? e.target.value : undefined }));
        e.target.name === error && setError('');
    };

    const handleSelectInput = (e, name) => {
        setInputs((prevState) => ({ ...prevState, [name]: e }));
        name === error && setError('');
        error === 'text' && setError('');
        // name !== 'description' && addressState === true && setAddressState(false);
    };

    const handleAdd = (i) => {
        setIndex(i);
    };

    return (
        <div className="scrollbar" id="style-3">
            <div className="force-overflow">
                <BoxShadowSection
                    edit={edit}
                    eventInfo={eventInfo}
                    classes={classes}
                    img={SVGNames.InformationFill}
                    title={'Basic Info'}
                    text={'Provide some basic event info to let attendees know when and where to go for their next event'}
                    content={
                        <InfoInputs
                            handleChangeInputs={handleChangeInputs}
                            handleSelectInput={handleSelectInput}
                            handleChange={handleChange}
                            handleAllDay={handleAllDay}
                            handleChangeTags={handleChangeTags}
                            handleChangeCategories={handleChangeCategories}
                            classes={classes}
                            eventInfo={eventInfo}
                            inputs={inputs}
                            error={error}
                            EventTypeLocal={EventTypeLocal}
                            timeZoneInfo={timeZoneInfo}
                            setError={setError}
                            addressState={addressState}
                            startEndDateCheck={startEndDateCheck}
                            allDay={allDay}
                            selectedTag={selectedTag}
                            tags={tags}
                            categories={categories}
                            selectedCategories={selectedCategories}
                            backError={backError}
                        />
                    }
                />
                <div
                    style={
                        !eventInfo
                            ? {
                                  boxShadow: '0px 0px 6px #0000001A',
                                  marginBottom: '70px',
                              }
                            : { marginBottom: '70px' }
                    }
                    className={classes.paper}>
                    <UploadImage
                        imgIndex={imgIndex}
                        loaderUpload={false}
                        eventInfo={eventInfo}
                        handleSelectIndex={(i) => handleAdd(i)}
                        error={error}
                        handleClearImg={handleClearImg}
                        handleChange={handleFileChange}
                        imgSrc={img}
                    />
                </div>

                <BoxShadowSection
                    edit={edit}
                    eventInfo={eventInfo}
                    classes={classes}
                    img={SVGNames.DescriptionFill}
                    title={'Description'}
                    text={
                        ' Include any additional information about the event that you might want users to know about (parking, payment info, contact info, important links, etc.).'
                    }
                    content={
                        <div>
                            <div style={error === 'text' ? { border: '1px solid #F07379' } : {}} className={classes.TextEditorStyle}>
                                <ArticleEditor
                                    error={error}
                                    defaultText={inputs.description}
                                    handleChangeText={(ev) => handleSelectInput(ev, 'description')}
                                />
                            </div>
                            {error === 'text' && <ErrMessage text={'Input is not field'} style={{ position: 'relative' }} />}
                        </div>
                    }
                />

                <BoxShadowSection
                    edit={edit}
                    eventInfo={eventInfo}
                    classes={classes}
                    img={SVGNames.SettingsFill}
                    title={'"Call to Action/CTA" Button Settings'}
                    text={'To have CTA buttons in event detail page, please fulfill the below fields in accordance with the buttons.'}
                    content={<Buttons handleChange={handleChangeButtons} inputs={buttons} />}
                />

                <BoxShadowSection
                    edit={edit}
                    eventInfo={eventInfo}
                    classes={classes}
                    img={SVGNames.DescriptionFill}
                    title={'Sponsorship Request'}
                    text={
                        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
                    }
                    content={
                        <div>
                            <Sponsors
                                eventSponsor={eventSponsor}
                                delElement={delElement}
                                handleSendNote={handleSendNote}
                                classes={classes}
                                eventInfo={eventInfo}
                                selectedTag={selectedTag}
                                handleChangeSponsors={handleChangeSponsors}
                                organizationsReserve={organizations}
                                sponsors={sponsors}
                                sponsorsId={sponsorsId}
                            />
                        </div>
                    }
                />

                <div className={edit ? classes.edit : classes.create}>
                    <CreateCancel
                        loading={!!loader.length || !!loaderEdit.length || loaderUpload}
                        handleCreate={(ev) => sendData(ev)}
                        handleCancel={handleClose}
                        Create={eventInfo ? 'Save' : 'Create'}
                        Cancel={'Cancel'}
                    />
                </div>
            </div>
        </div>
    );
};
