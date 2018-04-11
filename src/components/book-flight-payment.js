import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class BookFlightPayment extends Component {
	render() {
		return (
		<Main>

        <div className="container-fluid">
            <Header />

            <div className="banner banner-book-flight-confirm no-text-card-up-high ">                
            </div>
        </div>
        
        <div className="book_flight_payment_wrapper">
            <div className="clearfix card-layout-2">
                <div>
                    <div className="col-md-12"><h3 className="plain-heading">Your Search</h3></div>
                    <div className="book-hotel-form-container clearfix">
                        <form className="book-hotel-form col-md-12 ">
                            <div className="input-container">
                                <label>From</label>
                                <input type="text" name="" placeholder="Paris(CDG)" />
                            </div>
                            <div className="input-container">
                                 <label>To</label>
                                <input type="text" name="" placeholder="San Francisco(SFO)" style={{minWidth: "148px"}} />
                            </div>
                            <div className="input-container">
                                 <label>Departing</label>
                                <input type="text" name="" placeholder="Check-in date" className="date-picker check-in" />
                            </div>
                            <div className="input-container">
                                 <label>Returning</label>
                                <input type="text" name="" placeholder="Check-out date" className="date-picker check-out" />
                            </div>
                            <div className="input-container">
                                <label>Class</label>
                                <input type="text" name="" placeholder="Economy" />
                            </div>
                            <div className="input-container">
                                <label>Passengers</label>
                                <input type="text" placeholder="0 Adults" value="" className="guest" />
                                <div className="edit-guest">
                                    <div className="adult">
                                        <label for="">0 Adult</label>
                                        <a href="javascript:void(0)" className="add">&nbsp;</a>
                                        <input type="hidden" name="" id="" value="0" />
                                        <a href="javascript:void(0)" className="sub">&nbsp;</a>
                                    </div>
                                    <div className="children">
                                        <label for="">0 Children</label>
                                        <a href="javascript:void(0)" className="add">&nbsp;</a>
                                        <input type="hidden" name="" id="" value="0" />
                                        <a href="javascript:void(0)" className="sub">&nbsp;</a>
                                    </div>

                                </div>
                            </div>
                            <div className="input-container">
                                <label>&nbsp;</label>
                                <input type="submit" value="Change" />
                            </div>
                        </form>
                    </div>
                    <div className="hidden-sm hidden-xs" styles={{marginTop : "-9px;"}}></div>
                    <div className="col-md-12"> <div className="center_txt_seperator">Payment</div></div>

                    <div className="flight_payment_tabs">
                        <div className="col-md-3">
                            <ul>
                                <li> Results </li>
                                <li> Passengers </li>
                                <li className="active"> Payment </li>
                                <li> Confirmation </li>
                            </ul>
                        </div>
                        <div className="col-md-9">
                            <p className="book-flight-title"> Select Payment Method</p>
                            <div className="payment_method_wrapper">
                                <div className="select_payment_options">
                                    <a href="#" className="active"><img src="images/card-1.png" /></a>
                                    <a href="#"><img src="images/card-2.png" /></a>
                                    <a href="#"><img src="images/card-3.png" /></a>
                                </div>
                                <div className="payment_method_form">
                                    <form>
                                        <div className="card_holder">
                                             <div className="form_rows ">
                                                <input type="text" name="card_holder" placeholder="Cardholder Name" />
                                             </div>
                                             <div className="form_rows ">
                                                 <span className="col-sm-6 no-padding"><input type="text" name="billing_address" placeholder="Billing Address" /></span>
                                                 <span className="col-sm-6 no-padding"><input type="text" name="city_state" placeholder="City and State" /></span>
                                             </div> 
                                        </div>
                                        <div className="card_details">
                                            <div className="form_rows ">
                                                <input type="text" name="card_number" placeholder="Card Number" />
                                                <i className="fa fa-cc-visa" aria-hidden="true"></i>
                                             </div>
                                             <div className="form_rows ">
                                                <span className="col-xs-4 no-padding"><input type="text" name="exp_date" placeholder="Exp.Date" /></span>
                                                 <span className="col-xs-4 no-padding"><input type="text" name="cvc" placeholder="CVC" /></span>
                                                 <span className="col-xs-4 no-padding"><input type="text" name="zip_code" placeholder="Zip Code"/></span>
                                             </div> 
                                        </div>
                                        <div className="total_pay">
                                            <div className="total_cost text-right text-left-xs">Total:<span> 1 Adult / $319.55</span></div>
                                            <div>
                                                <div className="col-md-9 no-padding-xs">
                                                    <span><b>Fare:</b>$ 14,639 + $ 563.94 carrier-imposed charges + $ 231.56 taxes and fees</span>
                                                    <div className="clearfix gap" styles="margin-top: 20px;"></div>
                                                </div>
                                                <input type="submit" name="continue_btn" value="Continue" className="button type-2 green no-shadow" />
                                            </div>
                                        </div>
                                    </form>
                                   
                                </div>
                            </div>
                        </div>  
                    </div>
                    
                    <div className="clearfix gap sm-hidden"></div>
                    <div className="clearfix gap sm-hidden"></div>
                    <div className="clearfix gap sm-hidden"></div>
                    <div className="clearfix gap sm-hidden"></div>
                    <div className="clearfix gap sm-hidden"></div>
                    <div className="clearfix gap sm-hidden"></div>
                    <div className="clearfix gap xs-hidden"></div>
                    <div className="clearfix gap"></div>
                </div>
            </div>
        </div>
        
        <div className="clearfix"></div>
        <div className="clearfix gap sm-hidden"></div>
        <div className="clearfix gap sm-hidden"></div>
        <div className="clearfix gap xs-hidden"></div>
        <div className="clearfix gap"></div>

    </Main>
		);
	}
}

export default BookFlightPayment;