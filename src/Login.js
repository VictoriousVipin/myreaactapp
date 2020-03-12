import React, { Component } from "react";
import axios from 'axios';
import {connect} from "react-redux";
import store from './redux/Store';
class Login extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        if(localStorage.getItem("isLoggedIn")) {
            this.props.history.push("/");
        }
    }
    loginUser() {
        var user = {};
        user["email"] = document.getElementById('email').value;
        user["password"] = document.getElementById('password').value;
        let url = "https://vipin-node-app-2019.herokuapp.com/user/login";
        //"https://ashuapi.herokuapp.com/api/login";
        axios({
            method: 'POST',
            url: url,
            data: user
        }).then(response => {
            console.log("Logged-in user", response["data"]);
            if(response["data"]["token"]) {
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('username', response["data"]["user"]["name"]);
                localStorage.setItem('email', response["data"]["user"]["email"]);
                // var event = document.createEvent("HTMLEvents");
                // event.initEvent("loggedIn");
                // document.dispatchEvent(event);
                this.props.history.push('/');
                this.props.dispatch({
                    type: 'LOGIN',
                    payload:{
                        email: response["data"]["user"]["email"],
                        name: response["data"]["user"]["name"],
                        isLoggedIn: true
                    }
                });
                console.log(store.getState());                
            }
        }, error => {
            console.log("Failed with error", error);
        });
    }
    render() {
        return <div id="login'">
            <h3>Login here!!</h3>
            <div><input className="form-control" type="email" placeholder="Email Address" id="email" /></div>
            <div><input className="form-control" type="password" placeholder="Password" id="password" /></div>
            <div><button className="btn btn-primary" onClick={this.loginUser.bind(this)}>Login</button></div>
            <div style={{"color":"green"}}>Email:- vipin.tomar@testmail.com   Password:- Test@123</div>
        </div>;
    }
}

export default connect()(Login);