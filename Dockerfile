# STAGE 1) Compile the React files in the build stage
FROM node as build-stage

WORKDIR /app/www

COPY /app/www ./
RUN npm install
RUN npm run build

FROM golang:latest as dep-stage

RUN go get github.com/ratemyclass/rmc-web
RUN go install github.com/ratemyclass/rmc-web

# STAGE 2) Setup the golang server
FROM golang:alpine

ADD app/ /app
WORKDIR /app

# Copy only the bundled React files to our Golang image
COPY --from=build-stage /app/www/static/js/bundle.js www/static/js/

# Copy the golang dependencies
COPY --from=dep-stage /go /go

# Expose the container's port 3000 to our localhost
EXPOSE 3000

CMD go run github.com/ratemyclass/rmc-web
