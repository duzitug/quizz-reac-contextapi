import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import parse from "html-react-parser";

function ArticleView() {
  const { slug } = useParams();

  const [article, setArticle] = React.useState(null);

  React.useEffect(() => {
    axios.get(`http://localhost:3000/api/article/${slug}`).then((response) => {
      console.log(response.data);
      setArticle(response.data);
    });
  }, []);

  return (
    <>
      <h1>{slug}</h1>
      {article ? null : "loading..."}

      <div style={{ width: "60%", margin: "auto", fontSize: "1rem" }}>
        {article && parse(article.body)}
      </div>
    </>
  );
}

export default ArticleView;
