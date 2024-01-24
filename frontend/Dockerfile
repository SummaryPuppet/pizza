FROM node:alpine

RUN mkdir -p /home/react

WORKDIR /home/react

COPY package*.json .
RUN npm i

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "dev" ]