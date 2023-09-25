import { SendEmailCommandInput } from '@aws-sdk/client-ses';
// import { DOMAIN_NAME } from 'src/util/constants';
import { COMPANY_EMAIL } from '../mailer.contants';

export class EventTemplate {
  /** generate an email template for member invitations */
  eventCreated = (email: string, orgName: string): SendEmailCommandInput => {
    const mailOptions: SendEmailCommandInput = {
      Destination: { ToAddresses: [email] },
      Source: COMPANY_EMAIL,
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: 'none',
        },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `<html>
                <h1>New Event Notification</h1>
                <br>
                <h3>Hi, An organization that you follow on Armat has published a new event</h3> <br>
                <p>
                  Go to Armat.org and check the new event that ${orgName} has created.
                </p>
            </html> `,
          },
        },
      },
      ReplyToAddresses: [COMPANY_EMAIL],
    };
    return mailOptions;
  };
}
