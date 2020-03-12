import React from 'react';
import { Link } from 'react-router-dom';

class Product extends React.Component {
    constructor() {
        super();
    }
    componentDidMount(){
        this.productId = this.props.product.productid;
    }
    moveToProduct() {
        this.props.history.push('/product-detail/' + this.productId);
    }
    render() {
        return <div className="card col-md-3" style={{ width: "18rem", marginTop: "10px" }}  onClick={this.moveToProduct.bind(this)}>
        <img className="card-img-top" src={this.props.product.image} alt="Card image cap" style={{ height: "211px" }} />
        <div className="card-body">
            <h5 className="card-title">{this.props.product.name}</h5>
            <p className="card-price">INR {this.props.product.price}</p>
            <Link to={`/product-detail/${this.props.product.productid}`} className="btn btn-primary">Details</Link>
        </div>
    </div>;
    }
}

export default Product;