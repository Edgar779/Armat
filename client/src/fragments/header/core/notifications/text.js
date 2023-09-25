import React from 'react';
import { useRouter } from 'next/router';
import { Colors } from 'utils';

export const Text = ({ type, info, classes, handleClose, handleSeeComment }) => {
    const router = useRouter();
    const handleGetLink = () => {
        router.push(`singleOrganization?orgid=${info.org.id}`);
        handleClose();
    };

    return (
        <p>
            {
                type === 'EVENT_APPROVED' ? (
                    <span>
                        Your event&nbsp;
                        <span
                            onClick={() => router.push(`singleEvent?eventid=${info.event.eventId}`)}
                            style={{ color: Colors.ThemeGreen, cursor: 'pointer' }}>
                            {info && info.event && info.event.eventName}
                        </span>
                        &nbsp;was approved
                    </span>
                ) : type === 'EVENT_DISAPPROVED' ? (
                    <span>
                        Your event has been disapproved.
                        <span
                            style={{ color: Colors.ThemeGreen, cursor: 'pointer' }}
                            onClick={() => (info.event && info.event.eventId ? handleSeeComment(info.event.eventId) : '')}>
                            &nbsp;See the comment
                        </span>
                    </span>
                ) : type === 'CLAIM_APPORVED' ? (
                    <span>
                        Claim to
                        <button onClick={handleGetLink} className={classes.linkButton}>
                            {type === 'CLAIM_APPORVED' ? info.org && info.org.name : ''}{' '}
                        </button>
                        was approved
                    </span>
                ) : type === 'CLAIM_REJECTED' ? (
                    <span>
                        Claim to
                        <button onClick={handleGetLink} className={classes.linkButton}>
                            {type === 'CLAIM_REJECTED' ? info.org && info.org.name : ''}{' '}
                        </button>
                        was rejected
                    </span>
                ) : type === 'UPGRADE_VERIFITED' ? (
                    `${info.inviter}  invites you to become a Verified Member to create events and invite people`
                ) : type === 'DOWNGRADE_MEMBER' ? (
                    `You have become an Unverified Member. Now you cannot create events and invite people`
                ) : type === 'UPGRADE_ORGANIZER' ? (
                    `Congrats! You have become an Organizer. Now you can create & publish events and invite people`
                ) : type === 'UPGRADE_ORGANIZATION_ADMIN' ? (
                    'Congrats! You have become an Organization Admin'
                ) : type === 'UPGRADE_ORGANIZATION_ORGANIZER' ? (
                    'Congrats! You have become an Organization Organizer'
                ) : type === 'DOWNGRADE_ORGANIZATION_MANAGER' ? (
                    'You have become an Organization Manager'
                ) : type === 'DOWNGRADE_ORGANIZATION_MEMBER' ? (
                    'You have become an Organization Member'
                ) : type === 'UPGRADE_ORGANIZATION_MEMBER' ? (
                    'Congrats! You have become an Organization Member'
                ) : type === 'UPGRADE_ORGANIZATION_MANAGER' ? (
                    'Congrats! You have become an Organization Manager'
                ) : (
                    ''
                )

                // You have become an Unverified Member.
            }
        </p>
    );
};
