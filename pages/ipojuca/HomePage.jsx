import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FloatButton, Spin, Pagination, Space, Row, Col } from "antd";

import Hero from "../../components/Hero.jsx";
import ArticlePreviewCard from "../../components/ArticlePreview.jsx";

import AuthContext from "../../context/AuthContext.js";

function HomePage() {
  const [loading, setLoading] = React.useState(true);
  const [articles, setArticles] = React.useState([]);
  const [totalPages, setTotalPages] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);

  const { value } = React.useContext(AuthContext);

  const navigate = useNavigate();

  const itemsPerPage = 2;

  React.useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:3000/api/article/listArticleWithPagination?limit=${itemsPerPage}&offset=${
          (currentPage - 1) * itemsPerPage
        }`,
      )
      .then((response) => {
        setArticles(response.data.rows);
        setTotalPages(response.data.count);
        setLoading(false);
      });
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setLoading(true);
  };

  return (
    <Space
      direction="vertical"
      size="small"
      style={{
        display: "flex",
      }}
    >
      <Row style={{ justifyContent: "center" }}>
        <Col
          span={16}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Hero />
        </Col>
      </Row>

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

      <Row style={{ justifyContent: "center", marginTop: "1rem" }}>
        <Col span={16} style={{ display: "flex", justifyContent: "center" }}>
          {totalPages > 0 && (
            <Pagination
              current={currentPage}
              total={totalPages}
              pageSize={itemsPerPage}
              onChange={handlePageChange}
            />
          )}
        </Col>
      </Row>
    </Space>
  );
}
export default HomePage;
