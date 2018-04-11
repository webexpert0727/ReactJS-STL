import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class BookFlightResults extends Component {
	render() {
		return (
		<Main>

        <div className="container-fluid">
            <Header />
            <div className="banner banner-book-flight-confirm no-text-card-up-high ">
                
            </div>

        </div>
        <div className="book_flight_passenger_wrapper">
            <div className="clearfix card-layout-2">
                <div>
                    <div className="col-md-12"><h3 className="plain-heading">Your Search</h3></div>
                    <div className="book-hotel-form-container clearfix">
                        <form className="book-hotel-form col-md-12">
                            <div className="input-container">
                                <label>From</label>
                                <input type="text" name="" placeholder="Paris(CDG)" />
                            </div>
                            <div className="input-container">
                                 <label>To</label>
                                <input type="text" name="" placeholder="San Francisco(SFO)"  styles="min-width: 148px;" />
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
                                        <label htmlFor="">0 Adult</label>
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

                    <div className="center_txt_seperator">Select Flight</div>

                    <div className="flight_payment_tabs">
                        <div className="col-md-3">
                            <ul>
                                <li className="active"> Results </li>
                                <li> Passengers </li>
                                <li> Payment </li>
                                <li> Confirmation </li>
                            </ul>
                        </div>
                         <div className="col-md-9">
                        <div className="sort"><p>Sort By: </p>
                            <span>
                                <a href="#" className="active">Price</a>
                                <a href="#">Departure Time</a>
                                <a href="#">Duration</a>
                            </span>
                        </div>
                        <div className="passenger_info_wrapper">
                            <form>
                                <div className="flight_resut_single_section">
                                   <div className="top">
                                       <div className="left"> 19/02/2018 <br/> Outbound</div>
                                       <div className="right">
                                          <img src="images/f-1.png" />
                                          <span>AT2974</span>
                                       </div>
                                   </div>
                                   <div className="middle">
                                     <div className="section_1"> CDG <br/> <b>14:25</b></div>
                                     <div className="section_2">
                                       <span className="time_taken"> 4 hours 58 minutes</span>
                                       <div className="radio">
                                          <label><input type="radio" name="choose_flight_radio" />
                                            </label>
                                       </div>
                                     </div>
                                     <div className="section_3">
                                        SFO <br/><b>19:23</b>
                                     </div>
                                     <div className="section_4">Class <br/><b>Economy</b></div>
                                   </div>
                                   <div className="bottom">
                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                   </div>
                                 </div>

                                  <div className="flight_resut_single_section">
                                   <div className="top">
                                       <div className="left"> 19/02/2018 <br/> Outbound</div>
                                       <div className="right">
                                          <img src="images/f-1.png" />
                                          <span>AT2974</span>
                                       </div>
                                   </div>
                                   <div className="middle">
                                     <div className="section_1"> CDG <br/> <b>14:25</b></div>
                                     <div className="section_2">
                                       <span className="time_taken"> 4 hours 58 minutes</span>
                                       <div className="radio">
                                          <label><input type="radio" name="choose_flight_radio" />
                                            </label>
                                       </div>
                                     </div>
                                     <div className="section_3">
                                        SFO <br/><b>19:23</b>
                                     </div>
                                     <div className="section_4">Class <br/><b>Economy</b></div>
                                   </div>
                                   <div className="bottom">
                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                   </div>
                                 </div>


                                  <div className="total_pay">
                                    <div className="col-md-9">
                                      <span><b>Fare:</b>$ 14,639 + $ 563.94 carrier-imposed charges + $ 231.56 taxes and fees</span>
                                    </div>
                                    <div className="total_cost text-right"><span> $319.55</span></div>
                                    <input type="submit" name="select_flight_btn" value="Select" className="pull-right button type-2 green no-shadow" />
                                    <div className="clearfix"></div>
                                  </div>
                             </form>
                            </div>  
                        </div> 
                    </div>
                </div>
            </div>
            <div className="clearfix gap md-hidden"></div>
            <div className="clearfix gap sm-hidden"></div>
            <div className="clearfix gap sm-hidden"></div>
            <div className="clearfix gap xs-hidden"></div>
            <div className="clearfix gap "></div>
        </div>

    </Main>
		);
	}
}

export default BookFlightResults;