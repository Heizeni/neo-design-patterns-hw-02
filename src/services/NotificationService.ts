import { INotificationChannel, IUser } from '../core/interfaces';

export class NotificationService {
  constructor(private channels: INotificationChannel[]) {}

  notify(user: IUser, message: string): void {
    this.channels.forEach((channel) => {
      channel.send(user, message);
    });
  }
}
