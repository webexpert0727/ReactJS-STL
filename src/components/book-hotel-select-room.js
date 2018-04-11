import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class BookHotelSelectRoom extends Component {
	render() {
		return (
		<Main>

        <div className="container-fluid">
            <Header />

            <div className="container-fluid">
            <Header />

            <div className="banner banner-book-hotel-select-room ">
               
            </div>

        </div>

        <div className="">
            <div className="select-room">
                <div className="container">
                    <div className="col-md-7">
                        <div className="toom-title">
                            <h3 className="title-style-1">Hotel Star</h3>
                            <p className="ratings yellow">
                                <i className="fa fa-star fill"></i>
                                <i className="fa fa-star fill"></i>
                                <i className="fa fa-star fill"></i>
                                <i className="fa fa-star fill"></i>
                                <i className="fa fa-star fill"></i>
                            </p>
                        </div>
                        <p className="address">0.10 miles away <i className="fa fa-circle" styles="font-size:8px;"></i> Le Marais - the Centre Pompidou </p>
                        <div className="room-details">
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
                            <p><a href="#" className="load-more">Load more....</a></p>
                        </div>
                        <div className="book-hotel-form-container">
                            <form className="book-hotel-form">
                                <div className="input-container">
                                    <input type="text" name="" placeholder="Destination..." />
                                </div>
                                <div className="input-container">
                                    <input type="text" name="" placeholder="Check-in date" className="date-picker check-in" />
                                </div>
                                <div className="input-container">
                                    <input type="text" name="" placeholder="Check-out date" className="date-picker check-out" />
                                </div>
                                <div className="input-container">
                                    <input type="text" placeholder="0 Adults" value="" className="guest" />
                                    <div className="edit-guest">
                                        <div className="adult">
                                            <label htmlFor="">0 Adult</label>
                                            <a href="javascript:void(0)" className="add">&nbsp;</a>
                                            <input type="hidden" name="" id="" value="0" />
                                            <a href="javascript:void(0)" className="sub">&nbsp;</a>
                                        </div>
                                        <div className="children">
                                            <label htmlFor="">0 Children</label>
                                            <a href="javascript:void(0)" className="add">&nbsp;</a>
                                            <input type="hidden" name="" id="" value="0" />
                                            <a href="javascript:void(0)" className="sub">&nbsp;</a>
                                        </div>

                                    </div>
                                </div>
                                <div className="input-container">
                                    <input type="submit" value="Update" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4 col-md-offset-1">
                        <div className="room-detail-card">
                            <div className="room-type">
                                <p>Superior Room</p>
                                <i className="fa fa-chevron-right pull-right"></i>
                                
                            </div>
                            <div className="price-details">
                                <div className="cus-rows">
                                    <div className="col-xs-6">
                                        <p className="content-heading">
                                            Price per Room
                                        </p>
                                    </div>
                                    <div className="col-xs-6">
                                        <p className="content text-right">
                                            $99/night
                                        </p>
                                    </div>
                                </div>
                                <div className="cus-rows">
                                    <div className="col-xs-6">
                                        <p className="content-heading">
                                            Subtotal (1 night)
                                        </p>
                                    </div>
                                    <div className="col-xs-6">
                                        <p className="content text-right">
                                            $99.00
                                        </p>
                                    </div>
                                    <div className="col-xs-6">
                                        <p className="content-heading text-underline">
                                            Taxes &amp; Fees
                                        </p>
                                    </div>
                                    <div className="col-xs-6">
                                        <p className="content text-right">
                                            $32.25
                                        </p>
                                    </div>
                                </div>
                                <div className="cus-rows">
                                    <div className="col-xs-6">
                                        <p className="content-heading">
                                            Total
                                        </p>
                                    </div>
                                    <div className="col-xs-6">
                                        <p className="content total text-right">
                                            $131.25
                                        </p>
                                    </div>
                                </div>
                                <div className="cus-rows">
                                    <input type="submit" name="select_hotel_submit" value="Continue" className="button default-blue-2 full no-margin round5 type-2 no-shadow" />
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