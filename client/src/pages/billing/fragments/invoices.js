import { billingStyles } from './styles';
import { Icon } from 'components';
import { SVGNames } from '../../../constants';
import { TextRow } from '../../../components/screens/slicedText';
import moment from 'moment';

export const Invoices = ({ invoices }) => {
    const classes = billingStyles();

    return (
        <>
            <div className={classes.invoicesTableWrapper}>
                <div className={classes.invoiceTableHead}>
                    <div className={classes.invoiceTableHeadItem} style={{ width: '30%' }}>
                        Invoice Date
                    </div>
                    <div className={classes.invoiceTableHeadItem} style={{ width: '30%' }}>
                        Description
                    </div>
                    <div className={classes.invoiceTableHeadItem} style={{ width: '20%' }}>
                        Amount
                    </div>
                    <div className={classes.invoiceTableHeadItem} style={{ width: '20%' }}>
                        Action
                    </div>
                </div>

                <div>
                    <div className={classes.invoiceTableBodyWrapper}>
                        {invoices?.map((i, j) => (
                            <div className={classes.invoiceTableBody} key={j}>
                                <div className={classes.invoiceTableBodyItem} style={{ width: '30%' }}>
                                    {i?.ticketOrderId?.createdAt ? moment(i?.ticketOrderId?.createdAt).format('ll') : 'Not Set'}
                                </div>
                                <div className={classes.invoiceTableBodyItem} style={{ width: '30%' }}>
                                    <TextRow name={i?.ticketOrderId?.ticketId?.description} textWidth={9} />
                                </div>
                                <div className={classes.invoiceTableBodyItem} style={{ width: '20%' }}>
                                    {`$${i?.amount ? i?.amount : 0}`}
                                </div>
                                <div className={classes.invoiceTableBodyItem} style={{ width: '20%%' }}>
                                    {i?.invoicePDF && (
                                        <>
                                            <button className={classes.downloadButton} onClick={() => window.open(i?.invoicePDF, '_blank')}>
                                                <Icon name={SVGNames.DownloadInvoice} />
                                            </button>
                                            <a href={i?.invoicePDF} className={classes.linkButton}>
                                                <Icon name={SVGNames.ShowInvoice} />
                                            </a>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
