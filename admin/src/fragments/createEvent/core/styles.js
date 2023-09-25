import { makeStyles } from '@material-ui/core/styles';

export const CreateEventStyle = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: '5',
    },

    paper: {
        width: '65%',
        height: '90vh',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '20px',
        outline: 'none',
        overflow: 'auto',
    },

    modalBody: {
        padding: '0 40px 0 40px',
    },

    titleStyle: {
        fontSize: '36px',
        fontWeight: 'bold',
        lineHeight: '30px',
        color: '#387DFF',
    },

    basicInfo: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '43px',

        '& img': {
            width: '23px',
            height: '23px',
            marginRight: '15px',
        },
        '& p': {
            fontSize: '20px',
            fontWeight: '600',
            lineHeight: '30px',
            color: '#387DFF',
        },
    },

    editButton:{
        display: 'flex',
        alignItems: 'center',
        height:'35px',
        cursor:'pointer',
        borderRadius:'12px',
        textTransform:'capitalize',
        border:'1px solid #387DFF',
        '& p':{
            marginLeft: '10px',
            fontSize: '14px',
            marginRight:'10px',
        }
    },

    basicInfoText: {
        marginTop: '7px',
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '30px',
        color: '#252E48',
    },

    commentText:{
        marginTop: '15px',
        fontSize: '16px',
        fontWeight: 'bold',
        color:'#F07379'
    },

    inputs: {
        marginTop: '40px',
    },
    dateTimeZone: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        maxWidth:'49.5%',
    },

    KeyboardDatePicker: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop:'26px',


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
            color: '#387DFF',
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
    dateInput: {
            width: '50%',

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
    dragDrop: {
        width: '100%',
        border: '3px dashed #387DFF80',
        borderRadius: '12px',
        height: '374px',
        marginTop: '40px',
    },
    dragDropImage: {
        display: 'flex',
        justifyContent: 'center',
        padding: '32px',
        width: '100%',
        border: '3px dashed #387DFF80',
        borderRadius: '12px',
        marginTop: '40px',
        height: '470px',
    },

    dragDropBody: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '107px',

        '& img': {
            width: '60px',
            height: '55px',
        },
    },

    dragDropBodyDrag: {
        fontSize: '20px',
        lineHeight: '30px',
        fontWeight: '600',
        color: '#545F7EB3',
        marginTop: '42px',

        '& span': {
            fontSize: '20px',
            lineHeight: '30px',
            fontWeight: 'bold',
            color: '#387DFF',
        },
    },

    dragDropBodyDragSize: {
        fontSize: '16px',
        lineHeight: '30px',
        color: '#545F7EB3',
        marginTop: '16px',
    },

    dragDropBodyDragSizeError: {
        fontSize: '16px',
        lineHeight: '30px',
        color: '#F07379',
        marginTop: '16px',
        fontWeight: 'bold',
    },

    CloseButton: {
        minWidth: '30px',
        height: '32px',
        background: '#F5FAFE 0% 0% no-repeat padding-box',
        borderRadius: '24px',
        margin: '14px 14px 0 0',
        border: 'none',
        padding: '4px',
        zIndex: '10',
    },

    CloseButtonContent: {
        display: 'flex',
        justifyContent: 'flex-end',
    },

    TextEditorStyle: {
        marginTop: '40px',
        height: '300px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '0.5px solid #387DFF',
        borderRadius: '6px',

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
            height: '194px',
            overflow: 'auto',
            margin: '32px',
            fontSize: '16px',
            lineHeight: '30px',
            color: '#545F7EB3',

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





    buttonsWrap: {
        marginTop: '30px',
        position:'relative'
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
            width: '312px',
            position: 'absolute',
            marginLeft: 0,
            borderRadius: '32px',
        },
    },
    buttonsWrapper: {
        display: 'flex',
    },

    eventOrg:{
        marginTop:'24px'
    }

}));
