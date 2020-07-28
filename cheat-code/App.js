import React, { Component } from "react";
import "./App.css";
import SayHello from "../components/SayHello";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfClicks: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
  }

  decrement() {
    this.setState({ numberOfClicks: this.state.numberOfClicks - 1 });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SayHello name="World">
            <h3>From ETNA</h3>
            <h6>
              You Clicked {this.state.numberOfClicks} time
              {this.state.numberOfClicks > 1 ? "s" : ""}
            </h6>
          </SayHello>
          <button onClick={this.increment}>increment +</button>
          <br></br>
          <button onClick={this.decrement}>decrement -</button>
        </header>
      </div>
    );
  }
}

export default App;
