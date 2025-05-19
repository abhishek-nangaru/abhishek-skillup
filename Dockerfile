FROM node:18

WORKDIR /app

COPY . .

RUN npm install express body-parser mysql

EXPOSE 9595

CMD ["node", "index.js"]
