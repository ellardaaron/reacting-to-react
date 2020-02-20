import React, { Component } from 'react'

export class App extends Component {
    state = {
        text: "The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly but gets faster each minute after you hear this signal bodeboop. A single lap should be completed every time you hear this sound. ding Remember to run in a straight line and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark. Get ready!… Start. ding"
    }
    
    render() {
        return (
            <div>
                <h1>
                    {this.props.hello}
                    <br />
                    {this.state.text}
                    </h1>
            </div>
        )
    }
}

export default App
