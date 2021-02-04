DROP DATABASE IF EXISTS myapp; 
-- myapp이 있을 시, 삭제하고, 없을 시 만든다.
CREATE DATABASE myapp; 
USE myapp;

CREATE TABLE list ( 
    id INTEGER AUTO_INCREMENT,
    value TEXT, 
    PRIMARY KEY (id)
);