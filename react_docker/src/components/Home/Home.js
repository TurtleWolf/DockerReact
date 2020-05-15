import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            name: 'Carlos'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: 'Cristina'
            });
        }, 1000);
    }

    render() {
        console.log('Name:', this.state.name);

        return (
            <div className="Home">
                <p>Hi my name is {this.state.name}</p>
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

// import React, { Component, Fragment } from 'react';

// // We import our Home.css file here
// import './Home.css';

// class Home extends Component {

//     constructor() {
//         // We need to define super() at the beginning of the 
//         // constructor to have access to 'this'
//         super();

//         // Here we initialize our local state as an object
//         this.state = {
//             name: 'Carlos'
//         };
//         componentDidMount() {
//             setTimeout(() => {
//                 this.setState({
//                     name: 'Cristina' // Here we update the value of the state
//                 });
//             }, 1000);

//         };
//     }

//     render() {
//         console.log('Name:', this.state.name);
//         // Style object...
//         // const buttonStyle = {
//         // backgroundColor: 'yellow',
//         // border: '1px solid black'
//     };
//     return(
//             <Fragment>
//     <div className="Home" >
//         {/* Here we render our state name */}
//         <p>Hi my name is {this.state.name}</p>
//         <h1>Welcome to Codejobs</h1>
//         <p>
//             In this recipe you will learn how to add styles to
//             components. If you want to learn more you can visit
//             our Youtube Channel at
//                     <a href="http://youtube.com/codejobs">Codejobs</a>.
//                     </p>

//         <p>
//             <button style={buttonStyle}>Click me!</button>
//         </p>

//         <p>
//             Edit <code>src/components/Home/Home.js</code> and save to reload.
//                     </p >
//         <a
//             className="App-link"
//             href="https://github.com/TurtleWolf/DockerReact"
//             target="_blank"
//             rel="noopener noreferrer"
//         >
//             https://github.com/TurtleWolf/DockerReact
//                     </a>
//     </div >
//             </Fragment >
//         );
//     }
// }


// export default Home;