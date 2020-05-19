import React, { Component } from 'react';
import './Home.css';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
        props.primary &&
        css`
      background: black;
      color: red;
    `};
    ${props =>
        props.code &&
        css`
      float: left;
      text-align: left;
      background: black;
      color: yellow;
      margin-bottom: 1em;
    `};  
`;

const Container = styled.div`
  text-align: center;
`;

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
        }, 4000);
    }

    render() {
        console.log('Name:', this.state.name);

        return (
            <div className="Home">

                {/* Here we render our state name */}
                <p>my name is {this.state.name}</p>
                <p>
                    watch me work live
                </p>
                <p>
                    <Button primary><a href="https://www.twitch.tv/turtlewolfe">twitch.tv/TurtleWolfe</a></Button>
                </p>
                <p>
                    For local development I assume you've already insatlled
                        <a
                        className="App-link"
                        href="https://hub.docker.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    > Docker
                    </a>,
                    move from this root directory into react_docker
                    and build the story server
                </p>
                <p>
                    <Button code>
                        <code>
                            cd react_docker
                    </code>
                    </Button>


                </p>
                <p>
                    <Button code>
                        <code>
                            docker-compose build -up
                    </code>
                    </Button>
                </p>
                <p>
                    Edit <code>src/components/Home/Home.js</code> and save to reload.
                </p>
                <h2>
                    <a
                        className="App-link"
                        href="https://github.com/TurtleWolf/DockerReact"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Docker StoryBook repo
                </a>
                </h2>
                <p>
                    alternatively, use the package.json to install all the
                        <a
                        className="App-link"
                        href="https://hub.docker.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    > Node.JS
                    </a>,
                    modules locally..
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
                <Button primary>economies are just abstactions of our values</Button>
            </div>
        );
    }
}

export default Home;

