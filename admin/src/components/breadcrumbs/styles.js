import {makeStyles} from "@material-ui/core/styles";


export const breadcrumbsStyles = makeStyles(() => ({
    breadcrumbsWrapper:{
        display:'flex',
        alignItems:'center',
    },

    parent:{
        fontSize:'16px',
        fontWeight:'600',
        color:'#545F7EB3',
        cursor:'pointer',
    },

    parentToChild:{
        color:'#545F7EB3',
        fontSize:'32px',
        fontWeight:'600',
        margin:'0 14px',
    },

    child:{
        fontSize:'16px',
        fontWeight:'600',
        color:'#252E48',
    },
}))