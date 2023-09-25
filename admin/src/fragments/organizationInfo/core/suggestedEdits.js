import { Backdrop, Fade, Modal, Paper, Table, TableContainer } from '@material-ui/core';
import React, { useState } from 'react';
import { SuggestedTableBodyFragment, SuggestedTableHeadFragment } from './suggested';
import { organizationInfoStyles } from './styles';
import { CloseButton, SimpleModal } from 'components';
import { CreateEventStyle } from '../../createOrgs/core';
import { AvailableHours } from '../../../components/availability';
import ReactHtmlParser from 'react-html-parser';
import { Item } from './item';

export const SuggestedEdits = ({ edits, selected }) => {
    const classes = organizationInfoStyles();
    const [open, setOpen] = useState(false);
    const [info, setInfo] = useState('');

    const handleOpenModal = (item) => {
        setOpen(!open);

        const newIt = {
            ...item,
        };
        delete newIt.createdAt;
        delete newIt.editor;
        delete newIt.id;
        setInfo(newIt);

    };
    const handleClose = () => {
        setOpen(!open);
        setInfo('');
    };
    const modalClasses = CreateEventStyle();
    const itemText = info && Object.keys(info)[0];

    return (
        <div style={{ marginTop: '120px' }}>
            <p style={{ marginBottom: '24px' }} className={classes.title}>Suggested Edits</p>
            <TableContainer style={{ boxShadow: 'none' }} component={Paper}>
                {edits && edits.length ?
                    <Table size='small' aria-label='a dense table'>
                        <SuggestedTableHeadFragment />
                        {edits && edits.length && edits.map((i, j) => (
                            Object.keys(i).length > 3 &&
                            <React.Fragment key={j}>
                                <SuggestedTableBodyFragment handleOpenModal={handleOpenModal} items={i} />
                            </React.Fragment>
                        ))}
                    </Table>
                    :
                    <div className={classes.noInfo}>
                        <p>No Suggested Edits</p>
                    </div>
                }

            </TableContainer>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={modalClasses.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <div style={{ height: 'auto', width: '500px' }} className={modalClasses.paper}>
                        <CloseButton handleClick={handleClose} />
                        <div className={modalClasses.modalBody}>
                            <p style={{ margin: '16px 0' }}
                               className={classes.title}>Change {
                                itemText === 'hours' ? 'Hours' :
                                    itemText === 'phoneNumber' ? 'Phone Number' :
                                        itemText === 'name' ? 'Name' :
                                            itemText === 'address' ? 'Address' :
                                                itemText === 'email' ? 'Email' :
                                                    itemText === 'categories' ? 'Categories' :
                                                        itemText === 'description' ? 'Description' : ''

                            } to </p>
                            <div>
                                {info && Object.keys(info)[0] === 'hours' &&
                                <AvailableHours availabilityData={info && info.hours} />
                                }
                                {info && Object.keys(info)[0] !== 'hours' &&
                                         Object.keys(info)[0] !== 'description' &&
                                         Object.keys(info)[0] !== 'categories' &&
                                <p>{info && Object.values(info)}</p>
                                }
                                {info && Object.keys(info)[0] === 'description' &&
                                <p className={classes.desc}>
                                    <Item title={'Description'} value={info && Object.values(info)} column={true}/>
                                    {/*{info && ReactHtmlParser(Object.values(info))}*/}
                                </p>
                                }

                                {info && Object.keys(info)[0] === 'categories' &&
                                <p>
                                    <Item title={''} type={'Category'}   column={true} categItem={selected}/>
                                </p>
                                }

                            </div>
                        </div>
                    </div>

                </Fade>
            </Modal>
        </div>
    );
};