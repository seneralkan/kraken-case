<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

 
# Kraken Case Study
This project was built with Nestjs, Fastify, TypeORM, and Postgres.

## Quick Start
### Installation
- Pre-requirements
    - Install `nvm` by following the instructions here https://github.com/nvm-sh/nvm#installing-and-updating

```bash
    # verify that you installed nvm by printing its version number
    $ nvm -v
```

```bash
    # use necessary node version with the help of .nvmrc file
    $ nvm use
```

```bash
    # install necessary packages
    $ npm install
```

### Environment
- Create `.env` file
```bash
    $ touch .env
```

- Add environment variables into `.env` file
- PS: you can find example env file in the repository

```bash
    $ HOST=  the host the application will be running on. Default: `localhost`
    $ PORT= the port the application will be running on. Default: 3000
    $ NODE_ENV=dev the environment the application will be running in. Default: `dev`
    $ LOG_LEVEL= minimum log level to show. Default: `debug` for `dev`
    $ SERVER_KEEP_ALIVE_TIMEOUT= the keep alive timeout. Default: `120000` (2 mins)
    $ BODY_LIMIT= the maximum payload, in bytes, the server is allowed to accept. Default: `10240` (10 kilobytes)
    $ SWAGGER_ENABLED= whether swagger is enabled. Default: `true` for `dev`, `false` for else.
    $ POSTGRES_HOST= PostgreSQL Host. Default: 'localhost'
    $ DATABASE_NAME= PostgreSQL Database Name. Default: 'kraken'
    $ POSTGRES_PORT= PostgreSQL Database Port. Default: '5432'
    $ POSTGRES_USERNAME= PostgreSQL Username. Default: 'postgres'
    $ POSTGRES_PASSWORD= PostgreSQL User Password. Default: 'postgres'
    $ API_KEY= Api key for auth. Default: 'EltgJ5G8m44IzwE6UN2Y4B4NjPW77Zk6FJK3lL23'
```
- Please make sure that you have installed PostgreSQL and created database before running the application.

## Folder Structure
```bash
├── src
│   ├── api
│   │   ├── auth
│   │   ├── healthcheck
│   │   ├── site-outages
│   │   └── siteInfo
│   ├── common
│   │   ├── constants
│   │   ├── dtos
│   │   ├── enums
│   │   ├── exceptions
│   │   └── filters
│   ├── config
│   │   ├── swagger
│   │   └── typeorm
│   ├── database
│   └── models
├── test
│   ├── mocks
│   └── unit
└──
```

## Swagger Documentation

- Please checkout `localhost:3000/documentation` in order to see the Swagger documentation.

## Bonus Requirements

### Question
- The API will occasionally return 500 status codes. Can you implement a solution that is resilient to this scenario?
- Answer: I did not implement the bonus requirement. However, retryable interceptor can implement as globally when the api respond internal server error.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```
