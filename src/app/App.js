import React, { Component } from 'react';
import styles from './App.css';

import woodenLys from '../../images/wooden-lys.jpeg';

class App extends Component {
  render() {
    return (
      <div className={styles.redBox}>
          <img src={woodenLys}  alt='woodenLys'/>
          Hello world
      </div>
    );
  }
}

export default App;
