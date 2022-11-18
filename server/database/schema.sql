BEGIN TRANSACTION;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS loans CASCADE;

CREATE TABLE users (
    username varchar(50) UNIQUE NOT NULL,
    password varchar(200),
    phone bigint,
    email varchar(50) UNIQUE,
    reputation numeric(19,2),
    total_borrowing int,
    total_lending int,
    total_score int,
    CONSTRAINT pk_users PRIMARY KEY (username)
);

CREATE TABLE loans (
    loan_id SERIAL,
    lender varchar(50),
    borrower varchar(50),
    status varchar(10),
    creation_date date,
    due_date date,
    amount numeric (19, 2),
    description varchar(250),
    payment_date date,
    transaction_rating int,
    CONSTRAINT pk_loans PRIMARY KEY (loan_id)
    -- CONSTRAINT fk_loans_lender FOREIGN KEY (lender) REFERENCES users (username),
    -- CONSTRAINT fk_loans_borrower FOREIGN KEY (borrower) REFERENCES users (username)
);

COMMIT TRANSACTION;