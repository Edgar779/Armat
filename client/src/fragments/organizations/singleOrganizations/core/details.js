import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { SingleEventStyle } from './styles';
import { Icon, MiniLoader } from 'components';
import { SVGNames } from 'constants/index';
import { organizationActions } from 'store';
import { FindLoad } from 'utils';
import { ModalContext } from 'contexts';
import { Button } from '@material-ui/core';

export const Details = ({ item, creatorInfo, claimedInfo, creatorInfoNoAdmin }) => {
    const classes = SingleEventStyle();
    const dispatch = useDispatch();
    const loader = FindLoad('CLAIMS');
    const suggestLoader = FindLoad('GET_SUGGEST_INFO');
    const router = useRouter();
    const token = typeof window !== 'undefined' && localStorage.getItem('access-token');
    let { openModal } = useContext(ModalContext);

    const handleClaim = () => {
        if (token) {
            dispatch(organizationActions.claim(item && item?.id));
        } else {
            openModal.auth();
        }
    };

    const handleSuggest = () => {
        if (token) {
            router.push({
                pathname: `editOrganization`,
                query: {
                    type: item?.type === 'NON_PROFIT' ? 'Nonprofit' : 'Business',
                    orgId: item?.id,
                },
            });
            // router.push(`editOrganization?orgId=${item && item.id}`);
        } else {
            openModal.auth();
        }
    };

    const aboutClaim = creatorInfoNoAdmin === true ? true : creatorInfoNoAdmin === true ? true : !!(item && item?.manager && item?.manager);
    // const userType = checkUser();

    return (
        <div>
            <div className={classes.buttonsWrapper}>
                {/*{userType !== true && (*/}
                <>
                    {claimedInfo ? (
                        <div className={classes.claimed}>
                            <Icon name={SVGNames.ClaimedIcon} width={'24px'} height={'24px'} />
                            Your Claim is Pending
                        </div>
                    ) : aboutClaim ? (
                        <div className={classes.claimed}>
                            <Icon name={SVGNames.ClaimedIcon} width={'24px'} height={'24px'} />
                            Claimed
                        </div>
                    ) : (
                        <Button onClick={handleClaim} style={{ marginRight: '24px' }}>
                            {loader.length ? (
                                <div style={{ marginRight: '16px' }}>
                                    <MiniLoader />
                                </div>
                            ) : (
                                <div className={classes.buttonsIcon}>
                                    <Icon name={SVGNames.Claim} style={{ marginRight: '8px' }} width={'24px'} height={'24px'} />
                                </div>
                            )}
                            {`Claim ${item.type === 'BUSINESS' ? 'Business' : item.type === 'NON_PROFIT' ? 'Nonprofit' : ''}`}
                        </Button>
                    )}
                    <Button onClick={handleSuggest}>
                        {suggestLoader.length ? (
                            <div style={{ marginRight: '16px' }}>
                                <MiniLoader />
                            </div>
                        ) : (
                            <div className={classes.buttonsIcon}>
                                <Icon name={SVGNames.SugEdit} style={{ marginRight: '8px' }} width={'24px'} height={'24px'} />
                            </div>
                        )}
                        {creatorInfo ? 'Edit' : 'Suggest Edits'}
                    </Button>
                </>
                {/*)}*/}
            </div>
        </div>
    );
};
