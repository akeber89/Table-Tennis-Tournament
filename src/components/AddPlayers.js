import React, { Component } from "react";
import Counter from './Counter';

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

        this.baseState = this.state

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleShuffle = this.handleShuffle.bind(this);
        this.handlePairs = this.handlePairs.bind(this);
        this.handleTeams = this.handleTeams.bind(this);
        this.handleReset = this.handleReset.bind(this);

// or instead of floor you can use ceil depending on what side gets the extra data

    
    }

    handleChange(e) {    // function updates the input value as the user types
        let userInput = e.currentTarget.value;
        this.setState({ userInput: userInput });
    }

    handleSubmit(e) {        //avoid refreshing the page and losing state by using preventDefault()
        e.preventDefault();

        this.setState({  // creates a replica of the object with new state, not changing initial state
            userInput: "",
            names: [...this.state.names, this.state.userInput],
        });
    }
    handleShuffle(array) { // shuffle the array of names entered by user
        array.sort(() => Math.random() - 0.5);
    }

    // create a function that shuffles the entered names
    handlePairs() {

        const { names } = this.state;
        this.setState({
            namesShuffled: this.handleShuffle(names),
            
        });
    }

    handleTeams() {  // separate the list into 2 lists/teams
        let halfwayThrough = Math.floor(this.state.names.length / 2);
    
        this.setState({ 
           userInput: "",
           names: [],
           groupOne: [...this.state.names.slice(0, halfwayThrough)],
           groupTwo: [...this.state.names.slice(halfwayThrough, this.state.names.length)]
           })
        }


    handleReset() {    // reset all date to initial value to restart the game
        this.setState(this.baseState)
    }
    
        

    render() {
        return (
            <React.Fragment>
                <label htmlFor="name">Add an even number of players:</label>

                <form  
                  onSubmit={ this.handleSubmit } 
                  className="form-group mt-4">

                    <input 
                      placeholder="Type name here"
                      className="form-control" 
                      onChange={ this.handleChange } 
                      value={ this.state.userInput } />

                    <button 
                      className="btn btn-primary mt-4">Add
                    </button>

                </form>

                <ul className="list-group mt-4">
                    { this.state.names.map((namesShuffled, i) => (
                        <li className="list-group-item" key={ i }>{ namesShuffled }</li>
                    )) }
                </ul>

                <button 
                    className="btn btn-primary mt-4"
                    onClick={ this.handlePairs }>Shuffle the names
                </button>

                <hr/>

                <button 
                    className="btn btn-primary mt-4"
                    onClick={ this.handleTeams }>Create teams
                </button>
                <>  
                    <p>Team One</p>
                    <ul className="list-group mt-4">
                        { this.state.groupOne.map((groupOne, i) => (
                            <li className="list-group-item" key={ i }>{ groupOne }</li>
                        )) }
                    </ul>
                </>
                <>
                    <p>Team Two</p>
                    <ul className="list-group mt-4">
                        { this.state.groupTwo.map((groupTwo, i) => (
                            <li className="list-group-item" key={ i }>{ groupTwo }</li>
                        )) }
                    </ul>
                </>

                <button 
                    className="btn btn-primary mt-4"
                    onClick={ this.handleReset }>Reset
                </button>

                <hr/>

                <Counter />
                <h1>Team One Score: {this.state.count}</h1>

                <Counter />
                <h1>Team Two Score: {this.state.count}</h1>

                
            
            </React.Fragment>
        );
    }
}

export default AddPlayers;
