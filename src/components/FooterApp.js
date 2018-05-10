import React, { Component } from 'react';
import { Footer } from 'react-materialize'
import { Link } from 'react-router-dom';
import styles from './Footer.css';

class FooterApp extends Component {
  render() {
    return (
        <Footer copyrights="@copy 2018 Copyright Text" className={styles.footer}
            links={
                <ul>
                  <li><Link className='grey-text text-lighten-3' to='/'>CGU</Link></li>
                </ul>
            }
        >
            <h5 className="white-text">Footer Content</h5>
        </Footer>
    );
  }
}

export default FooterApp;
