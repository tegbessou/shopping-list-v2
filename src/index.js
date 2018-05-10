import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { Router } from 'react-router-dom';
import { store, history } from './helpers'

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
), document.getElementById('root'));
