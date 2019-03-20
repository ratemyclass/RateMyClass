# STAGE 1) Compile the React files in the build stage
FROM node as build-stage

WORKDIR /app/www

COPY /app/www ./
RUN npm install
RUN npm run build


# STAGE 2) Setup the golang server
FROM golang:alpine

ADD app/ /app
WORKDIR /app

# Copy only the bundled React files to our Golang image
COPY --from=build-stage /app/www/static/js/bundle.js www/static/js/

# Expose the container's port 3000 to our localhost
EXPOSE 3000

# Run the server!
CMD ["go", "run", "go/main.go"]

