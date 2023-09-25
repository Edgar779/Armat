import { billingStyles } from './styles';
import { Icon } from '../../../components';
import { SVGNames } from '../../../constants';
import moment from 'moment';
import { TextRow } from '../../../components/screens/slicedText';

export const InvoicesMobile = ({ invoices }) => {
    const classes = billingStyles();

    return (
        <>
            {invoices?.map((i, j) => (
                <div className={classes.invoicesMobileCardWrapper} key={j}>
                    <div className={classes.infoRow}>
                        <p className={classes.rowTitle}>Invoice Date</p>
                        <p className={classes.rowSubTitle}>
                            {i?.ticketOrderId?.createdAt ? moment(i?.ticketOrderId?.createdAt).format('ll') : 'Not Set'}
                        </p>
                    </div>

                    <div className={classes.infoRow}>
                        <p className={classes.rowTitle}>Description</p>
                        <p className={classes.rowSubTitle}>
                            <TextRow name={i?.ticketOrderId?.ticketId?.description} textWidth={9} />
                        </p>
                    </div>
                    <div className={classes.infoRow}>
                        <p className={classes.rowTitle}>Amount</p>
                        <p className={classes.rowSubTitle}> {`$${i?.amount ? i?.amount : 0}`}</p>
                    </div>

                    <div className={classes.infoEndRow}>
                        {i?.invoicePDF && (
                            <>
                                <button
                                    className={classes.downloadButton}
                                    style={{ marginRight: '6px' }}
                                    onClick={() => window.open(i?.invoicePDF, '_blank')}>
                                    <Icon name={SVGNames.DownloadInvoice} />
                                </button>
                                <a href={i?.invoicePDF} className={classes.linkButton} style={{ marginTop: '3px' }}>
                                    <Icon name={SVGNames.ShowInvoice} />
                                </a>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};
