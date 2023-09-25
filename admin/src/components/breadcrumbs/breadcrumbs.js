import { breadcrumbsStyles } from "./styles";
import { useHistory } from "react-router-dom";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const Breadcrumbs = ({parentLink, childLink, parent, child}) =>{
    const classes = breadcrumbsStyles()
    const history = useHistory();

    const openLink = ( ) =>{
        history.push(parentLink)
    }

    return(
        <div className={classes.breadcrumbsWrapper}>
            <p onClick={openLink} className={classes.parent}>{ parent }</p>
            <ChevronRightIcon style={{ color:'#545F7EB3', fontSize:'34px'}}/>
            <p  className={classes.child}>{ child } </p>
        </div>
    )
}