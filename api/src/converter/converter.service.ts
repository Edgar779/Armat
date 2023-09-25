import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as hbs from 'handlebars';
import * as path from 'path';
import * as puppeteer from 'puppeteer';
import { IEvent } from 'src/event';
import { ticketData } from './mock/ticket';

@Injectable()
export class ConverterService {
    constructor() { }

    /** Uses handlebars to render the html template with the rate con data */
    ticketOrderData = async (event: IEvent, ticketName: string, displayId: string, qrLink: string) => {
        return await this.renderTemplate(ticketData(event, ticketName, displayId, qrLink), 'ticketPdf');
    };

    /** render templtae hbs to html */
    renderTemplate = async (data, templateName) => {
        const html = await fs.readFile(path.join(__dirname, '..', `/views/${templateName}.hbs`), {
            encoding: 'utf-8',
        });
        const template = hbs.compile(html);
        const rendered = template(data, {
            allowProtoPropertiesByDefault: true,
        });
        return rendered;
    };

    createPdf = async (htmlContent) => {
        const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--no-d'] });
        const page = await browser.newPage();
        await page.setContent(htmlContent);
        await page.emulateMediaType('print');
        const pageBuffer = await page.pdf({ format: 'a4', margin: { top: 20, bottom: 80 } });
        await browser.close();
        return pageBuffer;
    };

    //Get time like 10:00 AM
    formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
}