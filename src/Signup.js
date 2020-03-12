import React from 'react';
import axios from 'axios';


// axios({
//     method: 'POST',
//     url: '',
//     data: {},
//     headers: {}
// });

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            error: "",
            isError: false
        };
        console.log("1) I am constructor, the first one to be called. These are the props", this.props);
        setTimeout(()=>{
            this.setState({
                name: 'OnePlus 6'
            });
        }, 5000);
    }
    componentWillMount() {
        console.log("2) I am componentWillMount. These are the props", this.props);
    }
    componentDidMount() {
        console.log("3) I am componentDidMount. These are the props", this.props);
    }
    componentWillUpdate() {
        console.log("Done rendering");
        return false;
    }
    signup() {
        let user = {};

        user["name"] = document.getElementById('name').value;
        user["email"] = document.getElementById('email').value;
        user["password"] = document.getElementById('password').value;

        console.log("Signup user", user);
        if(user["name"] === '' || user["email"] === '' || user["password"] === '') {
            this.setState({
                error: "Please fill the fields",
                isError: true
            });
        } else {
            this.setState({
                isError: false
            });
            let url = "https://ashuapi.herokuapp.com/api/register";
            axios({
                method: 'POST',
                url: url,
                data: user
            }).then(response => {
                console.log("Registered user", response["data"]);
            }, error => {
                console.log("Failed with error", error);
            });
        }
        
    }
    render() {
        return <div>
            <h3>Signup Here!!</h3>
            <div>Name: <input className="form-control" type="name" placeholder="Enter Name" id="name"/></div>
            <div>Email: <input className="form-control" type="email"  placeholder="Enter Email Address"  id="email"/></div>
            <div>Password: <input className="form-control" type="password" placeholder="Enter Password" id="password"/></div>
            {this.state.isError && <label>{this.state.error}</label>}
            <button className="btn btn-primary" onClick={this.signup.bind(this)}>Signup</button>
        </div>;
    }
}

export default Signup;