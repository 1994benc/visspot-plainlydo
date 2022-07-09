# The most simple & sharable TODO list

## How to run this locally

- Create a .env file in the root directory of this project with the following content. Replace YOUR_MONGO_DB_DATABASE_URL with your mongodb database url. This will be used by Prisma to connect to your mongodb database.

```
    DATABASE_URL={YOUR_MONGO_DB_DATABASE_URL}
```

- Create a .env.local file in the root directory of this project with the following content. Replace EMAIL_SERVER with your email server url, which should starts with smtp://, and EMAIL_FROM with the email you want to send from. These variables will be used by NextAuth for authentication.

```
    EMAIL_SERVER={YOUR_SMTP_EMAIL_SERVER}
    EMAIL_FROM={EMAIL_FROM}
```

- Run `yarn` to install dependencies

- Run `yarn start` to start the local server