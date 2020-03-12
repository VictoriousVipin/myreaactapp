import React from 'react';
import { connect } from 'react-redux';
import store from './redux/Store';
import Product from './Product';
import axios from 'axios';

class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
            cart: store.getState()["cart"]
        }
        if (!store.getState()["cartinitialised"]) {
            axios({
                method: 'Post',
                url: 'https://ashuapi.herokuapp.com/api/cart',
                data: {
                    email: localStorage.email
                }
            }).then(
                (response) => {
                    console.log("response from get cart api", response.data)
                    this.props.dispatch({
                        type: 'INITCART',
                        payload: {
                            cart: response["data"]["data"]
                        }
                    })

                    this.setState(
                        { cart: store.getState()["cart"] }
                    )
                }, (error) => {

                }
            )
        }
        else {
            this.state = {
                cart: store.getState()["cart"]
            }
        }

    }

    removeFromCart(productToRemove) {
        this.props.dispatch({
            type: 'REMOVEFROMCART',
            payload: {
                product: productToRemove
            }
        });
    }
    render() {
        return <div>
            <h3>Cart</h3>
            {!this.state.cart.length && <div>Cart is empty</div>}
            {this.state.cart.map(product => {
                return <div className="row">
                    <div className="col-md-6">
                        <img src={product.image} width="100px" height="100px" />
                        <label>{product.name}</label>
                        <label>{product.price}</label>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-danger" onClick={this.removeFromCart.bind(this, product)}>Remove</button>
                    </div>
                </div>;
            })}
        </div>
    }
}


export default connect()(Cart);