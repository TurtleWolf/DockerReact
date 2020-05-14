import React, { Component, Fragment } from 'react';

// We import our Home.css file here
import './Home.css';

class Home extends Component {
    render() {

        // Style object...
        const buttonStyle = {
            backgroundColor: 'yellow',
            border: '1px solid black'
        };

        return (
            <Fragment>
                <div className="Home" >
                    <h1>Welcome to Codejobs</h1>
                    <p>
                        In this recipe you will learn how to add styles to
                        components. If you want to learn more you can visit
                        our Youtube Channel at
                    <a href="http://youtube.com/codejobs">Codejobs</a>.
                    </p>

                    <p>
                        <button style={buttonStyle}>Click me!</button>
                    </p>

                    <p>
                        Edit <code>src/components/Home/Home.js</code> and save to reload.
                    </p >
                    <a
                        className="App-link"
                        href="https://github.com/TurtleWolf/DockerReact"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://github.com/TurtleWolf/DockerReact
                    </a>
                </div >
            </Fragment >
        );
    }
}


export default Home;