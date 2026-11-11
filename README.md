Prerequisite

Before Running this application, ensure that you have the following: 1. Node.js 2. PostgreSQL

1. Database Setup
   1. Open pgAdmin
   2. Create a new Database(By right-clicking Database, click Create)
   3. Right-click on the created database and a menu will be shown, click on Query Tools:
      1. Run this following SQL command to create the required tables:

         CREATE TABLE visits (
         id SERIAL PRIMARY KEY,
         supermarket_name VARCHAR(255) NOT NULL,
         image_base64 TEXT
         );

         CREATE TABLE products (
         id SERIAL PRIMARY KEY,
         visit_id INTEGER REFERENCES visits(id) ON DELETE CASCADE,
         product_name VARCHAR(255) NOT NULL,
         price DECIMAL(10, 2) NOT NULL
         );

2. Backend Setup
   1. Open a terminal and navigate to the backend folder:
      cd price-tracker-backend

   2. Install the necessary dependencies:
      npm install

   3. Open server.js and update the PostgreSQL connection pool with your local database credentials:
      // Database Connection
      const pool = new Pool({
      user: 'postgres', // Replace with your PostgreSQL username
      host: 'localhost',
      database: 'price_tracker', // Replace with your database name
      password: 'Realmadrid4life100%', // Replace with your PostgreSQL password
      port: 5432,
      });

   4. Start the backend server:
      node server.js

3. Frontend Setup
   1. Open a new, separate terminal and navigate to the frontend directory:
      cd price-tracker-frontend

   2. Install the dependencies:
      npm install

   3. Start the React website:
      npm run dev
   4. Open the browser and navigate the localhost URL provided in the terminal to view the application
