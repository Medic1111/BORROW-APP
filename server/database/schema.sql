BEGIN TRANSACTION;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
	user_id SERIAL,
    username varchar(50) UNIQUE NOT NULL,
    password varchar(50),
    email varchar(25),
    CONSTRAINT PK_user PRIMARY KEY (user_id)
);

COMMIT TRANSACTION;