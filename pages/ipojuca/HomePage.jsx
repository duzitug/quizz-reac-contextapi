import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FloatButton, Spin } from "antd";

import Hero from "../../components/Hero.jsx";
import ArticlePreviewCard from "../../components/ArticlePreview.jsx";

import AuthContext from "../../context/AuthContext.js";

function Home() {
  const [loading, setLoading] = React.useState(true);
  const [articles, setArticles] = React.useState([]);

  const { value } = React.useContext(AuthContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get("https://quiz-backend-nodejs-express.fly.dev/api/article/list")
      .then((response) => {
        setLoading(false);
        setArticles([...response.data]);
      });
  }, []);

  return (
    <>
      <Hero />

      <Spin spinning={loading}>
        <ArticlePreviewCard articles={articles} />
      </Spin>

      {value && (
        <FloatButton
          icon={<img src="/public/icons8-signing-a-document-50.png"></img>}
          shape="circle"
          description={"Criar Artigo"}
          onClick={() => navigate("/createArticle")}
          style={{ width: "90px", height: "90px" }}
        />
      )}
    </>
  );
}
export default Home;
