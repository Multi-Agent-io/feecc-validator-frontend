FROM node:14-alpine
RUN mkdir -p /home/feecc-validator-frontend
WORKDIR /home/feecc-validator-frontend
COPY package.json ./
RUN npm add express
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "node", "nodeServer.js" ]