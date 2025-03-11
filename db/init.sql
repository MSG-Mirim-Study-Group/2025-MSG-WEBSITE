CREATE DATABASE IF NOT EXISTS msg_apply;

CREATE TABLE IF NOT EXISTS msg_apply.apply_form (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    studentId VARCHAR(20) NOT NULL,
    tel VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    purpose TEXT NOT NULL,
    strengths TEXT NOT NULL,
    failure TEXT NOT NULL,
    definition TEXT NOT NULL,
    comment TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
