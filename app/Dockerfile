FROM node:20-alpine # Tells docker your base image
WORKDIR /app # Tells docker to use this directory as the working directory
COPY . . # Tells docker to copy all files from the current directory to the working directory
RUN npm install # Tells docker to run npm install to install dependencies
RUN npm run build # Tells docker to run npm run build to build the application
EXPOSE 3011
CMD [ "npm", "start" ] # Tells docker to run npm start to start the application