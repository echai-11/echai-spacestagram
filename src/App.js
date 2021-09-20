import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";
import Layout from "./components/Layout";
import "./assets/styles/styles.scss";

const App = () => {
  return (
    <div className="App" id="appRoot">
      <Container disableGutters>
        <CssBaseline />
        <Header />
        <Layout />
      </Container>
    </div>
  );
};

export default App;
