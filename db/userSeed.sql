CREATE DATABASE bookedup_db;


-- run server before using and inserting into the db
-- sequelize code in the models folder needs to run and create the table structure first

USE bookedup_db;


INSERT INTO users (`name`, email, friends, books, createdAt, updatedAt) -- fake created/updated for testing
VALUES ('Dean Gutterman', 'dean@gmail.com', '2,3,4,6,8', '1,3,4,5,6', '2019-05-18 17:42:17', '2019-05-18 17:42:17'), 
('Jennifer Le', 'jen@gmail.com', '1,3,4,6', '2,3,4,5', '2019-05-18 17:42:17', '2019-05-18 17:42:17'), 
('Matt Villalobos', 'matt@gmail.com', '1,2,4,6,9', '1,3,4,5,9', '2019-05-18 17:42:17', '2019-05-18 17:42:17'), 
('Nina Wang', 'nina@gmail.com', '1,2,3,6,7,9', '1,2,3', '2019-05-18 17:42:17', '2019-05-18 17:42:17'), 
('John Doe', 'john@gmail.com', '8,10', '1,3,5,7,9', '2019-05-18 17:42:17', '2019-05-18 17:42:17'), 
('Frank Sinatra', 'frank@gmail.com', '1,2,3,4,7', '1,3,4,6', '2019-05-18 17:42:17', '2019-05-18 17:42:17'), 
('Beyonce Knowles', 'queenB@gmail.com', '2,4,6', '1,2,6,8,9', '2019-05-18 17:42:17', '2019-05-18 17:42:17'), 
('Ron Weasley', 'rw.loves.hg@gmail.com', '1,5,10', '1,4,6,8', '2019-05-18 17:42:17', '2019-05-18 17:42:17'), 
('Stephen Curry', 'buckets@gmail.com', '3,4,6', '3,5,6,9', '2019-05-18 17:42:17', '2019-05-18 17:42:17'), 
('Julius Pepperwood', 'jpep@gmail.com', '5,8', '1,3,5,7,9', '2019-05-18 17:42:17', '2019-05-18 17:42:17');
