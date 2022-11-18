BEGIN TRANSACTION;

-- password decrypted is 111111

INSERT INTO users (username, password, phone, email, reputation, total_borrowing, total_lending, total_score) 
    VALUES ('espinalhe1', '$2b$10$o3rU6TRcDiWVckz67kSCZ.B5RHHiHXefmFR5fYmvcKLxtBUJY20ru', 3292297352,'Evelynn_Bullock1908@infotech44.tech', 4.4, 3, 0, 7);
INSERT INTO users (username, password, phone, email, reputation, total_borrowing, total_lending, total_score) 
    VALUES ('isticanja1t', '$2b$10$o3rU6TRcDiWVckz67kSCZ.B5RHHiHXefmFR5fYmvcKLxtBUJY20ru', 6867231933, 'Sofie_Amstead7939@deons.tech', 4.6, 1, 0, 1);
INSERT INTO users (username, password, phone, email, reputation, total_borrowing, total_lending, total_score) 
    VALUES ('escatar8q', '$2b$10$o3rU6TRcDiWVckz67kSCZ.B5RHHiHXefmFR5fYmvcKLxtBUJY20ru', 3438378191, 'William_Appleton7399@typill.biz', 4.7, 1, 0, 2);

INSERT INTO loans (loan_id, lender, borrower, status, creation_date, due_date, amount, description)
    VALUES (1, 'espinalhe1', 'isticanja1t', 'pending', '2022-11-16', '2023-03-17', 2200.00, 'funds for new personal computer');
INSERT INTO loans (loan_id, lender, borrower, status, creation_date, due_date, amount, description, payment_date, transaction_rating)
    VALUES (2, 'isticanja1t', 'escatar8q', 'approved', '2022-11-01', '2022-11-19', 400.00, 'spring break hotel fees', '2022-11-16', 5);
INSERT INTO loans (loan_id, lender, borrower, status, creation_date, due_date, amount, description)
    VALUES (3, 'escatar8q', 'espinalhe1', 'denied', '2022-11-15', '2024-11-15', 10400.00, 'used car loan');




COMMIT TRANSACTION;