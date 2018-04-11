import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class BookHotelPayment extends Component {
	render() {
		return (
		<Main>

        <div className="container-fluid">
            <Header />
            <div className="banner banner-book-hotel-select-room " styles="height: 106px;">
               
            </div>

        </div>
        <div className="review_booking_wrapper">
            <div className="select-room booking-payment-wrapper" style={{background: "#f9f9f9;"}}>
                <div className="container">
                    <div className="review_booking_title">
                        <h3>Review Your Booking</h3>
                    </div>
                    <div className="booking-payment-main">
                        <div className="booking_form_main">
                            <form>
                               <div className="guest_info">
                                    <p className="section_heading text-uppercase">Guest Information</p>
                                    <div className="form_rows row">
                                        <span className="col-sm-6"><input type="text" name="fname" placeholder="First Name" /></span>
                                        <span className="col-sm-6"><input type="text" name="lname" placeholder="Last Name" /></span>
                                    </div>
                                     <div className="form_rows row">
                                        <input type="email" name="email" placeholder="Email" />
                                    </div>
                                    <div className="form_rows row">
                                        <input type="text" name="phone" placeholder="Phone Number" />
                                    </div>
                                </div> 
                                <div className="payment_info">
                                    <p className="section_heading text-uppercase">Payment Information</p>
                                    <div className="top">
                                        <div className="form_rows row">
                                            <input type="text" name="cardholder_name" placeholder="Cardholder Name" />
                                        </div>
                                        <div className="form_rows row">
                                            <span className="col-sm-6"><input type="text" name="billing_addrs" placeholder="Billing Address" /></span>
                                            <span className="col-sm-6"><input type="text" name="city_state" placeholder="City And State" /></span>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="form_rows row">
                                            <input type="text" name="card_number" placeholder="Card Number" />
                                        </div>
                                        <div className="form_rows row">
                                         <span className="col-xs-4"><input type="text" name="exp_date" placeholder="Exp.Date" /></span>
                                         <span className="col-xs-4"><input type="text" name="cvc" placeholder="CVC" /></span>
                                         <span className="col-xs-4"><input type="text" name="zip_code" placeholder="Zip Code" /></span>
                                        </div>
                                    </div>
                                     
                                </div> 
                            </form>
                        </div>
                        <div className="hotel_info">
                            <p className="section_heading text-uppercase">Hotel Information</p>
                            <div className="hotel_info_main row">
                                <div className="name_img clearfix row">
                                    <div className="image-wrap col-sm-4 ">
                                        <img src="images/room-1.png" className="img-responsive center-block round5" />
                                    </div>
                                    <div className="name col-sm-8">
                                        <h3>Hotel Star</h3>
                                        <p>Superior room</p>
                                        <p>2 guests</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="about_hotel">
                                    <h3>Important</h3>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                        aliquip ex ea commodo consequat.
                                        <br/><br/>

                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                        aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="booking-payment-side no-padding-sm">
                        <div className="booking_summary_main">
                            <h3><b>Book Summary</b></h3>
                            <div className="top">
                                <div>Price per Room<span>$99/night</span></div>
                                <div>Duration<span>19 Feb - 23 Feb </span></div>
                            </div>
                            <div className="middle">
                                <div>Subtotal(1 night)<span>$99.00</span></div>
                                <div>Taxes &amp; Fees<span>$32.25</span></div>
                            </div>
                            <div className="bottom">
                                <div>Total<span>$131.25</span></div>
                                <div><a href="#" className="button full no-margin no-shadow red-2 round-5 type-2"> Place Your Reservation</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="clearfix gap sm-hidden"></div>
                    <div className="clearfix gap xs-hidden"></div>
                    <div className="clearfix gap"></div>
                </div>
            </div>
        </div>

        <FooterOther />

    </Main>
		);
	}
}

export default BookHotelPayment;