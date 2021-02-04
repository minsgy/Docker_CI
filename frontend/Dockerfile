
# 1단계 빌드 스테이지
FROM node:alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build 
# 빌드 파일 생성

# 2단계 Run Stage (Nginx 서버 설정)
FROM nginx
EXPOSE 3000
# 로컬의 nginx conf 값 => 컨테이너 안에있는 nginx conf값에 덮어씌운다.
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html


