import * as React from 'react';
import { useEffect, useState } from 'react';
import { organizationsStyle } from './style';
import { Checkbox } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { organizationActions } from 'store';
import { Colors } from 'utils';

export const Tree = ({ info, type }) => {
    const [categoryArray, setCategoryArray] = useState([]);
    const classes = organizationsStyle();
    const dispatch = useDispatch();
    const arr = [];
    const getTree = (org) => {
        org.length &&
            org.map((it) => {
                arr.push(it);
                if (it.items) {
                    return getTree(it.items);
                }
                setCategoryArray(arr);
            });
    };

    useEffect(() => {
        if (info?.length) {
            getTree(info);
        }
    }, [info]);

    const [ids, setIds] = useState([]);

    const changeData = (ev, e) => {
        const newArr = [...ids];

        if (e.target.checked === true) {
            newArr.push(ev.id);
        } else {
            newArr.filter((i, j) => i === ev.id && newArr.splice(j, 1));
        }

        setIds(newArr);

        const info = {
            status: 'ACTIVE',
            type: type === 'Business' ? 'BUSINESS' : 'NON_PROFIT',
            categories: [...newArr],
        };
        dispatch(organizationActions.getOrgByCategories(info));
    };

    function listingItem() {
        let left = 10;
        let index = 0;
        return (
            categoryArray &&
            categoryArray.map((i, j) => {
                if (i.parent) {
                    if (i.items) {
                        index = ++index;
                        left = left + 30;
                    }
                } else {
                    index = 0;
                    left = 0;
                }
                return (
                    <div key={j} style={{ marginLeft: left, color: '#222222CC' }}>
                        <div>
                            <Checkbox
                                style={{ color: Colors.ThemeGreen }}
                                name="available"
                                className={classes.customCheckbox}
                                onChange={(e) => {
                                    changeData(i, e);
                                }}
                            />
                            {i.text}
                        </div>
                    </div>
                );
            })
        );
    }
    return (
        <>
            <div className={classes.filterTreeItem}>{listingItem()}</div>
        </>
    );
};
