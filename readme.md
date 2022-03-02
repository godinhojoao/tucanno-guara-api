## I'm still developing this project!!!!

# How to initialize the project:

## Install mongodb locally:
- https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

## Initializing mongodb on ubuntu:
- `sudo systemctl start mongod`
- `mongo`

## Creating a config.ts in your `src/`, with values:
```ts
  const config = {
    prod: {
      dbConnectionUrl: 'your db connection url here',
      auth: {
        jwtSecret: 'your token here',
        tokenExpirationTime: 100 // expiration time in milliseconds
      }
    },
    dev: {
      dbConnectionUrl: 'your db connection url here',
      auth: {
        jwtSecret: 'your token here',
        tokenExpirationTime: 100 // expiration time in milliseconds
      }
    }
  }

  const currentEnvironment = process.env.NODE_ENV as 'prod' | 'dev'
  const currentConfig = config[currentEnvironment]

  export default currentConfig
```

## Use the correct node version:
- `nvm install 16.11.1`
- `nvm use`
## Run project in dev mode:
- `npm run start-dev`

## Run lint:
- `npm run lint`

## Run build:
- `npm run build`

## Run project in prod mode:
- `npm run start-prod`

## Run seeds:
- `npm run seed-db`

## Run tests:
- developing