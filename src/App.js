import React, { Component } from 'react';
import MenuContainer from './components/menu/MenuContainer';
import Routes from './Routes';
import FooterContainer from './components/footer/FooterContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MenuContainer/>
        <Routes/>
        <FooterContainer/>
      </div>
    );
  }
}

export default App;
