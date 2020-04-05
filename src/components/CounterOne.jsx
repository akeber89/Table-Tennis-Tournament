import React from "react";

class CounterOne extends React.Component {
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
      <div className="counter">
        <h4 className="teamName">Team One Score: {this.state.count}</h4>
        <button className="counterButton" onClick={this.increment}>
          Increment
        </button>
        <br />

        <button className="counterButton" onClick={this.decrement}>
          Decrement
        </button>
        <br />

        <button className="counterButton" onClick={this.reset}>
          Reset
        </button>
        <br />
      </div>
    );
  }
}
export default CounterOne;
