import { Notification } from './modules/notification';

describe.skip('Notification', function () {
  describe('send test sms', function () {
    it('should send a test notifictaion', async function () {
      const message = await Notification.sendSMS('Hello from Armat', '18184416760');
    });
  });
});
