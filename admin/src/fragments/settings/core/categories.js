import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {httpRequestsOnErrorsActions, httpRequestsOnSuccessActions, manageActions} from 'store';
import { settingsStyle } from './style';
import {CreateInput, DeleteSettingsButton, ErrMessage, Loader} from 'components';
import { ManageHead } from './manageHead';
import {SettingsNoInfo} from "./settingsNoInfo";
import {FindError, FindLoad, FindSuccess} from "utils";

export const Categories = ({  }) => {
    const dispatch = useDispatch();
    const classes = settingsStyle();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const { categories } = useSelector((state) => ({
        categories: state.manage.categories,
    }));

    const openCreateInput = () => {
        setOpen(!open);
    };

    const CreateTag = () => {
        if(value.length) {
            dispatch(manageActions.CreateCategories(value));
        }
    };
    const success = FindSuccess('CREATE_CATEGORIES')
    const loader = FindLoad('CREATE_CATEGORIES')
    const getLoader = FindLoad('GET_CATEGORIES')
    const backError = FindError('CREATE_CATEGORIES')

    const handleChangeTag = (ev) => {
        if(backError.length) dispatch(httpRequestsOnErrorsActions.removeError('CREATE_CATEGORIES'))
        setValue(ev.target.value);
    };

    const deleteCategories = (ev) => {
        dispatch(manageActions.DeleteCategories(ev));
    };

    useEffect(() =>{
        if(success.length){
            setOpen(false);
            setValue('');
            dispatch(httpRequestsOnSuccessActions.removeSuccess('CREATE_CATEGORIES'));
        }
    },[success])

    return (
        <div className={classes.headWrapper}>
            <ManageHead handleClick={openCreateInput} Name={`Categories (${categories.length})`} buttonText={'Add Category'} />
            {open && (
               <>
                <div>
                    <CreateInput
                        lader={loader}
                        handleChange={handleChangeTag}
                        handleClick={CreateTag}
                        value={value}
                        Placeholder={'Category Name'}
                    />
                </div>
                <ErrMessage text={  backError && backError[0].type === 'CREATE_CATEGORIES'  ?  'Category already exist' : ''}/>
               </>
            )}
            <div className={classes.body}>
                {
                    !!getLoader.length ? (
                        <Loader style={{display:'flex'}}/>
                    ) : categories.length ? (
                        categories.map((item, i) => (
                            <div key={i} className={classes.bodyWrapper}>
                                <span className={classes.bodyCategoryName}>{item}</span>

                                <DeleteSettingsButton handleCLick={() => deleteCategories(item)} />
                            </div>
                        ))
                    ) : <SettingsNoInfo text={'No Categories Yet'}/>
                }
            </div>
        </div>
    );
}
