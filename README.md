# neo-design-patterns-hw-02

# SOLID Notification Refactor

Цей проєкт демонструє рефакторинг системи надсилання повідомлень згідно з принципами SOLID у TypeScript.

##  Структура проєкту

src/
├── core/
│ └── interfaces.ts # Інтерфейси INotificationChannel, IUser, ILogger
├── models/
│ └── User.ts # Клас User реалізує IUser
├── services/
│ ├── Logger.ts # Простий логер (ILogger)
│ ├── NotificationService.ts # Менеджер для відправки повідомлень через канали
│ ├── EmailNotification.ts # Сервіс надсилання Email
│ ├── SMSNotification.ts # Сервіс надсилання SMS
│ └── PushNotification.ts # Сервіс надсилання PUSH
└── main.ts # Демонстрація використання


## Принципи SOLID у дії

- **S (SRP)**: Кожен клас має одну відповідальність (User — дані, EmailNotification — email, тощо).
- **O (OCP)**: Легко додати новий канал повідомлень без зміни NotificationService.
- **L (LSP)**: Усі сервіси мають спільний інтерфейс і є взаємозамінними.
- **I (ISP)**: Кожен клас реалізує лише ті методи, які йому потрібні.
- **D (DIP)**: NotificationService та канали не створюють залежності напряму, використовують інтерфейси.

## Очікуваний результат

[LOG]: Sending EMAIL to example@email.com
Email sent to example@email.com: Ваш платіж оброблено успішно!
[LOG]: Sending SMS to +380123456789
SMS sent to +380123456789: Ваш платіж оброблено успішно!
[LOG]: Sending PUSH to device-token-abc
Push sent to device-token-abc: Ваш платіж оброблено успішно!