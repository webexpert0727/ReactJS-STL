import React, { Component } from 'react';

import MainCustomWrap from './layout/main-custom-wrap';

import Header from './layout/header';
import FooterOther from './layout/footer-other';

class PrintShippingLabel extends Component {
	render() {
		return (
		<MainCustomWrap customClass="off-white-bg-2">

        <div className="container-fluid">
            <Header />
            <div className="banner banner-ship no-text-card-up-small">
                <div className="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>

        </div>
        <div className="off-white-bg-2">
            <div className="card-layout-1 card-margin-style-3 " styles="margin-bottom: -20em;">
                <div className="print_shipping_label_wrapper container">
                    <div  className="top_section text-center">
                        <h2>Print shipping labels</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                        <div className="gap" styles="margin-bottom: 10px;clear: both;overflow: hidden;"></div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="bottom_section">
                        <div className="print_shipping-three-block">
                            <div className="print_shiping_1_img"><img src="images/print-shipping-1.png" alt="" className="img-responsive center-block" /></div>
                            <h4>1. Pay online</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                        </div>
                         <div className="print_shipping-three-block">
                            <div className="print_shiping_2_img"><img src="images/print-shipping-2.png" alt="" className="img-responsive center-block" /></div>
                            <h4>2. Print your label</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                        </div>
                         <div className="print_shipping-three-block">
                            <div className="print_shiping_3_img"><img src="images/print-shipping-3.png" alt="" className="img-responsive center-block" /></div>
                            <h4>3. Send your parcel</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="clearfix gap hidden-xs"></div>

                    <div className="print_shipping_try_btn text-center "><a href="#" className="button green type-2">Try Now</a></div>                </div>
            </div>
            <div className="text-center ">
                <img src="images/map-2.jpg" alt="" className="img-responsive center-block" />
                <br/>
            </div>
        </div>

        <FooterOther />
        
    </MainCustomWrap>
		);
	}
}

export default PrintShippingLabel;