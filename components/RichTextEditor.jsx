import React from "react";

import axios from "axios";

import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Spin, Space, message, Input, Row, Col } from "antd";

import Resizer from "react-image-file-resizer";

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64",
    );
  });

function redimensionarImagem(arquivo) {
  return new Promise((resolver) => {
    Resizer.imageFileResizer(
      arquivo,
      300,
      300,
      "JPEG",
      100,
      0,
      (uri) => {
        resolver(uri);
      },
      "file",
    );
  });
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_RJeXxSxpw7LXZ5RWK_zUWwGXR7nv3M4",
  authDomain: "projeto-teste-7dcf3.firebaseapp.com",
  databaseURL: "https://projeto-teste-7dcf3.firebaseio.com",
  projectId: "projeto-teste-7dcf3",
  storageBucket: "projeto-teste-7dcf3.appspot.com",
  messagingSenderId: "64536651121",
  appId: "1:64536651121:web:362d662ea98524bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

let reactQuillRef = null;

let quillRef = null;

// Create a root reference
//var storageRef = firebase.storage().ref();

function RichTextEditor() {
  const [value, setValue] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const [loading, setLoading] = React.useState(false);

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const modules = React.useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          [
            "bold",
            "blockquote",
            "image",
            "link",
            { list: "ordered" },
            { list: "bullet" },
          ],
          // [{ align: ["center", "right", "justify"] }],
          ["italic", "underline", "strike", "clean"],
        ],
        handlers: {
          image: () => {
            const input = document.createElement("input");

            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.click();

            input.onchange = async () => {
              debugger;
              const imagem = input.files[0];

              const nome = imagem.name;

              const imagemRedimensionada = await redimensionarImagem(imagem);

              const storageRef = ref(storage, `images/${nome}`);

              setLoading(true);

              const snapshot = await uploadBytes(
                storageRef,
                imagemRedimensionada,
              );

              setLoading(false);

              const url = await getDownloadURL(snapshot.ref);

              setImageUrl(url);

              const range = reactQuillRef.getEditor().getSelection();

              //inseri a imagem no editor
              reactQuillRef
                .getEditor()
                .insertEmbed(range.index, "image", `${url}`);
            };
          },
        },
      },
    };
  }, []);

  //como aumentar o tamanho padrão da textarea do editor?
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: "flex",
        marginTop: "1rem",
      }}
    >
      {contextHolder}

      <Row justify={"center"}>
        <Col span={8}>
          <Input
            placeholder="Título do artigo"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col span={8}>
          <Input
            placeholder="descrição"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Col>
      </Row>

      {loading && (
        <div style={{ textAlign: "center" }}>
          <Spin size="large" />
        </div>
      )}

      <Row justify={"center"}>
        <Col span={8}>
          <ReactQuill
            ref={(el) => {
              reactQuillRef = el;
            }}
            theme="snow"
            value={value}
            onChange={setValue}
            formats={formats}
            modules={modules}
            placeholder="Escreva aqui"
            style={{
              fontSize: "18px",
            }}
          />
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col span={8}>
          <Button
            style={{}}
            onClick={() => {
              messageApi.open({
                key,
                type: "loading",
                content: "Criando artigo...",
              });

              axios
                .post("http://localhost:3000/api/article", {
                  article: {
                    title,
                    description,
                    body: value,
                    imageUrl,
                  },
                })
                .then(() => {
                  messageApi.open({
                    key,
                    type: "success",
                    content: "Artigo criado com sucesso.",
                    duration: 2,
                  });
                });
            }}
          >
            Enviar
          </Button>
        </Col>
      </Row>
    </Space>
  );
}

export default RichTextEditor;
