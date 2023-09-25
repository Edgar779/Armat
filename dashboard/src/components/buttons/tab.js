import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SavePage } from 'utils';
import { Paper, Tab, Tabs } from '@mui/material';

export const ButtonsTab = ({ first, second, width, maxWidth }) => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const info = navigate?.location?.state;

    useEffect(() => {
        if (info) {
            const statusType = info?.status === 'ACTIVE' ? 0 : 1;
            setValue(info?.status ? statusType : 0);
        }
    }, [info]);

    const handleChange = (event, newValue) => {
        const statusType = newValue === 0 ? 'ACTIVE' : 'INACTIVE';
        setValue(newValue);
        const infoItem = { ...info, page: 1, skip: 0, limit: 10 };
        infoItem.status = statusType;
        SavePage(navigate, info, { ...infoItem });
    };

    return (
        <Paper
            style={{
                width: '248px',
                border: 'none',
                background: '#FFFFFF 0% 0% no-repeat padding-box',
                boxShadow: '0px 0px 6px #8A8A8A29',
                borderRadius: '4px',
                padding: '0 2px',
            }}
            square>
            <Tabs
                className="buttons-tab-wrapper"
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example">
                <Tab style={{ width: width ? width : '100px' }} label={first} />
                <Tab style={{ width: width ? width : '100px' }} label={second} />
            </Tabs>
        </Paper>
    );
};
