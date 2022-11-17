### Instructions

- Clone it
- npm install
- cd client
- npm install
- nodemon server/app.js (server)
- cd client
- npm start

### POSTRGESQL setup (do once on local machine - from home directory)

- (Mac) brew install postgresql
- brew services start postgresql
- psql postgres
- CREATE ROLE postgres WITH LOGIN PASSWORD 'postgres1';
- ALTER ROLE postgres CREATEDB;
- \q
- psql postgres -U postgres

### DATABASE SETUP SCRIPT (do every time re-setting database - from project directory)

- cd server/database
- sh create.sh
