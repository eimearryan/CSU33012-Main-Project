# CSU33012-Main-Project

## Video Presentation

https://clipchamp.com/watch/yCJ3VmALc7j

## Running the app

Install Docker on your machine https://docs.docker.com/get-docker/

Pull the image to your local machine using the command:
```
docker pull eimearryan/csu33012-main-project:firstpush
```
Run the app using the command:
```
docker run --name=local-container -p 8080:8080 eimearryan/csu33012-main-project:firstpush
```

The app will be available on [localhost:8080](http://localhost:8080/)


## Database Setup
Install MySQL on your machine: https://dev.mysql.com/downloads/mysql/

Open MySQL Shell.

If in JS mode, enter ```'\sql'``` to enter SQL mode.
```
\connect root@localhost
CREATE DATABASE sweng;
CREATE USER 'user'@'localhost' IDENTIFIED BY 'my_password';
GRANT ALL PRIVILEGES ON * . * TO 'user'@'localhost';
GRANT ALL ON sweng.* TO 'user'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

(To see your databases: ```show databases;```)

Set database to sweng: 
```
use sweng;
```
Create table for storing data:
```
CREATE TABLE results (
	id INT NOT NULL AUTO_INCREMENT, 
	PULLHISTORY JSON, 
	COMMITHISTORY JSON, 
	CONTRIBUTORS JSON, 
	PRIMARY KEY (ID)
);
```

