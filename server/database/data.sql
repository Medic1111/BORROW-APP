BEGIN TRANSACTION;

INSERT INTO users (user_id, username, password, email) VALUES (1,'bob', 'bob123', 'bob@gmail.com');
INSERT INTO users (user_id, username, password, email) VALUES (2, 'jim', 'jim123', 'jim@gmail.com');
INSERT INTO users (user_id, username, password, email) VALUES (3, 'sally', 'sally123', 'sally@gmail.com');
INSERT INTO users (user_id, username, password, email) VALUES (4, 'jane', 'jane123', 'jane@gmail.com');

INSERT INTO loans (loan_id, lender_id, borrower_id, status, creation_date, due_date, amount, description)
    VALUES (1, 1, 2, 'pending', '2022-11-16', '2023-03-17', 2200.00, 'funds for new personal computer');
INSERT INTO loans (loan_id, lender_id, borrower_id, status, creation_date, due_date, amount, description, payment_date, transaction_rating)
    VALUES (2, 3, 4, 'approved', '2022-11-01', '2022-11-19', 400.00, 'spring break hotel fees', '2022-11-16', 5);
INSERT INTO loans (loan_id, lender_id, borrower_id, status, creation_date, due_date, amount, description)
    VALUES (3, 3, 2, 'denied', '2022-11-15', '2024-11-15', 10400.00, 'used car loan');

COMMIT TRANSACTION;