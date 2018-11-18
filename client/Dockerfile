FROM node:10.13.0
MAINTAINER Agustín David Cruz González
LABEL Description="Front-end de la aplicación"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm cache clean --force
RUN npm install
COPY . /usr/src/app
EXPOSE 4002

# Corre el front-end cuando el contenedor se ejecute
CMD ["npm", "start"]