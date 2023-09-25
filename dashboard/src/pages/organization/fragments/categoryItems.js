import React, { useEffect, useState } from 'react';
import { SelectTypeAutocomplete } from './comboBox';
import { CreateEventStyle } from './styles';
import { Svg } from "../../../assets";
import { useCallback } from "react";

export const  CategoryItems = ({ categories, allCategories, selectedInfo, selectedIdInfos, eventInfo, handleGetNewList, color, styles, title }) => {

    const classes = CreateEventStyle();
    const [selectedCategs, setSelectedCategs] = useState([]);
    const [selected, setSelected] = useState([]);
    const [newList, setNewList] = useState([]);
    const [addedCategory, setAddedCategory] = useState([]);
    const [currentWidth, setCurrentWidth] = useState(null)

    const curr = useCallback(node => {
        if (node !== null) {
            setCurrentWidth(node.getBoundingClientRect().width);
        }
    }, []);

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

    useEffect(() => {
        if (categories?.length) {
            createCatNames(categories);
        }
    }, [categories]);


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

    const handleGetTree = async (ev) => {
        const categList = [...selectedCategs, ev.id];
        setSelectedCategs(categList);
        const newItems = (await allCategories.length) && allCategories.map((i) => getParent(i, ev.id));
        const newArr = newItems.filter((k) => k !== undefined);
        setSelected([...selected, ...newArr]);
        if (eventInfo) {
            const added = [...addedCategory, ev.id];
            setAddedCategory(added);
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

    const filteredList = newList.filter(function (array_el) {
        return (
            selectedCategs.filter(function (anotherOne_el) {
                return anotherOne_el === array_el.id;
            }).length === 0
        );
    });

    const handleRenderText = (text) => {
        if (text.search('>') === -1) {
            return (
                <p>
                    <strong>{text}</strong>
                </p>
            );
        } else {
            const allText = text.substring(text.lastIndexOf('>'));
            return (
                <p>
                    {text.slice(0, text.lastIndexOf('>'))} <strong>{allText}</strong>
                </p>
            );
        }
    };

    return (
        <div className={` ${classes.categoryItemWrapper}  input-wrapper  `}>
            <div style={{ width: '100%' }} className={classes.selectTag}>
                <label className="label" style={{color: color? color :'', ...styles}}>{title ? title : 'Add Categories'}</label>
                <div style={{ width: '100%' }} className={classes.selectInputStyle}>
                    <SelectTypeAutocomplete
                        list={filteredList}
                        handleRenderText={handleRenderText}
                        handleGetTree={handleGetTree}
                        style={''}
                    />
                </div>
            </div>
            <div className={classes.categoryItemWrapper} ref={curr}>
                {selected.length
                    ? selected.map((i, j) => (
                          <div className={classes.items} key={j}>
                              <div className={classes.ellipsis} style={{width: currentWidth ? currentWidth - 70 : 'auto'}} >
                                  {i.map((k, l) => (
                                      <div className={l === i.length - 1 ? classes.lastRows : classes.rows} key={l}>
                                          <p>
                                              {`${k.text}`}
                                              <span>
                                                  <img src={Svg.arrowDown} alt="icon" />
                                              </span>
                                          </p>
                                      </div>
                                  ))}
                              </div>
                              <button type='button' onClick={() => handleRemove(j)} className={classes.removeButtonDesktop}>
                                  Remove{' '}
                              </button>
                              <button  type='button' onClick={() => handleRemove(j)} className={classes.removeButtonMobile}>
                                  <img src={Svg.CloseRed} alt="icon" />
                              </button>
                          </div>
                      ))
                    : ''}
            </div>
        </div>
    );
};
