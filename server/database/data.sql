BEGIN TRANSACTION;

-- password decrypted is 'password'

INSERT INTO users (username, password, phone, email, reputation, total_borrowing, total_lending, total_score) 
    VALUES ('espinalhe1', '$2b$10$2y9CdGQZROvDs1TpxbxFyuiK1iCnzeBH7eysBERdhWWYV4jum/lGK', 3292297352,'Evelynn_Bullock1908@infotech44.tech', 4.4, 3, 0, 7);
INSERT INTO users (username, password, phone, email, reputation, total_borrowing, total_lending, total_score) 
    VALUES ('isticanja1t', '$2b$10$2y9CdGQZROvDs1TpxbxFyuiK1iCnzeBH7eysBERdhWWYV4jum/lGK', 6867231933, 'Sofie_Amstead7939@deons.tech', 4.6, 1, 0, 1);
INSERT INTO users (username, password, phone, email, reputation, total_borrowing, total_lending, total_score) 
    VALUES ('escatar8q', '$2b$10$2y9CdGQZROvDs1TpxbxFyuiK1iCnzeBH7eysBERdhWWYV4jum/lGK', 3438378191, 'William_Appleton7399@typill.biz', 4.7, 1, 0, 2);
    
INSERT INTO users (username, password, phone, email, reputation, total_borrowing, total_lending, total_score) 
    VALUES ('yeyoteef', '$2b$10$2y9CdGQZROvDs1TpxbxFyuiK1iCnzeBH7eysBERdhWWYV4jum/lGK', 4610425742,'Audrey_Morgan5932@ubusive.com', 5.0, 2, 40, 10);
INSERT INTO users (username, password, phone, email, reputation, total_borrowing, total_lending, total_score) 
    VALUES ('Absellasifena', '$2b$10$2y9CdGQZROvDs1TpxbxFyuiK1iCnzeBH7eysBERdhWWYV4jum/lGK', 4672317413,'Camden_Shaw3565@naiker.biz', 1.9, 66, 7, 96);
INSERT INTO users (username, password, phone, email, reputation, total_borrowing, total_lending, total_score) 
    VALUES ('psychorambleg3', '$2b$10$2y9CdGQZROvDs1TpxbxFyuiK1iCnzeBH7eysBERdhWWYV4jum/lGK', 8920841821,'Phoebe_Dwyer4904@extex.org', 3.0, 37, 21, 89);
INSERT INTO users (username, password, phone, email, reputation, total_borrowing, total_lending, total_score) 
    VALUES ('abanowoneedibn1', '$2b$10$2y9CdGQZROvDs1TpxbxFyuiK1iCnzeBH7eysBERdhWWYV4jum/lGK', 8840454013,'Jocelyn_Lee6252@vetan.org', 5.0, 1, 0, 5);
INSERT INTO users (username, password, phone, email, reputation, total_borrowing, total_lending, total_score) 
    VALUES ('monoglottyg', '$2b$10$2y9CdGQZROvDs1TpxbxFyuiK1iCnzeBH7eysBERdhWWYV4jum/lGK', 4377022331,'Leanne_Cann8438@infotech44.tech', NULL, 0, 0, NULL);
INSERT INTO users (username, password, phone, email, reputation, total_borrowing, total_lending, total_score) 
    VALUES ('Pizzattiat', '$2b$10$2y9CdGQZROvDs1TpxbxFyuiK1iCnzeBH7eysBERdhWWYV4jum/lGK', 3450879756,'Tony_Walsh519@elnee.tech', NULL, 0, 38, NULL); 

INSERT INTO loans (loan_id, lender, borrower, status, creation_date, due_date, amount, description)
    VALUES (9998, 'espinalhe1', 'isticanja1t', 'pending', '2022-11-16', '2023-03-17', 2200.00, 'funds for new personal computer');
INSERT INTO loans (loan_id, lender, borrower, status, creation_date, due_date, amount, description, payment_date, transaction_rating)
    VALUES (9999, 'isticanja1t', 'escatar8q', 'approved', '2022-11-01', '2022-11-19', 400.00, 'spring break hotel fees', '2022-11-16', 5);
