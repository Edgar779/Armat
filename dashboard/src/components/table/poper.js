import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Colors, SaveParams } from "utils";

export default function BasicPopover({ title, list, labelTitle, name, link }) {
    const navigate = useNavigate();
    const location = useLocation();
    const info = location?.state;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickRadio = (value) => {
        setAnchorEl(null);
        const pushInfo = {
            ...info,
        };
        pushInfo[name] = value;
        SaveParams(link, navigate, { ...pushInfo });
    };

    return (
        <div className="table-menu">
            <div onClick={handleClick} style={{cursor:'pointer'}} className="open-button">
                <p> {title}</p>
                <Button aria-describedby={id} variant="contained" >
                    {open ? <ExpandLessIcon style={{ color: '#506C84' }} /> : <ExpandMoreIcon style={{ color: '#506C84' }} />}
                </Button>
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}>
                <FormControl className="status-popper-wrapper">
                    <FormLabel className='label-title' id="demo-radio-buttons-group-label"> {labelTitle} </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={info?.[name] ? info?.[name] : 'ALL'}
                        name="radio-buttons-group">
                        {list?.map((i, k) => (
                            <div onClick={() => handleClickRadio(i?.value)} key={k} className="check-label">
                                <FormControlLabel className=" control-label" value={i?.value}
                                                  control={<Radio style={{color:Colors.theme.main}} />}
                                                  label={i?.label}
                                />
                            </div>
                        ))}
                    </RadioGroup>
                </FormControl>
            </Popover>
        </div>
    );
}
