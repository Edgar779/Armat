import { Injectable } from '@nestjs/common';
import { SendEmailCommandInput } from '@aws-sdk/client-ses';
import { COMPANY_EMAIL } from '../../../util/constants';

@Injectable()
export class ContactTemplate {
  /** creates the contact command input */
  getContact = (name: string, email: string, description: string): SendEmailCommandInput => {
    const input: SendEmailCommandInput = {
      Destination: { ToAddresses: [COMPANY_EMAIL] },
      Source: 'eachbase@gmail.com',
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: 'Contact Form Submitted from Armat.org',
        },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `<html>
                <h1>Contact Form submitted for Armat.com</h1>
                <h3> name:  ${name} </h3>
                <h3> name:  ${email} </h3>
                <h3> name:  ${description} </h3>
            </html> `,
          },
        },
      },
      ReplyToAddresses: [email],
    };
    return input;
  };
}
