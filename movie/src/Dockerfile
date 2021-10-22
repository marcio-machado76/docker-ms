FROM node:alpine3.14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8181

CMD ["node", "server.js"]

