import React, {useEffect, useState} from 'react';
import {httpRequestsOnErrorsActions, httpRequestsOnSuccessActions, manageActions} from 'store';
import { useDispatch, useSelector } from 'react-redux';
import { settingsStyle } from './style';
import {CreateInput, DeleteSettingsButton, ErrMessage, Loader} from 'components';
import { ManageHead } from './manageHead';
import {SettingsNoInfo} from "./settingsNoInfo";
import {FindError, FindLoad, FindSuccess} from "../../../utils";

export const Tags = ({  }) => {
    const dispatch = useDispatch();
    const classes = settingsStyle();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const success = FindSuccess('CREATE_TAG')
    const loader = FindLoad('CREATE_TAG')
    const getLoader = FindLoad('GET_TAG')
    const backError = FindError('TAG')

    const { tags } = useSelector((state) => ({
        tags: state.manage.tags,
    }));

    const openCreateInput = () => {
        setOpen(!open);
    };

    const CreateTag = () => {
        if(value.length) {
            dispatch(manageActions.CreateTag(value));
        }
    };

    useEffect(() =>{
        if(success.length){
            setOpen(false);
            setValue('');
            dispatch(httpRequestsOnSuccessActions.removeSuccess('CREATE_TAG'));
        }
    },[success])

    const handleChangeTag = (ev) => {
        if(backError.length) dispatch(httpRequestsOnErrorsActions.removeError('TAG'))
        setValue(ev.target.value);
    };

    const deleteTag = (ev) => {
        dispatch(manageActions.DeleteTags(ev));
    };

    return (
        <div className={classes.headWrapper}>
            <ManageHead handleClick={openCreateInput} Name={`Tags (${tags.length})`} buttonText={'Add Tag'} />
            {open && (
            <>
                <div>
                    <CreateInput
                        lader={loader}
                        handleChange={handleChangeTag}
                        handleClick={CreateTag}
                        value={value}
                        name={'Tag'}
                        Placeholder={'Add Tag Name'}
                    />
                </div>
                <ErrMessage text={  backError && backError[0].type === 'TAG'  ?  'Tag already exist' : ''}/>
            </>
            )}
            <div className={classes.body}>
                {
                    !!getLoader.length ?  (
                        <Loader style={{display:'flex'}} />
                    ) : tags.length ? (
                        tags.map((item, i) => (
                            <div key={i} className={classes.TagsBodyWrapper}>
                                <span className={classes.bodyTagName}>{item}</span>

                                <DeleteSettingsButton handleCLick={() => deleteTag(item)} />
                            </div>
                        ))
                    ) : <SettingsNoInfo text={'No Tags Yet'}/>
                }
            </div>
        </div>
    );
};