INSERT INTO loans (loan_id, lender, borrower, status, creation_date, due_date, amount, description)
    VALUES (10000, 'escatar8q', 'espinalhe1', 'denied', '2022-11-15', '2024-11-15', 10400.00, 'used car loan');

INSERT INTO loans 
VALUES
(10001,'Pizzattiat','yeyoteef','approved','2022-06-01','2022-06-30',113.00,'lip gloss','2022-06-29',5),
(10002,'yeyoteef','Absellasifena','approved','2022-06-02','2022-06-25',60.00,'nail salon','2022-07-02',1),
(10003,'Pizzattiat','Absellasifena','approved','2022-06-02','2022-07-02',130.00,'cat grooming','2022-07-09',1),
(10004,'yeyoteef','Absellasifena','approved','2022-06-02','2022-06-08',137.00,'gym membership','2022-06-15',1),
(10005,'psychorambleg3','Absellasifena','approved','2022-06-03','2022-06-13',178.00,'beers','2022-06-20',1),
(10006,'psychorambleg3','Absellasifena','approved','2022-06-03','2022-06-16',146.00,'dinner','2022-06-23',1),
(10007,'yeyoteef','Absellasifena','approved','2022-06-03','2022-06-19',69.00,'coffee','2022-06-26',1),
(10008,'psychorambleg3','Absellasifena','denied','2022-06-04','2022-06-16',2.50,'hair tie', NULL, NULL),
(10009,'yeyoteef','psychorambleg3','approved','2022-06-05','2022-07-01',77.00,'socks','2022-07-05',2),
(10010,'Pizzattiat','psychorambleg3','approved','2022-06-06','2022-07-02',54.00,'keyboard','2022-06-29',5),
(10011,'yeyoteef','Absellasifena','approved','2022-06-08','2022-06-18',4.50,'model car','2022-06-22',2),
(10012,'Pizzattiat','psychorambleg3','approved','2022-06-08','2022-06-27',9.00,'cork','2022-06-26',5),
(10013,'yeyoteef','psychorambleg3','approved','2022-06-10','2022-06-16',10.50,'chalk','2022-06-20',2),
(10014,'psychorambleg3','Absellasifena','approved','2022-06-11','2022-06-18',119.00,'nail clippers','2022-06-23',1),
(10015,'Pizzattiat','Absellasifena','approved','2022-06-13','2022-06-28',58.00,'shirt','2022-06-26',5),
(10016,'psychorambleg3','yeyoteef','denied','2022-06-17','2022-07-01',144.00,'bottle cap', NULL, NULL),
(10017,'psychorambleg3','yeyoteef','approved','2022-06-20','2022-07-08',32.50,'bed','2022-07-08',5),
(10018,'psychorambleg3','abanowoneedibn1','approved','2022-06-20','2022-07-17',97.00,'mop','2022-07-15',5),
(10019,'yeyoteef','Absellasifena','approved','2022-06-29','2022-07-29',66.50,'deodorant','2022-08-02',2),
(10020,'yeyoteef','Absellasifena','approved','2022-06-29','2022-07-29',9.50,'thread','2022-08-07',1),
(10021,'Absellasifena','psychorambleg3','approved','2022-06-30','2022-07-10',9.50,'scotch tape','2022-07-05',5),
(10022,'psychorambleg3','Absellasifena','approved','2022-06-30','2022-07-10',15.50,'flag','2022-07-05',1),
(10023,'Pizzattiat','psychorambleg3','approved','2022-06-30','2022-07-18',112.00,'cork','2022-07-05',1),
(10024,'Absellasifena','psychorambleg3','approved','2022-06-30','2022-07-10',219.00,'doll','2022-07-05',1),
(10025,'Pizzattiat','psychorambleg3','approved','2022-06-30','2022-07-26',107.00,'sponge','2022-07-05',1),
(10026,'yeyoteef','psychorambleg3','approved','2022-06-30','2022-07-28',217.00,'lamp','2022-07-05',1),
(10027,'Pizzattiat','psychorambleg3','approved','2022-06-30','2022-07-07',108.00,'camera','2022-07-05',1),
(10028,'psychorambleg3','Absellasifena','approved','2022-07-01','2022-07-21',83.50,'mp3 player','2022-07-05',5),
(10029,'yeyoteef','psychorambleg3','approved','2022-07-01','2022-07-31',16.00,'boom box','2022-07-05',5),
(10030,'Absellasifena','psychorambleg3','approved','2022-07-01','2022-07-09',168.00,'controller','2022-07-05',1),
(10031,'yeyoteef','psychorambleg3','approved','2022-07-01','2022-07-06',123.00,'puddle','2022-07-05',1),
(10032,'yeyoteef','psychorambleg3','approved','2022-07-01','2022-07-18',237.00,'food','2022-07-05',1),
(10033,'Absellasifena','psychorambleg3','approved','2022-07-01','2022-07-21',217.00,'clamp','2022-07-05',1),
(10034,'Pizzattiat','psychorambleg3','approved','2022-07-01','2022-07-16',223.00,'fork','2022-07-05',1),
(10035,'yeyoteef','psychorambleg3','approved','2022-07-01','2022-07-31',91.00,'watch','2022-07-05',1),
(10036,'Pizzattiat','psychorambleg3','approved','2022-07-02','2022-07-08',75.00,'screw','2022-07-05',1),
(10037,'yeyoteef','psychorambleg3','approved','2022-07-02','2022-07-31',139.00,'video games','2022-07-05',1),
(10038,'Pizzattiat','psychorambleg3','approved','2022-07-02','2022-07-14',166.00,'tooth picks','2022-07-05',1),
(10039,'Pizzattiat','psychorambleg3','approved','2022-07-02','2022-07-27',116.00,'fake flowers','2022-07-18',1),
(10040,'Pizzattiat','psychorambleg3','approved','2022-07-02','2022-07-14',106.00,'pen','2022-08-10',1),
(10041,'yeyoteef','psychorambleg3','approved','2022-07-03','2022-07-17',157.00,'bread','2022-07-27',1),
(10042,'Pizzattiat','Absellasifena','approved','2022-07-14','2022-07-30',12.50,'Bow Tie','2022-08-05',1),
(10043,'psychorambleg3','Absellasifena','approved','2022-07-14','2022-07-26',9.50,'Sweatshirt','2022-08-05',1),
(10044,'yeyoteef','Absellasifena','approved','2022-07-14','2022-08-02',9.50,'zipper','2022-08-08',1),
(10045,'psychorambleg3','Absellasifena','approved','2022-07-14','2022-08-05',5.50,'bread','2022-08-04',1),
(10046,'psychorambleg3','Absellasifena','approved','2022-07-14','2022-07-20',6.50,'perfume','2022-08-11',1),
(10047,'psychorambleg3','Absellasifena','approved','2022-07-15','2022-08-07',5.50,'pillow','2022-08-16',1),
(10048,'Pizzattiat','Absellasifena','approved','2022-07-15','2022-08-11',10.50,'coasters','2022-08-20',1),
(10049,'yeyoteef','Absellasifena','approved','2022-07-15','2022-08-10',8.50,'phone','2022-08-16',1),
(10050,'psychorambleg3','Absellasifena','approved','2022-07-15','2022-07-30',1.50,'food','2022-08-20',1),
(10051,'yeyoteef','Absellasifena','approved','2022-07-15','2022-08-12',5.50,'bowl','2022-08-19',1),
(10052,'yeyoteef','Absellasifena','approved','2022-07-16','2022-08-06',7.50,'glow stick','2022-08-15',1),
(10053,'Pizzattiat','Absellasifena','approved','2022-07-16','2022-08-14',2.50,'cup','2022-08-23',1),
(10054,'yeyoteef','Absellasifena','approved','2022-07-16','2022-08-11',4.50,'photo album','2022-08-15',1),
(10055,'Pizzattiat','Absellasifena','approved','2022-07-16','2022-07-27',11.50,'bottle','2022-08-23',1),
(10056,'Pizzattiat','psychorambleg3','approved','2022-07-17','2022-08-02',101.00,'knife','2022-08-06',2),
(10057,'Pizzattiat','psychorambleg3','approved','2022-07-23','2022-08-03',107.00,'sponge','2022-08-01',5),
(10058,'Pizzattiat','psychorambleg3','approved','2022-07-25','2022-08-21',55.00,'money','2022-08-20',5),
(10059,'yeyoteef','psychorambleg3','approved','2022-07-28','2022-08-06',75.00,'tooth picks','2022-08-08',4),
(10060,'yeyoteef','psychorambleg3','approved','2022-07-29','2022-08-15',19.00,'bottle cap','2022-08-11',5),
(10061,'Absellasifena','psychorambleg3','approved','2022-07-31','2022-08-27',68.50,'lotion','2022-08-25',5),
(10062,'Pizzattiat','Absellasifena','approved','2022-08-03','2022-08-20',75.00,'slipper','2022-08-20',5),
(10063,'yeyoteef','psychorambleg3','approved','2022-08-03','2022-08-23',131.00,'wagon','2022-08-28',1),
(10064,'yeyoteef','psychorambleg3','approved','2022-08-08','2022-08-19',48.50,'fake flowers','2022-08-22',2),
(10065,'yeyoteef','Absellasifena','approved','2022-08-09','2022-08-19',4.50,'Boxers','2022-08-25',1),
(10066,'Pizzattiat','Absellasifena','approved','2022-08-09','2022-08-24',15.50,'Cardigan','2022-08-25',1),
(10067,'yeyoteef','Absellasifena','approved','2022-08-09','2022-09-07',10.50,'Jeans','2022-08-30',1),
(10068,'yeyoteef','Absellasifena','approved','2022-08-09','2022-08-25',9.50,'Shorts','2022-09-13',1),
(10069,'Pizzattiat','Absellasifena','approved','2022-08-09','2022-08-15',8.50,'Blouse','2022-08-31',1),
(10070,'psychorambleg3','Absellasifena','denied','2022-08-10','2022-08-29',146.00,'floor', NULL, NULL),
(10071,'psychorambleg3','Absellasifena','approved','2022-08-10','2022-09-09',66.00,'fork','2022-09-12',2),
(10072,'Pizzattiat','Absellasifena','approved','2022-08-10','2022-08-27',13.50,'Cufflinks','2022-09-15',1),
(10073,'psychorambleg3','Absellasifena','approved','2022-08-10','2022-08-29',12.50,'Kilt','2022-09-02',1),
(10074,'Pizzattiat','Absellasifena','approved','2022-08-10','2022-08-29',1.50,'Dress','2022-09-04',1),
(10075,'yeyoteef','Absellasifena','approved','2022-08-10','2022-09-01',14.50,'Blouse','2022-09-04',1),
(10076,'psychorambleg3','Absellasifena','approved','2022-08-10','2022-08-18',9.50,'Boots','2022-09-07',1),
(10077,'Pizzattiat','Absellasifena','approved','2022-08-10','2022-08-22',5.50,'Coat','2022-08-24',1),
(10078,'yeyoteef','psychorambleg3','approved','2022-08-13','2022-09-02',70.00,'doll','2022-09-03',4),
(10079,'yeyoteef','Absellasifena','approved','2022-08-13','2022-08-27',10.00,'photo album','2022-08-31',2),
(10080,'Absellasifena','psychorambleg3','approved','2022-08-15','2022-09-13',57.00,'chapter book','2022-09-12',5),
(10081,'Pizzattiat','Absellasifena','approved','2022-08-16','2022-09-02',64.50,'pillow','2022-09-02',5),
(10082,'Pizzattiat','Absellasifena','approved','2022-08-18','2022-09-08',26.50,'sharpie','2022-09-10',4),
(10083,'psychorambleg3','Absellasifena','approved','2022-08-18','2022-08-25',147.00,'camera','2022-08-27',4),
(10084,'Pizzattiat','psychorambleg3','approved','2022-08-19','2022-08-26',112.00,'cookie jar','2022-08-29',2),
(10085,'yeyoteef','Absellasifena','approved','2022-08-20','2022-09-11',62.00,'vase','2022-09-14',2),
(10086,'Pizzattiat','Absellasifena','approved','2022-08-20','2022-08-26',236.00,'lunch','2022-09-02',1),
(10087,'Pizzattiat','Absellasifena','approved','2022-08-20','2022-09-19',59.00,'coffee','2022-09-26',1),
(10088,'yeyoteef','Absellasifena','approved','2022-08-20','2022-09-15',172.00,'rent','2022-09-22',1),
(10089,'psychorambleg3','Absellasifena','denied','2022-08-21','2022-09-15',76.00,'chair', NULL, NULL),
(10090,'Pizzattiat','psychorambleg3','approved','2022-08-21','2022-08-29',95.00,'house','2022-08-31',4),
(10091,'yeyoteef','Absellasifena','approved','2022-08-21','2022-09-18',101.00,'Blazer','2022-09-25',1),
(10092,'yeyoteef','Absellasifena','approved','2022-08-21','2022-09-15',67.00,'Tracksuit','2022-09-22',1),
(10093,'yeyoteef','Absellasifena','approved','2022-08-21','2022-09-12',135.00,'Waistcoat','2022-09-19',1),
(10094,'psychorambleg3','Absellasifena','approved','2022-08-21','2022-08-29',240.00,'Tights','2022-09-05',1),
(10095,'psychorambleg3','Absellasifena','approved','2022-08-21','2022-09-12',8.00,'Thong','2022-09-19',1),
(10096,'Pizzattiat','Absellasifena','approved','2022-08-22','2022-09-16',8.00,'Corset','2022-09-23',1),
(10097,'psychorambleg3','Absellasifena','approved','2022-08-22','2022-09-18',10.00,'Corset','2022-09-25',1),
(10098,'yeyoteef','Absellasifena','approved','2022-08-22','2022-09-05',10.00,'Blouse','2022-09-24',1),
(10099,'yeyoteef','Absellasifena','approved','2022-08-22','2022-09-10',10.00,'Socks','2022-09-11',1),
(10100,'psychorambleg3','Absellasifena','approved','2022-08-22','2022-08-27',8.00,'Gown','2022-09-16',1),
(10101,'Pizzattiat','Absellasifena','approved','2022-08-22','2022-09-07',7.00,'Sandals','2022-09-02',1),
(10102,'yeyoteef','Absellasifena','approved','2022-08-22','2022-09-01',6.00,'Dress','2022-09-13',1),
(10103,'yeyoteef','Absellasifena','approved','2022-08-23','2022-09-14',10.00,'Sarong','2022-09-20',1),
(10104,'Pizzattiat','Absellasifena','approved','2022-08-23','2022-09-08',13.00,'Belt','2022-09-20',1),
(10105,'Pizzattiat','Absellasifena','approved','2022-08-23','2022-09-13',14.50,'Skirt','2022-09-14',1),
(10106,'psychorambleg3','Absellasifena','approved','2022-08-23','2022-09-13',4.50,'Swimming Shorts','2022-09-19',1),
(10107,'Pizzattiat','Absellasifena','approved','2022-08-23','2022-09-11',14.50,'Cravat','2022-09-19',1),
(10108,'yeyoteef','Absellasifena','approved','2022-08-27','2022-09-16',45.00,'bed','2022-09-18',4),
(10109,'Pizzattiat','psychorambleg3','approved','2022-08-27','2022-09-04',84.00,'paper','2022-09-08',2),
(10110,'Absellasifena','psychorambleg3','approved','2022-08-29','2022-09-16',70.00,'tv','2022-09-20',2),
(10111,'Pizzattiat','yeyoteef','pending','2022-08-29','2022-09-13',240.00,'rent', NULL, NULL),
(10112,'Pizzattiat','yeyoteef','pending','2022-08-29','2022-09-28',15.00,'ride', NULL, NULL);



COMMIT TRANSACTION;
