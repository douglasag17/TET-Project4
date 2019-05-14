FROM node:11

LABEL version="1.0"
LABEL description="Web app geotracking NodeJS"
LABEL maintainer="Andres Avendaño - aavenda1@eafit.edu.co"

ARG PORT=3000
ENV PORT $PORT

WORKDIR /nodeApp
COPY . ./

RUN npm install --test

EXPOSE 3000
CMD npm start
