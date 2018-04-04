import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Confirm extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            <Header />

        </div>
        <div class="container-fluid">
            <div class="clearfix gap sm-hidden" styles="margin-bottom: -4px;"></div>
            <div class="success-alert text-center" styles="overflow: hidden;">
                <div>
                    <img src="images/confirm-icon.png" alt="" class="img-responsive center-block" />
                </div>
                <br/><br/>
                <div class="sucesss-title">
                    <h2> Order Confirmed </h2>
                    <span class="shadow text-uppercase">Successfull</span>
                </div>
            </div>
            <div class="table table-md confirmation-table">
                <div class="table-head">
                    <div class="table-row hidden-sm hidden-xs ">
                        <div class="table-cell status">
                            <p> Purchased</p>
                        </div>
                        <div class="table-cell product-image">
                            <p>&nbsp;</p>
                        </div>
                        <div class="table-cell product-name">
                            <p>Product Name</p>
                        </div>
                        <div class="table-cell product-price">
                            <p>Price</p>
                        </div>
                        <div class="table-cell order-number">
                            <p>Order Number</p>
                        </div>
                    </div>
                </div>

                <div class="table-body">
                    <div class="table-row card-layout-1  ">
                        <div class="table-cell v-middel">
                            <p> </p>
                        </div>
                        <div data-title="Product Name" class="table-cell v-middel product-image">
                            <img src="images/h8_natural_buymodule.png" alt="" />
                        </div>
                        <div data-title=" " class="table-cell v-middel product-name">
                            <p>Bang &amp; Olufsen <br/> BeoPlay H8</p>
                        </div>
                        <div data-title="Price" class="table-cell v-middel product-price">
                            <p><sup>$ </sup>337 <sup>00</sup></p>
                        </div>
                        <div data-title="Order Number" class="table-cell v-middel order-number">
                            <p>AB1234568790123</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-right confirmation-total">
                <div styles="padding: 20px;">
                    <p><span class="text-uppercase">Total: &nbsp;&nbsp;&nbsp;</span><sup>$ </sup> 337 <sup>00</sup></p>
                </div>
            </div>
            <div class="return-home-container text-center">
                <p>Thank you to use our service! We are sending the notification email shortly.</p>
                <a href="index.html" class="text-center button type-2 blue">Home Page</a>
            </div>
        </div>

        <FooterOther />

    </Main>
		);
	}
}

export default Confirm;