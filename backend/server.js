const express = require("express");
const bodyParser = require("body-parser");
const db = require('./db');

// express Server
const app = express();
app.use(bodyParser.json());

db.pool.query(`CREATE TABLE list (
    id INTEGER AUTO_INCREMENT,
    value TEXT, 
    PRIMARY KEY (id)
)`, (err, results, fileds) => {
    console.log('results', results)
})

// DB List 테이블의 모든 데이터를 FE Server로 전송하기
app.get('/api/values', (req, res, next) => {
    // db에서 모든 값 가져오기
    db.pool.query('SELECT * FROM list;',
        (err, results, fileds) => {
            if (err)
                return res.status(500).send(err);
            else
                return res.json(results)
        }
    )
})


// 입력받은 값 디비에 저장하기
app.post('/api/value', (req, res, next) => {
    // 데이터베이스 값 넣어주기.
    db.pool.query(`INSERT INTO list (value) VALUES("${req.body.value}")`,
        (err, results, fileds) => {
            if (err)
                return res.status(500).send(err);
            else
                return res.json({
                    success: true,
                    value: req.body.value
                })
        })
})

app.listen(5000, () => {
    console.log("Application 5000 Port connect");
})