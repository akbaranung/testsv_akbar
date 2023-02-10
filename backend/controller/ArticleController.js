import Article from "../models/ArticleModel.js";
import { validationResult } from "express-validator";
//Menampilkansemua artikel
export const getArticles = async (req, res) => {
  try {
    const response = await Article.findAll();
    if (response.length > 0) {
      res.status(200).json({
        message: "Data Semua Article",
        data: response,
      });
      res.status(200).json({
        message: "Data Semua Article",
        data: response,
      });
    } else {
      res.status(200).json({
        message: "Daftar artikel masih kosong",
        data: [],
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

//Menampilkan artikel berdasarkan id
export const getArticleById = async (req, res) => {
  try {
    const response = await Article.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

//Mambuat artikel baru
export const createArticle = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res
        .status(400)
        .json({ message: "Input value tidak sesuai", data: errors.array() });
    } else {
      await Article.create(req.body);
      res.status(201).json({ msg: "Article Created" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

//Update artikel berdasarkan id
export const updateArticle = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res
        .status(400)
        .json({ message: "Input value tidak sesuai", data: errors.array() });
    } else {
      await Article.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ msg: "Article Updated" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

//Delete Artikel Berdasarkan id
export const deleteArticle = async (req, res) => {
  try {
    await Article.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Article Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
