import React, { Component } from "react";

class SayHello extends Component {
  render() {
    return (
      <>
        <h1>Hello {this.props.name}</h1>
        <div>{this.props.children}</div>
      </>
    );
  }
}
export default SayHello;
