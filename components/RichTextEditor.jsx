import React from "react";

import axios from "axios";

import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Spin, Space, message } from "antd";

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
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          [{ align: ["center", "right", "justify"] }],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: () => {
            const input = document.createElement("input");

            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.click();

            input.onchange = async () => {
              const file = input.files[0];
              const formData = new FormData();

              formData.append("image", file);

              const fileName = file.name;

              const storageRef = ref(storage, `images/${fileName}`);

              setLoading(true);

              const snapshot = await uploadBytes(storageRef, file);

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

      {loading && (
        <div style={{ textAlign: "center" }}>
          <Spin size="large" />
        </div>
      )}

      <ReactQuill
        ref={(el) => {
          reactQuillRef = el;
        }}
        theme="snow"
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
        formats={formats}
        modules={modules}
        style={{
          width: "60%",
          margin: "auto",
          height: "30rem",
        }}
      />
      <Button
        onClick={() => {
          console.log(value);

          messageApi.open({
            key,
            type: "loading",
            content: "Criando artigo...",
          });

          axios
            .post("http://localhost:3000/api/article", {
              article: {
                title: "titulo do artigo 2",
                description: "description 2",
                body: value,
                imageUrl,
              },
            })
            .then((response) => {
              console.log(response);
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
    </Space>
  );
}

export default RichTextEditor;
