import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FloatButton, Spin, Pagination, Space, Row, Col, Card } from "antd";

const { Meta } = Card;

import { EditOutlined } from "@ant-design/icons";

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
        `https://nodejs-merciof-dev.fly.dev/api/article/listArticleWithPagination?limit=${itensPorPagina}&offset=${
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
    <>
      <Space
        direction="vertical"
        size="small"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Row align={"center"}>
          <Col span={18}>
            <Hero />
          </Col>
        </Row>
        <Spin spinning={carregando}>
          <ArticlePreviewCard artigos={artigos} />
        </Spin>

        {value && (
          <FloatButton
            icon={<EditOutlined />}
            tooltip={<div>Escrever Artigo</div>}
            shape="circle"
            onClick={() => navegar("/createArticle")}
          />
        )}

        <Row align={"center"}>
          <Col span="6">
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span="6">
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span="6">
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>

        <Row style={{ marginTop: "1rem" }}>
          {/* Por que o alinhamento ao centro só funciona diretamente na coluna? */}
          <Col span={18} align={"center"}>
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

      {/* or que o justify atraves da propriedade não funciona? */}
      <Row style={{ justifyContent: "space-evenly" }}>
        <Col span="6">
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span="6">
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span="6">
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default PaginaInicial;
