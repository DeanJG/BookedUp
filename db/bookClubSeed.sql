CREATE DATABASE bookedup_db;


-- run server before using and inserting into the db
-- sequelize code in the models folder needs to run and create the table structure first

USE bookedup_db;

-- Unused for now, confused on how multiple users can be assigned to one club
-- every source i could find indicates the need for a table per club despite Quinton's advice
INSERT INTO bookclubs (`name`, book, userId)
VALUES ('', , ), ;