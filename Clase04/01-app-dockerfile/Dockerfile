FROM node:alpine3.23

RUN mkdir -p /app

COPY . /app

RUN cd /app && npm install

CMD ["node", "/app/index.js"]


