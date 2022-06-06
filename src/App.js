import React, { Component } from "react";
import data from "./data";
import LazyLoad from "react-lazyload";
import Post from "./Post";
import Spin from "./Spin";
import DemoCom from "./DemoCom";
import HookCom from "./HookCom";
// v2 - v1

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <div className="Appp">
        <h2>LazyLoad Demo</h2>
        <HookCom tet={this.state.counter} />
        <p>The counter in App is {this.state.counter}</p>
        <p>
          The button below will increase the counter in both App as well as in
          MyComponent.
        </p>
        <button onClick={this.handleClick}>Press me!</button>
        <DemoCom counter={this.state.counter} />
        {/* <div className="post-container"> 
          {data.map(post => (
            <LazyLoad
              key={post.id}
              height={100}
              offset={[-100, 100]}
              placeholder={<Spin />}
            >
              <Post key={post.id} {...post} />
            </LazyLoad>
          ))}
        </div> */}
      </div>
    );
  }
}
