import React from 'react';
import {useSelector} from "react-redux";
import {Cancel, CheckCircle, Help} from '@material-ui/icons';
import {useGlobalStyles, Images} from 'theme';

export const EventsStatus = ({item}) => {
    const globalClasses = useGlobalStyles()
    const {disapproved, unpublished, publish, pending} = useSelector((state) => ({
    disapproved: state.event.disapproved,
    unpublished: state.event.unpublished,
    publish: state.event.publish,
    pending: state.event.pending,
  }));

  return (
    <React.Fragment>
      {item.slice(0, 1) === 'D' ? (
        <div>
          <Cancel style={{color: '#F07379', fontSize: '20px', marginRight: '10px'}}/>
          <p style={{color: '#545F7E'}}
             className={globalClasses.lengthStyle}>Disapproved <span>{`(${disapproved ? disapproved.length : '0'})`}</span>
          </p>
        </div>
      ) : item.slice(0, 1) === 'A' ? (
        <div>
          <CheckCircle style={{color: '#4FDC6F', fontSize: '20px', marginRight: '10px'}}/>
          <p style={{color: '#545F7E'}}
             className={globalClasses.lengthStyle}>Approved <span>{`(${publish ? publish.length : '0'})`}</span></p>
        </div>
      ) : item.slice(0, 2) === 'Pe' ? (
        <div>
          <Help style={{color: '#545F7E80', fontSize: '20px', marginRight: '10px'}}/>
          <p style={{color: '#545F7E'}}
             className={globalClasses.lengthStyle}>Pending <span>{`(${pending ? pending.length : '0'})`}</span></p>
        </div>
      ) :

          (
        <div style={{paddingLeft: '18px'}}>
          <img style={{width: '18px', height: '18px', marginRight: '10px'}} src={Images.unpublished}
               alt={'Unpublished'}/>
          <p style={{color: '#545F7E'}}
             className={globalClasses.lengthStyle}>Unpublished <span>{`(${unpublished ? unpublished.length : '0'})`}</span>
          </p>
        </div>
      )}
    </React.Fragment>
  );
};
