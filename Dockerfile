# 제로베이스가 될 이미지
FROM node:10

# 워크 디렉토리를 지정할 시, 
# 도커 컨테이너에는 COPY 한 값이 저기로 들어가게됨. 중복/방지 가능 !
WORKDIR /usr/src/app

# VOLUMN 도커 컨테이너에서 로컬에 있는 파일을 Mapping(참조)

# COPY <로컬 파일 경로> <도커 컨테이너 내 경로지정> !복사하기!
# 종속성 확인을 한번 만 하기.
COPY package.json ./

# 제로베이스 실행 후 바로 실행 문
RUN npm install

# 코드가 바뀔 시 종속 성을 다시 할 필요없이.
COPY ./ ./

# 컨테이너 생성 후 실행 문
CMD ["node", "server.js"]