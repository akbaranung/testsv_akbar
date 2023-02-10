import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddArticle = () => {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Category, setCategory] = useState("");
  const navigate = useNavigate();

  const saveArticle = async (e) => {
    const Status = "publish";
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/article/", {
        Title,
        Content,
        Category,
        Status,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const draftArticle = async (e) => {
    const Status = "draft";
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/article/", {
        Title,
        Content,
        Category,
        Status,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`/`} className="button is-primary mb-5">
          Kembali
        </Link>
        <form>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="Title"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Content</label>
            <div className="control">
              <textarea
                type="text"
                className="input"
                name="Content"
                value={Content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Category</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="Category"
                value={Category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
              />
            </div>
          </div>
          <div className="field">
            <button onClick={saveArticle} className="button is-success">
              Publish
            </button>
            <button onClick={draftArticle} className="button is-danger ml-3">
              Draft
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
