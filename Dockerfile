FROM node:12.19.0-alpine3.11

# Create Working Directory
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

CMD ["npm", "start"]