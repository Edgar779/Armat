import React from 'react';
import { inputsStyle } from './styles';
import Button from '@material-ui/core/Button';
import { Search, Close } from '@material-ui/icons';

export const SearchInput = ({ handleSearch, handleChangeSearch, Placeholder, value, handleClearInput }) => {
    const classes = inputsStyle();
    return (
        <div className={classes.SearchInputBox}>
            <input value={value ? value : ''} onChange={handleChangeSearch} placeholder={Placeholder} />
            {value && <Close onClick={handleClearInput} style={{ color: '#387DFF', cursor: 'pointer', marginRight: '10px' }} />}
            <Button disabled={true} onClick={handleSearch}>
                <Search />
            </Button>
        </div>
    );
};
