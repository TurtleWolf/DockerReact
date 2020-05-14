import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>&copy; TurtleWolfe.com {(new Date()).getFullYear()}</footer>
        );
    }
}

export default Footer;