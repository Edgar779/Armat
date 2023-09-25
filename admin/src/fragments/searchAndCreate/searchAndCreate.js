import React from 'react';
import { SearchInput, CreateButton } from 'components';
import { fixedComponentsStyle } from './styles';

export const SearchAndCreate = ({
    spaceBetween,
    value,
    handleClearInput,
    handleChangeSearch,
    handleSearch,
    placeholder,
    total,
    type,
    handleCreate,
    buttonText,
    width,

}) => {
    const classes = fixedComponentsStyle();

    return (
        <div className={spaceBetween === true ? classes.SearchBoxWrapperBetween : classes.SearchBoxWrapper}>
            <div className={classes.SearchBoxSearchComponent}>
                <SearchInput
                    value={value}
                    handleClearInput={handleClearInput}
                    handleChangeSearch={handleChangeSearch}
                    handleSearch={handleSearch}
                    Placeholder={placeholder}
                />
                {type !== 'none' && <p className={classes.TotalMembers}>{`Total ${type}: ${total}`}</p>}
            </div>
            {buttonText && (
                <div>
                    <CreateButton handleClick={handleCreate} ButtonText={buttonText} width={width}/>
                </div>
            )}
        </div>
    );
};
