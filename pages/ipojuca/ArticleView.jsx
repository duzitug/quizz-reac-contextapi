import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Space, Row, Col } from "antd";

import parse from "html-react-parser";

function ArticleView() {
  // onde o slug está sendo definido?
  const { id } = useParams();

  const [article, setArticle] = React.useState(null);

  React.useEffect(() => {
    axios.get(`http://localhost:3000/api/article/${id}`).then((response) => {
      console.log(response.data);
      setArticle(response.data);
    });
  }, []);

  return (
    <Space
      direction="vertical"
      style={{
        display: "flex",
      }}
    >
      <Row>
        <Col span={16} style={{ margin: "auto" }}>
          <h1>{id}</h1>
          {article ? null : "loading..."}

          <div>{article && parse(article.body)}</div>
        </Col>
      </Row>
    </Space>
  );
}

export default ArticleView;
