import express from "express";
import {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../controller/ArticleController.js";
import { body } from "express-validator";

const router = express.Router();

router.get("/article/", getArticles);
router.get("/article/:id", getArticleById);
router.post(
  "/article/",
  [
    body("Title")
      .isLength({ min: 5 })
      .withMessage("Wajib Diisi dengan Minimal 5 Karakter"),
    body("Content")
      .isLength({ min: 5 })
      .withMessage("Wajib Diisi dengan Minimal 5 Karakter"),
    body("Category")
      .isLength({ min: 3 })
      .withMessage("Wajib Diisi dengan Minimal 3 Karakter"),
    body("Status")
      .isIn(["publish", "draft", "trash"])
      .withMessage("Wajib Diisi dengan Pilihan publish, draft atau trash"),
  ],
  createArticle
);

router.patch(
  "/article/:id",
  [
    body("Title")
      .isLength({ min: 5 })
      .withMessage("Wajib Diisi dengan Minimal 5 Karakter"),
    body("Content")
      .isLength({ min: 5 })
      .withMessage("Wajib Diisi dengan Minimal 5 Karakter"),
    body("Category")
      .isLength({ min: 3 })
      .withMessage("Wajib Diisi dengan Minimal 3 Karakter"),
    body("Status")
      .isIn(["publish", "draft", "trash"])
      .withMessage("Wajib Diisi dengan Pilihan publish, draft atau trash"),
  ],
  updateArticle
);

router.delete("/article/:id", deleteArticle);

export default router;
