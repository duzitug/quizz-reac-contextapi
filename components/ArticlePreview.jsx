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
  artigos,
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

      {/* {artigos?.map((artigo) => (
          <Row justify={"center"}>
            <Col span={16}>
              <Card hoverable>
                <Row>
                  <Col span={8}>
                    <img
                      alt="Imagem do artigo"
                      src={artigo.imageUrl}
                      style={{ width: "80%" }}
                    />
                  </Col>
                  <Col span={16}>
                    {artigo.title}
                    {artigo.description}
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        ))} */}

      <Row justify={"space-around"}>
        {artigos?.map((artigo) => {
          return (
            <Col span={6}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://firebasestorage.googleapis.com/v0/b/projeto-teste-7dcf3.appspot.com/o/images%2F1656348631197.jpeg?alt=media&token=09f30955-973b-421a-bab0-e67b4509bc18"
                  />
                }
              >
                <Meta title={artigo.title} description={artigo.description} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ArticlePreviewCard;
