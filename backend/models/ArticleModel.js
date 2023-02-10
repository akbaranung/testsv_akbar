import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Article = db.define(
  "posts",
  {
    Title: DataTypes.STRING(200),
    Content: DataTypes.TEXT,
    Category: DataTypes.STRING(100),
    Status: DataTypes.STRING(100),
  },
  {
    freezeTableName: true,
  }
);

export default Article;

(async () => {
  await db.sync();
})();
