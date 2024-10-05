import { configDotenv } from "dotenv";
import mysql2 from "mysql2";
configDotenv();

export const DB = mysql2.createPool({
  host: "mysql-3db8a027-vishu-1019.a.aivencloud.com", // Aiven MySQL Host
  port: 26486, // Port number
  user: "avnadmin", // Username
  password: process.env.DB_PASSWORD, // Password
  database: "kiki", // Database name
  // ssl: {
  //   // SSL mode required
  //   rejectUnauthorized: true,
  // },
});
