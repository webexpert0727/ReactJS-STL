import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class BookFlightPayment extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            <Header />

            <div class="banner banner-book-flight-confirm no-text-card-up-high ">                
            </div>
        </div>
        
        <div class="book_flight_payment_wrapper">
            <div class="clearfix card-layout-2">
                <div>
                    <div class="col-md-12"><h3 class="plain-heading">Your Search</h3></div>
                    <div class="book-hotel-form-container clearfix">
                        <form class="book-hotel-form col-md-12 ">
                            <div class="input-container">
                                <label>From</label>
                                <input type="text" name="" placeholder="Paris(CDG)" />
                            </div>
                            <div class="input-container">
                                 <label>To</label>
                                <input type="text" name="" placeholder="San Francisco(SFO)" styles="min-width: 148px;" />
                            </div>
                            <div class="input-container">
                                 <label>Departing</label>
                                <input type="text" name="" placeholder="Check-in date" class="date-picker check-in" />
                            </div>
                            <div class="input-container">
                                 <label>Returning</label>
                                <input type="text" name="" placeholder="Check-out date" class="date-picker check-out" />
                            </div>
                            <div class="input-container">
                                <label>Class</label>
                                <input type="text" name="" placeholder="Economy" />
                            </div>
                            <div class="input-container">
                                <label>Passengers</label>
                                <input type="text" placeholder="0 Adults" value="" class="guest" />
                                <div class="edit-guest">
                                    <div class="adult">
                                        <label for="">0 Adult</label>
                                        <a href="javascript:void(0)" class="add">&nbsp;</a>
                                        <input type="hidden" name="" id="" value="0" />
                                        <a href="javascript:void(0)" class="sub">&nbsp;</a>
                                    </div>
                                    <div class="children">
                                        <label for="">0 Children</label>
                                        <a href="javascript:void(0)" class="add">&nbsp;</a>
                                        <input type="hidden" name="" id="" value="0" />
                                        <a href="javascript:void(0)" class="sub">&nbsp;</a>
                                    </div>

                                </div>
                            </div>
                            <div class="input-container">
                                <label>&nbsp;</label>
                                <input type="submit" value="Change" />
                            </div>
                        </form>
                    </div>
                    <div class="hidden-sm hidden-xs" styles="margin-top: -9px;"></div>
                    <div class="col-md-12"> <div class="center_txt_seperator">Payment</div></div>

                    <div class="flight_payment_tabs">
                        <div class="col-md-3">
                            <ul>
                                <li> Results </li>
                                <li> Passengers </li>
                                <li class="active"> Payment </li>
                                <li> Confirmation </li>
                            </ul>
                        </div>
                        <div class="col-md-9">
                            <p class="book-flight-title"> Select Payment Method</p>
                            <div class="payment_method_wrapper">
                                <div class="select_payment_options">
                                    <a href="#" class="active"><img src="images/card-1.png" /></a>
                                    <a href="#"><img src="images/card-2.png" /></a>
                                    <a href="#"><img src="images/card-3.png" /></a>
                                </div>
                                <div class="payment_method_form">
                                    <form>
                                        <div class="card_holder">
                                             <div class="form_rows ">
                                                <input type="text" name="card_holder" placeholder="Cardholder Name" />
                                             </div>
                                             <div class="form_rows ">
                                                 <span class="col-sm-6 no-padding"><input type="text" name="billing_address" placeholder="Billing Address" /></span>
                                                 <span class="col-sm-6 no-padding"><input type="text" name="city_state" placeholder="City and State" /></span>
                                             </div> 
                                        </div>
                                        <div class="card_details">
                                            <div class="form_rows ">
                                                <input type="text" name="card_number" placeholder="Card Number" />
                                                <i class="fa fa-cc-visa" aria-hidden="true"></i>
                                             </div>
                                             <div class="form_rows ">
                                                <span class="col-xs-4 no-padding"><input type="text" name="exp_date" placeholder="Exp.Date" /></span>
                                                 <span class="col-xs-4 no-padding"><input type="text" name="cvc" placeholder="CVC" /></span>
                                                 <span class="col-xs-4 no-padding"><input type="text" name="zip_code" placeholder="Zip Code"/></span>
                                             </div> 
                                        </div>
                                        <div class="total_pay">
                                            <div class="total_cost text-right text-left-xs">Total:<span> 1 Adult / $319.55</span></div>
                                            <div>
                                                <div class="col-md-9 no-padding-xs">
                                                    <span><b>Fare:</b>$ 14,639 + $ 563.94 carrier-imposed charges + $ 231.56 taxes and fees</span>
                                                    <div class="clearfix gap" styles="margin-top: 20px;"></div>
                                                </div>
                                                <input type="submit" name="continue_btn" value="Continue" class="button type-2 green no-shadow" />
                                            </div>
                                        </div>
                                    </form>
                                   
                                </div>
                            </div>
                        </div>  
                    </div>
                    
                    <div class="clearfix gap sm-hidden"></div>
                    <div class="clearfix gap sm-hidden"></div>
                    <div class="clearfix gap sm-hidden"></div>
                    <div class="clearfix gap sm-hidden"></div>
                    <div class="clearfix gap sm-hidden"></div>
                    <div class="clearfix gap sm-hidden"></div>
                    <div class="clearfix gap xs-hidden"></div>
                    <div class="clearfix gap"></div>
                </div>
            </div>
        </div>
        
        <div class="clearfix"></div>
        <div class="clearfix gap sm-hidden"></div>
        <div class="clearfix gap sm-hidden"></div>
        <div class="clearfix gap xs-hidden"></div>
        <div class="clearfix gap"></div>

    </Main>
		);
	}
}

export default BookFlightPayment;