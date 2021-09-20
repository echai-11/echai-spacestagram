import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";
import Layout from "./components/Layout";
import OverlaidSearchButton from "./components/shared/OverlaidSearchButton";
import "./assets/styles/styles.scss";

const App = () => {
  return (
    <div className="App">
      <Container disableGutters>
        <CssBaseline />
        <Header />
        <Layout />
        <OverlaidSearchButton />
      </Container>
    </div>
  );
};

export default App;
