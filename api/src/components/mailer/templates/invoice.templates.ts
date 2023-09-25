import { Injectable } from '@nestjs/common';
import { SendEmailCommandInput } from '@aws-sdk/client-ses';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { MailComposer } = require('nodemailer');

@Injectable()
export class InvoiceTemplate {
  /** send invoice pdf */
  sendInvoice = (email: string, link: string): any => {
    const mail = new MailComposer({
      from: process.env.COMPANY_EMAIL,
      to: email,
      subject: 'Sample SES message with attachment',
      text: 'Hey folks, this is a test message from SES with an attachment.',
      html: `<html>
            <body style="  overflow: hidden; padding: 0 40px; font-family: Open Sana,sans-serif">
            <div style="display: block; background: #F5F7F9; height: 100%; width: 100%; margin: 0 auto;  padding: 40px 0px">
                <h1>Success</h1>
            </div>
            </body>
          </html> `,
      attachments: [
        {
          filename: 'invoice.pdf',
          path: link,
        },
      ],
    });
    return mail;
  };

  /**generate an email template to remind the customer to updating their payment menthod */
  generateInactiveNotice(email: string, dueDate: Date): SendEmailCommandInput {
    const mail = new MailComposer({
      from: process.env.COMPANY_EMAIL,
      to: email,
      subject: 'Account Inactivation notice',
      text: '',
      html: `<html>
            <body style="  overflow: hidden; padding: 0 40px; font-family: Open Sana,sans-serif">
            <div style=" display: block; background: #F5F7F9; height: 100%; width: 100%; margin: 0 auto;  padding: 40px 0px">
            <h1>Failed</h1>
            </div>
            </body>
          </html> `,
    });
    return mail;
  }
}
