import React from "react";

import Box from "./components/Box";
import Card from "./components/Card";

import "./style.css";

const cardSettings = {
  border: true,
  rounded: true,
  padding: "2",
  style: { width: "300px" }
};

function App() {
  return (
    <Box className="main" border>
      <Card {...cardSettings} />
    </Box>
  );
}

export default App;
