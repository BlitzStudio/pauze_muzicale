FROM node:latest
FROM python:latest

WORKDIR app

COPY package*.json ./
COPY requirements.txt requirements.txt
RUN  apt update &&  apt install ffmpeg portaudio19-dev  pulseaudio -y
# RUN echo "alias python=python3" >> ~/.bashrc
RUN npm install && python -m pip install -r requirements.txt 
RUN apt install libavcodec-extra -y
RUN  pip install PyAudio --no-binary :all:


ENV PULSE_SERVER=host.docker.internal
ENV ffmpeg=/usr/bin/ffmpeg
ENV HOST=0.0.0.0
ENV PORT=8000
EXPOSE 8000

COPY . .

CMD [ "node","index.js" ]
