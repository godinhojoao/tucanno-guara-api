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
    auth: {
      jwtSecret: 'your secret here'
    }
  };
  export { config };
```

## Use the correct nvm version:
- `nvm install 16.11.1`
- `nvm use`

## Run seeds:
- developing

## Run project in dev mode:
- `npm run start-dev`

## Run lint:
- `npm run lint`

## Run build:
- `npm run build`

## Run project in prod mode:
- `npm run start-prod`