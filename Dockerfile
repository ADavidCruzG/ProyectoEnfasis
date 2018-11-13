FROM ubuntu:14.04

MAINTAINER Agustín David Cruz González

LABEL Description="Dockerfile for MEAN stack"

# MongoDB (27017), Node.js (3003) y LiveReload (35729)
EXPOSE 3003 27017 35729

# Install prerequisites and essential packages
RUN apt-get -q update && apt-get install -y -qq \
  git \
  curl \
  ssh \
  gcc \
  make \
  build-essential \
  sudo \
  apt-utils \
  && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash - \
&& apt-get install -y -q nodejs \
&& apt-get clean \
&& rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*


# Application zone
# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Copy the dependencies configuration into the container at /usr/src/app
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the current directory contents into the container at /usr/src/app
COPY . /usr/src/app

# Define environment variable
ENV APP_ENV desarrollo

# Run app.py when the container launches
CMD ["npm", "start"]