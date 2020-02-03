FROM node:alpine

LABEL maintainer="contact@alexandregv.fr"

WORKDIR /usr/src

ENV PATH /usr/src/node_modules/.bin:$PATH

RUN yarn global add nodemon esm
COPY package*.json ./
RUN yarn install

EXPOSE 3000
CMD ["yarn", "run", "start"]
