import React, { Component } from "react";
import GenTeams from "./GenTeams";

class AddPlayers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      names: [],
      namesShuffled: [],
      groupOne: [],
      groupTwo: [],
    };

    this.baseState = this.state;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.handlePairs = this.handlePairs.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(e) {
    // function updates the input value as the user types
    let userInput = e.currentTarget.value;
    this.setState({ userInput: userInput });
  }

  handleSubmit(e) {
    //avoid refreshing the page and losing state by using preventDefault()
    e.preventDefault();

    this.setState({
      // creates a replica of the object with new state, not changing initial state
      userInput: "",
      names: [...this.state.names, this.state.userInput],
    });
  }

  handleShuffle(array) {
    // shuffle the array of names entered by user
    return array.sort(() => Math.random() - 0.5);
  }

  // create a function that uses the array of shuffled names and stores it in state
  handlePairs() {
    const { names } = this.state;
    this.setState({
      namesShuffled: this.handleShuffle(names),
    });
  }

  handleReset() {
    // reset all date to initial value to restart the game
    this.setState(this.baseState);
  }

  render() {
    return (
      <React.Fragment>
        <div className="gamepanel">
          <div className="panel">
            <label htmlFor="name" className="userInput">
              Add an even number of players:
            </label>

            <form onSubmit={this.handleSubmit} className="form">
              <input
                placeholder="Type name here"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.userInput}
              />

              <button className="add">Add</button>
            </form>

            <ul className="list-group mt-4">
              {this.state.names.map((name, i) => (
                <li className="list-group-item" key={i}>
                  {name}
                </li>
              ))}
            </ul>

            <button className="shuffle" onClick={this.handlePairs}>
              Shuffle names
            </button>
          </div>

          <GenTeams namesShuffled={this.state.namesShuffled} />
        </div>

        <div className="resetContainer">
          <button className="resetPlayers" onClick={this.handleReset}>
            Reset
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default AddPlayers;
