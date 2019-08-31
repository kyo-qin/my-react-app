//app.js
import React, { Component } from "react";
import "./App.css";
import List from "./List";
import Form1 from "./demo/Form1";

class App3 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <List />
        <Form1 />
      </div>
    );
  }
}

export default App3;
