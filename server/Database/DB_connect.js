import mysql from "mysql";

export const DB = mysql.createConnection({
  host: "mysql-3db8a027-vishu-1019.a.aivencloud.com",
  user: "root",
  password: "vashisth2006",
  database: "kiki",
});
