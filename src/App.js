import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Product from './Product';
import Carousel from './Carousel';
import store from './redux/Store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    };
    this.getAllProducts();
  }

  componentDidMount() {
    if (!localStorage.getItem("isLoggedIn")) {
      this.props.history.push("/login");
    }
  }
  getAllProducts() {
    let url = "https://ashuapi.herokuapp.com/api/allProducts";
    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log("Products from API", response["data"].data);
      //var products = response["data"];
      this.setState({
        products: response["data"]["data"]
      });
      console.log("This.state", this.state);
    }, error => {
      console.log("Failed with error", error);
    });
    toast.success("Please find all products here");
  }

  print(num) {
    console.log("Result is ", num);
  }

  render() {
    return (
      <div className="App">
        <Carousel />
        <h3>Products:-</h3>
        <div className="row">
          {this.state.products.map((product) => {
            return <Product product={product} history={this.props.history} />
          })}
        </div>
        <ToastContainer position={toast.POSITION.TOP_CENTER} />
      </div>
    );
  }
}

export default App;
