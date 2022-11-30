# CSU33012-Main-Project

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
