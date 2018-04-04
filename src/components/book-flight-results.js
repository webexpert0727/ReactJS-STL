import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class BookFlightResults extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            <Header />
            <div class="banner banner-book-flight-confirm no-text-card-up-high ">
                
            </div>

        </div>
        <div class="book_flight_passenger_wrapper">
            <div class="clearfix card-layout-2">
                <div>
                    <div class="col-md-12"><h3 class="plain-heading">Your Search</h3></div>
                    <div class="book-hotel-form-container clearfix">
                        <form class="book-hotel-form col-md-12">
                            <div class="input-container">
                                <label>From</label>
                                <input type="text" name="" placeholder="Paris(CDG)" />
                            </div>
                            <div class="input-container">
                                 <label>To</label>
                                <input type="text" name="" placeholder="San Francisco(SFO)"  styles="min-width: 148px;" />
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

                    <div class="center_txt_seperator">Select Flight</div>

                    <div class="flight_payment_tabs">
                        <div class="col-md-3">
                            <ul>
                                <li class="active"> Results </li>
                                <li> Passengers </li>
                                <li> Payment </li>
                                <li> Confirmation </li>
                            </ul>
                        </div>
                         <div class="col-md-9">
                        <div class="sort"><p>Sort By: </p>
                            <span>
                                <a href="#" class="active">Price</a>
                                <a href="#">Departure Time</a>
                                <a href="#">Duration</a>
                            </span>
                        </div>
                        <div class="passenger_info_wrapper">
                            <form>
                                <div class="flight_resut_single_section">
                                   <div class="top">
                                       <div class="left"> 19/02/2018 <br/> Outbound</div>
                                       <div class="right">
                                          <img src="images/f-1.png" />
                                          <span>AT2974</span>
                                       </div>
                                   </div>
                                   <div class="middle">
                                     <div class="section_1"> CDG <br/> <b>14:25</b></div>
                                     <div class="section_2">
                                       <span class="time_taken"> 4 hours 58 minutes</span>
                                       <div class="radio">
                                          <label><input type="radio" name="choose_flight_radio" />
                                            </label>
                                       </div>
                                     </div>
                                     <div class="section_3">
                                        SFO <br/><b>19:23</b>
                                     </div>
                                     <div class="section_4">Class <br/><b>Economy</b></div>
                                   </div>
                                   <div class="bottom">
                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                   </div>
                                 </div>

                                  <div class="flight_resut_single_section">
                                   <div class="top">
                                       <div class="left"> 19/02/2018 <br/> Outbound</div>
                                       <div class="right">
                                          <img src="images/f-1.png" />
                                          <span>AT2974</span>
                                       </div>
                                   </div>
                                   <div class="middle">
                                     <div class="section_1"> CDG <br/> <b>14:25</b></div>
                                     <div class="section_2">
                                       <span class="time_taken"> 4 hours 58 minutes</span>
                                       <div class="radio">
                                          <label><input type="radio" name="choose_flight_radio" />
                                            </label>
                                       </div>
                                     </div>
                                     <div class="section_3">
                                        SFO <br/><b>19:23</b>
                                     </div>
                                     <div class="section_4">Class <br/><b>Economy</b></div>
                                   </div>
                                   <div class="bottom">
                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                   </div>
                                 </div>


                                  <div class="total_pay">
                                    <div class="col-md-9">
                                      <span><b>Fare:</b>$ 14,639 + $ 563.94 carrier-imposed charges + $ 231.56 taxes and fees</span>
                                    </div>
                                    <div class="total_cost text-right"><span> $319.55</span></div>
                                    <input type="submit" name="select_flight_btn" value="Select" class="pull-right button type-2 green no-shadow" />
                                    <div class="clearfix"></div>
                                  </div>
                             </form>
                            </div>  
                        </div> 
                    </div>
                </div>
            </div>
            <div class="clearfix gap md-hidden"></div>
            <div class="clearfix gap sm-hidden"></div>
            <div class="clearfix gap sm-hidden"></div>
            <div class="clearfix gap xs-hidden"></div>
            <div class="clearfix gap "></div>
        </div>

    </Main>
		);
	}
}

export default BookFlightResults;