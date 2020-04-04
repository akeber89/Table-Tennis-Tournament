import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);

    this.decrement = this.decrement.bind(this);

    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  decrement() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }

  render() {
    return (
      <div>
        <button className="inc" onClick={this.increment}>
          Increment!
        </button>
        <br />

        <button className="dec" onClick={this.decrement}>
          Decrement!
        </button>
        <br />

        <button className="reset" onClick={this.reset}>
          Reset
        </button>
        <br />

        <h4>Current Count: {this.state.count}</h4>
      </div>
    );
  }
}
export default Counter;
