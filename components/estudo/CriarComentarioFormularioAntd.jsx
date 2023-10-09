import React from "react";

import axios from "axios";

import { Button, Form, Input, Space, Row, Col, Checkbox } from "antd";

function CriarComentarioFormularioAntd() {
  const naFinalizacao = async (valores) => {
    console.log("Successo:", valores);

    const resposta = await axios({
      url: "http://127.0.0.1:3001/api/artigo/um-dia-na-argentina/comentario",
      method: "POST",
      data: { comentario: { conteudo: valores.comentario } },
      headers: {
        autorizacao:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vbmljYUBlbWFpbC5jb20iLCJpYXQiOjE2OTUwNzY2MzN9.V10XgMQlR7jeOICcl3ZP_jzAgI-98HGX0LEqlH_XqHc",
      },
    });

    console.log("resposta", resposta);
  };

  // o antd já cria linha e coluna para o formuário
  return (
    <>
      <Row justify={"center"}>
        <Col span={8}>
          <h1>teste2</h1>
        </Col>
        <Col span={8}>
          <h1>teste</h1>
        </Col>
        <Col span={8}>
          <h1>teste</h1>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col span={18}>
          <Form onFinish={naFinalizacao}>
            <Form.Item name="comentario">
              <Input />
            </Form.Item>

            <Form.Item name="comentario">
              <Input />
            </Form.Item>

            <Form.Item name="comentario" wrapperCol={{ span: 4 }}>
              <Input />
            </Form.Item>

            <Form.Item>
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 12 }}>
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

export default CriarComentarioFormularioAntd;
