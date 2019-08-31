import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

const list = [{
  id : "1",
  title: "React",
  author: "facebook"
},{
  id: "2",
  title: "Vue",
  author: "Google Emp"
},{
  id: "3",
  title: "Angular",
  author: "Google"
}];

class Developer{
  getName(){
    return "Qintao"
  }
}

const dev = new Developer();
console.log("Developer:" + dev.getName());


function About(){
  return(
     <div><h1>是秦涛的老婆</h1>
    </div>
  )
}

function Inbox(){
  return(
     <div><h1>说的没错</h1>
    </div>
  )
}

function Home(){
  return(
     <div><h1>是谁的老婆</h1>
    </div>
  )
}



class App3 extends Component{

  constructor(props){
    super(props)
    this.state = {
      route: window.location.hash.substr(1)
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  render() {
    let Child;

    switch (this.state.route) {
      case '/about': Child = About; break;
      case '/inbox': Child = Inbox; break;
      default: Child = Home;
    }

    return (
      <div>
        <h1>项玲是我老婆</h1>
        <ul>
          <li><a href="#/about">About</a></li>
          <li><a href="#/inbox">Inbox</a></li>
        </ul>
        <Child/>
      </div>
    );
  }

}

class App2 extends Component{

  constructor(props){
    super(props);

    this.state = {
      list: list,
      dev: dev
    };

    this.onDismiss = this.onDismiss.bind(this);

  }

  onDismiss(id){
    const isNotId = item => item.id !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({list:updatedList});
  }

  render(){

    return (
      <div className="App">
      {this.state.list.map(item=>
          <div key={item.title}>
            <span>title2: {item.title}</span>&nbsp;
            <span>author2: {item.author}</span>
            <span>
              <button 
                onClick={()=>{this.onDismiss(item.id)}}
                type="button">Dismiss</button>
            </span>
          </div>
      )}
      </div>
    );
  };

}

function App(props) {

  return (
    <div className="App">
      {list.map(item=>
          <div key={item.title}>
            <span>title: {item.title}</span>&nbsp;
            <span>author: {item.author}</span>
          </div>
      )}
    </div>
  );
}

export default App3;
