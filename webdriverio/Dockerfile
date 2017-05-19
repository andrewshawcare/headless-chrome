FROM node:7-alpine

RUN apk add --no-cache python make g++

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY wdio.conf.js .
COPY specs ./specs

ENTRYPOINT ["npm"]
CMD ["start"]