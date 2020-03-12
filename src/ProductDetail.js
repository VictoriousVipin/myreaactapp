import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import store from './redux/Store';

class ProductDetail extends React.Component {
    constructor(props) {
        super();
        this.state = {
            productDetail: {},
            alreadyInCart: false
        };
        //console.log("*************props", props);
        this.getProductDetail(props.match.params.id);
    }

    componentDidMount() {
        console.log("This Props is in", this.props);
    }

    getProductDetail(productId) {
        let url = "https://ashuapi.herokuapp.com/api/product/" + productId;
        axios({
            method: 'GET',
            url: url
        }).then(response => {
            console.log("Products from API", response["data"].data);
            //var products = response["data"];
            this.setState({
                productDetail: response["data"]["data"]
            });
            console.log("sdsds", store.getState(), productId)
            store.getState()["cart"].forEach((p) => {
                if (p.productid === parseInt(productId)) {
                    this.setState({
                        alreadyInCart: true
                    });
                }
            });
            console.log("This.state", this.state);
        }, error => {
            console.log("Failed with error", error);
        });
    }

    addToCart() {
        
        var product = {
            productid: this.state.productDetail.productid,
            email: localStorage.email,
            product: {
                name: this.state.productDetail.name,
                price: this.state.productDetail.price,
                image: this.state.productDetail.image,
                brand: this.state.productDetail.brand
            }
        };
        console.log("Products",product);
        var apiUrl = "https://ashuapi.herokuapp.com/api/addToCart";
        axios({
            method: 'POST',
            url: apiUrl,
            data: product
        }).then((response) => {
            console.log("response from addToCart API", response["data"]);
            this.props.dispatch({
                type: 'ADDTOCART',
                payload: {
                    product: response["data"]["data"].product
                }
            });
            this.setState({
                alreadyInCart: true
            });
        }, (error) => {
            console.log("Add to cart api error", error);
        })
        console.log("Store after add to cart", store.getState());
    }

    render() {
        return <div className="container" style={{ padding: "20px" }}>
            <div className="row">
                <div className="col-md-6">
                    {/* {this.state.productid} */}
                    <img src={this.state.productDetail.image} alt="image not avilable" style={{ width: "416px", height: "416px" }} /><br></br>
                    <button className="btn btn-outline-info col-md-5" onClick={this.addToCart.bind(this)} style={{ padding: "10px" }} disabled={this.state.alreadyInCart}>Add to Cart</button>
                    <button className="btn btn-outline-success col-md-5" style={{ padding: "10px" }} >Buy now</button>
                </div>
                <div className="col-md-6">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <h3>{this.state.productDetail.name}</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3>Rs.{this.state.productDetail.price}</h3>
                                </td>
                            </tr>
                            <tr>
                                <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90" width="18" height="18" className="_3Amlen" /></span>No cost EMI ₹8,000/month. Standard EMI also availableView Plans</td>
                            </tr>
                            <tr>
                                <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" className="_3Amlen" /></span> Bank Offer10% Instant Discount* with Axis Bank Credit and Debit CardsT&C</td>
                            </tr>
                            <tr>
                                <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" className="_3Amlen" /></span>Bank Offer10% off* with Axis Bank Buzz Credit CardT&C</td>
                            </tr>
                            <tr>
                                <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" className="_3Amlen" /></span>Free 16GB SD Card & Camera Bag with this DSLR</td>
                            </tr>
                            <tr>
                                <td className="row"><span className="col-md-4">Seller</span>
                                    <span className="col-md-4"> RetailNet</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="row">
                                    <span className="col-md-4">Highlights</span>
                                    <span className="col-md-4"></span>
                                    <ul>
                                        <li>Effective Pixels: 24.2 MP</li>
                                        <li><span className="col-md-4">Sensor Type: CMOS</span></li>
                                        <li><span className="col-md-4"></span>WiFi Available</li>
                                        <li><span className="col-md-4"></span>1080p at 60p + Time-Lapse</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >
        </div >;
    }
}

export default connect()(ProductDetail);