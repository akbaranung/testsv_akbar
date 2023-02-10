import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./component/ArticleList";
import AddArticle from "./component/AddArticle";
import EditArticle from "./component/EditArticle";
import Detail from "./component/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/add" element={<AddArticle />} />
        <Route path="/edit/:id" element={<EditArticle />} />
        <Route path="/article/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
