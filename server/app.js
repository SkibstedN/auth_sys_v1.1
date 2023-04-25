import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.PORT || 3001;

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  async function testDBConnection() {
    try {
      const connection = await pool.getConnection();
      console.log("Connected to the database.");
      connection.release();
      return true;
    } catch (error) {
      console.error("Error connecting to the database:", error);
      return false;
    }
  }

// Testing the database connection in a browser with http://localhost:5000/testDbConnection

  app.get("/testDbConnection", async (req, res) => {
    const isConnected = await testDBConnection();
    if (isConnected) {
      res.status(200).json({ message: "Connected to the database." });
    } else {
      res.status(500).json({ message: "Failed to connect to the database." });
    }
  });

  // Add routes here

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});