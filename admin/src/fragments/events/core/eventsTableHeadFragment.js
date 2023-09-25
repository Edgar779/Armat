import React, {useState} from 'react';
import {membersFragmentStyle} from './style';
import {TableHead, TableRow, TableCell} from '@material-ui/core';
import {SimplePopover, SortByAz, SortByDate} from 'components';
import {useDispatch, useSelector} from 'react-redux';
import {EventsActions} from 'store';
import {FilterEventsType} from './filterEventsType';

export const EventsTableHeadFragment = ({type}) => {
  const [ByAz, setByAz] = useState(false);
  const [ByAzTitle, setByAzTitle] = useState(false);
  const [ByDate, setByDate] = useState(true);
  const dispatch = useDispatch();

  const {filterLoader, filterTitleLoader, dateLoader, online, physical} = useSelector((state) => ({
    filterLoader: state.event.filterLoader,
    filterTitleLoader: state.event.filterTitleLoader,
    dateLoader: state.event.dateLoader,
    physical: state.event.physical,
    online: state.event.online,
  }));

  const filterByAlphabetical = (name) => {
    dispatch(EventsActions.ByAlphabeticalOrganizers(name, type));
    name === 'Organizer' ? setByAz(true) : setByAzTitle(true);
  };

  const removeFilterByAlphabetical = (name) => {
    dispatch(EventsActions.ByAlphabeticalOrganizersDefault(type));
    setByAz(false);
    setByAzTitle(false);
  };

  const filterByDate = () => {
    setByDate(false);
    dispatch(EventsActions.ByDateEvents(type));
  };

  const filterByDefaultDate = () => {
    setByDate(true);
    dispatch(EventsActions.ByAlphabeticalOrganizersDefault(type));
  };

  const classes = membersFragmentStyle();
  return (
    <TableHead className={classes.tableHead}>
      <TableRow>
        <TableCell style={{borderLeft:'5px solid #387DFF1A'}} className={classes.TableHeadNumber}>№</TableCell>
        <TableCell>
          Date
          <SortByDate DateLoader={dateLoader} ByDate={ByDate} DefaultDate={filterByDefaultDate}
                      FilterDate={filterByDate}/>
        </TableCell>
        {type !== 'MyEvents' &&
        <TableCell>
          Organizer Name
          <SortByAz
            filterLoader={filterLoader}
            ByAz={ByAz}
            filterByAlphabetical={() => filterByAlphabetical('Organizer')}
            removeFilterByAlphabetical={() => removeFilterByAlphabetical('Organizer')}
          />
        </TableCell>
        }
        <TableCell>
          Event Title
          <SortByAz
            filterLoader={filterTitleLoader}
            ByAz={ByAzTitle}
            filterByAlphabetical={() => filterByAlphabetical('Event')}
            removeFilterByAlphabetical={() => removeFilterByAlphabetical('Event')}
          />
        </TableCell>

        <TableCell>
          Type
          <FilterEventsType
            physical={physical}
            online={online}
            Type={type} List={[`Physical`, `Online`]}/>
        </TableCell>

        <TableCell>Action</TableCell>
        <TableCell>
          Status
          <SimplePopover
            className={'BigLeft'}
            filterType={'Filter the Status'}
            List={type === 'MyEvents' ? [`Approved`, `Disapproved`, `Unpublished`] : [`Approved`, `Disapproved`, `Pending`, `Unpublished`]}
          />
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
