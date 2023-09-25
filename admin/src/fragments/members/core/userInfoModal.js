import { InfoPopup } from 'components';
import React from 'react';
import { membersFragmentStyle } from './style';
import { Images } from 'theme';

export const UserInfoModal = ({ open, handleClick }) => {
    const classes = membersFragmentStyle();
    return (
        <InfoPopup handleClick={handleClick} open={open}>
            <div>
                <div className={classes.UserInfo}>
                    <img src={open?.avatar ? open.avatar?.thumbUrl : Images.avatar} alt={'Avatar'} />
                    <p>{open.fullName}</p>
                </div>

                <div className={classes.UserInfoFragments}>
                    <div>
                        <div className={classes.IconStyle}>
                            <img src={Images.whiteEmail} alt={'Email'} />
                        </div>
                        <p>Email Address</p>
                    </div>
                    <div>
                        <span>{open.email ? open.email : 'Not Set'}</span>
                    </div>
                </div>

                <div className={classes.UserInfoFragments}>
                    <div>
                        <div className={classes.IconStyle}>
                            <img src={Images.whitePhone} alt={'WhitePhone'} />
                        </div>
                        <p>Phone Number</p>
                    </div>
                    <div>
                        <span>{open.phoneNumber ? open.phoneNumber : 'Not Set'}</span>
                    </div>
                </div>

                <div className={classes.UserInfoFragments}>
                    <div>
                        <div className={classes.IconStyle}>
                            <img src={Images.whiteUser} alt={'WhiteUser'} />
                        </div>

                        <p>Role</p>
                    </div>
                    <div>
                        <span>{open.auth ? open.auth.role : '...'}</span>
                    </div>
                </div>

                <div className={classes.UserInfoFragments}>
                    <div>
                        <div className={classes.SwitchIconStyle}>
                            <img src={Images.whiteSwitch} alt={'WhiteSwitch'} />
                        </div>
                        <p>Status</p>
                    </div>
                    <div>
                        <span>{'Activated'}</span>
                    </div>
                </div>

                {open.auth && open.auth.role === 'ORGANIZER' ? (
                    <div style={{ marginTop: '35px' }}>
                        <div className={classes.UserInfo}>
                            <p>{open.organizerInfo ? open.organizerInfo.contactName : 'Not Set'}</p>
                        </div>

                        <div className={classes.UserInfoFragments}>
                            <div>
                                <div className={classes.IconStyle}>
                                    <img src={Images.whiteEmail} alt={'Email'} />
                                </div>
                                <p>Email Address</p>
                            </div>
                            <div>
                                <span>{open.organizerInfo ? open.organizerInfo.contactEmail : 'Not Set'}</span>
                            </div>
                        </div>

                        <div className={classes.UserInfoFragments}>
                            <div>
                                <div className={classes.IconStyle}>
                                    <img src={Images.whitePhone} alt={'WhitePhone'} />
                                </div>
                                <p>Phone Number</p>
                            </div>
                            <div>
                                <span>{open.organizerInfo ? open.organizerInfo.contactPhone : 'Not Set'}</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </InfoPopup>
    );
};
