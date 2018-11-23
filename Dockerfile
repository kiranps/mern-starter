FROM node:9.10.1-alpine as base
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

FROM base as development
ENV NODE_ENV development
COPY . /usr/src/app/
RUN yarn

FROM development as build
ENV NODE_ENV=production
RUN yarn build

FROM base as production
ENV NODE_ENV=production
COPY package.json yarn.lock ./
RUN npm install --production
COPY ./src/backend ./
COPY --from=build /usr/src/app/build ./public