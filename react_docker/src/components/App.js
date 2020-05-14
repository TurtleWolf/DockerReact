import React from 'react';
// import logo from '../shared/imgages/logo.svg';
// We import our Home component here...
import Home from '../components/Home/Home';
import '../components/App.css';

// Layout Components
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header title="React in a DockerContainer" />

      <Content>
        <Home />
      </Content>

      <Footer />
    </div>
  );
}

export default App;
