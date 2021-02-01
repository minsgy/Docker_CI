const express = require('express');
const redis = require('redis');

const app = express();


const client = redis.createClient({
    // host는 도커 환경이 아닐 때, 바로 URL로 주지만,
    // 도커의 경우는 docker-compose.yml 파일에 명시한 컨테이너를 줘야됌
    host: "redis-server",
    port: "6379"
})

client.set("number", 0);
app.get('/', (req, res) => {
    client("number", (err, number) => {
        // 현재 숫자를 가져 온 후, 1씩 올려줍니다.
        client.set("number", parseInt(number) + 1)
        res.send("숫자가 1씩 증가 ㅋ: " + number)
    })
})


app.listen(8080);
console.log('server is running');