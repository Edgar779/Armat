import React from 'react';
import { Cancel, CheckCircle, Help } from '@material-ui/icons';
import { Images } from 'theme'

export const EventsStatus = ({ item, handleDisapproved }) => {
    return (
        <React.Fragment>
            {item === 'Disapprove' ? (
                <div onClick={handleDisapproved}>
                    <Cancel style={{ color: '#F07379', fontSize: '20px' }} />
                    <span>
                        {item}
                        <span> </span>
                    </span>
                </div>
            ) : item === 'Publish' ? (
                <div>
                    <CheckCircle style={{ color: '#4FDC6F', fontSize: '20px' }} />
                    <span>
                        {item}
                        <span> </span>
                    </span>
                </div>
            ) : item === 'Approve' ? (
                <div>
                    <CheckCircle style={{ color: '#4FDC6F', fontSize: '20px' }} />
                    <span>
                        {item}
                        <span> </span>
                    </span>
                </div>
            ) : item === 'Pending' ? (
                <div>
                    <Help style={{ color: '#545F7E80', fontSize: '20px' }} />
                    <span>
                        {item} <span> </span>
                    </span>
                </div>
            ) : item === 'Unpublish' ? (
                <div style={{ paddingLeft: '18px' }}>
                    <img style={{ width: '18px', height: '18px' }} src={Images.unpublished} alt={'Unpublished'} />
                    <span>
                        {item} <span> </span>
                    </span>
                </div>
            ) : (
                ''
            )}
        </React.Fragment>
    );
};
