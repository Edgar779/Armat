import { organizationsStyle } from './style';
import { CloseButton } from 'components';
import { Tree } from './tree';
import { organizationActions } from 'store';
import { useDispatch } from 'react-redux';
import { OrganizerCateg } from './accordionTree';
import { useRouter } from 'next/router';

export const MobileFilter = ({ info, close, type, orgCategories }) => {
    const classes = organizationsStyle();
    const dispatch = useDispatch();
    const router = useRouter();

    const handleClear = () => {
        close();
        router.push({
            pathname: type === 'Business' ? '/business' : '/nonProfit',
        });
        const orgType = type === 'Business' ? 'BUSINESS' : 'NON_PROFIT';
        dispatch(organizationActions.getOrg(orgType, 'ACTIVE', true));
    };

    return (
        <div>
            <div className={classes.mobileFilterWrapper}>
                <div className={classes.closeWrapper}>
                    <CloseButton handleClick={close} style={{ margin: 0 }} />
                    <p className={classes.title}>Filter by Categories</p>
                </div>
                <div className={classes.treeItem}>
                    <OrganizerCateg orgCateg={orgCategories} type={type} />
                </div>
                <div>
                    <div className={classes.bottomTab}>
                        <button onClick={handleClear} className={classes.clear}>
                            Clear All
                        </button>
                        <button onClick={close} className={classes.show}>
                            Show Results
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
