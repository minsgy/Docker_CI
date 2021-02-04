FROM node:alpine
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./
# nginx 할 필요가 없으니 간단..
CMD ["npm","run","start"]