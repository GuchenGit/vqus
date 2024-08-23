# URL Shortener

This is a privacy-first URL shortener application built with a React frontend and an Express backend. The application allows users to shorten URLs while ensuring that user data is handled with the utmost privacy.

## Features

- **Privacy-First**: Absolutely minimal data is collected from users, easily verifiable by inspecting the source code.
- **Dockerized**: The application is containerized using Docker for easy deployment. Just change the environment variables in the `.env` file and you are ready to go.
- **Customizable**: The application is built with a modular structure, making it easy to customize and extend.
- **Self-Hosted**: The application can be self-hosted on your own server, giving you full control over your data.

## TODO
This project is still a work in progress and under heavy development. The following features are planned:
- [ ] Implement a user-friendly frontend
- [ ] Add support for custom URLs
- [ ] Add support for password-protected URLs
- [ ] Add support for URL expiration selection
- [ ] User accounts to manage URLs
- [ ] Add support for QR codes
- [ ] Add support for easy copy-to-clipboard

More features and improvements will be added in the future, these are important aspects though that receive priority in the near future.

## Getting Started
### Prerequisites
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation
First, it is important to note that the application is still under development and therefore ports are exposed that should not be exposed in a production environment. Please make sure to secure your application before deploying it to a production environment, e.g. by using a reverse proxy like Nginx and removing the exposed ports except for the frontend port.

1. Clone the repository
```sh
git clone ...
cd ...
```

2. Create a `.env` file in the root directory and add the following environment variables (or use the provided `.env.example` file as a reference):
```sh
MONGODB_ROOT_USER=root
MONGODB_ROOT_PASSWORD=securepassword
MONGODB_WORKER_USER=urlshortener_user
MONGODB_WORKER_PASSWORD=workerpassword
MONGODB_LOCAL_PORT=27019
MONGO_INITDB_DATABASE=urlshortener
```
Please  make sure to modify these default values!

3. Build and run the application using Docker Compose
```sh
docker-compose up --build
```

4. The application should now be running on `http://localhost:5200` if you didn't change the default port.
5. You can access the MongoDB database using a MongoDB client on `localhost:27019` (or the port you specified in the `.env` file).

## Contributing
Contributions are always welcome! If you have any ideas, suggestions, improvements or bug fixes, please open an issue or create a pull request.


## License
Distributed under the MIT License. See `LICENSE` for more information.git init