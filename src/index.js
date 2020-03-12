import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import './redux/Store.js';
import {Provider} from 'react-redux';
import ReduxStore from './redux/Store';

//import {Main} from './App1';
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={ReduxStore}><Main /></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
