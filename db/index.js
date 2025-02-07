const express = require('express');
const db = require('./db');
const cors = require('cors');
const applyRoutes = require('./routes');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/home', applyRoutes);

const runInitSQL = () => {
    const initSQLPath = path.join(__dirname, 'init.sql');
    const initSQL = fs.readFileSync(initSQLPath, 'utf-8');

    const sqlCommands = initSQL.split(';').filter(cmd => cmd.trim() !== '');
    sqlCommands.forEach((query) => {
        db.query(query, (err) => {
            if (err) {
                console.error('실행 오류:', err);
            }
        });
    });

    console.log('DB 초기화 완료');
};

db.connect(err => {
    if (err) {
        console.error('DB 연결 실패:', err);
        return;
    }
    console.log('DB 연결 성공');
    runInitSQL();
});

app.listen(PORT);
