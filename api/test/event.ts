import { expect } from 'chai';
import { EventStatus } from '../src/event/constants';
import { events } from './data';
import { adminAuth } from './hooks';
import { Event } from './modules';

describe('Events', function () {
  describe('Create Events', function () {
    it('Should Create an event', async function () {
      try {
        const event = await Event.create(adminAuth.token, events[1]);
        expect(event.title).to.equal(events[1].title);
        expect(event.status).to.equal(EventStatus.UNPUBLISHED);
      } catch (err) {
        console.log(err.message);
      }
    });
  });
});
