import React, { useEffect, useState } from 'react';
import { settingsStyle } from './style';
import { ErrMessage, SignInInput } from 'components';
import CloseIcon from '@material-ui/icons/Close';
import { httpRequestsOnErrorsActions, organizerActions } from 'store';
import { useDispatch } from 'react-redux';
import { FindLoad } from 'utils';
import { CircularProgress } from '@material-ui/core';
import { CreateCancel } from 'components';
import { FindErrorItem } from '../../../utils/findError';

export const OrganizerModal = ({ handleClick, treeId, info, modalType, parentId }) => {
    const classes = settingsStyle();
    const dispatch = useDispatch();
    const loader = FindLoad('CREATE_ORGANIZATION_CATEGORY');
    const errType = info ? 'EDIT_ORGANIZATION_CATEGORY' : 'CREATE_ORGANIZATION_CATEGORY';

    const backError = info ?
        FindErrorItem('EDIT_ORGANIZATION_CATEGORY')
        :
        FindErrorItem('CREATE_ORGANIZATION_CATEGORY');

    const loaderEdit = FindLoad('EDIT_ORGANIZATION_CATEGORY');
    const [value, setValue] = useState(info ? info.text : '');
    const [error, setError] = useState('');

    const handleCreate = () => {
        const name = { name: value };
        const newItem = {
            name: value,
            parent: parentId,
        };
        if (value) {
            if (info) {
                dispatch(organizerActions.editOrgCat(name, info.id));
            } else {
                if (modalType === 'subcategory') {
                    dispatch(organizerActions.createOrgCat(newItem));
                } else {
                    dispatch(organizerActions.createOrgCat(name));
                }
            }
        } else {
            setError('error');
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
        error === 'error' && setError('');
        if (backError?.type === 'CREATE_ORGANIZATION_CATEGORY' || backError?.type === 'EDIT_ORGANIZATION_CATEGORY') {
            dispatch(httpRequestsOnErrorsActions.removeError(errType));
        }
    };

    useEffect(() => {
            return () => {dispatch(httpRequestsOnErrorsActions.removeError(errType));
        }
    }, []);

    return (
        <div className={classes.organizerModalWrapper}>
            <div className={classes.buttonWrapper}>
                <button className={classes.CloseButton} onClick={handleClick}>
                    <CloseIcon style={{ color: '#387DFF' }} />
                </button>
            </div>
            <div className={classes.organizerModalPadding}>

                <div>
                    <p className={classes.title}>{
                        treeId && modalType === 'category' ? 'Edit Category' :
                            treeId ? 'Edit Subcategory' :
                                modalType === 'subcategory' ? 'Add Subcategory' :

                                    info ? 'Edit Category' : 'Add Category'}
                    </p>
                    <p className={classes.subTitle}>{!info && 'To add category, please fulfill the below field.'}</p>
                </div>

                <div>
                    <div className={classes.input}>
                        {value ? <div style={{ height: '0' }} /> : <p className={classes.inputSubTitle}>Name* </p>}
                        {info ? <p className={classes.inputSubTitle}>Name* </p> : <div style={{ height: '0' }} />}
                        <SignInInput
                            typeError={
                                error === 'error' ? true :
                                    backError?.error === 'Category with this name exists'
                            }
                            className={'InviteEmail'}
                            value={value}
                            onChange={handleChange}
                            name={'name'}
                            margin={'none'}
                            type={'text'}
                            label={'Name*'}
                            id={'email'}
                            autoComplete={'current-email'}
                        />
                        <ErrMessage text={
                            error === 'error' ? 'Input is not field' :
                                backError?.error === 'Category with this name exists' ? 'Category with this name exists' : ''
                        } />
                    </div>
                </div>

                {info ?
                    <div style={{ marginTop: '20px' }}>
                        <CreateCancel
                            display={'flex'}
                            loading={!!loaderEdit.length}
                            handleCreate={handleCreate}
                            handleCancel={handleClick}
                            Create={'Save'}
                            Cancel={'Cancel'}
                        />
                    </div>
                    :
                    <button
                        onClick={handleCreate}
                        className={classes.createButton}
                    >
                        {!!loader.length ?
                            <CircularProgress
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    position: 'relative',
                                    left: 0,
                                    right: 0,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    color: 'white',
                                }}
                            />
                            :
                            'Create Organization'
                        }
                    </button>
                }
            </div>
        </div>
    );
};