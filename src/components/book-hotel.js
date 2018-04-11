import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class BookHotel extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            <Header />

            <div class="banner banner-book-hotel ">
                <div class="text text-center">
                    <h3>
                        Place some slogan<br/>here
                    </h3>
                </div>
            </div>

        </div>
        <div class="">
            <div class="card-layout-2 above-banner">
                <div>
                    <p>SEARCH FROM OVER 980,000 HOTELS</p>
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
                                <input type="submit" value="Search Now" />
                            </div>
                        </form>
                    </div>
                    <div>
                        <h5>Just Booked</h5>
                        <div class="just-booked ">
                            <div class="">
                                <div class="image-wrap">
                                    <a href="book-hotel-select.html">
                                        <img src="images/hotel-1.png" alt="" class="img-responsive center-block" />
                                    </a>
                                </div>
                                <div class="content">
                                    <p class="hotel-name"> <span class="hotel-rate">$7956</span>
                                        Step behind the scenes of Havana&apos;s theater
                                    </p>
                                    <p class="ratings pull-left">
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                    </p>
                                    <p class="review pull-right">
                                        84 reviews
                                    </p>
                                </div>
                            </div>
                            <div class="">
                                <div class="image-wrap">
                                    <a href="book-hotel-select.html">
                                        <img src="images/hotel-2.png" alt="" class="img-responsive center-block" />
                                    </a>
                                </div>
                                <div class="content">
                                    <p class="hotel-name"> <span class="hotel-rate">$7956</span>
                                        Dance your way into Cuban culture with a
                                    </p>
                                    <p class="ratings pull-left">
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                    </p>
                                    <p class="review pull-right">
                                        84 reviews
                                    </p>
                                </div>
                            </div>
                            <div class="">
                                <div class="image-wrap">
                                    <a href="book-hotel-select.html">
                                        <img src="images/hotel-3.png" alt="" class="img-responsive center-block" />
                                    </a>
                                </div>
                                <div class="content">
                                    <p class="hotel-name"> <span class="hotel-rate">$13,31</span>
                                        Hunt for truffles in the countryside
                                    </p>
                                    <p class="ratings pull-left">
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                    </p>
                                    <p class="review pull-right">
                                        84 reviews
                                    </p>
                                </div>
                            </div>
                            <div class="">
                                <div class="image-wrap">
                                    <a href="book-hotel-select.html">
                                        <img src="images/hotel-4.png" alt="" class="img-responsive center-block" />
                                    </a>
                                </div>
                                <div class="content">
                                    <p class="hotel-name"> <span class="hotel-rate">$23,204</span>
                                        Meet Kenyan innovators with a Nairobi...
                                    </p>
                                    <p class="ratings pull-left">
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                    </p>
                                    <p class="review pull-right">
                                        84 reviews
                                    </p>
                                </div>
                            </div>
                            <div class="">
                                <div class="image-wrap">
                                    <a href="book-hotel-select.html">
                                        <img src="images/hotel-5.png" alt="" class="img-responsive center-block" />
                                    </a>
                                </div>
                                <div class="content">
                                    <p class="hotel-name"> <span class="hotel-rate">$18,22</span>
                                        Explore Miami’s Latin flavors with food...
                                    </p>
                                    <p class="ratings pull-left">
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                        <i class="fa fa-star fill"></i>
                                    </p>
                                    <p class="review pull-right">
                                        84 reviews
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h5>
                            Places in 
                            <span class="pull-right">
                                <a href="#" class="see-all">See all</a>
                            </span>
                        </h5>
                        <div class="just-booked place-in">
                            <div class="">
                                <div class="image-wrap ">
                                    <a href="book-hotel-select.html">
                                        <img src="images/place-1.png" alt="" class="img-responsive center-block" />
                                        <div class="over-image">
                                            <span>Guid</span>
                                            <p>
                                                Handbag Shopping
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div class="content">
                                    <span>By Chanda Stacker</span>                                    
                                </div>
                            </div>
                            <div class="">
                                <div class="image-wrap ">
                                    <a href="book-hotel-select.html">
                                        <img src="images/place-2.png" alt="" class="img-responsive center-block" />
                                        <div class="over-image">
                                            <span>Guid</span>
                                            <p>
                                                Where to see Comedy
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div class="content">
                                    <span>By Edgar Agbayani</span>                                    
                                </div>
                            </div>
                            <div class="">
                                <div class="image-wrap ">
                                    <a href="book-hotel-select.html">
                                        <img src="images/place-3.png" alt="" class="img-responsive center-block" />
                                        <div class="over-image">
                                            <span>Guid</span>
                                            <p>
                                                Scarf Shops
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div class="content">
                                    <span>By Carlos Muela</span>                                    
                                </div>
                            </div>
                            <div class="">
                                <div class="image-wrap ">
                                    <a href="book-hotel-select.html">
                                        <img src="images/place-2.png" alt="" class="img-responsive center-block" />
                                        <div class="over-image">
                                            <span>Guid</span>
                                            <p>
                                                Wine Bars
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div class="content">
                                    <span>By Apexer</span>                                    
                                </div>
                            </div>
                            <div class="">
                                <div class="image-wrap ">
                                    <a href="book-hotel-select.html">
                                        <img src="images/place-5.png" alt="" class="img-responsive center-block" />
                                        <div class="over-image">
                                            <span>Guid</span>
                                            <p>
                                                Vintage 
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div class="content">
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