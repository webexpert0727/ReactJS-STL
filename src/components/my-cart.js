import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class MyCart extends Component {
	render() {
		return (
		<Main>

        <div className="container-fluid">
            <Header />

            <div className="banner banner-project banner-small no-text-banner">
                <div className="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>

        </div>
        <div className="">
            <div className="card-layout-1 my-cart-container card-margin-style-1" styles="padding-top: 30px;">
                <div className="container">
                    <div className="clearfix">
                        <div className="col-sm-12">
                            <h3 className="plain-heading" styles="padding-left: 8px;">My cart</h3>
                        </div>
                        
                    </div>
                    <div className="col-md-12">
                        <div className="my-project-container">
                            <div className="table-responsive " >
                                <table className="table my-cart-table">
                                    <thead>
                                        <tr>
                                            <td colSpan="3" className="item-added">ADDED ITEM</td>
                                            <td className="size">SIZE</td>
                                            <td className="quentity">QUANTITY</td>
                                            <td className="weight">WEIGHT</td>
                                            <td className="price">PRICE</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-title="ADDED ITEM" className="product-image">
                                                <div>
                                                    <img src="images/h8_natural_buymodule.png" height="60px" alt="" /> &nbsp;&nbsp;
                                                    
                                                </div>
                                            </td>
                                            <td data-title=" " className="product-name">
                                                <p className="name" >
                                                    Bang &amp; Olufsen <br/> BeoPlay H8
                                                </p>
                                            </td>
                                            <td className="product-remove">
                                                <a href="#" className="remove"><i className="fa fa-times-circle" aria-hidden="true"></i> Remove</a>
                                            </td>
                                            <td data-title="SIZE" className="product-size" >20 X 20</td>
                                            <td data-title="QUANTITY" className="product-quentity">
                                                <div className="border">4</div>
                                                <a href="#" styles="color: #F0951C; display: block;">Change</a>
                                            </td>
                                            <td data-title="WEIGHT" className="product-weight" >2.3 kg</td>
                                            <td data-title="PRICE" className="product-price">$ 230</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div><div className="clearfix"></div>
                         <div className="gap clearfix" styles="margin-bottom: 2px"></div>
                            <div className="row  no-margin-sm">
                                <div className="col-md-12 col-lg-6 cart-address">
                                    <div className="input   ">
                                        <label htmlFor="ctr">DESTINATION:</label>
                                        <select name="" id="ctr">
                                            <option value="United Kingdom">United Kingdom</option>
                                        </select>
                                        <br/>
                                        <label htmlFor="add">ADDRESS:</label>
                                        <select name="" id="add">
                                            <option value="320 Willingham Rd. Morrisville, NC 2756..">320 Willingham Rd. Morrisville, NC 2756..</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="row  no-margin-sm">
                                <div className="text-right col-md-12" styles="background: #fafafa; padding:15px 25px; margin-top: -4px;" >
                                    <p className="total my-cart-total text-center-xs" styles="margin: auto;"><span>Total :&nbsp;&nbsp;&nbsp;&nbsp;</span><sup>$</sup>337 <sup>00</sup></p>
                                </div>
                            
                                <div className="clearfix"></div> 
                                <br/>
                                <div className="row my-cart-buttons">
                                    <div className="col-sm-6 text-center-xs button-continue">
                                        <a href="#" className="button round-3 type-1 blue no-margin">CONTINUE SHOPPING</a>
                                    </div>
                                    <div className="col-sm-6 text-right text-center-xs button-fund ">
                                        <a href="#" className="button round-3 type-2 green no-shadow text-uppercase" >Checkout</a>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="gap clearfix"></div><div className="gap clearfix" styles="margin-bottom: -5px;"></div>
                    </div>
                </div>
            </div>
        </div>

        <FooterOther />

    </Main>
		);
	}
}

export default MyCart;