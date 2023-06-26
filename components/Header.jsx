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
        label: "Logar",
      },
    ],
  },
  { label: "Sobre" },
];
const Cabecalho = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
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
