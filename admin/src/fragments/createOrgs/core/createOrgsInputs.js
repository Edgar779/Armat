import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Images } from 'theme';
import { useDispatch } from 'react-redux';
import { CreateEventStyle } from './index';
import { AddressInput, CreateCancel, CreateEventInput, ErrMessage, InputTitle } from 'components';
import { httpRequestsOnSuccessActions, organizationActions } from 'store';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { FindLoad, FindSuccess } from 'utils';
import { EmailValidator, WebSiteValidator } from 'constants/index';
import RichTextEditorEdit from '../../createEvent/core/richTextEditorEdit';
import { AvailabilitySchedule } from '../../../components/modal/availabilitySchedule';
import { CategoryItems } from './categoryItems';
import { UploadOrgAvatar } from './uploadAvatar';
import { UploadImage } from '../../createEvent/core';

export const CreateOrgsInputs = ({ eventInfo, handleCloseEdit, orgCategories, handleClose, type }) => {
    const dispatch = useDispatch();
    const classes = CreateEventStyle();
    const [inputs, setInputs] = useState(eventInfo ? { ...eventInfo } : '');
    const [error, setError] = React.useState(false);
    const [img, setImg] = useState(eventInfo && eventInfo.images && eventInfo.images.length ? [...eventInfo.images] : []);
    const [imgPush, setImgPush] = useState([]);
    const [imgIndex, setIndex] = useState(0);
    const [deletedImg, setDeletedImg] = useState([]);
    const [boolInfo, setBoolInfo] = useState(false );
    const [webSiteBool, setWebSiteBool] = useState( false );
    const [loaderUpload, setLoaderUpload] = useState(false);

    const [addressState, setAddressState] = useState(eventInfo ? !eventInfo.address : false);
    const [a, setA] = useState(1);
    const [text, setText] = useState(eventInfo && eventInfo.description ? eventInfo.description : '');
    const [times, setTimes] = useState(eventInfo ? { ...eventInfo.hours } : {});
    const [avatar, setAvatar] = useState(eventInfo ? eventInfo.avatar && eventInfo.avatar : '');
    const [selectedCategs, setSelectedCategs] = useState(eventInfo ? eventInfo.categories && [...eventInfo.categories] : '');
    const [newCategList, setNewCategList] = useState([]);

    useEffect(() => {
        if (eventInfo?.mainImage) {
            setIndex(eventInfo.mainImage);
        }
    }, [eventInfo]);

    const handleClearImg = (key, item) => {
        setIndex(0);
        imgPush.splice(key, 1);
        img.splice(key, 1);
        deletedImg.push(item);
        setA(a + 1);
    };
    const arr = [];
    const [categoryArray, setCategoryArray] = useState([]);

    const getTree = (org) => {
        org.length &&
        org.map((it) => {
            arr.push(it);
            if (it.items) {
                return getTree(it.items);
            }
            setCategoryArray(arr);
        });
    };

    useEffect(() => {
        if (orgCategories.length) {
            getTree(orgCategories);
        }
    }, [orgCategories]);

    const [selected, setSelected] = useState([]);

    function getParent(model, id) {
        let path,
            item = {
                id: model.id,
                text: model.text,
            };
        if (!model || typeof model !== 'object') return;
        if (model.id === id) return [item];
        (model.items || []).some((child) => (path = getParent(child, id)));
        return path && [item, ...path];
    }

    const handleGetTree = async () => {
        const newItems = (await orgCategories.length) && eventInfo.categories.map((h) => orgCategories.map((i) => getParent(i, h.id)));
        const arr = [];
        newItems && newItems.filter((k) => k.map((l) => l !== undefined && arr.push(l)));
        setSelected([...arr]);
    };

    useEffect(() => {
        if (eventInfo.categories) {
            handleGetTree();
        }
    }, [eventInfo]);

    const getBase64 = (file) =>
        new Promise(function(resolve, reject) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject('Error: ', error);
        });

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

    const compareList = function(newList, oldList) {
        if (!newList || newList.length < 1) return;
        if (!oldList || newList.length !== oldList.length) return newList;
        let isDiff = false;
        const newSet = new Set();
        for (let i = 0; i < newList.length; i++) {
            newSet.add(newList[i]);
        }
        for (let i = 0; i < oldList.length; i++) {
            if (!newSet.has(oldList[i].id)) return newList;
        }
        return undefined;
    };

    const sendData = async () => {
        const website = inputs.website
            ? inputs.website.slice(0, 4) === 'www.'
                ? `https://${inputs.website.substring(4)}`
                : inputs.website.slice(0, 5) === 'https'
                    ? inputs.website
                    : inputs.website.slice(0, 4) === 'http'
                        ? inputs.website
                        : `https://${inputs.website}`
            : null;


        const formData = new FormData();
        const endpoint = `/files/uploadMany?includeThumbnail=true`;
        imgPush.length && imgPush.map((i) => formData.append('files', i));
        const uploadedImg =
            imgPush.length && (
                setLoaderUpload(true),
                    await axios
                        .post(endpoint, formData, { auth: true })
                        .then((res) => {
                            setLoaderUpload(false);
                            return res.data;
                        })
                        .catch(() => setLoaderUpload(false)));

        if (inputs.name && inputs.type && boolInfo === false && webSiteBool === false) {
            if (eventInfo) {
                const uploadedArr = uploadedImg ? uploadedImg : [];
                let filteredImages = img.filter((i) => i.thumbUrl);
                const allPhotos = [...filteredImages, ...uploadedArr];
                const eventAvatar = allPhotos.length && +imgIndex !== eventInfo.mainImage ? { mainImage: +imgIndex } : { mainImage: eventInfo?.mainImage };
                const editDate = {
                    hours: times,
                    name: inputs?.name,
                    type: inputs?.type,
                    phoneNumber: inputs?.phoneNumber,
                    email: inputs?.email,
                    address: inputs?.address ? inputs?.address :
                        inputs?.address?.formattedAddress ? inputs?.address?.formattedAddress :
                            null,
                    description: text,
                    website: website,
                    categories: compareList(newCategList, selectedCategs),
                    ...eventAvatar,
                    ...avatar,
                };
                if (uploadedImg) {
                    editDate['imagesToAdd'] = [...uploadedImg];
                }
                if (deletedImg?.length) {
                    editDate['imagesToRemove'] = [...deletedImg];
                }
                alert('xxxx')
                dispatch(organizationActions.editOrg(editDate, eventInfo.id));
            } else {
                const date = {
                    name: inputs?.name,
                    type: inputs?.type,
                    phoneNumber: inputs?.phoneNumber,
                    email: inputs?.email,
                    address: inputs?.address,
                    description: text,
                    categories: newCategList ? [...newCategList] : [],
                    website: website,
                    hours: Object.keys(times).length ? times : undefined,
                    ...avatar,
                };
                if (uploadedImg) {
                    date['mainImage'] = +imgIndex;
                    date['images'] = [...uploadedImg];
                }
                dispatch(organizationActions.createOrg(date));
            }
        } else {
            setError(
                !inputs.type ? 'type' :
                    !inputs.name ? 'name' :
                        '',
            );
        }
    };

    const handleSelectInputDesc = (e, name) => {
        setInputs((prevState) => ({ ...prevState, [name]: e }));
        name === error && setError('');
    };


    const handleSelectInput = (e, name) => {
        setInputs((prevState) => ({ ...prevState, [name]: e }));
        name === error && setError('');
        addressState === true && setAddressState(false);
    };

    const handleChange = (e) => {
        setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
        e.target.name === error && setError('');
    };

    const handleSend = (bool) => {
        setBoolInfo(bool);
    };

    const loader = FindLoad('CREATE_ORGANIZATION');
    const success = FindSuccess('CREATE_ORGANIZATION');
    const loaderEdit = FindLoad('EDIT_ORGANIZATION');
    const successEdit = FindSuccess('EDIT_ORGANIZATION');

    useEffect(() => {
        if (success.length) {
            dispatch(httpRequestsOnSuccessActions.removeSuccess('CREATE_ORGANIZATION'));
            window.location.replace(`/admin/myOrganizations`);
        }
        if (successEdit.length) {
            dispatch(httpRequestsOnSuccessActions.removeSuccess('EDIT_ORGANIZATION'));
            window.location.replace(`/admin/organization/${eventInfo.id}`);
        }
    }, [success, successEdit]);

    const handleGetTimes = (time) => {
        setTimes(time);
    };

    useEffect(() => {
        handleGetTimes(times);
    }, [times]);

    const handleAdd = (i) => {
        setIndex(i);
    };

    return (
        <div style={{ position: 'relative' }} className='scrollbar' id='style-3'>
            <div className='force-overflow'>
                <div style={{ marginBottom: '70px' }}>
                    <div>
                        <div className={classes.basicInfo}>
                            <img src={Images.information} alt={'information'} />
                            <p>Basic Info</p>
                        </div>
                        {/*<p className={classes.basicInfoText}>*/}
                        {/*    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece*/}
                        {/*    of classical Latin literature from 45 BC, making it over 2000 years old.*/}
                        {/*</p>*/}

                        {eventInfo && eventInfo.comment ?
                            <p className={classes.commentText}>{eventInfo.comment}</p> : ''}
                    </div>

                    <div className={classes.inputs}>

                        <div className={classes.wrapType}>
                            <p className={classes.typeTitle}>*Type</p>
                            <div style={error === 'type' ? { border: '0.5px solid rgb(240, 115, 121)' } : {}}
                                 className={classes.typeWrapper}>
                                <RadioGroup
                                    className={classes.type}
                                    aria-label='gender' name='type' onChange={(ev) => handleChange(ev)}>
                                    <FormControlLabel
                                        disabled={eventInfo && true}
                                        checked={inputs.type === 'BUSINESS'} value={'BUSINESS'}
                                        control={<Radio color='primary' />} label='Business' />
                                    <FormControlLabel disabled={eventInfo && true}
                                                      checked={inputs.type === 'NON_PROFIT'} value={'NON_PROFIT'}
                                                      control={<Radio color='primary' />} label='Nonprofit' />
                                </RadioGroup>
                            </div>
                        </div>


                        <div className={classes.firsSection}>
                            <CreateEventInput
                                tittleDis={inputs.name && inputs.name.length}
                                right={16}
                                placeholder={'Name*'}
                                name={'name'}
                                type={'text'}
                                max={80}
                                value={inputs.name}
                                text={'Name*'}
                                error={error === 'name'}
                                handleChange={handleChange}
                            />

                            <div className={classes.titleAndInput}>
                                <InputTitle text={'Location'} />
                                <AddressInput
                                    placeText={' '}
                                    setError={() => error === 'address' && setError('')}
                                    error={error === 'address'}
                                    Value={
                                        eventInfo ? inputs.address && inputs.address.formattedAddress : inputs.address ? inputs.address : ''
                                    }
                                    handleChangeValue={(ev) => handleSelectInput(ev, 'address')}
                                    handleSelectValue={(ev) => handleSelectInput(ev, 'address')}
                                />
                            </div>
                        </div>

                        <div className={classes.EventType} style={{ display: 'flex', width: '100%' }}>
                            <div className={classes.EventLocationSelectInput}>
                                <CreateEventInput
                                    tittleDis={inputs.phoneNumber && inputs.phoneNumber.length}
                                    right={16}
                                    placeholder={'Phone Number'}
                                    name={'phoneNumber'}
                                    type={'number'}
                                    max={80}
                                    value={inputs.phoneNumber}
                                    text={'Phone Number'}
                                    error={error === 'phoneNumber'}
                                    handleChange={handleChange}
                                />
                            </div>
                            <div className={classes.EventLocationSelectInput}>
                                <CreateEventInput
                                    tittleDis={inputs.email && inputs.email.length}
                                    placeholder={'Email'}
                                    name={'email'}
                                    type={'email'}
                                    max={80}
                                    right={16}
                                    sendBoolean={handleSend}
                                    validator={EmailValidator}
                                    value={inputs.email}
                                    text={'Email'}
                                    error={boolInfo ? true : error === 'email'}
                                    handleChange={handleChange}
                                />
                                {boolInfo && <ErrMessage style={{ margin: 0 }} text={'Not Valid Email'} />}
                            </div>
                            <div className={classes.EventTypeSelectInput}>
                                <CreateEventInput
                                    tittleDis={inputs.website && inputs.website.length}
                                    right={16}
                                    sendBoolean={(bool) => setWebSiteBool(bool)}
                                    validator={WebSiteValidator}
                                    placeholder={'Website'}
                                    name={'website'}
                                    value={inputs.website}
                                    text={'Website'}
                                    error={webSiteBool ? true : error === 'website'}
                                    handleChange={handleChange}
                                />
                                {webSiteBool && <ErrMessage style={{ margin: 0 }} text={'Not Valid Website URL'} />}
                            </div>
                        </div>

                        <div className={classes.KeyboardDatePicker}>
                            <CategoryItems
                                eventInfo={eventInfo}
                                selectedIdInfos={selectedCategs}
                                selectedInfo={selected}
                                categories={categoryArray}
                                allCategories={orgCategories}
                                handleGetNewList={(newArr) => setNewCategList(newArr)}
                            />
                        </div>


                    </div>
                </div>

                <div style={{ marginBottom: '70px' }}>
                    <div className={classes.basicInfo}>
                        <img src={Images.information} alt={'information'} />
                        <p>Upload a Logo</p>
                    </div>
                    <p className={classes.basicInfoText}>
                        The logo is displayed in may areas throughout Armat.org and let’s users visually identify the
                        organization.
                        Try uploading a high resolution logo that is small in size.
                    </p>
                    <div>
                        <UploadOrgAvatar getAvatar={(img) => setAvatar(img)} avatar={avatar} orgInfo={eventInfo} />
                    </div>
                </div>


                <div>
                    <UploadImage
                        text={'Organization Images'}
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
                <div style={{ padding: '0 0 40px 0' }}>
                    <RichTextEditorEdit
                        type={'org'}
                        text={text}
                        onChange={(ev) => setText(ev)}
                    />
                </div>
                {error === 'text' && <ErrMessage text={'Input is not field'} />}

                <div>
                    <div className={classes.basicInfo}>
                        <img src={Images.hoursIcon} alt={'information'} />
                        <p>Hours of Operation</p>
                    </div>

                    {eventInfo && eventInfo.comment ?
                        <p className={classes.commentText}>{eventInfo.comment}</p> : ''}
                </div>

                <AvailabilitySchedule
                    onModel={'Client'}
                    handleGetTimes={handleGetTimes}
                    availabilityData={eventInfo ? { ...eventInfo.hours } : ''}
                    // handleClose={handleOpenClose}
                />

                <div style={{ marginTop: '40px' }}>
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