import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (

            <footer>
                &copy;
                <a
                    className="App-link"
                    href="https://TurtleWolfe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    TurtleWolfe.com
                </a>
                {(new Date()).getFullYear()}
            </footer>
        );
    }
}

export default Footer;