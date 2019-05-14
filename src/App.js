import React from "react";

import Box from "./components/Box";
import Card from "./components/Card";

import "./style.css";

const cardSettings = {
  border: true,
  rounded: true,
  padding: "2",
  style: { width: "300px" },
  cardBodySettings: {
    padding: "2"
  },
  cardFooterSettings: {},
  headerSettings: {
    margin: "0"
  },
  textSettings: {},
  buttonSettings: {
    padding: "2",
    border: true,
    rounded: true,
    cursor: "pointer",
    bgColor: "primary",
    textColor: "white"
  }
};

function App() {
  return (
    <Box className="main">
      <Card {...cardSettings} />
    </Box>
  );
}

export default App;
