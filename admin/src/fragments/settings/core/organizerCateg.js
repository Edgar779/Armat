import {settingsStyle} from "./style";
import {CreateButton, SimpleModal} from "components";
import React, {useEffect, useState} from "react";
import {OrganizerModal} from "./organizerModal";
import {FindSuccess} from "utils";
import {useDispatch, useSelector} from "react-redux";
import {httpRequestsOnSuccessActions, organizerActions} from "store";
import {TreeItem, TreeView} from "@material-ui/lab";
import {ExpandMore, ChevronRight} from '@material-ui/icons';
import {Images} from "theme";

export const OrganizerCateg = () => {
    const [open, setOpen] = useState(false)
    const [treeId, setTreeId] = useState('')
    const [parentId, setParentId] = useState('')
    const [modalType, setModalType] = useState('')
    const classes = settingsStyle();
    const dispatch = useDispatch();
    const success = FindSuccess('CREATE_ORGANIZATION_CATEGORY');
    const successEdit = FindSuccess('EDIT_ORGANIZATION_CATEGORY');

    const {orgCategories} = useSelector((state) => ({
        orgCategories: state.orgCategories.orgCategories,
    }));

    const handleOpenClose = () => {
        setOpen(!open)
        setTreeId('')
        setModalType('category')
    }

    useEffect(() => {
        if (success.length) {
            setOpen(!open)
            dispatch(httpRequestsOnSuccessActions.removeSuccess('CREATE_ORGANIZATION_CATEGORY'))
        }
        if (successEdit.length) {
            setOpen(!open)
            dispatch(httpRequestsOnSuccessActions.removeSuccess('EDIT_ORGANIZATION_CATEGORY'))
        }
    }, [success || successEdit])


    const DataTreeView = ({treeItems}) => {
        return (
            <div className="showhim">
                <TreeView
                    className={classes.treeView}
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMore/>}
                    defaultExpandIcon={<ChevronRight/>}
                    sx={{height: 'auto', flexGrow: 1, maxWidth: '100%', overflowY: 'auto'}}
                >
                    {getTreeItemsFromData(treeItems)}
                </TreeView>
            </div>
        );
    };

    const getTreeItemsFromData = treeItems => {
        return treeItems.map(treeItemData => {
            let children = undefined;
            if (treeItemData.items && treeItemData.items.length > 0) {
                children = getTreeItemsFromData(treeItemData.items);
            }
            return (

                <div className={'paddingNone'} style={{display: 'flex',}}>
                    <TreeItem
                        className={'showhim'}
                        key={treeItemData.id}
                        nodeId={treeItemData.id}
                        label={
                            <div className={'treeItem'}>
                                <p>{treeItemData.text}</p>
                                <div className={classes.buttonsWrapper}>

                                    <button className={classes.buttonsAdd}
                                            onClick={() => handleCreateParent(treeItemData)}>
                                        <img src={Images.addIcon} alt={'icon'}/>
                                    </button>
                                    <button className={classes.buttons}
                                            style={{background: '#387DFF1A 0% 0% no-repeat padding-box'}}
                                            onClick={() => handleEditParent(treeItemData)}>
                                        <img src={Images.editIcon} alt={'icon'}/>
                                    </button>
                                    <button
                                        style={{background: '#F073791A 0% 0% no-repeat padding-box'}}
                                        className={classes.buttonsDel}
                                        onClick={() => handleDel(treeItemData.id)}>
                                        <img src={Images.Delete} alt={'icon'}/>
                                    </button>

                                </div>
                            </div>
                        }
                        children={children}
                    />
                </div>
            );
        });
    };

    const handleDel = (treeItemData) => {
        dispatch(organizerActions.deleteOrgCat(treeItemData))
    }

    const handleEditParent = (treeItemData) => {
        setOpen(!open)
        setTreeId(treeItemData)
        setModalType(treeItemData.parent ? 'subcategory' : 'category')
    }

    const handleCreateParent = (item) => {
        setParentId(item.id)
        setModalType('subcategory')
        setOpen(!open)
    }

    function compareStrings(a, b) {
        // Assuming you want case-insensitive comparison
        a = a.toLowerCase();
        b = b.toLowerCase();

        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }

    orgCategories?.length && orgCategories.sort(function(a, b) {
        return compareStrings(a.text, b.text);
    })

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '39px 32px',
            height: '80vh',
            justifyContent: 'flex-start'
        }}
             className={classes.SettingsBackground}>
            <div className={classes.organizerCategCead}>
                <p>Categories</p>
                <CreateButton width={'216px'} handleClick={handleOpenClose} ButtonText={'Add Root Category'}/>
            </div>

            <div className={classes.dataTreeView}>
                <div className="App">
                    <DataTreeView treeItems={orgCategories}/>
                </div>
            </div>

            <SimpleModal
                handleClick={handleOpenClose}
                open={open}
                children={
                    <OrganizerModal
                        parentId={parentId}
                        modalType={modalType}
                        info={treeId}
                        treeId={treeId}
                        handleClick={handleOpenClose}/>
                }
            />
        </div>
    )
}

