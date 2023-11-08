import React from "react";
import axios from "axios";
import { Pagination } from "antd";

function ArticlePagination() {
  const [articles, setArticles] = React.useState([]);
  const [totalPages, setTotalPages] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 2;

  React.useEffect(() => {
    axios
      .get(
        `https://quiz-backend-nodejs-express.fly.dev/api/article/listArticleWithPagination?limit=${itemsPerPage}&offset=${
          (currentPage - 1) * itemsPerPage
        }`,
      )
      .then((response) => {
        setArticles(response.data.rows);
        setTotalPages(response.data.count);
      });
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {articles.map((article) => (
        <div key={article.id}>
          {/* Renderize cada artigo aqui */}
          <h2>{article.title}</h2>
          <p>{article.id}</p>
        </div>
      ))}

      {totalPages > 0 && (
        <Pagination
          current={currentPage}
          total={totalPages}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
        />
      )}
    </>
  );
}

export default ArticlePagination;
