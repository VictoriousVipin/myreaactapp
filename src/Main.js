import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Login from './Login';
import Navbar from './Navbar';
import Signup from './Signup';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div id="Main">
            <Router>
                <Navbar />
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/product-detail/:id" component={ProductDetail} />
                <Route exact path="/cart" component={Cart} />
            </Router>
        </div>;
    }
}

export default Main;