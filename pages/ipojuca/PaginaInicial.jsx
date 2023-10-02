import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FloatButton, Spin, Pagination, Space, Row, Col } from "antd";

import Hero from "../../components/Hero.jsx";
import ArticlePreviewCard from "../../components/ArticlePreview.jsx";

import AuthContext from "../../context/AuthContext.js";

function PaginaInicial() {
  const [carregando, setCarregando] = React.useState(true);
  const [artigos, setArtigos] = React.useState([]);
  const [totalDePaginas, setTotalDePaginas] = React.useState(0);
  const [paginaAtual, setPaginaAtual] = React.useState(1);

  const { value } = React.useContext(AuthContext);

  const navegar = useNavigate();

  const itensPorPagina = 2;

  React.useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:3000/api/article/listArticleWithPagination?limit=${itensPorPagina}&offset=${
          (paginaAtual - 1) * itensPorPagina
        }`,
      )
      .then((resposta) => {
        setArtigos(resposta.data.rows);
        setTotalDePaginas(resposta.data.count);
        setCarregando(false);
      });
  }, [paginaAtual]);

  const tratarMudanca = (pagina) => {
    setPaginaAtual(pagina);
    setCarregando(true);
  };

  return (
    <Space
      direction="vertical"
      size="small"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Row align="center">
        <Col span={18}>
          <Hero />
        </Col>
      </Row>

      <Spin spinning={carregando}>
        <ArticlePreviewCard artigos={artigos} />
      </Spin>

      {value && (
        <FloatButton
          icon={<img src="/public/icons8-signing-a-document-50.png"></img>}
          shape="circle"
          description={"Criar Artigo"}
          onClick={() => navegar("/createArticle")}
          style={{ width: "90px", height: "90px" }}
        />
      )}

      <Row style={{ marginTop: "1rem" }} align={"center"}>
        <Col span={16} align={"center"}>
          {totalDePaginas > 0 && (
            <Pagination
              current={paginaAtual}
              total={totalDePaginas}
              pageSize={itensPorPagina}
              onChange={tratarMudanca}
            />
          )}
        </Col>
      </Row>
    </Space>
  );
}
export default PaginaInicial;
