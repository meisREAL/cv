import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/App.css"

class App extends Component {
  render() {
    return (
      <div className="window">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
