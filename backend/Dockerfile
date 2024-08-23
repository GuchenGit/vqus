FROM node:18-slim

WORKDIR /usr/src/backend

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .

EXPOSE 5100

CMD ["npm", "run", "dev"]