BEGIN TRANSACTION;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
	user_id SERIAL,
    username varchar(50) UNIQUE NOT NULL,
    password varchar(200),
    email varchar(25) UNIQUE,
    CONSTRAINT pk_users PRIMARY KEY (user_id)
);

COMMIT TRANSACTION;