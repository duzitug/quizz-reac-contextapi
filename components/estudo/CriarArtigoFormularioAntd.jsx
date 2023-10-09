import React from "react";

import axios from "axios";

import { Button, Form, Input, Row, Col } from "antd";

function CriarArtigoFormularioAntd() {
  //   React.useEffect(() => {

  //   }, [])

  const naSubmicao = async (dados) => {
    const resposta = await axios({
      url: "http://127.0.0.1:3001/api/artigo",
      method: "POST",
      data: { artigo: { ...dados } },
      headers: {
        autorizacao:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vbmljYUBlbWFpbC5jb20iLCJpYXQiOjE2OTUwNzY2MzN9.V10XgMQlR7jeOICcl3ZP_jzAgI-98HGX0LEqlH_XqHc",
      },
    });

    console.log(resposta);
  };

  return (
    <>
      <Row justify={"center"}>
        <Col span={12}>
          <Form
            onFinish={naSubmicao}
            labelCol={{
              span: 6,
            }}
          >
            <Form.Item label="Titulo" name="titulo">
              <Input />
            </Form.Item>

            <Form.Item label="Descricao" name="descricao">
              <Input />
            </Form.Item>

            <Form.Item label="corpo" name="corpo">
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6 }}>
              <Button type="primary" htmlType="submit">
                Enviar
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default CriarArtigoFormularioAntd;
