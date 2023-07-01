import React from "react";
import { Card, Typography, Space, Row, Col } from "antd";

const { Meta } = Card;
const { Title, Text } = Typography;

const ArticlePreviewCard = ({
  title,
  author,
  date,
  description,
  image,
  articles,
}) => {
  return (
    <>
      {/* <Card
        hoverable
        style={{ width: "70%", margin: "auto", marginTop: "1rem" }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={8} md={6} lg={4}>
            <img alt="Imagem do artigo" src={image} style={{ width: "90%" }} />
          </Col>
          <Col xs={24} sm={16} md={18} lg={20} style={{ paddingLeft: "100px" }}>
            <Meta
              title={<Title level={4}>{title}</Title>}
              description={
                <>
                  <Text>{description}</Text>
                  <br />
                  <Text type="secondary">
                    Por {author} em {date}
                  </Text>
                </>
              }
            />
          </Col>
        </Row>
      </Card> */}

      <Space
        direction="vertical"
        size="middle"
        style={{
          display: "flex",
          marginTop: "1rem",
        }}
      >
        {articles?.map((article) => (
          <Row>
            <Col span={16} style={{ margin: "auto" }}>
              <Card hoverable>
                <Row>
                  <Col span={8}>
                    <img
                      alt="Imagem do artigo"
                      src={image}
                      style={{ width: "50%" }}
                    />
                  </Col>
                  <Col span={16}>{article.title}</Col>
                </Row>
              </Card>
            </Col>
          </Row>
        ))}
      </Space>
    </>
  );
};

export default ArticlePreviewCard;
