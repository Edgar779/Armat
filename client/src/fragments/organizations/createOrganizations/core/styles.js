import { makeStyles } from '@material-ui/core/styles';
import { Colors } from 'utils';

export const CreateEventStyle = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: '5',
    },

    modalPaper: {
        height: '90vh',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '20px',
        outline: 'none',
        overflow: 'auto',
        '@media (min-width: 320px)': {
            width: '95%',
        },
        '@media (min-width: 768px)': {
            width: '75%',
        },
        '@media (min-width: 1240px)': {
            width: '65%',
        },
    },

    paper: {
        padding: '40px 48px',
        height: 'auto',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '20px',

        '@media (min-width: 320px)': {
            padding: '30px 16px',
        },
        '@media (min-width: 768px)': {
            padding: '40px 32px',
        },
        '@media (min-width: 1240px)': {
            padding: '50px 100px',
        },
        '@media (min-width: 1920px)': {
            padding: '64px 146px',
        },
    },

    treeView: {
        '& .k-in': {
            cursor: 'pointer',
            fontWeight: 'bold',
        },
    },

    categoryItemWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },

    basicInfo: {
        display: 'flex',
        alignItems: 'center',
        '& img': {
            width: '23px',
            height: '23px',
            marginRight: '15px',
        },
        '& p': {
            fontWeight: '600',
            lineHeight: '30px',
            color: Colors.ThemeBlack,
            '@media (min-width: 320px)': {
                fontSize: '16px',
                margin: 0,
            },
            '@media (min-width: 768px)': {
                fontSize: '20px',
            },
            '@media (min-width: 1240px)': {
                fontSize: '20px',
            },
        },
    },

    basicInfoText: {
        marginTop: '7px',
        fontSize: '16px',
        fontWeight: 'normal',
        color: Colors.ThemeLightGray,

        '@media (min-width: 320px)': {
            fontSize: '14px',
            lineHeight: '25px',
        },
        '@media (min-width: 768px)': {
            fontSize: '16px',
            lineHeight: '30px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '16px',
            lineHeight: '30px',
        },
    },

    inputs: {
        marginTop: '30px',
    },

    firsSection: {
        display: 'flex',
        flexDirection: 'row',
        '@media (max-width: 1279px)': {
            flexDirection: 'column',
        },
    },

    titleAndInput: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginBottom: '4px',
    },

    DateInput: {
        height: '58px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '0.5px solid #387DFF',
        borderRadius: '28px',
        width: '100%',
        marginRight: '1px',
        marginBottom: 0,
        '@media (min-width: 768px)': {
            marginTop: '30px',
        },
        '@media (min-width: 1280px)': {
            marginTop: '0',
        },

        '& .MuiInput-underline:before': {
            borderBottom: 'none',
        },
        '& .MuiInput-underline:hover': {
            borderBottom: 'none',
        },
        '& .MuiInput-underline:after': {
            borderBottom: 'none',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: 'none',
        },
        '& .MuiSvgIcon-root': {
            color: Colors.ThemeGreen,
            marginRight: '10px',
        },
        '& .MuiInputLabel-animated': {
            background: 'white',
            marginLeft: '18px',
            padding: '0 8px',
            fontSize: '18px',
            color: '#545F7EB3',
            marginTop: '-7px',
        },

        '& .MuiInputBase-input': {
            marginLeft: '24px',
            fontSize: '16px',
            color: '#545F7E',
        },

        '& .MuiFormHelperText-root.Mui-error': {
            display: 'none',
        },
        '& .MuiFormLabel-root.Mui-error': {
            fontSize: '16px',
            color: '#545F7EB3',
            marginLeft: '17px',
            marginTop: '-2px',
        },
    },

    dragDrop: {
        width: '100%',
        border: '3px dashed #387DFF80',
        borderRadius: '12px',
        marginTop: '30px',

        '@media (min-width: 320px)': {
            height: '150px',
        },
        '@media (min-width: 768px)': {
            height: '230px',
        },
        '@media (min-width: 1240px)': {
            height: '324px',
        },
    },

    dragDropErr: {
        width: '100%',
        border: '3px dashed #F07379',
        borderRadius: '12px',
        marginTop: '30px',

        '@media (min-width: 320px)': {
            height: '150px',
        },
        '@media (min-width: 768px)': {
            height: '230px',
        },
        '@media (min-width: 1240px)': {
            height: '324px',
        },
    },

    dragDropImage: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '32px',
        width: '100%',
        border: '3px dashed #49B77680',
        borderRadius: '12px',
        marginTop: '40px',
        height: 'auto',
        '@media (min-width: 320px)': {
            minHeight: '150px',
            padding: '16px 22px',
        },
        '@media (min-width: 768px)': {
            minHeight: '230px',
            padding: '32px',
        },
        '@media (min-width: 1240px)': {
            minHeight: '324px',
        },
        '@media (min-width: 1919px)': {
            minHeight: '374px',
        },
    },

    dragDropBody: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '32px',

        '@media (min-width: 320px)': {
            // paddingTop: '25px',
            '& img': {
                width: '32px',
                height: '32px',
            },
        },

        '@media (min-width: 768px)': {
            // paddingTop: '40px',
            '& img': {
                width: '60px',
                height: '55px',
            },
        },
        '@media (min-width: 1240px)': {
            // paddingTop: '107px',
            '& img': {
                width: '60px',
                height: '55px',
            },
        },
    },

    dragDropBodyDrag: {
        fontSize: '20px',
        lineHeight: '30px',
        fontWeight: '600',
        color: '#222222',
        marginTop: '42px',

        '& span': {
            fontSize: '20px',
            lineHeight: '30px',
            fontWeight: 'bold',
            color: Colors.ThemeGreen,
        },

        '@media (min-width: 320px)': {
            fontSize: '14px',
            margin: '0',
            '& span': {
                fontSize: '14px',
            },
        },

        '@media (min-width: 768px)': {
            marginTop: '20px',
            '& span': {
                fontSize: '20px',
            },
            fontSize: '20px',
            // height: '180px',
        },
        '@media (min-width: 1240px)': {
            '& span': {
                fontSize: '20px',
            },
            fontSize: '20px',
            // height: '374px',
        },
    },

    dragDropBodyDragSize: {
        lineHeight: '30px',
        color: '#22222299',
        marginTop: '16px',

        '@media (min-width: 320px)': {
            fontSize: '12px',
            margin: 0,
        },
        '@media (min-width: 768px)': {
            fontSize: '16px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '16px',
        },
    },

    dragDropBodyDragSizeError: {
        fontSize: '16px',
        lineHeight: '30px',
        color: '#F07379',
        marginTop: '16px',
        fontWeight: 'bold',

        '@media (min-width: 320px)': {
            fontSize: '12px',
            margin: 0,
        },
        '@media (min-width: 768px)': {
            fontSize: '16px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '16px',
        },
    },

    CloseButton: {
        minWidth: '30px',
        height: '32px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '24px',
        margin: '8px 8px 0 0',
        border: 'none',
        padding: '4px',
        zIndex: '10',
        cursor: 'pointer',
    },

    CloseButtonContent: {
        display: 'flex',
        justifyContent: 'flex-end',
    },

    TextEditorStyle: {
        marginTop: '30px',
        height: '300px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '0.5px solid #BEBEBE',
        borderRadius: '6px',

        '@media (min-width: 320px)': {
            height: '150px',
        },
        '@media (min-width: 768px)': {
            height: '180px',
        },
        '@media (min-width: 1240px)': {
            height: '300px',
        },

        '& #mui-rte-container': {
            margin: 0,
        },
        '& #mui-rte-toolbar': {
            height: '42px',
            background: '#387DFF1A 0% 0% no-repeat padding-box',
            borderRadius: '6px 6px 0px 0px',
            paddingLeft: '15px',
        },

        '& .MuiIconButton-root': {
            color: '#387DFF',
        },

        '& #mui-rte-editor': {
            overflow: 'auto',
            lineHeight: '30px',
            color: '#545F7EB3',

            '@media (min-width: 320px)': {
                height: '94px',
                margin: '16px',
                fontSize: '14px',
            },
            '@media (min-width: 768px)': {
                height: '138px',
                margin: '16px',
                fontSize: '16px',
            },
            '@media (min-width: 1240px)': {
                height: '194px',
                margin: '32px',
                fontSize: '16px',
            },

            '& div': {
                margin: 0,
            },
        },

        '& .MUIRichTextEditor-placeHolder': {
            fontSize: '16px',
            lineHeight: '22px',
            color: '#545F7EB3',
            margin: '32px',
        },
    },

    locationStyle: {
        width: '100%',
        '& .MuiInputLabel-outlined': {
            marginTop: '-1px',
            marginLeft: '13px',
            fontSize: '16px',
            lineHeight: '22px',
            color: '#545F7EB3',
        },

        '& .MuiSelect-select:focus': {
            background: 'none',
        },

        '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
            background: 'white',
            margin: '-3px auto',
        },

        '& .MuiFormControl-root': {
            width: '100%',
        },

        '& .MuiOutlinedInput-root': {
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            border: '0.5px solid #387DFF',
            borderRadius: '28px',
        },

        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },

        '&:before': {
            borderBottom: 'none',
        },

        '&:hover': {
            borderBottom: 'none',
        },

        '&:after': {
            borderBottom: 'none',
        },

        '& .makeStyles-selectInputStyle-78:hover': {
            borderBottom: 'none',
        },

        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: 'none',
        },

        '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: 'none',
        },

        '& .MuiSelect-select.MuiSelect-select': {
            paddingLeft: '24px',
            fontSize: '16px',
            lineHeight: '22px',
            color: '#545F7EB3',
        },

        '& .MuiSvgIcon-root': {
            marginRight: '19px',
            color: '#387DFF',
        },

        '& .MuiChip-root': {
            color: '#387DFF',
            background: '#387DFF1A 0% 0% no-repeat padding-box',
            borderRadius: '12px',
            height: '24px',
            fontSize: '12px',
            lineHeight: '30px',
        },

        '& .MuiChip-deleteIcon': {
            height: '12px',
            width: '12px',
        },
    },

    //   input[type="file"]:{
    //   display: none;
    // },
    custom: {
        border: 'none',
        display: 'inline-block',
        padding: '6px 6px',
        cursor: 'pointer',
        // font: 'normal normal bold 20px/30px Open Sans',
        color: Colors.ThemeGreen,
        fontWeight: 'bold',

        '@media (min-width: 320px)': {
            fontSize: '14px',
        },
        '@media (min-width: 768px)': {
            fontSize: '20px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '20px',
        },
        '& .fa': {
            display: 'none',
        },
    },

    // .file-preview {
    //   margin: 0 10px;
    // }
    EventTypeSelectInput: {
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 320px)': {
            // marginBottom: '16px',
        },
        '@media (min-width: 768px)': {
            // marginBottom: '30px',
        },
        '@media (min-width: 1240px)': {
            // marginBottom: '30px',
            width: '50%',
        },
    },
    EventLocationSelectInput: {
        '@media (min-width: 320px)': {
            width: '100%',
            marginRight: '0',
        },
        '@media (min-width: 768px)': {
            width: '100%',
            marginRight: '0',
        },
        '@media (min-width: 1240px)': {
            width: '50%',
            marginRight: '16px',
        },
    },

    EventType: {
        display: 'flex',
        width: '100%',
        '@media (min-width: 320px)': {
            flexDirection: 'column',
        },
        '@media (min-width: 768px)': {
            flexDirection: 'column',
        },
        '@media (min-width: 1240px)': {
            flexDirection: 'row',
        },
    },
    selectTag: {
        '@media (min-width: 320px)': {
            // marginTop: '16px',
            width: '100%',
        },
        '@media (min-width: 768px)': {
            // marginTop: '30px',
            width: '100%',
        },
        '@media (min-width: 1240px)': {
            // marginTop: '30px',
            width: '50%',
        },
    },
    selectCategory: {
        '@media (min-width: 320px)': {
            // marginTop: '16px',
            width: '100%',
        },
        '@media (min-width: 768px)': {
            // marginTop: '30px',
            width: '100%',
        },
        '@media (min-width: 1240px)': {
            // marginTop: '30px',
            width: '50%',
            marginLeft: '16px',
        },
    },
    selectTimeZone: {
        '@media (min-width: 320px)': {
            marginTop: '12px',
            width: '100%',
            marginBottom: '10px',
        },
        '@media (min-width: 768px)': {
            marginTop: '30px',
            width: '100%',
            marginBottom: '24px',
        },
        '@media (min-width: 1240px)': {
            marginTop: 0,
            width: '50%',
            marginLeft: '16px',
            marginBottom: '0',
        },
    },
    dateInput: {
        '@media (min-width: 320px)': {
            width: '100%',
        },
        '@media (min-width: 768px)': {
            width: '100%',
        },
        '@media (min-width: 1240px)': {
            width: '50%',
        },
    },

    KeyboardDatePicker: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',

        '@media (min-width: 320px)': {
            flexDirection: 'column',
        },
        '@media (min-width: 768px)': {
            flexDirection: 'column',
        },
        '@media (min-width: 1240px)': {
            flexDirection: 'row',
        },
    },

    dateTimeZone: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        maxWidth: '49%',
        '@media (max-width: 1279px)': {
            flexDirection: 'column',
            maxWidth: '100%',
        },
    },

    ClockInput: {
        '@media (min-width: 320px)': {
            display: 'flex',
            width: '100%',
        },
        '@media (min-width: 768px)': {
            display: 'flex',
        },
        '@media (min-width: 1240px)': {
            marginLeft: '16px',
            marginTop: '-7px',
        },
    },

    createEventImage: {
        borderRadius: '16px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

        '@media (min-width: 320px)': {
            width: '111px',
            height: '111px',
        },
        '@media (min-width: 768px)': {
            width: '248px',
            height: '179px',
        },
        '@media (min-width: 1240px)': {
            width: '270px',
            height: '257px',
        },
        '@media (min-width: 1919px)': {
            width: '312px',
            height: '279px',
        },
    },

    editEventImage: {
        borderRadius: '16px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

        '@media (min-width: 320px)': {
            width: '100px',
            height: '100px',
        },
        '@media (min-width: 768px)': {
            width: '190px',
            height: '190px',
        },
        '@media (min-width: 1240px)': {
            width: '210px',
            height: '210px',
        },
        '@media (min-width: 1919px)': {
            width: '250px',
            height: '250px',
        },
    },

    commentText: {
        marginTop: '15px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#F07379',
    },

    checkClass: {
        marginLeft: '14px',
        '& .MuiSvgIcon-root': {
            color: Colors.ThemeGreen,
        },
        '& .MuiTypography-body1': {
            color: '#545F7EB3',
            fontSize: '14px',
        },
    },

    buttonsStyle: {
        width: '166px',
        height: '58px',
        background: '#387DFF 0% 0% no-repeat padding-box',
        borderRadius: '32px',
        marginLeft: '24px',
        border: 'none',
        color: 'white',
        fontSize: '16px',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        cursor: 'none',
        padding: '0 0 0 16px',
        '@media (min-width: 767px)': {
            fontSize: '13px',
        },
        '@media (min-width: 1279px)': {
            fontSize: '15px',
        },
        '@media (min-width: 1440px)': {
            fontSize: '16px',
        },
        '& svg': {
            marginRight: '8px',
        },

        '@media (max-width: 767px)': {
            width: 'calc(100% - 64px)',
            position: 'absolute',
            marginLeft: 0,
            borderRadius: '32px',
        },
    },
    buttonsStyleClicked: {
        width: '58px',
        height: '58px',
        background: '#387DFF 0% 0% no-repeat padding-box',
        borderRadius: '32px',
        marginLeft: '24px',
        position: 'absolute',
        border: 'none',
        color: 'white',
        fontSize: '16px',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        right: '0',
        cursor: 'none',
        padding: '0 0 0 16px',
        '& svg': {
            marginRight: '8px',
        },
        transition: 'all 0.3s linear',
        '& p': {
            '@media (max-width: 767px)': {
                display: 'none',
            },
            display: 'block',
        },
    },

    buttonsStyleDisabled: {
        width: '166px',
        height: '48px',
        background: '#8aaef3 0% 0% no-repeat padding-box',
        borderRadius: '24px',
        marginLeft: '24px',
        border: 'none',
        color: 'white',
        fontSize: '16px',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        padding: '0 0 0 16px',
        '& svg': {
            marginRight: '8px',
        },
    },

    buttonsWrapper: {
        display: 'flex',
    },

    buttonsWrap: {
        marginTop: '30px',
        position: 'relative',
    },

    leftButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '32px',
        height: '32px',
        background: Colors.ThemeGreen,
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
    },

    rightButton: {
        width: '32px',
        height: '32px',
        background: Colors.ThemeGreen,
        borderRadius: '4px',
        border: 'none',
    },

    selectedImageBorder: {
        border: '2px solid #387DFF',
        borderRadius: '25px',
        padding: '6px',
        marginRight: '32px',

        '@media (min-width: 320px)': {
            width: '127px',
        },
        '@media (min-width: 768px)': {
            width: '264px',
        },
        '@media (min-width: 1240px)': {
            width: '286px',
        },
        '@media (min-width: 1919px)': {
            width: '329px',
        },
    },

    editSelectedImageBorder: {
        border: '2px solid #49B776',
        borderRadius: '25px',
        padding: '6px',
        marginRight: '32px',

        '@media (min-width: 320px)': {
            width: '117px',
        },
        '@media (min-width: 768px)': {
            width: '207px',
        },
        '@media (min-width: 1240px)': {
            width: '227px',
        },
        '@media (min-width: 1919px)': {
            width: '267px',
        },
    },

    mainImage: {
        position: 'absolute',
        width: '111px',
        height: '32px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.ThemeGreen,
        fontSize: '14px',
        fontWeight: 600,
        margin: '8px 0 0 10px',
        '@media (min-width: 320px)': {
            width: '55px',
            height: '20px',
            fontSize: '9px',
            borderRadius: '4px',
            margin: '8px 0 0 6px',
        },
    },
    mainImageEdit: {
        position: 'absolute',
        width: '111px',
        height: '32px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.ThemeGreen,
        fontSize: '14px',
        fontWeight: 600,
        margin: '8px 0 0 10px',
        '@media (min-width: 320px)': {
            width: '72px',
            height: '25px',
            fontSize: '10px',
            borderRadius: '4px',
            margin: '8px 0 0 6px',
        },
    },

    createEventInput: {
        borderRadius: '32px',
        color: '#545F7E',
        height: '58px',
        width: 'auto',
        padding: '0 24px',
        fontSize: '16px',
        marginBottom: '16px',
    },

    phoneNumberMask: {
        '& .MuiOutlinedInput-input': {
            padding: '18.5px 24px !important',
            color: '#222222CC',
            '&:hover fieldset': {
                borderColor: 'red',
            },
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#BEBEBE',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            color: '#545F7E',
            borderRadius: '32px',
            borderColor: '#BEBEBE',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #BEBEBE',
        },
    },

    wrapType: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    },

    typeTitle: {
        fontSize: '18px',
        fontWeight: '600',
        color: Colors.ThemeLightGray,
    },

    type: {
        display: 'flex',
        justifyContent: 'center',
        '& .MuiIconButton-label': {
            color: Colors.ThemeGreen,
        },
        '& .MuiTypography-root': {
            color: Colors.ThemeBlack,
        },
    },

    typeWrapper: {
        display: 'flex',
        height: '56px',
        background: '#F4F4F4 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        width: '100%',
        '@media (min-width: 320px)': {
            maxWidth: '250px',
            padding: '0 16px',
            marginLeft: '16px',
        },
        '@media (min-width: 768px)': {
            maxWidth: '275px',
            padding: '0 24px',
            marginLeft: '24px',
        },
    },

    disclaimer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px',
        '& p': {
            fontSize: '18px',
            fontWeight: 'bold',
            color: Colors.ThemeBlack,
            margin: '0 8px 0 0 ',
        },
    },

    subTitle: {
        margin: 0,
        fontSize: '16px',
        lineHeight: '32px',
        color: Colors.ThemeLightGray,
        '& span': {
            cursor: 'pointer',
            color: Colors.ThemeLightGray,
        },
    },

    paperDisclamer: {
        height: 'auto',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '20px',
        '@media (min-width: 320px)': {
            padding: '16px 24px',
        },
        '@media (min-width: 768px)': {
            padding: '24px 30px',
        },
        '@media (min-width: 1240px)': {
            padding: '24px 30px',
        },
        '@media (min-width: 1920px)': {
            padding: '24px 40px',
        },
    },

    uploadAvatar: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40px',
    },

    items: {
        padding: '13px 24px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#F4F4F4 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        marginTop: '8px',
    },
    removeButtonDesktop: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        color: Colors.ThemeGreen,
        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'block',
        },
    },

    removeButtonMobile: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        color: Colors.ThemeGreen,
        '@media (min-width: 320px)': {
            display: 'block',
        },
        '@media (min-width: 768px)': {
            display: 'none',
        },
    },
    rows: {
        '& p': {
            fontSize: '16px',
            color: Colors.ThemeLightGray,
            '@media (min-width: 320px)': {
                fontSize: '14px',
            },
            '@media (min-width: 768px)': {
                fontSize: '16px',
            },
        },

        '& span': {
            margin: '0 8px',
        },
    },
    ellipsis: {
        textOverflow: 'ellipsis',
        display: 'flex',
        whiteSpace: 'nowrap',
        overflow: 'scroll',
        width: '100%',
        '@media (min-width: 320px)': {
            width: '200px',
        },
        '@media (min-width: 450px)': {
            width: '250px',
        },
        '@media (min-width: 768px)': {
            width: '300px',
        },
        '@media (min-width: 1280px)': {
            width: '900px',
        },
    },
    lastRows: {
        '& p': {
            fontSize: '16px',
            color: Colors.ThemeBlack,
            fontWeight: 'bold',
            '@media (min-width: 320px)': {
                fontSize: '14px',
            },
            '@media (min-width: 768px)': {
                fontSize: '16px',
            },
        },

        '& span': {
            display: 'none',
            marginLeft: '8px',
            marginRight: '8px',
        },
    },
}));
