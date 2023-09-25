import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import axios from "axios";
import { EventsActions, httpRequestsOnSuccessActions, organizationActions, organizerActions } from "store";
import {CreateEventStyle} from './styles';
import { CreateCancel, ErrMessage, InputTitle } from "components";
import {UploadImage} from './uploadImage';
import {Images} from 'theme';
import {RichInput} from './richTextEditor';
import RichTextEditorEdit from './richTextEditorEdit';
import {timeZoneList} from './timeZone';
import {Buttons} from "./buttons";
import {Sponsors} from "./sponsors";
import {InfoInputs} from "./infoInputs";
import { FindLoad, FindSuccess } from "utils";
import { FindErrorItem } from "../../../utils/findError";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { inputsStyle } from "../../../components/inputs/styles";

export const CreateEventInputs = ({handleClose, eventInfo, eventSponsor, organizationsReserve}) => {
    const router = useParams();
    const dispatch = useDispatch();
    const classes = CreateEventStyle();
    const inputStyles = inputsStyle();
    const [inputs, setInputs] = useState(eventInfo ? {...eventInfo} : '');
    const [buttons, setButtons] = useState(eventInfo ? {...eventInfo.cta} : {});
    const admin = JSON.parse(localStorage.getItem('userInfo'));
    const [selectedCategories, setSelectedCategories] = useState(eventInfo ? (eventInfo.categories ? eventInfo.categories : []) : []);
    const [selectedTag, setSelectedTag] = useState(eventInfo ? (eventInfo.tags ? eventInfo.tags : []) : []);
    const [sponsors, setSponsors] = useState(eventInfo ? (eventInfo.sponsors ? eventInfo.sponsors : []) : []);
    const [error, setError] = React.useState(false);
    const [img, setImg] = useState(eventInfo && eventInfo.images && eventInfo.images.length ? [...eventInfo.images] : []);
    const [imgPush, setImgPush] = useState([]);
    const [imgIndex, setIndex] = useState(0);
    const [deletedImg, setDeletedImg] = useState([]);
    const [loaderUpload, setLoaderUpload] = useState(false);
    const [addressState, setAddressState] = useState(eventInfo ? !eventInfo.address : false);
    const [startEndDateCheck, setStartEndDateCheck] = useState(eventInfo ? eventInfo.tbd : false);
    const [allDay, setAllDay] = useState(eventInfo ? eventInfo.allDay : false);
    const [sponsorsId, setSponsorsId] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const loader = FindLoad('CREATE_EVENTS');
    const backError = FindErrorItem(eventInfo ? 'EDIT_EVENTS' : 'CREATE_EVENTS');
    const loaderEdit = FindLoad('EDIT_EVENTS');
    const timeZoneInfo = eventInfo ? timeZoneList.filter((i) => i.value === inputs.timezoneOffset) : '';
    const orgIds = organizationsReserve?.filter((i) => i?.creator?.email === admin?.email)
    const EventTypeLocal = inputs.locationType === 'PHYSICAL' ? 'Physical' : inputs.locationType === 'Physical' ? 'Physical' : 'Online';

    useEffect(() => {
        if(eventInfo){
            const newInputs = { ...inputs }
            newInputs.org = inputs?.org?.id
            setInputs(newInputs)
        }
    },[eventInfo])

    useEffect(() => {
            dispatch(organizationActions.getOrg('ALL', false))
            dispatch(organizerActions.getOrgCat())
    }, [])

    useEffect(() => {
        if (eventInfo?.eventImage) {
            setIndex(eventInfo.eventImage);
        }
    }, [eventInfo]);

    useEffect(() => {
        if (eventInfo) {
            const newList = organizationsReserve.filter((a) => eventSponsor.findIndex((u) => u.orgId === a.id) < 0);
            setOrganizations(newList);
        } else {
            setOrganizations(organizationsReserve);
        }
    }, [organizationsReserve, eventSponsor]);

    useEffect(() => {
        if (eventSponsor && eventSponsor.length) {
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

    const {categories, tags} = useSelector((state) => ({
        categories: state.manage.categories,
        tags: state.manage.tags,
    }));

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

    const handleChangeSponsors = (event, values) => {
        const nuwOrganizations = [];
        organizations.filter((i, j) => event.target.value.id !== i.id && nuwOrganizations.push(i));
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

    const [deletedR, setDeleted] = useState([]);

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
        const add = eventInfo ? inputs.address && inputs.address.formattedAddress ? inputs.address.formattedAddress : inputs.address : inputs.address && inputs.address;
        const localType =
            inputs.locationType === 'Physical' ? 'PHYSICAL' :
                inputs.locationType === 'Online' ? 'VIRTUAL' :
                    inputs.locationType === 'PHYSICAL' ? 'PHYSICAL' :
                        inputs.locationType === 'VIRTUAL' ? 'VIRTUAL' : '';

        const stDateBool =
            allDay === false && startEndDateCheck === false
                ? inputs.startDate && inputs.endDate && inputs.startTime && inputs.endTime
                : inputs.startDate && inputs.endDate;

        const addressBool =
            addressState === true
                ? true
                : inputs.locationType !== 'Online' && inputs.locationType !== 'VIRTUAL'
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

        if (inputs.title && inputs.locationType && inputs.timezoneOffset && stDateBool && addressBool && inputs.description && inputs?.org ) {
            const formData = new FormData();
            const endpoint = `/files/uploadMany?includeThumbnail=true`;
            imgPush.length && imgPush.map((i) => formData.append('files', i));
            const uploadedImg =
                imgPush.length &&
                (setLoaderUpload(true),
                    await axios
                        .post(endpoint, formData, {auth: true})
                        .then((res) => {
                            setLoaderUpload(false);
                            return res.data;
                        })
                        .catch(() => setLoaderUpload(false)));

            if (eventInfo) {
                const editImage = uploadedImg && uploadedImg.length ? {imagesToAdd: [...uploadedImg]} : '';
                const uploadedArr = uploadedImg ? uploadedImg : [];
                let filteredImages = img.filter((i) => i.thumbUrl);
                const allPhotos = [...filteredImages, ...uploadedArr];
                const eventAvatar = allPhotos.length && +imgIndex !== eventInfo.eventImage ? { eventImage: +imgIndex } : {eventImage:eventInfo?.eventImage};
                const deletedImages = deletedImg.length ? {imagesToRemove: [...deletedImg]} : '';
                let deletedSponsors = [...new Set(deletedR)];
                const deleted = deletedSponsors.length ? {removeSponsors: deletedSponsors} : '';
                const newList = sponsorsId.filter((a) => eventSponsor.findIndex((u) => u.orgId === a.org) < 0);
                const addedSponsor = newList.length > 0 ? {addSponsors: [...newList]} : ' ';


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
                    cta: {...buttons},
                    accessStatus: eventInfo?.access?.status,
                    org: inputs?.org,
                };

                dispatch(EventsActions.editEvent(editDate, eventInfo.eventId));
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
                    cta: {...buttons},
                    sponsors: [...sponsorsId],
                    accessStatus: "PUBLIC",
                    org: inputs?.org,
                };
                if (uploadedImg) {
                    date['eventImage'] = +imgIndex
                    date['images'] = [...uploadedImg]
                }
                dispatch(EventsActions.createEvent(date));
            }
        } else {
            setError(
                !inputs.title ? 'title' :
                  !inputs.locationType ? 'locationType' :
                    !inputs.timezoneOffset ? 'timezoneOffset' :
                      !inputs.startDate ? 'startDate' : !inputs.endDate
                                ? 'endDate'
                                : startEndDateCheck === false && allDay === false && !inputs.startTime
                                    ? 'startTime'
                                    : startEndDateCheck === false && allDay === false && !inputs.endTime
                                        ? 'endTime'
                                        : inputs.locationType !== 'Online' && inputs.locationType !== 'VIRTUAL' && addressState === false && !inputs.address
                                            ? 'address' :
                                !inputs.description ? 'text' :
                                !inputs?.org ? 'org' : ''
            );
        }
    };

    const handleChangeInputs = (e) => {
        if (e.target.name === 'startDate') {
            setInputs((prevState) => ({...prevState, 'startDate': e.target.value}));
            !inputs.endDate && setInputs((prevState) => ({...prevState, 'endDate': e.target.value}));
        } else {
            if (
                e.target.name === 'startTime'
                // || 'endTime'
            ) {
                setAllDay(false);
            }

            setInputs((prevState) => ({...prevState, [e.target.name]: e.target.value}));
        }
        e.target.name === error && setError('');
    };

    const handleAllDay = () => {
        setAllDay(!allDay);
        setStartEndDateCheck(false);
        setInputs((prevState) => ({...prevState, 'startTime': null}));
        setInputs((prevState) => ({...prevState, 'endTime': null}));
        error === 'startTime' && setError('');
        error === 'endTime' && setError('');
    };



    const handleChange = (event) => {
        if (event.target.name === 'address') {
            setAddressState(!addressState);
            error === 'address' && setError('');
            setInputs((prevState) => ({...prevState, 'address': ''}));
        } else {
            setStartEndDateCheck(!startEndDateCheck);
            setAllDay(false);
            setInputs((prevState) => ({...prevState, 'startTime': null}));
            setInputs((prevState) => ({...prevState, 'endTime': null}));
            error === 'startTime' && setError('');
            error === 'endTime' && setError('');
        }
    };

    const handleChangeOrg = (e) => {
        if(error === 'org'){
            setError('')
        }
        setInputs((prevState) => ({...prevState, [e.target.name]: e.target.value}));
    };

    const handleChangeButtons = (e) => {
        setButtons((prevState) => ({...prevState, [e.target.name]: e.target.value}));
        e.target.name === error && setError('');
    };

    const handleSelectInput = (e, name) => {
        setInputs((prevState) => ({...prevState, [name]: e}));
        name === error && setError('');
        // name !== 'description' && addressState === true && setAddressState(false);
    };

    const success = FindSuccess('CREATE_EVENTS');
    const successEdit = FindSuccess('EDIT_EVENTS');

    useEffect(() => {
        if (success.length) {
            dispatch(httpRequestsOnSuccessActions.removeSuccess('CREATE_EVENTS'));
            router.push('/myEvents');
        }
    }, [success]);

    useEffect(() => {
        if (successEdit.length) {
            dispatch(httpRequestsOnSuccessActions.removeSuccess('EDIT_EVENTS'));
            handleClose();
        }
    }, [successEdit]);

    const disableLabels = false
    const handleAdd = (i) => {
        setIndex(i);
    };

    return (
        <div style={{position: 'relative'}} className='scrollbar' id='style-3'>
            <div className='force-overflow'>
                <div style={{justifyContent: 'space-between'}} className={classes.basicInfo}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={Images.information} alt={'information'}/>
                        <p>Basic Info</p>
                    </div>
                    {/*{eventInfo && disableLabels === true && (*/}
                    {/*    <Button onClick={() => setDisableLabels(false)} className={classes.editButton}>*/}
                    {/*        <div>*/}
                    {/*            <EditIcon style={{color: '#387DFF', marginTop: '5px'}}/>*/}
                    {/*        </div>*/}
                    {/*        <p>Edit</p>*/}
                    {/*    </Button>*/}
                    {/*)}*/}
                </div>
                <p className={classes.basicInfoText}>
                    Provide some basic event info to let attendees know when and where to go for their next event

                </p>
                {eventInfo && eventInfo.comment ?
                    <p className={classes.commentText}>
                        {eventInfo.comment}
                    </p>
                    : ''
                }
                <div className={classes.inputs}>
                    <InfoInputs
                        backError={backError}
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
                    />
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

                    {eventInfo ?
                        <div style={{padding: '0 0 40px 0'}}>
                            <RichTextEditorEdit
                                text={inputs.description}
                                onChange={(ev) => handleSelectInput(ev, 'description')}
                            />
                        </div>
                        :
                        <RichInput
                            disableLabels={disableLabels}
                            text={inputs.description}
                            onChange={(ev) => handleSelectInput(ev, 'description')}
                        />
                    }

                    <div style={{marginTop: '90px'}}>
                        <Buttons handleChange={handleChangeButtons} inputs={buttons}/>
                    </div>

                    <div style={{marginTop: '80px'}}>
                        <div style={{justifyContent: 'space-between'}} className={classes.basicInfo}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <img src={Images.sponsor} alt={'information'}/>
                                <p> Sponsorship Request</p>
                            </div>
                        </div>
                        <p className={classes.basicInfoText}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC.
                        </p>
                        <Sponsors
                            eventSponsor={eventSponsor}
                            delElement={delElement}
                            handleSendNote={handleSendNote}
                            eventInfo={eventInfo}
                            selectedTag={selectedTag}
                            handleChangeSponsors={handleChangeSponsors}
                            organizationsReserve={organizationsReserve}
                            sponsors={sponsors}
                            sponsorsId={sponsorsId}
                        />
                    </div>

                    <div className={classes.eventOrg}>
                        <div className={classes.titleAndInput}>
                            <InputTitle text={'Organization*'} />


                            <div style={{ width: '100%' }} className={ inputStyles.selectInputStyle}>
                                <FormControl variant="outlined" className={inputStyles.formControl}>
                                    <Select
                                      style={ error === 'org' ? {borderColor:'red'} : {}}
                                      labelId="demo-simple-select-outlined-label"
                                      id="demo-simple-select-outlined"
                                      defaultValue={inputs?.org?.id}
                                      value={ inputs?.org }
                                      onChange={handleChangeOrg}
                                      label="Age"
                                      name={'org'}
                                    >
                                        {orgIds?.length &&
                                          orgIds?.map((i, item) => (
                                            <MenuItem key={item} value={i?.id}>
                                                {i?.name}
                                            </MenuItem>
                                          ))}
                                    </Select>
                                </FormControl>
                                {error === 'org' &&
                                  <div style={{ marginTop: '5px', width: '100%' }}>
                                      <ErrMessage text={'Input is not field'} />
                                  </div>
                                }
                            </div>
                        </div>
                    </div>

                    <>
                        {error !== 'org' &&
                          <div style={{ marginTop: '5px', position: 'absolute', width: '100%' }}>
                              <ErrMessage
                                text={backError?.error === 'End Date is less than start date' || error ? 'Input is not field' : ''} />
                          </div>
                        }
                        <div style={{padding: '45px 0 40px 0'}}>

                            <CreateCancel
                                loading={loader || loaderEdit || loaderUpload}
                                handleCreate={sendData}
                                handleCancel={handleClose}
                                Create={eventInfo ? 'Save' : 'Create'}
                                Cancel={'Cancel'}
                            />
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
};
