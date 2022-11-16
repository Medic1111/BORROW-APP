BEGIN TRANSACTION;

INSERT INTO users (user_id, username) VALUES ('1','user1');

INSERT INTO users (user_id, username, password, email) VALUES ('2', 'user2', 'password', '2@aol.com');
INSERT INTO users (user_id, username, password, email) VALUES ('3', 'user3', 'password', '3@gmail.com');

COMMIT TRANSACTION;