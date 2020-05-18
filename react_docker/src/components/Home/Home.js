import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    constructor() {
        // We need to define super() at the beginning of the 
        // constructor to have access to 'this'
        super();

        // Here we initialize our local state as an object
        this.state = {
            name: 'Jonathan'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: 'TurtleWolfe'
            });
        }, 1700);
    }

    render() {
        console.log('Name:', this.state.name);
        // Style object...
        const buttonStyle = {
            backgroundColor: 'yellow',
            border: '1px solid black'
        };
        return (
            <div className="Home">

                {/* Here we render our state name */}
                <p>my name is {this.state.name}</p>
                <p>
                    watch me work live
                </p>
                <p>
                    <button style={buttonStyle}><a href="https://www.twitch.tv/turtlewolfe">twitch.tv/TurtleWolfe</a></button>
                </p>
                <p>
                    Edit <code>src/components/Home/Home.js</code> and save to reload.
                </p >
                <h1>Docker StoryBook</h1>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </div>
        );
    }
}

export default Home;

