FROM node:latest

RUN mkdir -p /home/node

WORKDIR /home/node

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

RUN apt-get update && apt-get install -y wait-for-it

EXPOSE 3000

CMD ["wait-for-it", "mysql:3306", "--", "npm", "run", "build"]

RUN npm start