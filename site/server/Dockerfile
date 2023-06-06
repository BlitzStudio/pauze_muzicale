FROM node:latest

WORKDIR app

COPY package*.json ./

RUN npm install &&  apt update &&  apt install ffmpeg -y

ENV HOST=0.0.0.0
ENV PORT=8000
EXPOSE 8000

COPY . .

CMD [ "node","index.js" ]
