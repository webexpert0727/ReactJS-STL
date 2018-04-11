import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class BookHotelSelectHotel extends Component {
	render() {
		return (
		<Main>

        <div className="container-fluid">
            <Header />
            <div className="banner banner-book-hotel select-hotel no-text-banner no-text-card-up-high">
                <div className="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>

        </div>

        <div className="book-hotel-select_wrapper select-hotel">
            <div className="card-layout-2 style-2" styles="overflow: hidden; margin-bottom: 10vw">
                <div className="">
                    <div className="col-md-3 select-hotel-sidebar">
                        <aside>
                            <div className="sidebar-block" styles="overflow: hidden; border: none;">
                                <form>
                                     <div className="currency_changer_wrapper">
                                        <div className="currency_selected">
                                            <span><img src="images/flag-er.png" /></span>
                                            <span>EUR</span>
                                            <i className="fa fa-angle-down"></i>
                                        </div>
                                        <div className="currency_toggle">
                                            <div className="currency_select">
                                                <span><img src="images/flag-er.png" /></span>
                                                <span>EUR</span>
                                                <i className="fa fa-angle-down"></i>
                                            </div>
                                            <div className="currency_select">
                                                <span><img src="images/flag-er.png" /></span>
                                                <span>USD</span>
                                                <i className="fa fa-angle-down"></i>
                                            </div>
                                            <div className="currency_select">
                                                <span><img src="images/flag-er.png" /></span>
                                                <span>IND</span>
                                                <i className="fa fa-angle-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                 </form>
                            </div>
                            <div className="gap sm-hidden"></div>
                            <div className="sidebar-block" styles="overflow: hidden; border: none;">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d908224.4742712615!2d152.442389502102!3d-27.22693966709454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbrisbane+zoo!5e0!3m2!1sen!2sin!4v1516024611321" width="100%" height="200px" frameBorder="0" styles="border:0" allowFullScreen></iframe>
                            </div>
                            <div className="sidebar-block" styles="overflow: hidden; border: none;">
                                <p className="sidebar-heading" >Price</p>
                                <div className="clearfix">
                                    <div className="range" id="price">
                                        <div className="range-slider"> </div>
                                        <br/>
                                        <input type="text" id="range-min" readOnly={true} className="pull-left" />
                                        <input type="text" id="range-max" readOnly={true} className="pull-right text-right" />
                                    </div>
                                </div>
                            </div>
                             <div className="sidebar-block" styles="overflow: hidden; border: none;">
                                <p className="sidebar-heading" >Guest Rating</p>
                                <div className="clearfix">
                                    <div className="slidecontainer">
                                      <input type="range" min="1" max="100" defaultValue="50" className="slider" id="myRange" />
                                      <br/>
                                      <p>Rating: <span id="demo"></span></p>
                                    </div>

                                </div>
                            </div>

                             <div className="sidebar-block" styles="overflow: hidden; border: none;">

                                <p className="sidebar-heading" >Hotel Stars</p>
                                <div className="clearfix">
                                <div>
                                    <i className="fa fa-star" styles="color:#fdb608; "></i>
                                    <i className="fa fa-star" styles="color:#fdb608; "></i>
                                    <i className="fa fa-star" styles="color:#fdb608; "></i>
                                    <i className="fa fa-star" styles="color:#fdb608; "></i>
                                    <i className="fa fa-star" styles="color:#fdb608; "></i>
                                </div>   
                                </div>
                                <br/>
                            </div>
                        </aside>
                    </div>
                    <div className="col-md-9">
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
                                    <input type="text" placeholder="0 Adults" defaultValue="" className="guest" />
                                    <div className="edit-guest">
                                        <div className="adult">
                                            <label htmlFor="">0 Adult</label>
                                            <a href="javascript:void(0)" className="add">&nbsp;</a>
                                            <input type="hidden" name="" id="" defaultValue="0" />
                                            <a href="javascript:void(0)" className="sub">&nbsp;</a>
                                        </div>
                                        <div className="children">
                                            <label htmlFor="">0 Children</label>
                                            <a href="javascript:void(0)" className="add">&nbsp;</a>
                                            <input type="hidden" name="" id="" defaultValue="0" />
                                            <a href="javascript:void(0)" className="sub">&nbsp;</a>
                                        </div>

                                    </div>
                                </div>
                                <div className="input-container">
                                    <input type="submit" defaultValue="Search Now" />
                                </div>
                            </form>
                        </div>
                        <div className="products-container">
                            <div className="header clearfix">
                                <div className="book_hotel_sorting-container">
                                    <label htmlFor="sort">Sort By :</label>
                                    <a href="#" className="active">Distance </a>
                                    <a href="#">Popularity </a>
                                    <a href="#">Lowest Price </a>
                                    <a href="#">Highest Price </a>
                                    <a href="#">Rating </a>
                                </div>
                            </div>
                            <div className="detail-layout">
                                <div className="product-layout-1">
                                    <div className="product-div room ">
                                        <div className="contain clearfix round5">
                                            <div className="image-wrapper col-sm-4" id="image-col">
                                                <a href="#">
                                                    <img src="images/room-1.png" alt="" id="first_image" className="img-responsive center-block round5" />
                                                </a>
                                            </div>
                                            <div className="col-sm-5">
                                                <div className="hotel-name ">
                                                    <h2> Hotel Star</h2>
                                                    <div>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                    </div>
                                                    <p>0.10 miles away . Le Marais -<br/> the Centre Pompidou </p> 
                                                </div>  
                                            </div>
                                            <div className=" col-sm-3" >
                                                <div className="text-right text-left-xs">
                                                    <div className="product-price ">
                                                        <p>99$</p>
                                                    </div>
                                                    <div className="">
                                                        <a href="#" className="button type-2 no-shadow green" >SELECT</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-div room ">
                                        <div className="contain clearfix round5">
                                            <div className="image-wrapper col-sm-4" id="image-col">
                                                <a href="#">
                                                    <img src="images/room-1.png" alt="" id="first_image" className="img-responsive center-block round5" />
                                                </a>
                                            </div>
                                            <div className="col-sm-5">
                                                <div className="hotel-name ">
                                                    <h2> Hotel Star</h2>
                                                    <div>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                    </div>
                                                    <p>0.10 miles away . Le Marais -<br/> the Centre Pompidou </p> 
                                                </div>  
                                            </div>
                                            <div className=" col-sm-3" >
                                                <div className="text-right text-left-xs">
                                                    <div className="product-price ">
                                                        <p>99$</p>
                                                    </div>
                                                    <div className="">
                                                        <a href="#" className="button type-2 no-shadow green" >SELECT</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-div room ">
                                        <div className="contain clearfix round5">
                                            <div className="image-wrapper col-sm-4" id="image-col">
                                                <a href="#">
                                                    <img src="images/room-1.png" alt="" id="first_image" className="img-responsive center-block round5" />
                                                </a>
                                            </div>
                                            <div className="col-sm-5">
                                                <div className="hotel-name ">
                                                    <h2> Hotel Star</h2>
                                                    <div>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                    </div>
                                                    <p>0.10 miles away . Le Marais -<br/> the Centre Pompidou </p> 
                                                </div>  
                                            </div>
                                            <div className=" col-sm-3" >
                                                <div className="text-right text-left-xs">
                                                    <div className="product-price ">
                                                        <p>99$</p>
                                                    </div>
                                                    <div className="">
                                                        <a href="#" className="button type-2 no-shadow green" >SELECT</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-div room ">
                                        <div className="contain clearfix round5">
                                            <div className="image-wrapper col-sm-4" id="image-col">
                                                <a href="#">
                                                    <img src="images/room-1.png" alt="" id="first_image" className="img-responsive center-block round5" />
                                                </a>
                                            </div>
                                            <div className="col-sm-5">
                                                <div className="hotel-name ">
                                                    <h2> Hotel Star</h2>
                                                    <div>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                    </div>
                                                    <p>0.10 miles away . Le Marais -<br/> the Centre Pompidou </p> 
                                                </div>  
                                            </div>
                                            <div className=" col-sm-3" >
                                                <div className="text-right text-left-xs">
                                                    <div className="product-price ">
                                                        <p>99$</p>
                                                    </div>
                                                    <div className="">
                                                        <a href="#" className="button type-2 no-shadow green" >SELECT</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-div room ">
                                        <div className="contain clearfix round5">
                                            <div className="image-wrapper col-sm-4" id="image-col">
                                                <a href="#">
                                                    <img src="images/room-1.png" alt="" id="first_image" className="img-responsive center-block round5" />
                                                </a>
                                            </div>
                                            <div className="col-sm-5">
                                                <div className="hotel-name ">
                                                    <h2> Hotel Star</h2>
                                                    <div>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                        <i className="fa fa-star" style={{color:"#fdb608;"}}></i>
                                                    </div>
                                                    <p>0.10 miles away . Le Marais -<br/> the Centre Pompidou </p> 
                                                </div>  
                                            </div>
                                            <div className=" col-sm-3" >
                                                <div className="text-right text-left-xs">
                                                    <div className="product-price ">
                                                        <p>99$</p>
                                                    </div>
                                                    <div className="">
                                                        <a href="#" className="button type-2 no-shadow green" >SELECT</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gap clearfix hidden-sm hidden-md"></div>
                                    <div className="gap clearfix hidden-sm hidden-md"></div>
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

export default BookHotelSelectHotel;