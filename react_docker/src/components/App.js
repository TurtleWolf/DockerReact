// import React from 'react';
import React, { Component } from 'react';
// import logo from '../shared/imgages/logo.svg';
// We import our Home component here...
import Home from '../components/Home/Home';
import '../components/App.css';

// Layout Components
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Create-React-App StoryBook in a Docker Container" />

        <Content>
          <Home />
        </Content>

        <Footer />
      </div>
    );
  }
}

export default App;
