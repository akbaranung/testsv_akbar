import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [article, setArticle] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getArticleById();
  }, []);
  const getArticleById = async () => {
    const response = await axios.get(`http://localhost:5000/article/${id}`);
    setArticle(response.data);
  };
  return (
    <div className="columns mt-5 is-centered">
      <div className="columnn is-half">
        <h1>{article.Title}</h1>
        <p>{article.Content}</p>
      </div>
    </div>
  );
};

export default Detail;
