import React from 'react';
import {useDispatch} from 'react-redux';
import {organizationActions} from 'store';
import {Popover} from '@material-ui/core';
import {ExpandMore, ExpandLess, Cancel, CheckCircle} from '@material-ui/icons';
import {Images, useGlobalStyles} from "theme";
import {modalStyle} from "../../../../components/modal/core/styles";

export const OrgPopover = ({List, filterType, removeType, handleRemoveType, style, info}) => {
    const classes = modalStyle();
    const globalClasses = useGlobalStyles();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleFilterByRole = (roleType) => {
        if (handleRemoveType) {
            handleRemoveType(true);
        }
        setAnchorEl(null);
        dispatch(organizationActions.filterOrgByStatus(roleType))
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const approved = info.filter((i) => i.status === 'ACTIVE')
    const archived = info.filter((i) => i.status === 'ARCHIVED')
    const rejected = info.filter((i) => i.status === 'REJECTED')

    return (
        <React.Fragment>
            <button className={classes.SimplePopoverButton} onClick={handleClick}>
                {open === true ? <ExpandLess style={{...style}}/> : <ExpandMore style={{...style}}/>}
            </button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                className={filterType === 'Filter the Status' ? classes.PopoverStatusStyle : classes.PopoverStyle}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                transformOrigin={{vertical: 'top', horizontal: 'center'}}>
                <div>
                    <p className={classes.FilterType}>{filterType}</p>
                    {List.length && List.map((i, item) => (
                        <React.Fragment key={item}>
                            <div className={classes.PopoverStatusListWrapper}>
                                {i === 'Approved' ?
                                    <div onClick={() => handleFilterByRole('ACTIVE')}>
                                        <CheckCircle style={{color: '#4FDC6F', fontSize: '20px', marginRight: '10px'}}/>
                                        <p style={{color: '#545F7E'}}
                                           className={globalClasses.lengthStyle}>Approved <span>{`( ${approved.length} )`}</span>
                                        </p>
                                    </div>
                                    :
                                    i === 'Rejected' ?
                                        <div onClick={() => handleFilterByRole('REJECTED')}>
                                            <Cancel style={{color: '#F07379', fontSize: '20px', marginRight: '10px'}}/>
                                            <p style={{color: '#545F7E'}}
                                               className={globalClasses.lengthStyle}>Rejected <span>{`( ${rejected.length} )`}</span>
                                            </p>
                                        </div>
                                        :
                                        <div onClick={() => handleFilterByRole('ARCHIVED')}>
                                            <img src={Images.archiveButton} alt={'archiveButton'} style={{
                                                width: '20px',
                                                height: '20px',
                                                marginRight: '10px',
                                                marginLeft: '17px'
                                            }}/>
                                            <p style={{color: '#545F7E'}}
                                               className={globalClasses.lengthStyle}>Rejected <span>{`( ${archived.length} )`}</span>
                                            </p>
                                        </div>
                                }
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </Popover>
        </React.Fragment>
    );
};
