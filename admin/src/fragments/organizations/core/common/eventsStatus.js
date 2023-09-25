import React from 'react';
import { Cancel, CheckCircle, Help } from '@material-ui/icons';
import { Images } from 'theme'

export const EventsStatus = ({ item, handleDisapproved }) => {
    return (
        <React.Fragment>
            {item === 'Rejected' ? (
                <div onClick={handleDisapproved}>
                    <Cancel style={{ color: '#F07379', fontSize: '20px' }} />
                    <span>
                        {item}
                        <span> </span>
                    </span>
                </div>
            ) : item === 'Active' ? (
                <div>
                    <CheckCircle style={{ color: '#4FDC6F', fontSize: '20px' }} />
                    <span>
                        {item}
                        <span> </span>
                    </span>
                </div>
            ) : item === 'Archived' ? (
                <div>
                    <img src={Images.archiveButton} alt={'archiveButton'} style={{width:'18px', height:'18px',marginLeft:'17px'}}/>
                    <span>
                        {item}
                        <span> </span>
                    </span>
                </div>
            ) : item === 'Pending' ? (
                <div>
                    <Help style={{ color: '#A9AEBE', fontSize: '20px' }} />
                    <span>
                        {item} <span> </span>
                    </span>
                </div>
            ) :  (
                ''
            )}
        </React.Fragment>
    );
};
