# Six cities

## Installation and Usage

Prerequisites:
- [Node.js](https://nodejs.org/) `^20.9.0`
- [Docker](https://www.docker.com/)

build docker images:

```zsh
docker compose \
--file ./server/docker-compose.yml \
--env-file ./server/.env \
--project-name "six-cities" \
up -d
```

install dependencies:

```zsh
npm i
```
build server

```zsh
npm run server:build
```
start development server

```zsh
npm run server:dev
```

## Optional step

You can import some test data for quick start:

```zsh
cd ./server &&
npm run ts ./src/main.cli.ts -- --import ./mocks/test-data.tsv admin admin localhost six-cities secret
```
