docker stop db-mongo
docker rm db-mongo
docker run -p 27017:27017 -d --name db-mongo mongo

docker build -t proyecto-enfasis .