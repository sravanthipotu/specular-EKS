FROM node:18-alpine

# set working directory
WORKDIR /app

# copy package files
COPY package*.json ./

# install dependencies
RUN npm install --only=production

# copy rest of the code
COPY . .

# expose port
EXPOSE 3000

# start the app
CMD ["npm", "start"]
