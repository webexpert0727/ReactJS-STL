import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class BookHotelSelectRoom extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            <Header />

            <div class="container-fluid">
            <Header />

            <div class="banner banner-book-hotel-select-room ">
               
            </div>

        </div>

        <div class="">
            <div class="select-room">
                <div class="container">
                    <div class="col-md-7">
                        <div class="toom-title">
                            <h3 class="title-style-1">Hotel Star</h3>
                            <p class="ratings yellow">
                                <i class="fa fa-star fill"></i>
                                <i class="fa fa-star fill"></i>
                                <i class="fa fa-star fill"></i>
                                <i class="fa fa-star fill"></i>
                                <i class="fa fa-star fill"></i>
                            </p>
                        </div>
                        <p class="address">0.10 miles away <i class="fa fa-circle" styles="font-size:8px;"></i> Le Marais - the Centre Pompidou </p>
                        <div class="room-details">
                            <h4>Hotel Summary </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p><a href="#" class="load-more">Load more....</a></p>
                        </div>
                        <div class="book-hotel-form-container">
                            <form class="book-hotel-form">
                                <div class="input-container">
                                    <input type="text" name="" placeholder="Destination..." />
                                </div>
                                <div class="input-container">
                                    <input type="text" name="" placeholder="Check-in date" class="date-picker check-in" />
                                </div>
                                <div class="input-container">
                                    <input type="text" name="" placeholder="Check-out date" class="date-picker check-out" />
                                </div>
                                <div class="input-container">
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
                                    <input type="submit" value="Update" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-4 col-md-offset-1">
                        <div class="room-detail-card">
                            <div class="room-type">
                                <p>Superior Room</p>
                                <i class="fa fa-chevron-right pull-right"></i>
                                
                            </div>
                            <div class="price-details">
                                <div class="cus-rows">
                                    <div class="col-xs-6">
                                        <p class="content-heading">
                                            Price per Room
                                        </p>
                                    </div>
                                    <div class="col-xs-6">
                                        <p class="content text-right">
                                            $99/night
                                        </p>
                                    </div>
                                </div>
                                <div class="cus-rows">
                                    <div class="col-xs-6">
                                        <p class="content-heading">
                                            Subtotal (1 night)
                                        </p>
                                    </div>
                                    <div class="col-xs-6">
                                        <p class="content text-right">
                                            $99.00
                                        </p>
                                    </div>
                                    <div class="col-xs-6">
                                        <p class="content-heading text-underline">
                                            Taxes &amp; Fees
                                        </p>
                                    </div>
                                    <div class="col-xs-6">
                                        <p class="content text-right">
                                            $32.25
                                        </p>
                                    </div>
                                </div>
                                <div class="cus-rows">
                                    <div class="col-xs-6">
                                        <p class="content-heading">
                                            Total
                                        </p>
                                    </div>
                                    <div class="col-xs-6">
                                        <p class="content total text-right">
                                            $131.25
                                        </p>
                                    </div>
                                </div>
                                <div class="cus-rows">
                                    <input type="submit" name="select_hotel_submit" value="Continue" class="button default-blue-2 full no-margin round5 type-2 no-shadow" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
        </div>
        
        <FooterOther />

    </Main>
		);
	}
}

export default BookHotelSelectRoom;