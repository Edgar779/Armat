import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { CategoryItems, CreateEventStyle } from './core';
import { AddressInput, CreateCancel, CreateEventInput, ErrMessage, Icon, InputTitle } from 'components';
import { EmailValidator, SVGNames } from 'constants/index';
import { httpRequestsOnSuccessActions, organizationActions } from 'store';
import { Colors, FindLoad, FindSuccess } from 'utils';
import ArticleEditor from './core/richTextEditor';
import { AvailabilitySchedule } from '../../../components/modals/availabilitySchedule';
import { BoxShadowSection, UploadImage } from '../../eventsFragments/createEvent/core';
import { UploadAvatar, UploadOrgAvatar } from './core/uploadAvatar';
import { WebSiteValidator } from '../../../constants/validations';
import InputMask from 'react-input-mask';

export const CreateOrganizationsInputs = ({ eventInfo, managerInfo, orgCategories, type, orgType }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const classes = CreateEventStyle();
    const loader = FindLoad('CREATE_ORGANIZATION');
    const success = FindSuccess('CREATE_ORGANIZATION');
    const loaderEdit = FindLoad('EDIT_ORGANIZATION');
    const successEdit = FindSuccess('EDIT_ORGANIZATION');
    const [inputs, setInputs] = useState(eventInfo ? { ...eventInfo } : '');
    const [error, setError] = useState(false);
    const [img, setImg] = useState(eventInfo?.images?.length > 0 ? [...eventInfo.images] : []);
    const [imgPush, setImgPush] = useState([]);
    const [imgIndex, setIndex] = useState(0);
    const [deletedImg, setDeletedImg] = useState([]);
    const [boolInfo, setBoolInfo] = useState(eventInfo ? false : '');
    const [webSiteBool, setWebSiteBool] = useState(eventInfo ? false : '');
    const [loaderUpload, setLoaderUpload] = useState(false);
    const [addressState, setAddressState] = useState(eventInfo ? !eventInfo.address : false);
    const [times, setTimes] = useState(eventInfo ? { ...eventInfo.hours } : {});
    const [avatar, setAvatar] = useState(eventInfo ? eventInfo.avatar && eventInfo.avatar : '');
    const [selectedCategs, setSelectedCategs] = useState(eventInfo ? eventInfo.categories && [...eventInfo.categories] : '');
    const [editedTime, setEditedTime] = useState('');
    const [newCategList, setNewCategList] = useState([]);
    const arr = [];
    const [categoryArray, setCategoryArray] = useState([]);

    useEffect(() => {
        if (eventInfo?.mainImage) {
            setIndex(eventInfo.mainImage);
        }
    }, [eventInfo]);

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
        if (orgCategories?.length) {
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
        if (eventInfo?.categories) {
            handleGetTree();
        }
    }, [eventInfo]);

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

    const compareList = function (newList, oldList) {
        if (!newList || newList.length < 1) return;
        if (!oldList || newList.length !== oldList.length) return newList;
        let isDiff = false;
        //create a set of ids from the new list
        const newSet = new Set();
        for (let i = 0; i < newList.length; i++) {
            newSet.add(newList[i]);
        }
        //compare the old list ot new list
        for (let i = 0; i < oldList.length; i++) {
            if (!newSet.has(oldList[i].id)) return newList;
        }
        return undefined;
    };

    const [hasChangedDesc, setHasChangedDesc] = useState(false);

    const handleSelectInputDesc = (e, name) => {
        setHasChangedDesc(true);
        setInputs((prevState) => ({ ...prevState, [name]: e }));
        name === error && setError('');
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
            imgPush.length &&
            (setLoaderUpload(true),
            await axios
                .post(endpoint, formData, { auth: true })
                .then((res) => {
                    setLoaderUpload(false);
                    return res.data;
                })
                .catch(() => setLoaderUpload(false)));

        // const deletedImages = deletedImg.length ? { imagesToRemove: [...deletedImg] } : '';
        const uploadedArr = uploadedImg ? uploadedImg : [];
        let filteredImages = img.filter((i) => i.thumbUrl);
        const allPhotos = [...filteredImages, ...uploadedArr];
        const eventAvatar =
            allPhotos.length && +imgIndex !== eventInfo?.mainImage ? { mainImage: +imgIndex } : { mainImage: eventInfo?.mainImage };

        const date = {
            name: inputs.name,
            type: orgType === 'Nonprofit' ? 'NON_PROFIT' : 'BUSINESS',
            phoneNumber: inputs?.phoneNumber ? parseInt(inputs?.phoneNumber.replace(/[^0-9]/g, '')) : '',
            email: inputs.email,
            address: inputs.address,
            description: inputs.description,
            categories: newCategList ? [...newCategList] : [],
            hours: Object.keys(times).length ? times : undefined,
            ...avatar,
        };

        uploadedImg ? (date['mainImage'] = +imgIndex) : '';
        uploadedImg ? (date['images'] = [...uploadedImg]) : '';
        const editSuggest = {};
        if (!Array.isArray(eventInfo) && !managerInfo) {
            eventInfo?.name !== inputs?.name ? (editSuggest['name'] = inputs.name) : '';
            eventInfo?.address?.formattedAddress !==
            (typeof inputs?.address === 'object' ? inputs?.address?.formattedAddress : inputs?.address)
                ? (editSuggest['address'] = inputs.address)
                : '';
            hasChangedDesc ? (editSuggest['description'] = inputs.description) : '';
            eventInfo?.phoneNumber !== parseInt(inputs?.phoneNumber.replace(/[^0-9]/g, '')) &&
            eventInfo?.phoneNumber !== inputs?.phoneNumber
                ? (editSuggest['phoneNumber'] = parseInt(inputs?.phoneNumber.replace(/[^0-9]/g, '')))
                : '';
            eventInfo?.website !== inputs?.website ? (editSuggest['website'] = website) : '';
            eventInfo?.email !== inputs?.email ? (editSuggest['email'] = inputs.email) : '';
            compareList(newCategList, selectedCategs) !== undefined
                ? (editSuggest['categories'] = compareList(newCategList, selectedCategs))
                : '';
            imgPush.length ? (editSuggest['imagesToAdd'] = [...imgPush]) : '';
            deletedImg.length ? (editSuggest['imagesToRemove'] = [...deletedImg]) : '';
            avatar?.changeAvatar ? (editSuggest['changeAvatar'] = { ...avatar.changeAvatar }) : '';
            avatar?.removeAvatar ? (editSuggest['removeAvatar'] = true) : '';
            eventAvatar?.mainImage?.url !== inputs?.mainImage?.url ? (editSuggest['mainImage'] = { ...inputs.mainImage }) : '';
            editedTime ? (editSuggest['hours'] = editedTime) : '';
            dispatch(organizationActions.editOrg(editSuggest, eventInfo.id));
        } else {
            if (inputs.name && boolInfo === false && webSiteBool === false) {
                if (!Array.isArray(eventInfo)) {
                    const editDate = {
                        hours: times,
                        name: inputs.name,
                        type: orgType === 'Nonprofit' ? 'NON_PROFIT' : 'BUSINESS',
                        phoneNumber: parseInt(inputs?.phoneNumber?.replace(/[^0-9]/g, '')),
                        email: inputs.email,
                        address: inputs?.address?.formattedAddress
                            ? inputs?.address?.formattedAddress
                            : inputs?.address
                            ? inputs?.address
                            : null,
                        description: inputs.description,
                        website: website,
                        categories: compareList(newCategList, selectedCategs),
                        ...eventAvatar,
                        ...avatar,
                    };
                    uploadedImg ? (editDate['imagesToAdd'] = [...uploadedImg]) : '';
                    deletedImg?.length ? (editDate['imagesToRemove'] = [...deletedImg]) : '';
                    dispatch(organizationActions.editOrg(editDate, eventInfo.id));
                } else {
                    dispatch(organizationActions.createOrg(date));
                }
            } else {
                setError(!inputs.name ? 'name' : '');
            }
        }
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

    useEffect(() => {
        if (success.length) {
            const routeType = inputs?.type === 'BUSINESS' ? '/business' : '/nonProfit';
            dispatch(httpRequestsOnSuccessActions.removeSuccess('CREATE_ORGANIZATION'));
            router.push(routeType);
        }
        if (successEdit.length) {
            dispatch(httpRequestsOnSuccessActions.removeSuccess('EDIT_ORGANIZATION'));
            router.push(`/singleOrganization?orgid=${eventInfo.id}`);
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
        <div className="scrollbar" id="style-3">
            <div className="force-overflow">
                <div style={{ boxShadow: '0px 0px 6px #0000001A', marginBottom: '70px' }} className={classes.paper}>
                    <div>
                        <div className={classes.basicInfo}>
                            <Icon
                                name={SVGNames.InformationFill}
                                color={Colors.ThemeGreen}
                                style={{ marginRight: '19px' }}
                                width={'30px'}
                                height={'23px'}
                            />
                            <p>Basic Info</p>
                        </div>
                        {eventInfo && eventInfo.comment ? <p className={classes.commentText}>{eventInfo.comment}</p> : ''}
                    </div>
                    <div className={classes.inputs}>
                        <div className={classes.firsSection}>
                            <CreateEventInput
                                tittleDis={inputs.name && inputs.name.length}
                                right={16}
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
                                <div style={{ width: '100%', marginRight: 16, height: '88px' }}>
                                    <InputTitle text={'Phone Number'} />
                                    <InputMask mask="(999) 999-9999" value={inputs.phoneNumber} onChange={handleChange}>
                                        {() => (
                                            <TextField
                                                className={classes.phoneNumberMask}
                                                style={{ width: '100%' }}
                                                variant={'outlined'}
                                                // label="Phone Number"
                                                name={'phoneNumber'}
                                                // className={info ? globalStyles.inputTextFieldBlue : globalWrappers.inputStyle}
                                                error={error === 'phoneNumber'}
                                            />
                                        )}
                                    </InputMask>
                                </div>
                            </div>
                            <div className={classes.EventLocationSelectInput}>
                                <CreateEventInput
                                    tittleDis={inputs.email && inputs.email.length}
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

                {type !== 'Suggest Edits' && (
                    <BoxShadowSection
                        eventInfo={eventInfo}
                        classes={classes}
                        img={SVGNames.UploadIcon}
                        title={'Upload a Logo'}
                        text={
                            'The logo is displayed in may areas throughout Armat.org and let’s users visually identify the organization.' +
                            ' Try uploading a high resolution logo that is small in size.'
                        }
                        content={
                            <div>
                                <UploadOrgAvatar getAvatar={(img) => setAvatar(img)} avatar={avatar} orgInfo={eventInfo} />
                            </div>
                        }
                    />
                )}

                {type !== 'Suggest Edits' && (
                    <div style={{ boxShadow: '0px 0px 6px #0000001A', marginBottom: '70px' }} className={classes.paper}>
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
                )}

                <BoxShadowSection
                    eventInfo={eventInfo}
                    classes={classes}
                    img={SVGNames.DescriptionFill}
                    title={'Description'}
                    text={' Include any additional information about the organization that you might want users to know about.'}
                    content={
                        <>
                            <div className={classes.TextEditorStyle}>
                                <ArticleEditor
                                    error={error}
                                    defaultText={inputs.description}
                                    handleChangeText={(ev) => handleSelectInputDesc(ev, 'description')}
                                />
                            </div>
                            {error === 'text' && <ErrMessage text={'Input is not field'} />}
                        </>
                    }
                />

                <BoxShadowSection
                    eventInfo={eventInfo}
                    classes={classes}
                    img={SVGNames.HoursIcon}
                    title={'Hours of Operation'}
                    text={''}
                    content={
                        <>
                            <AvailabilitySchedule
                                handleGetEditTimes={(t) => setEditedTime(t)}
                                eventInfo={eventInfo}
                                onModel={'Client'}
                                handleGetTimes={handleGetTimes}
                                availabilityData={eventInfo ? { ...eventInfo.hours } : ''}
                                // handleClose={handleOpenClose}
                            />
                        </>
                    }
                />

                {!managerInfo && (
                    <div style={{ boxShadow: '0px 0px 6px #0000001A', marginBottom: '70px' }} className={classes.paperDisclamer}>
                        <div className={classes.disclaimer}>
                            <Icon name={SVGNames.DiscliamerIcon} style={{ marginRight: '8px' }} width={'30px'} height={'23px'} />
                            <p>Disclaimer</p>
                        </div>
                        <p className={classes.subTitle}>
                            Kindly be noted that the phone number & email address mentioned in your profile will be used to reach out to you
                            in case of necessities. You may check our{' '}
                            <span style={{ color: Colors.ThemeGreen }} onClick={() => router.push('/privacyPolicy')}>
                                Privacy Policy
                            </span>{' '}
                            for more details.
                        </p>
                    </div>
                )}
                <div>
                    <CreateCancel
                        loading={!!loader.length || !!loaderEdit.length || loaderUpload}
                        handleCreate={(ev) => sendData(ev)}
                        Create={eventInfo ? 'Save' : 'Submit'}
                        Cancel={'Cancel'}
                        handleCancel={() => router.push('/nonProfit')}
                    />
                </div>
            </div>
        </div>
    );
};
