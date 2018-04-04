import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class MyCart extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            <Header />

            <div class="banner banner-project banner-small no-text-banner">
                <div class="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>

        </div>
        <div class="">
            <div class="card-layout-1 my-cart-container card-margin-style-1" styles="padding-top: 30px;">
                <div class="container">
                    <div class="clearfix">
                        <div class="col-sm-12">
                            <h3 class="plain-heading" styles="padding-left: 8px;">My cart</h3>
                        </div>
                        
                    </div>
                    <div class="col-md-12">
                        <div class="my-project-container">
                            <div class="table-responsive " >
                                <table class="table my-cart-table">
                                    <thead>
                                        <tr>
                                            <td colspan="3" class="item-added">ADDED ITEM</td>
                                            <td class="size">SIZE</td>
                                            <td class="quentity">QUANTITY</td>
                                            <td class="weight">WEIGHT</td>
                                            <td class="price">PRICE</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-title="ADDED ITEM" class="product-image">
                                                <div>
                                                    <img src="images/h8_natural_buymodule.png" height="60px" alt="" /> &nbsp;&nbsp;
                                                    
                                                </div>
                                            </td>
                                            <td data-title=" " class="product-name">
                                                <p class="name" >
                                                    Bang &amp; Olufsen <br/> BeoPlay H8
                                                </p>
                                            </td>
                                            <td class="product-remove">
                                                <a href="#" class="remove"><i class="fa fa-times-circle" aria-hidden="true"></i> Remove</a>
                                            </td>
                                            <td data-title="SIZE" class="product-size" >20 X 20</td>
                                            <td data-title="QUANTITY" class="product-quentity">
                                                <div class="border">4</div>
                                                <a href="#" styles="color: #F0951C; display: block;">Change</a>
                                            </td>
                                            <td data-title="WEIGHT" class="product-weight" >2.3 kg</td>
                                            <td data-title="PRICE" class="product-price">$ 230</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div><div class="clearfix"></div>
                         <div class="gap clearfix" styles="margin-bottom: 2px"></div>
                            <div class="row  no-margin-sm">
                                <div class="col-md-12 col-lg-6 cart-address">
                                    <div class="input   ">
                                        <label for="ctr">DESTINATION:</label>
                                        <select name="" id="ctr">
                                            <option value="United Kingdom">United Kingdom</option>
                                        </select>
                                        <br/>
                                        <label for="add">ADDRESS:</label>
                                        <select name="" id="add">
                                            <option value="320 Willingham Rd. Morrisville, NC 2756..">320 Willingham Rd. Morrisville, NC 2756..</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="row  no-margin-sm">
                                <div class="text-right col-md-12" styles="background: #fafafa; padding:15px 25px; margin-top: -4px;" >
                                    <p class="total my-cart-total text-center-xs" styles="margin: auto;"><span>Total :&nbsp;&nbsp;&nbsp;&nbsp;</span><sup>$</sup>337 <sup>00</sup></p>
                                </div>
                            
                                <div class="clearfix"></div> 
                                <br/>
                                <div class="row my-cart-buttons">
                                    <div class="col-sm-6 text-center-xs button-continue">
                                        <a href="#" class="button round-3 type-1 blue no-margin">CONTINUE SHOPPING</a>
                                    </div>
                                    <div class="col-sm-6 text-right text-center-xs button-fund ">
                                        <a href="#" class="button round-3 type-2 green no-shadow text-uppercase" >Checkout</a>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="gap clearfix"></div><div class="gap clearfix" styles="margin-bottom: -5px;"></div>
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