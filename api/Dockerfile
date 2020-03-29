FROM node:alpine

LABEL maintainer="contact@alexandregv.fr"

WORKDIR /usr/src

ENV PATH /usr/src/node_modules/.bin:$PATH

COPY package*.json ./
RUN yarn global add nodemon && yarn global add esm && yarn add esm
RUN yarn install

EXPOSE 4000
CMD ["yarn", "run", "start"]
