import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" style={{height: "300px"}}>
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/Huawei/May8/GW/D10262224_WL_Huawei_May8_DesktopTallHero_1500x600._CB463677100_.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/CEEX/Samsung/MSeries/6monthsNCE/D10073730_SamsungM20_HDFC_Ingress_DesktopTallHero_1500x600._CB463482046_.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Jew/May/Earrings-Pc-Bunk-1500x600._CB463724177_.jpg" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>;
    }
}

export default Carousel;