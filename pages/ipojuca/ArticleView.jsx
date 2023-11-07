import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Space, Row, Col, Typography } from "antd";

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
        flexDirection: "column",
      }}
    >
      <Row align={"center"}>
        <Col span={12}>
          {article ? null : "loading..."}

          <Typography.Title level={2}>
            {article && article.title}
          </Typography.Title>

          <Typography style={{ fontSize: "16px", textAlign: "justify" }}>
            {article && parse(article.body)}
          </Typography>
        </Col>
      </Row>
    </Space>
  );
}

export default ArticleView;
