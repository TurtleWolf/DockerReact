import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';

// We created a component with a simple arrow function.
const Header = props => {
    const {
        title = 'not what it says here?',
        url = 'http://localhost:3003'
    } = props;

    return (
        <header className="App-header">
            <a href={url}>
                <img src={logo} className="App-logo" alt="logo" />
            </a>
            <h1 className="App-title">{title}</h1>
        </header>
    );
};

// Even with Functional Components we are able to validate our 
// PropTypes.
Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
};

export default Header;


// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import logo from '../../imgages/logo.svg';

// class Header extends Component {
//     // Here you can define your PropTypes.
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         url: PropTypes.string
//     };

//     render() {
//         const {
//             title = 'TurtleWolfe.com',
//             url = 'https://github.com/TurtleWolf/DockerReact'
//         } = this.props;

//         return (
//             <header className="App-header">
//                 <a href={url}>
//                     <img src={logo} className="App-logo" alt="logo" />
//                 </a>
//                 <h1 className="App-title">{title}</h1>
//             </header>
//         );
//     }
// }

// export default Header;