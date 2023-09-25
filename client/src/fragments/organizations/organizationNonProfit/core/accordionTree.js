import React from 'react';
import { organizationsStyle } from './style';
import { organizationActions } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import CheckboxTree from './CheckboxTree';
import { useRouter } from 'next/router';

export const OrganizerCateg = ({ type }) => {
    const { orgCategories } = useSelector((state) => ({
        orgCategories: state.orgs.orgCategories,
    }));

    const classes = organizationsStyle();
    const dispatch = useDispatch();
    const router = useRouter();

    const handleNode = (node) => {
        if (node !== undefined) {
            router.push({
                pathname: type === 'Business' ? '/business' : '/nonProfit',
                query: { ids: node ? [...node] : [] },
            });
            const info = {
                status: 'ACTIVE',
                type: type === 'Business' ? 'BUSINESS' : 'NON_PROFIT',
                categories: node ? [...node] : [],
            };
            dispatch(organizationActions.getOrgByCategories(info));
        }
    };

    const translateTree = (data, type) => {
        const newTree = [];
        for (let i = 0; i < data.length; i++) {
            let children;
            if (data[i].items?.length > 0) {
                children = translateTree(data[i].items, type);
            }
            let label;
            if (type === 'Business') {
                label = `${data[i].text} (${data[i].businessUsedCount})`;
            } else {
                label = `${data[i].text} (${data[i].nonProfitUsedCount})`;
            }

            newTree.push({
                value: data[i].id,
                label,
                children,
            });
        }
        return newTree;
    };

    return (
        <div>
            <div className="App">
                <CheckboxTree
                    selectedId={router?.query?.ids}
                    orgCateg={translateTree(orgCategories, type)}
                    handleNode={handleNode}
                    classes={classes}
                />
            </div>
        </div>
    );
};
