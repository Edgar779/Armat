import React, {useState} from "react";
import {ButtonsStyle} from "./styles";

export const SectionsButtons = ({first, second, changeScreen}) => {
    const classes = ButtonsStyle()
    const [type, setType] = useState(0)

    const handleChangeScreen =(type, index) =>{
        setType(index)
        changeScreen(type)
    }

    return(
        <div className={classes.settingsButtons}>
            <button
                onClick={() => handleChangeScreen(first, 0)}
                className={type === 0 ? classes.activeButton : classes.passiveButton}>{first}</button>
            <button
                onClick={() => handleChangeScreen(second, 1)}
                className={type === 1 ? classes.activeButton : classes.passiveButton}>{second}</button>
        </div>

    )
}