import React from "react";
import "./styles/main.sass";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Home />
    </React.Fragment>
  );
}

export default App;
