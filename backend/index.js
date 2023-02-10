import express from "express";
import cors from "cors";
import ArticleRoute from "./routes/ArticleRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(ArticleRoute);
// app.use((error, req, res) => {
//   const status = error.errorStatus;
//   const message = error.message;
//   const data = error.data;
//   res.status(status).json({ message: message, data: data });
// });

app.listen(5000, () => console.log("Server up and running"));
