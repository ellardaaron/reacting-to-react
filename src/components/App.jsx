import React, { Component } from 'react'

export class App extends Component {
    state = {
        text: "The FitnessGram Pacer Test",
        newProperty:""
    }

onChange = (e) => this.setState({newProperty: e.target.value});

    render() {
        return (
            <div>
                <h1>
                    {this.props.hello}
                    <br />
                    {this.state.text}
                </h1>
                <input 
                placeholder= {this.state}
                value={this.state.newProperty}
                onChange={this.onChange}
                ></input>
            </div>
        )
    }
}

export default App
