import { Logger } from './services/Logger';
import { EmailNotification } from './services/EmailNotification';
import { SMSNotification } from './services/SMSNotification';
import { PushNotification } from './services/PushNotification';
import { NotificationService } from './services/NotificationService';
import { User } from './models/User';

const logger = new Logger();

const emailNotifier = new EmailNotification(logger);
const smsNotifier = new SMSNotification(logger);
const pushNotifier = new PushNotification(logger);

const notificationService = new NotificationService([
  emailNotifier,
  smsNotifier,
  pushNotifier,
]);

const user = new User('example@email.com', '+380123456789', 'device-token-abc');

notificationService.notify(user, 'Ваш платіж оброблено успішно!');
