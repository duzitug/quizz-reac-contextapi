import { Outlet } from "react-router-dom";
import { Layout, Space } from "antd";
import Cabecalho from "./Header.jsx";
import Hero from "./Hero.jsx";
import ArticlePreviewCard from "./CartaoPreVisualizacaoArtigo.jsx";
const { Header, Footer, Content } = Layout;

const Estrutura = () => (
  <Space
    direction="vertical"
    style={{
      width: "100%",
    }}
    size={[0, 48]}
  >
    <Layout>
      <Header style={{ backgroundColor: "white" }}>
        <Cabecalho />
      </Header>
      <Layout>
        <Content style={{ backgroundColor: "white" }}>
          <Outlet />
        </Content>
      </Layout>
      <Footer style={{ backgroundColor: "white" }}>Rodapé</Footer>
    </Layout>
  </Space>
);
export default Estrutura;
