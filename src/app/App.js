import React, { Component } from 'react';
import styles from './App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className={styles.redBox}>
          <Header />
          <Main />
      </div>
    );
  }
}

export default App;
