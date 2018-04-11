import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class BookHotel extends Component {
	render() {
		return (
		<Main>

        <div className="container-fluid">
            <Header />

            <div className="banner banner-book-hotel ">
                <div className="text text-center">
                    <h3>
                        Place some slogan<br/>here
                    </h3>
                </div>
            </div>

        </div>
        <div className="">
            <div className="card-layout-2 above-banner">
                <div>
                    <p>SEARCH FROM OVER 980,000 HOTELS</p>
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
                                <input type="submit" value="Search Now" />
                            </div>
                        </form>
                    </div>
                    <div>
                        <h5>Just Booked</h5>
                        <div className="just-booked ">
                            <div className="">
                                <div className="image-wrap">
                                    <a href="book-hotel-select.html">
                                        <img src="images/hotel-1.png" alt="" className="img-responsive center-block" />
                                    </a>
                                </div>
                                <div className="content">
                                    <p className="hotel-name"> <span className="hotel-rate">$7956</span>
                                        Step behind the scenes of Havana&apos;s theater
                                    </p>
                                    <p className="ratings pull-left">
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                    </p>
                                    <p className="review pull-right">
                                        84 reviews
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <div className="image-wrap">
                                    <a href="book-hotel-select.html">
                                        <img src="images/hotel-2.png" alt="" className="img-responsive center-block" />
                                    </a>
                                </div>
                                <div className="content">
                                    <p className="hotel-name"> <span className="hotel-rate">$7956</span>
                                        Dance your way into Cuban culture with a
                                    </p>
                                    <p className="ratings pull-left">
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                    </p>
                                    <p className="review pull-right">
                                        84 reviews
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <div className="image-wrap">
                                    <a href="book-hotel-select.html">
                                        <img src="images/hotel-3.png" alt="" className="img-responsive center-block" />
                                    </a>
                                </div>
                                <div className="content">
                                    <p className="hotel-name"> <span className="hotel-rate">$13,31</span>
                                        Hunt for truffles in the countryside
                                    </p>
                                    <p className="ratings pull-left">
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                    </p>
                                    <p className="review pull-right">
                                        84 reviews
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <div className="image-wrap">
                                    <a href="book-hotel-select.html">
                                        <img src="images/hotel-4.png" alt="" className="img-responsive center-block" />
                                    </a>
                                </div>
                                <div className="content">
                                    <p className="hotel-name"> <span className="hotel-rate">$23,204</span>
                                        Meet Kenyan innovators with a Nairobi...
                                    </p>
                                    <p className="ratings pull-left">
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                    </p>
                                    <p className="review pull-right">
                                        84 reviews
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <div className="image-wrap">
                                    <a href="book-hotel-select.html">
                                        <img src="images/hotel-5.png" alt="" className="img-responsive center-block" />
                                    </a>
                                </div>
                                <div className="content">
                                    <p className="hotel-name"> <span className="hotel-rate">$18,22</span>
                                        Explore Miami’s Latin flavors with food...
                                    </p>
                                    <p className="ratings pull-left">
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                        <i className="fa fa-star fill"></i>
                                    </p>
                                    <p className="review pull-right">
                                        84 reviews
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h5>
                            Places in 
                            <span className="pull-right">
                                <a href="#" className="see-all">See all</a>
                            </span>
                        </h5>
                        <div className="just-booked place-in">
                            <div className="">
                                <div className="image-wrap ">
                                    <a href="book-hotel-select.html">
                                        <img src="images/place-1.png" alt="" className="img-responsive center-block" />
                                        <div className="over-image">
                                            <span>Guid</span>
                                            <p>
                                                Handbag Shopping
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="content">
                                    <span>By Chanda Stacker</span>                                    
                                </div>
                            </div>
                            <div className="">
                                <div className="image-wrap ">
                                    <a href="book-hotel-select.html">
                                        <img src="images/place-2.png" alt="" className="img-responsive center-block" />
                                        <div className="over-image">
                                            <span>Guid</span>
                                            <p>
                                                Where to see Comedy
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="content">
                                    <span>By Edgar Agbayani</span>                                    
                                </div>
                            </div>
                            <div className="">
                                <div className="image-wrap ">
                                    <a href="book-hotel-select.html">
                                        <img src="images/place-3.png" alt="" className="img-responsive center-block" />
                                        <div className="over-image">
                                            <span>Guid</span>
                                            <p>
                                                Scarf Shops
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="content">
                                    <span>By Carlos Muela</span>                                    
                                </div>
                            </div>
                            <div className="">
                                <div className="image-wrap ">
                                    <a href="book-hotel-select.html">
                                        <img src="images/place-2.png" alt="" className="img-responsive center-block" />
                                        <div className="over-image">
                                            <span>Guid</span>
                                            <p>
                                                Wine Bars
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="content">
                                    <span>By Apexer</span>                                    
                                </div>
                            </div>
                            <div className="">
                                <div className="image-wrap ">
                                    <a href="book-hotel-select.html">
                                        <img src="images/place-5.png" alt="" className="img-responsive center-block" />
                                        <div className="over-image">
                                            <span>Guid</span>
                                            <p>
                                                Vintage 
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="content">
                                    <span>By Andrew McClintock</span>                                    
                                </div>
                            </div>
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

export default BookHotel;