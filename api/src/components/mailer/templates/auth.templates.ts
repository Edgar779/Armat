import { Injectable } from '@nestjs/common';
import { SendEmailCommandInput } from '@aws-sdk/client-ses';
import { DOMAIN_NAME, COMPANY_EMAIL } from '../../../util/constants';

@Injectable()
export class AuthTemplate {
  /** Generates an email template for forgetPassword */
  getForgetPassword = (token: string, email: string): SendEmailCommandInput => {
    const url = `${DOMAIN_NAME}/resetPassword?resetToken=${token}`;
    const displayUrl = `${DOMAIN_NAME}/resetPassword`;
    const mailOptions: SendEmailCommandInput = {
      Destination: { ToAddresses: [email] },
      Source: COMPANY_EMAIL,
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: 'Test Email',
        },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `<html>
              <h1>Password Reset Form submitted for armat.org</h1>
              <br>
              <h3>Dear Customer</h3> <br>
              <p>
                  There has been a request to reset the password for the account 
                  associated with this email. If you have not authorized this update,
                  please reach out to us via email at ${COMPANY_EMAIL}. 
              </p>
              <p>
                  If you have requested a password reset, please click the link below to be redirected
                  to our website in order to create a new password. 
              </p>
              <br>
              <a href=${url}>${displayUrl}</a>
              <br>
              <p>
                  Thank you for being the best part of Armat and have a great day!
              </p>
          </html> `,
          },
        },
      },
      ReplyToAddresses: ['eachbase@gmail.com'],
    };
    return mailOptions;
  };

  /** invite the user */
  invite = (email: string): SendEmailCommandInput => {
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
                  <h1>Invitation to join Armat.org</h1>
                  <br>
                  <h3>Hello, you have been invited to join Armat</h3> <br>
                  <p>
                    If you do not already have an account with us, please make your free account and you will be able to create new events
                    for others to see and subscribe to events by 100's of organizations and members just like you!
                  </p>
                  <p>
                  Note: If you already had an Armat.org account, your account has been upgraded to an Verified level account. Simply sign in and start creating events
                  </p>
                  <br>
                  <p>Create your free account <a href=${DOMAIN_NAME}/users>here</a> </p>
                  <br>
                  <p>
                    Thank you and we hope to see you in Armat soon!
                  </p>
              </html> `,
          },
        },
      },
      ReplyToAddresses: [COMPANY_EMAIL],
    };
    return mailOptions;
  };

  /** delete the member */
  delete = (email: string): SendEmailCommandInput => {
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
                    <h1>you are not organization member now hihi :)</h1>
                </html> `,
          },
        },
      },
      ReplyToAddresses: [COMPANY_EMAIL],
    };
    return mailOptions;
  };

  /** generate an email template for organizer invitations */
  organizerUpgrade = (email: string): SendEmailCommandInput => {
    const mailOptions: SendEmailCommandInput = {
      Destination: { ToAddresses: [email] },
      Source: COMPANY_EMAIL,
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: 'Invitation to become an Organizer',
        },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `<html>
              <h1>Invitation to become an Armat Organization</h1>
              <br>
              <h3>Hello, you have been invited by us to join Armat.org as an organizer</h3> <br>
              <p>
               This account will allow you to create and publish events in our platform free of charge in order to reach thousands of Armenians
               scattered accross the world. 
              </p>
           
              <br>
                <p>Create your free account <a href=${DOMAIN_NAME}/signup>here</a> </p>
              <br>   
              <p>
                Note: If you already had an Armat.org account, your account has been upgraded to an Organizer level account. Simply sign in and start creating events
              </p>
              <p>
                  Thank you and we hope to see you in Armat soon!
              </p>
          </html> `,
          },
        },
      },
      ReplyToAddresses: [COMPANY_EMAIL],
    };
    return mailOptions;
  };

  adminUpgrade = (email: string): SendEmailCommandInput => {
    const mailOptions: SendEmailCommandInput = {
      Destination: { ToAddresses: [email] },
      Source: COMPANY_EMAIL,
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: 'Invitation to become an Organizer',
        },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `<html>
              <h1>Invitation to become an Armat Organization</h1>
          </html> `,
          },
        },
      },
      ReplyToAddresses: [COMPANY_EMAIL],
    };
    return mailOptions;
  };
  managerdUpgrade = (email: string): SendEmailCommandInput => {
    const mailOptions: SendEmailCommandInput = {
      Destination: { ToAddresses: [email] },
      Source: COMPANY_EMAIL,
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: 'Invitation to become an Organizer',
        },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `<html>
              <h1>Invitation to become an Armat Organization</h1>
          </html> `,
          },
        },
      },
      ReplyToAddresses: [COMPANY_EMAIL],
    };
    return mailOptions;
  };
  memberUpgrade = (email: string): SendEmailCommandInput => {
    const mailOptions: SendEmailCommandInput = {
      Destination: { ToAddresses: [email] },
      Source: COMPANY_EMAIL,
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: 'Invitation to become an Organizer',
        },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `<html>
              <h1>Invitation to become an Armat Organization</h1>
          </html> `,
          },
        },
      },
      ReplyToAddresses: [COMPANY_EMAIL],
    };
    return mailOptions;
  };
  managerDowngrade = (email: string): SendEmailCommandInput => {
    const mailOptions: SendEmailCommandInput = {
      Destination: { ToAddresses: [email] },
      Source: COMPANY_EMAIL,
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: 'Invitation to become an Organizer',
        },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `<html>
              <h1>Invitation to become an Armat Organization</h1>
          </html> `,
          },
        },
      },
      ReplyToAddresses: [COMPANY_EMAIL],
    };
    return mailOptions;
  };

  /** generate an email template for becoming a member */
  memberDowngrade = (email: string): SendEmailCommandInput => {
    const mailOptions: SendEmailCommandInput = {
      Destination: { ToAddresses: [email] },
      Source: COMPANY_EMAIL,
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: 'Role change',
        },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `<html>
              <h1>We are sorry to inform you that the admin has changed your role to an member</h1>
              <br>
              <h3>Your account terms may have been affected by this action</h3> <br>
              <p>
                You may still browse the events on this site and subscribe to them. However, you may no longer create and/or publish events
              </p>
              <p>
                  Thank you and have a nice day!
              </p>
          </html> `,
          },
        },
      },
      ReplyToAddresses: [COMPANY_EMAIL],
    };
    return mailOptions;
  };

  /** For Testing only */
  generateTestEmail = (): SendEmailCommandInput => {
    const input: SendEmailCommandInput = {
      Destination: { ToAddresses: ['harryminasyan@gmail.com'] },
      Source: 'eachbase@gmail.com',
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: 'Test Email',
        },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `<html>
                <h1>Password Reset Form submitted for Armat.com</h1>
                
            </html> `,
          },
        },
      },
      ReplyToAddresses: ['eachbase@gmail.com'],
    };
    return input;
  };
}
