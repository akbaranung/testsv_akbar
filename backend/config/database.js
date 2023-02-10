import { Sequelize } from "sequelize";

const db = new Sequelize("article_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
