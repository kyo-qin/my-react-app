import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    name: "Jordan Walke",
    num_comments: 3,
    points: 4,
    id: 0
  },
  {
    title: "Vue",
    url: "https://facebook.github.io/vue/",
    name: "Qqqq Walke",
    num_comments: 4,
    points: 46,
    id: 1
  }
];

//List.js
class TrData extends Component {
  constructor(props) {
    super(props);
    //将方法绑定到类，因此成为类方法，所以类内调用到时候用this.xxx而不是直接使用
    //类方法不会自动绑定this到实例上
    //定义函数到时候如果用了ES6到箭头函数就不需要这样做了
    //this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    const _this = this; //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
    const {users} = _this.props;
    _this.setState({
      users: users,
      searchTerm:''
    });
  }

  onSearchChange(event) {
    const {id,value} = event.target;
    this.state.users.filter(item=>{
      if(item.id==id){
        item.name = value;
      }
    })
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return this.state.users.map((user, i) => {
      return (
        <tr key={user.id} className="text-center">
          <td>{user.id}</td>
          <td>{user.title}</td>
          <td>{user.name}</td>
          <td>{user.url}</td>
          <td>
            {/*如果使用 onClick={doSomething()}  ，那么doSomething()会在浏览器打开时执行
             必须使用箭头函数才能绑定事件 ()=>xxx //例如：onClick=
             {console.log("xxx")} 和 onClick={() => console.log("xxx")}*/}
            <button onClick={() => this.onDismiss(user.id)} type="button">
              {" "}
              Dismiss
            </button>
          </td>
          <td>
            <form>
              <input type="text" id={user.id} onChange={this.onSearchChange} />
            </form>
          </td>
        </tr>
      );
    });
  }

  //或者在构造函数中绑定，或者用ES6的箭头函数绑定
  onDismiss = id => {
    const updateItems = this.state.users.filter(item => {
      return item.id !== id;
    });
    this.setState({
      users: updateItems
    });
  };
}

//List.js
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    const _this = this; //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。

    _this.setState({
      users: list,
      isLoaded: true
    });
    //   axios
    //     .get("https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists")
    //     .then(function(response) {
    //       _this.setState({
    //         users: response.data,
    //         isLoaded: true
    //       });
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //       _this.setState({
    //         isLoaded: false,
    //         error: error
    //       });
    //     });
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading</div>;
    } else {
      return (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">姓名</th>
              <th className="text-center">年龄</th>
              <th className="text-center">url</th>
              <th className="text-center">操作</th>
              <th className="text-center">操作2</th>
            </tr>
          </thead>
          <tbody>
            <TrData users={this.state.users} />
          </tbody>
        </table>
      );
    }
  }
}
//List.js
export default List;
