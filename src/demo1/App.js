import React, { Component } from "react";
//import logo from "../logo.svg";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search.js";
import Table from "./Table.js";
import Button from "./Button.js";

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

const DEFAULT_QUERY = "redux";
const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      searchTerm: DEFAULT_QUERY
    };
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  setSearchTopStories(result) {
    this.setState({ result });
  }

  fetchSearchTopStories(searchTerm) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(e => e);
  }

  onDismiss(id) {
    const updatedItemList = this.state.list.filter(item => {
      return item.objectID !== id;
    });
    this.setState({ list: updatedItemList });
  }

  //searchTerm改变重新渲染，触发componentDisMount，触发重新获取列表，触发setState，触发修改列表
  componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
  }

  onSearchChange(e) {
    const { value } = e.target;
    this.setState({
      searchTerm: value
    });
  }

  onClick(e) {
    alert("项玲是个大花猫");
  }

  render() {
    const { searchTerm, result } = this.state;
    if (!result) {
      return null;
    }

    return (
      <div className="App">
        <div className="container">
          <Search value={searchTerm} onChange={this.onSearchChange}>
            Search：
          </Search>
          <Table
            list={result.hits}
            pattern={this.state.searchTerm}
            onDismiss={this.onDismiss}
          />
          <Button onClick={this.onClick}>一个按钮</Button>
        </div>
      </div>
    );
  }
}

export default App;
