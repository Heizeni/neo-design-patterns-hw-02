export interface INotificationChannel {
  send(user: IUser, message: string): void;
}

export interface IUser {
  email: string;
  phone: string;
  deviceToken: string;
}

export interface ILogger {
  log(message: string): void;
}
