import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import FooterApp from './components/FooterApp';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Main />
          <FooterApp />
      </div>
    );
  }
}

export default App;
