CREATE DATABASE bookedup_db;


-- run server before using and inserting into the db
-- sequelize code in the models folder needs to run and create the table structure first

USE bookedup_db;

INSERT INTO bookclubs (`name`, bookId, userIds, createdAt, updatedAt, userId)
VALUES ("We're Wizards, Harry!", '1', '1,2,3,4,8', '2019-06-02 11:12:10', '2019-06-02 11:12:10', 8), 
("Maybe This Will End Better", '5', '1,2,3,4,7,9', '2019-06-02 11:12:10', '2019-06-02 11:12:10', 1);