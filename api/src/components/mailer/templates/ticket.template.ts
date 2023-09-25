import { Injectable } from '@nestjs/common';
import { SendEmailCommandInput } from '@aws-sdk/client-ses';
import { COMPANY_EMAIL } from '../../../util/constants';
const MailComposer = require('nodemailer/lib/mail-composer');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
@Injectable()
export class TicketTemplate {
    /** send order detail */
    send = (dayName, day, year, allTicketsCount, groupOrders, event, totalAmount, orderId, ticketLinks, email): any => {
        const dom = new JSDOM(`<!DOCTYPE html><html>
        
<body style="overflow: auto; overflow-x: hidden;  font-family: Open Sana,sans-serif; background: #FAFAFA;  margin: 0">
<div style=" display: block; background: #FAFAFA; height: 100%; width: 100%; margin: 0 auto;  padding: 40px;">
  <div style="display: flex; justify-content: center">
    <p style="color:  #00783E;font-size: 32px;font-style: normal;font-weight: 700; line-height: normal;">Armat.org</p>
  </div>
  <div style="margin: 0 auto; display: flex; flex-direction: column; justify-content: center">
    <p style="margin: 0 auto;color:  #222;text-align: center;font-size: 24px;font-weight: 700;"> You have got
      tickets</p>
    <img
      style="margin: 32px auto 40px; width: 80px; height: 80px; display: block!important;"
      src="https://i.ibb.co/86CZ3vQ/Icon.png" alt="Icon"
    >
    <div style="margin: 0 auto; ">
      <a href="https://armat.org/myTickets"
         style=" width: 164px;height: 48px;padding: 11px 24px;border-radius: 8px; background:  #1CAA60;color: white;text-decoration: none;font-weight: 600;">
        View Tickets
      </a>
    </div>
    <div style="margin: 0 auto">
      <div style="border-radius: 8px; background: #F4F4F4; margin-top: 48px; max-width: 740px; width: auto; padding: 32px">
        <p style="color: #222;font-size: 24px;font-weight: 700;text-transform: uppercase;margin-bottom: 32px"> ${event?.title}</p>
        <img style="margin: 32px 0; width: 670px; height: 270px; object-fit: cover; display: block!important;"
             src="${event.images[0]?.url ? event.images[0]?.url : 'https://i.ibb.co/nbvGp89/Image.png'}" alt="Image">
        <div>
          <div style=" display: flex;align-items: flex-start;margin-bottom: 32px;">
            <img
              style="display: block!important;width: 24px; height: 24px; margin-top: -2px" alt="icon"
              src="https://i.ibb.co/9TNCmXJ/ticket-10-1.png"
            >
            <div style="margin-left: 16px">
              <p style="color: #222;font-size: 16px;font-weight: 700; margin-top: 0">${allTicketsCount} x Ticket</p>
              <p style="color: #767676;font-size: 18px;font-weight: 400; margin: 0">Order Total: $ ${totalAmount}</p>
            </div>
          </div>
          <div style=" display: flex;align-items: flex-start;margin-bottom: 32px;">
            <img style="display: block!important;width: 24px; height: 24px; margin-top: -2px" alt="icon"
                 src="https://i.ibb.co/9wmghj2/Icon.jpg"
            >
            <div style="margin-left: 16px">
              <p style="color: #222;font-size: 16px;font-weight: 700; margin-top: 0">${event.startDate}</p>
              <p style="color: #767676;font-size: 18px;font-weight: 400; margin: 0">${event.endDate}</p>
            </div>
          </div>
          <div style=" display: flex;align-items: flex-start;margin-bottom: 32px;">

            <img
              style="display: block!important;width: 24px; height: 24px; margin-top: -2px" alt="icon"
              src="https://i.ibb.co/cXwrQ0V/Icon.png"
            >
            <div style="margin-left: 16px">
              <p style="color: #222;font-size: 16px;font-weight: 700; margin-top: 0">${event.address?.street}</p>
              <p style="color: #767676;font-size: 18px;font-weight: 400; margin: 0">
                ${event.address?.formattedAddress}</p>
            </div>
          </div>
        </div>
        <div style="display: flex; justify-content: center;">
          <a href="https://armat.org/singleEvent?eventid=${event?.eventId}"
             style="display: flex;height: 48px;width: 200px; justify-content: center;align-items: center;border-radius: 8px;border: 1px solid #E1E1E1;background: #FFF;
        margin-top: 40px;color:  #222;font-size: 16px;font-weight: 600;text-decoration: none;">
            View Event Details
          </a>
        </div>
      </div>

      <div style="margin-top: 16px; max-width: 740px; width: auto;border-radius: 8px; background:  #F4F4F4;padding: 32px;height: auto">
        <p class="card-title">Order Summary</p>
        <div class="order-summary-information">
          <p class="order-text"> Order: <span style="color: #49B776"> ${orderId}</span></p>
          <p class="order-text" style="margin-top: 4px"> ${dayName} ${day}, ${year}</p>
        </div>
        <div style="  margin-top: 32px;display: flex;justify-content: space-between;width: 100%;">
          <p style="  color:  #222;font-size: 18px;font-weight: 400;width: 30%;">${email}</p>
          <div id="groupOrder">

          </div>
        </div>

        <div style="margin-top: 42px;display: flex;align-items: center;color: rgba(34, 34, 34, 0.80);font-size: 16px;font-weight: 700;line-height: 24px;">
        <img style="display: block!important;width: 24px; height: 24px;" alt="icon" src="https://i.ibb.co/DMCYp0H/Icon.jpg" alt="Icon" border="0">
          <p style="margin-left: 16px">Printable PDF tickets are attached to this email</p>
        </div>
      </div>
    </div>

  </div>
</div>
</body>
              </html>`);
        /** generate dynamic data such ticket name totalTicketCount... */
        function generateDynamicData() {
            const document = dom.window.document;
            const groupOrder = document.getElementById('groupOrder');
            const wrapperDiv: any = document.createElement('div');
            wrapperDiv.classList.add('ticket-count-rows-wrapper');
            const countDiv: any = document.createElement('div');
            countDiv.classList.add('ticket-count-rows');

            for (let i = 0; i < groupOrders.length; i++) {
                const name = document.createElement('p');
                const price = document.createElement('p');
                name.innerHTML = groupOrders[i].totalTicketCount + ' x ' + groupOrders[i].ticketName;
                price.innerHTML = groupOrders[i].totalTicketPrice;
                countDiv.appendChild(name);
                countDiv.appendChild(price);
                wrapperDiv.appendChild(countDiv);
            }
            groupOrder.appendChild(wrapperDiv);
            return document.documentElement.outerHTML;
        }
        const links = [];
        ticketLinks.forEach((link) => {
            links.push({ filename: 'ticketOrder.pdf', path: link });
        });
        const mail = new MailComposer({
            from: COMPANY_EMAIL,
            to: email,
            subject: 'Sample SES message with attachment',
            text: 'Hey folks, this is a test message from SES with an attachment.',
            html: generateDynamicData(),
            attachments: links,
        });
        return mail;
    };
}
