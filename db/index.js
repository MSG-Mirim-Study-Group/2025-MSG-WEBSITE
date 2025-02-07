const fs = require('fs');
const path = require('path');
const db = require('./db');

const runInitSQL = () => {
    const initSQLPath = path.join(__dirname, 'init.sql');
    const initSQL = fs.readFileSync(initSQLPath, 'utf-8');
    
    db.query(initSQL, (err) => {
        if (err) {
            console.error('실행 오류 :', err);
        } else {
            console.log('DB 초기화 완료');
        }
    });
};

db.connect(err => {
    if (err) {
        console.error('DB 연결 실패 :', err);
        return;
    }
    console.log('DB 연결 성공');
    runInitSQL();
});
