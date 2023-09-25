import React, { useContext, useEffect, useState } from 'react';
import * as moment from 'moment';
import { Details, SingleEventStyle, Info, Reviews, Events, SponsoreTable } from './core';
import { Icon, SimpleModal } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { organizationActions } from 'store';
import { FindLoad } from 'utils';
import axios from 'axios';
import { SVGNames } from 'constants/index';
import { SocialButtons } from './core/common/socialButtons';
import { ReviewInfoModal } from './core/common/reviewInfoModal';
import { ModalContext } from 'contexts';
import { Button } from '@material-ui/core';
import { canManageOrg, canManageOrgNoAdmin } from '../../../utils/canManageOrg';
import Loader from 'react-loader-spinner';

export const SingleOrganizations = ({ info, handleOpenClose, follow, orgCategories, claimedInfo }) => {
    const { orgEvents, pendingSponsors, sponsors } = useSelector((state) => ({
        orgEvents: state.orgs.orgEvents,
        sponsors: state.event.sponsors,
        pendingSponsors: state.event.pendingSponsors,
    }));
    const classes = SingleEventStyle();
    const dispatch = useDispatch();
    const loaderFollow = FindLoad('FOLLOW');
    const loaderUnfollow = FindLoad('UNFOLLOW');
    let { openModal } = useContext(ModalContext);
    const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('userInfo'));
    const creatorInfo = canManageOrg(user, info);
    const creatorInfoNoAdmin = canManageOrgNoAdmin(user, info);
    const [reviews, setReviews] = useState('');
    const [openReviewModal, setOpenReviewModal] = useState(false);
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(false);
    const [modalType, setModalType] = useState(false);

    const handleGetNewInfo = () => {
        if (info) {
            axios.get(`/orgs/${info.id}/socials`).then((res) => setReviews(res.data));
        }
    };

    useEffect(() => {
        if (info && info.id) {
            handleGetNewInfo();
        }
    }, [info]);

    const followOrg = () => {
        if (user) {
            const date = {
                org: info.id,
            };
            if (follow.length > 0) {
                dispatch(organizationActions.unfollow(info.id));
            } else {
                dispatch(organizationActions.follow(date));
            }
        } else {
            openModal.auth();
        }
    };

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

    const handleGetTree = async () => {
        const newItems = (await orgCategories.length) && info.categories.map((h) => orgCategories.map((i) => getParent(i, h.id)));
        const arr = [];
        newItems && newItems.filter((k) => k.map((l) => l !== undefined && arr.push(l)));
        setSelected([...arr]);
    };

    useEffect(() => {
        if (info?.categories) {
            handleGetTree();
        }
    }, [info]);

    const handleOpenCloseButtons = (type) => {
        setModalType(type), setOpen(!open);
    };

    const handleOpenCloseReview = (type) => {
        setModalType(type), setOpenReviewModal(!openReviewModal);
    };

    const eventByOrg = creatorInfo === true ? true : orgEvents && orgEvents?.length > 0;
    const sponsorByOrg = sponsors && sponsors?.length > 0;
    const googleYelpReviews = creatorInfo === true ? true : (reviews && reviews?.yelpReviews?.reviews) || reviews?.googleReviews?.reviews;
    const linksReviews =
        creatorInfo === true
            ? true
            : reviews?.yelpLink ||
              reviews?.facebookLink ||
              reviews?.youtubeLink ||
              reviews?.instagramLink ||
              reviews?.googleLink ||
              reviews?.twitterLink;

    return (
        <div>
            <div className={info?.images?.length > 0 ? classes.backDrop : ''}>
                <img
                    className={classes.singleImage}
                    src={
                        info?.images?.length > 0
                            ? info?.images[info?.mainImage ? info?.mainImage : 0].url
                            : '/assets/images/singleEvent/noImage.svg'
                    }
                    alt=""
                />
            </div>
            <div className={classes.singleOrgInfo}>
                <div className={classes.orgAvatar}>
                    <div className={classes.orgAvatarImage}>
                        <img
                            className={info?.avatar ? classes.orgImg : classes.orgImgSmall}
                            src={info?.avatar ? info?.avatar?.url : '/assets/icons/FI/companyIcon.svg'}
                            alt={'avatar'}
                        />
                    </div>
                    <div>
                        <p className={classes.title}>{info?.name}</p>
                        <p className={classes.subTitle}>Created: {info && moment(info?.createdAt).format('MM/DD/YYYY')}</p>
                    </div>
                </div>
                <div className={classes.buttons}>
                    {info?.images && (
                        <Button onClick={handleOpenClose} className={classes.view}>
                            View Photos
                        </Button>
                    )}
                    <div className="followUnfollowButton">
                        <button
                            onClick={followOrg}
                            className={loaderUnfollow?.length ? 'pending' : follow?.length > 0 ? 'unfollow' : 'follow'}>
                            {!!loaderFollow?.length || !!loaderUnfollow?.length ? (
                                <Loader type="ThreeDots" color="#FFFFFF" height={16} width={16} style={{ margin: '0', padding: '0' }} />
                            ) : (
                                <span> {follow?.length > 0 ? 'Following' : 'Follow'}</span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className={classes.pagePadding}>
                <Details creatorInfo={creatorInfo} creatorInfoNoAdmin={creatorInfoNoAdmin} item={info} claimedInfo={claimedInfo} />
                <Info creatorInfo={creatorInfo} info={info} selected={selected} />
            </div>

            <div className={classes.reviewsBody}>
                {googleYelpReviews ? (
                    <div className={classes.reviews}>
                        <div className={classes.editButton}>
                            <p className={classes.reviewsTitle}>Reviews</p>
                            {creatorInfo === true ? (
                                <button onClick={() => handleOpenCloseButtons('review')}>
                                    <Icon name={SVGNames.EditPen} style={{ marginRight: '8px' }} />
                                    Edit
                                </button>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className={classes.reviewItems}>
                            {reviews && reviews?.yelpReviews && reviews?.yelpReviews?.numReviews && (
                                <Reviews
                                    handleClick={() => handleOpenCloseReview('Yelp')}
                                    type={'Yelp'}
                                    count={reviews?.yelpReviews?.numReviews}
                                    stars={reviews?.yelpReviews?.rating}
                                />
                            )}
                            {reviews && reviews?.googleReviews && reviews?.googleReviews?.numReviews && (
                                <Reviews
                                    handleClick={() => handleOpenCloseReview('Google')}
                                    type={'Google'}
                                    count={reviews?.googleReviews?.numReviews}
                                    stars={reviews?.googleReviews?.rating}
                                />
                            )}
                        </div>
                    </div>
                ) : (
                    ''
                )}

                {linksReviews ? (
                    <div className={classes.reviewsMobileDesktop}>
                        <div className={classes.editButton}>
                            <p className={classes.reviewsTitle}>Connect with us</p>
                            {creatorInfo === true ? (
                                <button onClick={() => handleOpenCloseButtons('social')}>
                                    <Icon name={SVGNames.EditPen} style={{ marginRight: '8px' }} />
                                    Edit
                                </button>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className={classes.socialIcons}>
                            {reviews?.yelpLink && (
                                <a href={reviews?.yelpLink} target={'_blank'} rel="noreferrer">
                                    <Icon name={SVGNames.Yelp} />
                                </a>
                            )}
                            {reviews?.facebookLink && (
                                <a href={reviews?.facebookLink} target={'_blank'} rel="noreferrer">
                                    <Icon name={SVGNames.Facebook} />
                                </a>
                            )}
                            {reviews?.youtubeLink && (
                                <a href={reviews.youtubeLink} target={'_blank'} rel="noreferrer">
                                    <Icon name={SVGNames.Youtube} />
                                </a>
                            )}
                            {reviews?.instagramLink && (
                                <a href={reviews.instagramLink} target={'_blank'} rel="noreferrer">
                                    <Icon name={SVGNames.Instagram} />
                                </a>
                            )}
                            {reviews?.googleLink && (
                                <a href={reviews.googleLink} target={'_blank'} rel="noreferrer">
                                    <Icon name={SVGNames.Google} />
                                </a>
                            )}
                            {reviews?.twitterLink && (
                                <a href={reviews.twitterLink} target={'_blank'} rel="noreferrer">
                                    <Icon name={SVGNames.Twitter} />
                                </a>
                            )}
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>

            {eventByOrg || sponsorByOrg || (creatorInfo === true && pendingSponsors && pendingSponsors?.length > 0) ? (
                <div className={classes.eventsAndSponsors}>
                    <Events
                        eventByOrg={eventByOrg}
                        sponsorByOrg={sponsorByOrg}
                        creatorInfo={creatorInfo}
                        info={info}
                        orgEvents={orgEvents}
                        // pendingSponsors={pendingSponsors}
                        sponsors={sponsors}
                    />
                    {creatorInfo === true && pendingSponsors && pendingSponsors?.length > 0 ? (
                        <div className={classes.events}>
                            <p className={classes.eventsTitle}>Sponsoring Requests</p>
                            <div style={{ marginTop: '24px' }}>
                                <SponsoreTable info={pendingSponsors} />
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            ) : (
                ''
            )}

            <SimpleModal
                openDefault={open}
                handleOpenClose={handleOpenCloseButtons}
                content={
                    <SocialButtons
                        reviews={reviews}
                        handleClose={handleOpenCloseButtons}
                        handleGetNewInfo={handleGetNewInfo}
                        modalType={modalType}
                        id={info?.id}
                    />
                }
            />

            <SimpleModal
                openDefault={openReviewModal}
                handleOpenClose={handleOpenCloseReview}
                content={
                    <ReviewInfoModal
                        modalType={modalType}
                        info={modalType === 'Yelp' ? reviews?.yelpReviews : reviews?.googleReviews}
                        handleClose={handleOpenCloseReview}
                    />
                }
            />
        </div>
    );
};
