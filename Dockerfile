FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN  npm test

COPY . .

EXPOSE 3000
CMD ["node", "index.js"]