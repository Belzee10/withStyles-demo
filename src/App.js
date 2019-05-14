import React from "react";

import Box from "./components/Box";
import Card from "./components/Card";

import { cardBasic, cardDanger, cardFull } from "./settings";
import "./style.css";

function App() {
  return (
    <Box className="main">
      <Card {...cardBasic} />
      <Box padding="1" />
      <Card {...cardDanger} />
      <Box padding="1" />
      <Card {...cardFull} />
    </Box>
  );
}

export default App;
