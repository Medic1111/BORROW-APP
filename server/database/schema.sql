BEGIN TRANSACTION;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS loans CASCADE;

CREATE TABLE users (
	user_id SERIAL,
    username varchar(50) UNIQUE NOT NULL,
    password varchar(200),
    email varchar(25) UNIQUE,
    CONSTRAINT pk_users PRIMARY KEY (user_id)
);

CREATE TABLE loans (
    loan_id SERIAL,
    lender_id int,
    borrower_id int,
    status varchar(10),
    creation_date date,
    due_date date,
    amount numeric (19, 2),
    description varchar(250),
    payment_date date,
    transaction_rating int,
    CONSTRAINT pk_loans PRIMARY KEY (loan_id),
    CONSTRAINT fk_loans_lender FOREIGN KEY (lender_id) REFERENCES users (user_id),
    CONSTRAINT fk_loans_borrower FOREIGN KEY (borrower_id) REFERENCES users (user_id)
);

COMMIT TRANSACTION;