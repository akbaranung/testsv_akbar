import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticle] = useState([]);
  useEffect(() => {
    getArticles();
  }, []);
  const getArticles = async () => {
    const response = await axios.get("http://localhost:5000/article");
    setArticle(response.data.data);
  };

  const deleteArticle = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/article/${id}`);
      getArticles();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="columnn is-half">
        <Link to={`add`} className="button is-success">
          Add Article
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr key={article.id}>
                <td>{index + 1}</td>
                <td>{article.Title}</td>
                <td>{article.Category}</td>
                <td>{article.Status}</td>
                <td>
                  <Link
                    to={`/article/${article.id}`}
                    className="button is-small is-warning ml-3"
                  >
                    Preview
                  </Link>
                  <Link
                    to={`edit/${article.id}`}
                    className="button is-small is-info ml-3"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteArticle(article.id)}
                    className="button is-small is-danger ml-3"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArticleList;
