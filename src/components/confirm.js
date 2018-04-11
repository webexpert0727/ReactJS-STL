import React, { Component } from 'react';

import MainCustomWrap from './layout/main-custom-wrap';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Confirm extends Component {
	render() {
		return (
            <MainCustomWrap customClass="main off-white-bg no-banner">

        <div className="container-fluid">
            <Header />

        </div>
        <div className="container-fluid">
            <div className="clearfix gap sm-hidden" styles="margin-bottom: -4px;"></div>
            <div className="success-alert text-center" styles="overflow: hidden;">
                <div>
                    <img src="images/confirm-icon.png" alt="" className="img-responsive center-block" />
                </div>
                <br/><br/>
                <div className="sucesss-title">
                    <h2> Order Confirmed </h2>
                    <span className="shadow text-uppercase">Successfull</span>
                </div>
            </div>
            <div className="table table-md confirmation-table">
                <div className="table-head">
                    <div className="table-row hidden-sm hidden-xs ">
                        <div className="table-cell status">
                            <p> Purchased</p>
                        </div>
                        <div className="table-cell product-image">
                            <p>&nbsp;</p>
                        </div>
                        <div className="table-cell product-name">
                            <p>Product Name</p>
                        </div>
                        <div className="table-cell product-price">
                            <p>Price</p>
                        </div>
                        <div className="table-cell order-number">
                            <p>Order Number</p>
                        </div>
                    </div>
                </div>

                <div className="table-body">
                    <div className="table-row card-layout-1  ">
                        <div className="table-cell v-middel">
                            <p> </p>
                        </div>
                        <div data-title="Product Name" className="table-cell v-middel product-image">
                            <img src="images/h8_natural_buymodule.png" alt="" />
                        </div>
                        <div data-title=" " className="table-cell v-middel product-name">
                            <p>Bang &amp; Olufsen <br/> BeoPlay H8</p>
                        </div>
                        <div data-title="Price" className="table-cell v-middel product-price">
                            <p><sup>$ </sup>337 <sup>00</sup></p>
                        </div>
                        <div data-title="Order Number" className="table-cell v-middel order-number">
                            <p>AB1234568790123</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-right confirmation-total">
                <div styles="padding: 20px;">
                    <p><span className="text-uppercase">Total: &nbsp;&nbsp;&nbsp;</span><sup>$ </sup> 337 <sup>00</sup></p>
                </div>
            </div>
            <div className="return-home-container text-center">
                <p>Thank you to use our service! We are sending the notification email shortly.</p>
                <a href="index.html" className="text-center button type-2 blue">Home Page</a>
            </div>
        </div>

        <FooterOther />

    </MainCustomWrap>
		);
	}
}

export default Confirm;