import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className={"container-fluid"}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
