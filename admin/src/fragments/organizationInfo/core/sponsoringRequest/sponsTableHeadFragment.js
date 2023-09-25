import React, {useState} from 'react';
import { suggestedStyle} from './style';
import {TableHead, TableRow, TableCell} from '@material-ui/core';
import {SortByAz, SortByDate} from 'components';
import {useDispatch, useSelector} from 'react-redux';
import {EventsActions} from 'store';

export const SponsTableHeadFragment = ({type}) => {
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

  const classes = suggestedStyle();
  return (
    <TableHead className={classes.tableHead}>
      <TableRow>
        <TableCell className={classes.TableHeadNumber}>Event Date
          <SortByDate DateLoader={dateLoader} ByDate={ByDate} DefaultDate={filterByDefaultDate}
                      FilterDate={filterByDate}/>
        </TableCell>
        <TableCell className={classes.TableHeadNumber}>Requested by
          <SortByAz
              filterLoader={filterTitleLoader}
              ByAz={ByAzTitle}
              filterByAlphabetical={() => filterByAlphabetical('Event')}
              removeFilterByAlphabetical={() => removeFilterByAlphabetical('Event')}
          />
        </TableCell>
        <TableCell>
          Event Title
        </TableCell>
        <TableCell>
          Note
        </TableCell>
        <TableCell>
          Actions
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
