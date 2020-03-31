import React, { Component } from "react";

class NameList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            names: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let value = e.currentTarget.value;
        this.setState({ value: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            value: "",
            names: [...this.state.names, this.state.value],
        });
    }

    render() {
        return (
            <React.Fragment>
                <label htmlFor="name">Add name for a new player:</label>
                <form onSubmit={ this.handleSubmit } className="form-group mt-4">
                    <input className="form-control" onChange={ this.handleChange } value={ this.state.value } />
                    <button className="btn btn-primary mt-4">Add</button>
                </form>
                <ul className="list-group mt-4">
                    { this.state.names.map((name, i) => (
                        <li className="list-group-item" key={ i }>{ name }</li>
                    )) }
                </ul>
            </React.Fragment>
        );
    }
}

export default NameList;
