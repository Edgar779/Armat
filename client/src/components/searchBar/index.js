import { searchBarStyles } from './styles';
import { Button } from '@material-ui/core';
import { Search, Close } from '@material-ui/icons';

export const SearchBar = ({ handleSearch, handleChangeSearch, Placeholder, value, handleClearInput, handleKeyDown, disabled }) => {
    const classes = searchBarStyles();
    return (
        <div className={classes.SearchInputBox}>
            <input
                onKeyDown={handleKeyDown}
                value={value ? value : ''}
                onChange={(ev) => handleChangeSearch(ev)}
                placeholder={Placeholder}
            />
            {value && <Close onClick={handleClearInput} style={{ color: '#387DFF', cursor: 'pointer', marginRight: '10px' }} />}
            <Button disabled={disabled !== false} onClick={handleSearch}>
                <Search />
            </Button>
        </div>
    );
};
