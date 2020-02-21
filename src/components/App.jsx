import React, { Component } from 'react'

export class App extends Component {
    state = {
        text: "The FitnessGram Pacer Test",
        newProperty: "",
        hasLoaded: false
    }

    typingInBox = (e) => this.setState({ newProperty: e.target.value });

    toggleFalseTrue = () => {
        this.setState({
            hasLoaded: !this.state.hasLoaded
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        if (this.state.hasLoaded === false) {
            return (
                <>
                    <h1>Loading...</h1>
                    <button
                        onSubmit={this.onSubmit}
                        onClick={this.toggleFalseTrue}
                    >Submit</button>
                </>
            )
        } else {
            return (
                <>
                    <h1>
                        {this.props.hello}
                        <br />
                        {this.state.text}
                    </h1>

                    <input
                        placeholder="Type here..."
                        value={this.state.newProperty}
                        onChange={this.typingInBox}
                    ></input>
                    <button
                        onSubmit={this.onSubmit}
                        onClick={this.toggleFalseTrue}
                    >Submit</button>

                </>
            )
        }

    }
}

export default App
