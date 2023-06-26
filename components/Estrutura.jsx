import { Layout, Space } from "antd";
import Cabecalho from "./Header.jsx";
import Hero from "./Hero.jsx";
import ArticlePreviewCard from "./CartaoPreVisualizacaoArtigo.jsx";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};
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
          <Hero />

          <ArticlePreviewCard
            title={"Titulo do artigo"}
            date={"dezembro"}
            description={"descricap"}
            author={"autor"}
            image={"https://th.bing.com/th/id/OIP.nhyWEOmF_nmKhIg9LY5U8wAAAA"}
          />
        </Content>
      </Layout>
      <Footer style={{ backgroundColor: "white" }}>Rodapé</Footer>
    </Layout>
  </Space>
);
export default Estrutura;
