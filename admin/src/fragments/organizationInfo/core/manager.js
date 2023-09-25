import React, {useEffect, useState} from "react";
import {organizationInfoStyles} from "./styles";
import {Images} from "theme";
import {ButtonMiniLoader, ModalPopup} from "components";
import {FindLoad} from "utils";
import {useDispatch} from "react-redux";
import {httpRequestsOnErrorsActions, organizationActions} from "store";
import {useParams} from "react-router-dom";

export const Manager = ({item}) => {
    const dispatch = useDispatch()
    const params = useParams()
    const classes = organizationInfoStyles()
    const [open, etOpen] = useState(false)
    const loader = FindLoad('REMOVE_MANAGER')
    const success = FindLoad('REMOVE_MANAGER')

    useEffect(() =>{
        if(success.length){
            etOpen(false)
            dispatch(httpRequestsOnErrorsActions.removeError('REMOVE_MANAGER'))
        }
    },[success])

    const handleOpenClose =() =>{
        etOpen(!open)
    }

    const deleteEvent = () =>{
        dispatch(organizationActions.removeManager(params.id))
    }

    return (
        <div className={classes.managerWrapper}>
            <ModalPopup
                loading={!!loader.length}
                modalTitle={`Delete a Manager`}
                modalText={`Delete a Manager`}
                buttonText={'Delete'}
                bodyText={` ? Deleting a Manager will permanently remove it from the system.`}
                handleClose={handleOpenClose}
                handleDel={deleteEvent}
                open={open}
            />

            <div className={classes.managerNameImageWrapper}>
                <div className={classes.managerNameImage}>
                    <img src={item && item.avatar ? item.avatar.url : Images.avatar} alt={'url'}/>
                    <p>{item.fullName}</p>
                </div>
                <div>
                    <button onClick={handleOpenClose} className={classes.removeButton}>
                        {loader.length ?
                            <div>
                             <ButtonMiniLoader color={'#F07379'}/>
                            </div>
                            :
                            <img src={Images.remove} alt={'remove'}/>
                        }
                        Remove
                    </button>
                </div>
            </div>

            <div>
                <div style={{marginTop:'25px'}} className={classes.managerInfo}>
                    <img src={Images.managerEmail} alt=""/>
                    <p>{item.email}</p>
                </div>
                {item.phone &&
                <div className={classes.managerInfo}>
                    <img src={Images.managerPhone} alt=""/>
                    <p>{item.email}</p>
                </div>
                }
            </div>
        </div>
    )
}