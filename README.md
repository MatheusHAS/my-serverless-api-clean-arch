# my-serverless-api-clean-arch

A simple api using serverless framework, typescript and mongodb with Clean Archtecture

## This project use:

- [serverless-framework](https://www.serverless.com): easy infra as a code to lambda functions
- [middyjs](https://github.com/middyjs/middy): simple lambda handler with middlewares

## Install

```bash
npm install
```

# Project Environment

In this project has `2 environments`:

- `development`
- `production`

## Environment variables

All environment variables they are `./environment` folder on files:

- `.env.development`
- `.env.production` (not exist for default. If you need, you can create)

# Run on localhost

```bash
npm run start:dev
```

This command run a http server locally to test your lambda.

# Deploy

To deploy, you need:

- install [aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [configure credentials for aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
- after install and configure, you can deploy with `serverless-framework`

## development

- `npm run deploy:dev`

## production

- `npm run deploy:prd`
