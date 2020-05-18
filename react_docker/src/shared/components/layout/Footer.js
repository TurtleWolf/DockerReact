import React from 'react';
import './Footer.css';

// Since we don't have props, we can directly return our JSX.
const Footer = () => (
    <footer><a
        className="App-link, footer"
        href="https://TurtleWolfe.com"
        target="_blank"
        rel="noopener noreferrer"
    >
        &copy;
        TurtleWolfe.com
        {(new Date()).getFullYear()}
    </a></footer>
);

export default Footer;




// import React, { Component } from 'react';

// class Footer extends Component {
//     render() {
//         return (

//             <footer>
//                 &copy;
//                 <a
//                     className="App-link"
//                     href="https://TurtleWolfe.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     TurtleWolfe.com
//                 </a>
//                 {(new Date()).getFullYear()}
//             </footer>
//         );
//     }
// }

// export default Footer;