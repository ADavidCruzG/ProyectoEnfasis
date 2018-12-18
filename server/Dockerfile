FROM node:10.13.0
MAINTAINER Agustín David Cruz González
LABEL Description="Back-end de la aplicación"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm cache clean --force
RUN npm install
COPY . /usr/src/app
EXPOSE 3003

# Corre el back-end cuando el contenedor se ejecute
CMD ["npm", "start"]