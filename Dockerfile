FROM node:11

LABEL version="1.0"
LABEL description="Project 1 TET"
LABEL maintainer="Douglas Ardila Garces - dardila5@eafit.edu.co"

ARG PORT=3000
ENV PORT $PORT

WORKDIR /TET-Project1

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD npm start