import { useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
const items = [
  {
    label: "Menu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        label: "Início",
      },
      {
        label: "Logar",
      },
      {
        label: "Sobre",
      },
    ],
  },
];
const Cabecalho = () => {
  const [current, setCurrent] = useState("mail");

  const navigate = useNavigate();
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    e.key === "tmp-1" ? console.log("tmp-1") : console.log("tmp-0");

    if (e.key === "tmp-0") navigate("/login");
    else navigate("sobre");
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Cabecalho;
