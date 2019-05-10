FROM node:8-slim
COPY ./ /usr/local/app
WORKDIR /usr/local/app
RUN npm i
ENV NODE_ENV dev