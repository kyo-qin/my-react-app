import React, { Component } from "react";
//import logo from "../logo.svg";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search.js";
import Table from "./Table.js";
import Button from "./Button.js";
import ddd from "../react.json";
// import axios from "axios";

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

const DEFAULT_QUERY = "";
const DEFAULT_HPP = "10";

const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";
const PARAM_PAGE = "page=";
const PARAM_HPP = "hitsPerPage=";

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
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  setSearchTopStories(result) {
    const { hits, page } = result;
    const oldHits =
      this.state.result == undefined ? [] : this.state.result.hits;
    const updateHits = [...oldHits, ...hits];
    this.setState({
      result: { hits: updateHits, page }
    });
  }

  fetchSearchTopStories(searchTerm, page = 0) {
    const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(e => e);
    //console.log(ddd);
    //this.setSearchTopStories(ddd);
  }

  onDismiss(id) {
    const updatedItemList = this.state.result.hits.filter(item => {
      return item.objectID !== id;
    });
    //this.setState({ list: updatedItemList });
    //this.setState({
    //assgin第一个对象是目标对象，后面都是源对象，排在后面的对象会优先覆盖前面的对象
    //result: Object.assign({}, this.state.result, { hits: updatedItemList })
    //});

    this.setState({
      result: { ...this.state.result, hits: updatedItemList }
    });
  }

  //渲染完成后触发
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

  onClick(ev, searchTerm, page) {
    //console.log(ev);
    this.fetchSearchTopStories(searchTerm, page+1);
    //ev.preventDefault();
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
    event.preventDefault();
  }

  render() {
    console.log("rendering");
    const { searchTerm, result } = this.state;
    const page = (result && result.page) || 0;
    if (!result) {
      return null;
    }

    return (
      <div className="App">
        <div className="container">
          <h1>我老婆项玲</h1>
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
          {result && <Table list={result.hits} onDismiss={this.onDismiss} />}
          <Button onClick={(ev, p1, p2) => this.onClick(ev, searchTerm, page)}>
            More
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
