import React from 'react';

// Since we don't have props, we can directly return our JSX.
const Footer = () => (
    <footer>&copy; <a
        className="App-link"
        href="https://TurtleWolfe.com"
        target="_blank"
        rel="noopener noreferrer"
    >
        TurtleWolfe.com
                    </a> {(new Date()).getFullYear()}</footer>
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