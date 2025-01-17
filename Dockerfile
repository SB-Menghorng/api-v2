FROM node:18.15-apline

WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
COPY . .
# RUN npm run build
CMD [ "npm", "run", "start:dev" ]