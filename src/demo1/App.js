import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search.js";
import Table from "./Table.js";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      searchTerm: ""
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss(id) {
    const updatedItemList = this.state.list.filter(item => {
      return item.objectID !== id;
    });
    this.setState({ list: updatedItemList });
  }

  onSearchChange(e) {
    const { value } = e.target;
    this.setState({
      searchTerm: value
    });
  }

  render() {
    return (
      <div className="container">
        <Search value={this.state.searchTerm} onChange={this.onSearchChange}>
          Search：
        </Search>
        <Table
          list={this.state.list}
          pattern={this.state.searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

export default App;
