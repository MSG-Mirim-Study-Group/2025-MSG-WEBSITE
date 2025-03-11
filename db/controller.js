const db = require('./db');

exports.submitApplication = (req, res) => {
    const { name, studentId, tel, email, purpose, strengths, failure, definition, comment } = req.body;

    if (!name || !studentId || !tel || !email || !purpose || !strengths || !failure || !definition || !comment) {
        return res.status(400).json({ message: '모든 필드를 입력하세요!' });
    }

    const query = `INSERT INTO apply_form (name, studentId, tel, email, purpose, strengths, failure, definition, comment) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(query, [name, studentId, tel, email, purpose, strengths, failure, definition, comment], (err, result) => {
        if (err) {
            console.error('데이터 저장 실패:', err);
        return res.status(500).json({ message: '서버 오류 발생!' });
        }
        res.status(201).json({ message: '지원서 제출 완료!', applicationId: result.insertId });
    });
};
