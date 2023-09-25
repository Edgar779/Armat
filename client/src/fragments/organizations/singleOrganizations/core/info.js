import { Item } from './common';
import { SingleEventStyle } from './styles';
import { AvailableHours } from 'components';
import { SVGNames } from '../../../../constants';

export const Info = ({ info, selected }) => {
    const classes = SingleEventStyle();
    const checkContacts = info?.address || info?.phoneNumber || info?.email || info?.website;
    const filteredByKey = info && info?.hours && Object.fromEntries(Object.entries(info?.hours).filter(([key, value]) => value?.length));
    const checkHours = filteredByKey && Object.keys(filteredByKey).length;

    return (
        <div className={classes.InfoWrapper}>
            <div className={classes.detailsSection}>
                <div className={classes.detailsWrapper}>
                    <p className={classes.infoTitle}>Details</p>
                    <Item title={'Name:'} value={info && info?.name} />
                    {/*<Item title={'Type:'} value={info && info.type} />*/}
                    {selected?.length ? <Item type={'Category'} title={'Categories'} column={true} categItem={selected} /> : null}
                </div>

                {checkContacts && (
                    <div className={classes.detailsWrapper}>
                        <p className={classes.infoTitle}>Contacts</p>
                        {info?.address && (
                            <Item
                                IconName={SVGNames.DirectionIcon}
                                title={'Address:'}
                                value={info?.address?.formattedAddress}
                                target={'_blank'}
                                link={
                                    info?.address &&
                                    `https://www.google.com/maps?saddr=My+Location&daddr=${info?.address?.lat},${info?.address?.lng}`
                                }
                                type={'links'}
                            />
                        )}
                        {info?.phoneNumber && (
                            <Item
                                IconName={SVGNames.PhoneIcon}
                                title={'Phone Number:'}
                                link={`tel:+${info && info?.phoneNumber}`}
                                value={info && info?.phoneNumber}
                                type={'links'}
                            />
                        )}
                        {info?.email && (
                            <Item
                                IconName={SVGNames.MailIcon}
                                title={'Email:'}
                                value={info && info?.email}
                                link={`mailto:${info && info?.email}`}
                                type={'links'}
                            />
                        )}
                        {info?.website && (
                            <Item
                                IconName={SVGNames.WebsiteIcon}
                                title={'Website:'}
                                value={info && info?.website}
                                target={'_blank'}
                                type={'website'}
                                link={info && info?.website}
                            />
                        )}
                    </div>
                )}
            </div>

            <div className={classes.detailsWrapper}>
                {info?.description?.length > 15 && (
                    <div className={classes.descriptionWrapper}>
                        <p className={classes.infoTitle}>Description</p>
                        <Item title={'Description'} value={info?.description} column={true} />
                    </div>
                )}

                {info && info?.hours && checkHours && checkHours > 0 ? (
                    <div>
                        <p className={classes.infoTitle}>Hours of Operation</p>
                        <AvailableHours availabilityData={info && info?.hours} />
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};
