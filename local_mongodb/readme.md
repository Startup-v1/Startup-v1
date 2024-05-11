### Build image

docker build -t my-mongodb .

### Create container

docker run -d --name my-mongodb -p 27017:27017 my-mongodb

### Start-stop containers 

Use docker app to start-stop containers

### See all containers

docker ps -a

### Connect to the db

const uri = "mongodb://localhost:27017";