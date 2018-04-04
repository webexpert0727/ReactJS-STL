import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class PrintShippingLabel extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            <Header />
            <div class="banner banner-ship no-text-card-up-small">
                <div class="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>

        </div>
        <div class="off-white-bg-2">
            <div class="card-layout-1 card-margin-style-3 " styles="margin-bottom: -20em;">
                <div class="print_shipping_label_wrapper container">
                    <div  class="top_section text-center">
                        <h2>Print shipping labels</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                        <div class="gap" styles="margin-bottom: 10px;clear: both;overflow: hidden;"></div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="bottom_section">
                        <div class="print_shipping-three-block">
                            <div class="print_shiping_1_img"><img src="images/print-shipping-1.png" alt="" class="img-responsive center-block" /></div>
                            <h4>1. Pay online</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                        </div>
                         <div class="print_shipping-three-block">
                            <div class="print_shiping_2_img"><img src="images/print-shipping-2.png" alt="" class="img-responsive center-block" /></div>
                            <h4>2. Print your label</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                        </div>
                         <div class="print_shipping-three-block">
                            <div class="print_shiping_3_img"><img src="images/print-shipping-3.png" alt="" class="img-responsive center-block" /></div>
                            <h4>3. Send your parcel</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="clearfix gap hidden-xs"></div>

                    <div class="print_shipping_try_btn text-center "><a href="#" class="button green type-2">Try Now</a></div>                </div>
            </div>
            <div class="text-center ">
                <img src="images/map-2.jpg" alt="" class="img-responsive center-block" />
                <br/>
            </div>
        </div>

        <FooterOther />
        
    </Main>
		);
	}
}

export default PrintShippingLabel;