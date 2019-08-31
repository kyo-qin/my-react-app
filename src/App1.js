import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>是秦涛的老婆</h1>
    </div>
  );
}

function Inbox() {
  return (
    <div>
      <h1>说的没错</h1>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>是谁的老婆</h1>
    </div>
  );
}

function Get() {
  return (
    <div>
      <h1>hhhhhh</h1>
    </div>
  );
}

const topicList = [
  {
    p: "rendering",
    t: "Rendering with React"
  },
  {
    p: "components",
    t: "Components"
  },
  {
    p: "props-v-state",
    t: "Props v. State"
  },
  {
    p: "whatever",
    t: "什么玩意"
  }
];

function Topics({ match }) {
  console.log(match);
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topicList.map(item => (
          <li key={item.p}>
            <Link to={`${match.url}/${item.p}`}>{item.t}</Link>
          </li>
        ))}
        <Link to="/get">get</Link>
      </ul>
      <hr />
      <Route path={`${match.path}/:id`} component={Topic} />

      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />

      <Route
        path="/topics/order/:direction(asc|desc)"
        component={ComponentWithRegex}
      />
      <hr />
    </div>
  );
}

function Topic({ match }) {
  console.log(match);
  return (
    <div>
      <h3>{match.params.id}</h3>
    </div>
  );
}

function ComponentWithRegex({ match }) {
  return (
    <div>
      <h3>Only asc/desc are allowed: {match.params.direction}</h3>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Inbox</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Inbox} />
          <Route path="/topics" component={Topics} />
          <Route path="/get" component={Get} />
        </div>
      </Router>
    );
  }
}
export default App;
