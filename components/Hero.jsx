import React from "react";
import { Row, Col, Typography } from "antd";

import AuthContext from "../context/AuthContext.js";

const { Title, Text } = Typography;

function Hero() {
  const { value } = React.useContext(AuthContext);

  return (
    <>
      <Title level={1}>Ipojuca Science</Title>

      <img
        alt="Ipojuca Science"
        src="../gummy-medical-lab-456x456.png"
        style={{ width: "25%" }}
      ></img>

      {/* <p> {value} </p> */}
    </>
  );
}

export default Hero;
