# 제로베이스가 될 이미지
FROM node:10

# COPY <로컬 파일 경로> <도커 컨테이너 내 경로지정> 복사하기
COPY server.js ./
COPY package*.json ./

# 제로베이스 실행 후 바로 실행 문
RUN npm install
# 컨테이너 생성 후 실행 문
CMD ["node", "server.js"]   