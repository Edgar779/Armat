import { makeStyles } from "@material-ui/core/styles";

export const errMessageStyle = makeStyles(() => ({
    nameEllipsis:{
        overflow:'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        width:'120px',
        // textTransform:'uppercase',
        "@media (min-width: 1919px)": {
            width:'140px',
        },
    },

    nameEllipsisBig:{
        overflow:'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        width:'110px',
        "@media (min-width: 1919px)": {
            width:'150px',
        },
    },

    tableNameEllipsis:{
        width:'auto',
        maxWidth:'100px',
        overflow:'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        textTransform:'uppercase',
        // color: `${Colors.TextSecondary}!important`,
        fontWeight:'bold',
        marginLeft:'4px',
        fontSize:'16px',
        "@media (min-width: 1919px)": {
            maxWidth:'120px',
        },
    },

    addressEllipsis:{
        overflow:'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        width:'200px',
        "@media (min-width: 1919px)": {
            width:'250px',
        },
    } ,
    desc:{
        overflow:'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        width:'200px',
        "@media (min-width: 1919px)": {
            width:'250px',
        },
    } ,
    id:{
        overflow:'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        width:'80px',
        "@media (min-width: 1919px)": {
            width:'80px',
        },
    } ,

    emailEllipsis:{
        overflow:'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        width:'150px',
        "@media (min-width: 1919px)": {
            width:'200px',
        },
    },

}));
