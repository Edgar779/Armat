import { useEffect, useState } from 'react';
import * as React from 'react';
// import { handleTreeViewCheckChange, processTreeViewItems, TreeView } from '@progress/kendo-react-treeview';
import { CreateEventStyle } from './styles';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, MenuItem, Select } from '@material-ui/core';

import { InputTitle } from 'components';
import { inputsStyle } from '../../../components/inputs/styles';
import { Images } from '../../../theme';
import { SelectTypeAutocomplete } from './comboBox';

export const CategoryItems = ({
                                  categories,
                                  allCategories,
                                  selectedInfo,
                                  selectedIdInfos,
                                  eventInfo,
                                  // handleSendAddedCategs,
                                  handleGetNewList,
                              }) => {

    const classes = CreateEventStyle();
    const inputClasses = inputsStyle();
    const [selectedCategs, setSelectedCategs] = useState([]);
    const [selected, setSelected] = useState([]);
    const [newList, setNewList] = useState([]);

    useEffect(() => {
        if (selectedCategs) {
            handleGetNewList(selectedCategs);
        }
    }, [selectedCategs]);

    useEffect(() => {
        if (selectedIdInfos && selectedIdInfos.length) {
            const newArr = [];
            selectedIdInfos.map((i) => newArr.push(i.id));
            setSelectedCategs(newArr);
        }
    }, [selectedIdInfos]);

    useEffect(() => {
        if (selectedInfo.length) {
            setSelected(selectedInfo);
        }
    }, [selectedInfo]);

    function getParent(model, id) {
        let path,
            item = {
                id: model.id,
                text: model.text,
            };
        if (!model || typeof model !== 'object') return;
        if (model.id === id) return [item];
        (model.items || []).some((child) => (path = getParent(child, id)));
        return path && [item, ...path];
    }

    const [addedCategory, setAddedCategory] = useState([]);

    const handleGetTree = async (ev) => {
        const categList = [...selectedCategs, ev.id];
        setSelectedCategs(categList);
        const newItems = (await allCategories.length) && allCategories.map((i) => getParent(i, ev.id));
        const newArr = newItems.filter((k) => k !== undefined);
        setSelected([...selected, ...newArr]);

        if (eventInfo) {
            const added = [...addedCategory, ev.id];
            setAddedCategory(added);
            // handleSendAddedCategs(added);
        }
    };

    const handleRemove = (item) => {
        const list = [...selected];
        list.splice(item, 1);
        setSelected(list);
        const newList = [...selectedCategs];
        newList.splice(item, 1);
        setSelectedCategs(newList);
    };

    function createCatNames(cats) {
        const newCats = [];
        for (let i = 0; i < cats.length; i++) {
            let cat = cats[i];
            let catName = cat.text;
            while (cat.parent) {
                const parent = cats.find((c) => c.id === cat.parent);
                catName = parent.text + ' > ' + catName;
                cat = parent;
            }
            newCats.push({
                ...cats[i],
                text: catName,
            });
        }
        setNewList(newCats);
        return newCats;
    }

    useEffect(() => {
        if (categories?.length) {
            createCatNames(categories);
        }
    }, [categories]);

    const filteredList = newList.filter(function(array_el) {
        return (
            selectedCategs.filter(function(anotherOne_el) {
                return anotherOne_el === array_el.id;
            }).length === 0
        );
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div style={{ width: '100%', marginTop: '16px' }} className={classes.selectTag}>
                <InputTitle text={'Add Categories'} />
                <div style={{ width: '100%' }} className={inputClasses.selectInputStyle}>


                    <SelectTypeAutocomplete list={filteredList}
                                            // handleRenderText={handleRenderText}
                                            handleGetTree={handleGetTree} />

                    {/*<FormControl variant='outlined' className={inputClasses.formControl}>*/}
                    {/*    {!selected.length && <InputLabel id='demo-simple-select-label'>Add Categories</InputLabel>}*/}
                    {/*    <Select labelId='demo-simple-select-label' id='demo-simple-select' onChange={handleGetTree}>*/}
                    {/*        {filteredList &&*/}
                    {/*           filteredList.map((i, item) => (*/}
                    {/*            <MenuItem key={item} value={i}>*/}
                    {/*                {i.text}*/}
                    {/*            </MenuItem>*/}
                    {/*        ))}*/}
                    {/*    </Select>*/}
                    {/*</FormControl>*/}



                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                {selected.length
                    ? selected.map((i, j) => (
                        <div className={classes.items} key={j}>
                            <div className={classes.ellipsis}>
                                {i.map((k, l) => (
                                    <div className={l === i.length - 1 ? classes.lastRows : classes.rows} key={l}>
                                        <p>
                                            {`${k.text}`}
                                            <span>
                                                  <img style={{ marginBottom: '-4px' }} src={Images.rightArrowIcon}
                                                       alt={'rightArrowIcon'} />
                                              </span>
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <button onClick={() => handleRemove(j)} className={classes.removeButtonDesktop}>
                                Remove{' '}
                            </button>

                            {/*<button onClick={() => handleRemove(j)} className={classes.removeButtonMobile}>*/}
                            {/*    <Icon name={SVGNames.Remove} width="20px" height="20px" color="#F07379" />*/}
                            {/*</button>*/}
                        </div>
                    ))
                    : ''}
            </div>
        </div>
    );
};
