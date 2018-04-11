import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class BookHotelPayment extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            <Header />
            <div class="banner banner-book-hotel-select-room " styles="height: 106px;">
               
            </div>

        </div>
        <div class="review_booking_wrapper">
            <div class="select-room booking-payment-wrapper" styles="background: #f9f9f9;">
                <div class="container">
                    <div class="review_booking_title">
                        <h3>Review Your Booking</h3>
                    </div>
                    <div class="booking-payment-main">
                        <div class="booking_form_main">
                            <form>
                               <div class="guest_info">
                                    <p class="section_heading text-uppercase">Guest Information</p>
                                    <div class="form_rows row">
                                        <span class="col-sm-6"><input type="text" name="fname" placeholder="First Name" /></span>
                                        <span class="col-sm-6"><input type="text" name="lname" placeholder="Last Name" /></span>
                                    </div>
                                     <div class="form_rows row">
                                        <input type="email" name="email" placeholder="Email" />
                                    </div>
                                    <div class="form_rows row">
                                        <input type="text" name="phone" placeholder="Phone Number" />
                                    </div>
                                </div> 
                                <div class="payment_info">
                                    <p class="section_heading text-uppercase">Payment Information</p>
                                    <div class="top">
                                        <div class="form_rows row">
                                            <input type="text" name="cardholder_name" placeholder="Cardholder Name" />
                                        </div>
                                        <div class="form_rows row">
                                            <span class="col-sm-6"><input type="text" name="billing_addrs" placeholder="Billing Address" /></span>
                                            <span class="col-sm-6"><input type="text" name="city_state" placeholder="City And State" /></span>
                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <div class="form_rows row">
                                            <input type="text" name="card_number" placeholder="Card Number" />
                                        </div>
                                        <div class="form_rows row">
                                         <span class="col-xs-4"><input type="text" name="exp_date" placeholder="Exp.Date" /></span>
                                         <span class="col-xs-4"><input type="text" name="cvc" placeholder="CVC" /></span>
                                         <span class="col-xs-4"><input type="text" name="zip_code" placeholder="Zip Code" /></span>
                                        </div>
                                    </div>
                                     
                                </div> 
                            </form>
                        </div>
                        <div class="hotel_info">
                            <p class="section_heading text-uppercase">Hotel Information</p>
                            <div class="hotel_info_main row">
                                <div class="name_img clearfix row">
                                    <div class="image-wrap col-sm-4 ">
                                        <img src="images/room-1.png" class="img-responsive center-block round5" />
                                    </div>
                                    <div class="name col-sm-8">
                                        <h3>Hotel Star</h3>
                                        <p>Superior room</p>
                                        <p>2 guests</p>
                                    </div>
                                </div>
                                <hr/>
                                <div class="about_hotel">
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
                    <div class="booking-payment-side no-padding-sm">
                        <div class="booking_summary_main">
                            <h3><b>Book Summary</b></h3>
                            <div class="top">
                                <div>Price per Room<span>$99/night</span></div>
                                <div>Duration<span>19 Feb - 23 Feb </span></div>
                            </div>
                            <div class="middle">
                                <div>Subtotal(1 night)<span>$99.00</span></div>
                                <div>Taxes &amp; Fees<span>$32.25</span></div>
                            </div>
                            <div class="bottom">
                                <div>Total<span>$131.25</span></div>
                                <div><a href="#" class="button full no-margin no-shadow red-2 round-5 type-2"> Place Your Reservation</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="clearfix gap sm-hidden"></div>
                    <div class="clearfix gap xs-hidden"></div>
                    <div class="clearfix gap"></div>
                </div>
            </div>
        </div>

        <FooterOther />

    </Main>
		);
	}
}

export default BookHotelPayment;