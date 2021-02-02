# 운영환경(nginx)을 위한 DockerFile을 2가지로 이루어보자.
# 1단계 Builder Stage
# 여기 FROM부터 다음 FROM전 까지, 모두 builder stage 명시.
FROM node:alpine as builder
WORKDIR "/usr/src/app"
COPY package.json ./
RUN npm install
COPY ./ ./
RUN npm run build
# 이곳의 목표는 빌드파일(build)들을 생성.
# 생성된 파일은 /usr/src/app/build 로 들어가게된다.

# 2단계 Run Stage
# 첫번째 단계에서 생성 된 빌드 폴더의 파일들을 웹 브라우저의 요청에 따라 제공한다.
FROM nginx

# [--from==builder] 다른 Stage에 있는 파일을 복사할 때 다른 Stage이름 명시.
# [/usr/src/app/build] builder stage에서 생성된 파일은 /usr/src/app/build에 들어가게 되며,
# [/usr/share/nginx/html] 그 곳에 저장된 파일들을 /usr/share/nginx/html/로 복사시킨다.
# 그렇게 복사된 값으로 nginx가 웹 브라우저의 http요청이 올때마다 알맞은 파일을 전달 할 수 있습니다.
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
# build파일들을 nginx/html 폴더에 복사 시켜준 이유는, 이 장소에 파일을 넣으면
# Nginx가 알아서 Client에서 요청이 들어올 때 알맞은 정적 파일을 제공합니다.
# 이 위치는 설정을 통해 바꿀 수 있다.




