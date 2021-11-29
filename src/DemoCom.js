import React, { Component } from "react";

//cherry pick check 1 file demo
export default class DemoCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      counter_props: 2,
    };
  }
  // static getDerivedStateFromProps = (nextProps, prevState) =>
  //   nextProps.counter === prevState.counter
  //     ? null
  //     : { counter: nextProps.counter };

  // static getDerivedStateFromProps = (nextProps, prevState) => {
  //   console.log('get nextProps : ', nextProps);
  //   console.log('get prevState : ', prevState);
  //   if(nextProps.counter === prevState.counter){
  //     console.log(' = ');
  //     // return null;
  //   }else {
  //     console.log('#');
  //     // return {
  //       // counter: nextProps.counter,
  //       // counter_props: nextProps.counter + 2
  //     // };
  //   }
  // }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("did prevProps : ", prevProps);
    console.log("did prevState : ", prevState);
    console.log("did this.state : ", this.state);
    console.log("did this.props : ", this.props);
    console.log("did snapshot : ", snapshot);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('should nextProps : ', nextProps);
  //   console.log('should nextState : ', nextState);
  //   console.log('should this.state : ', this.state);
  //   console.log('should this.props : ', this.props);
  //   if(this.state.counter === 6 ) return false;
  //   return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log("Wil next props: ", nextProps);
    console.log("Wil this.props.counter: ", this.props.counter);
    console.log("Wil this.state.counter: ", this.state.counter);
    console.log("Wil this.state.counter_props: ", this.state.counter_props);
    console.log("Wil next state: ", nextState);
    if (nextState.counter !== this.state.counter) {
      // this.setState(
      //   {counter: this.state.counter + 2}
      // )
      console.log("###");
      return null;
    }
  }

  handleClick = async () => {
    let a = Math.ceil(Math.random() * 10);
    console.log("check handleclick");
    await this.setState((prevState) => ({
      counter: prevState.counter + prevState.counter_props + 3,
      // counter: prevState.counter + 1
    }));
    console.log('"this state : ', this.state);
  };

  render() {
    console.log("render ");
    return (
      <div>
        <p>The counter in MyComponent is {this.state.counter}</p>
        <p>The button will increase the counter only inside MyComponent.</p>
        <button onClick={this.handleClick}>Press me!</button>
      </div>
    );
  }
}
