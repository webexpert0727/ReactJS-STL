import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class BookFlightPassengers extends Component {
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

                     <div class="center_txt_seperator">Fill Information</div>

                    <div class="flight_payment_tabs">
                        <div class="col-md-3">
                            <ul>
                                <li> Results </li>
                                <li class="active"> Passengers </li>
                                <li> Payment </li>
                                <li> Confirmation </li>
                            </ul>
                        </div>
                        <div class="col-md-9">
                            <p class="book-flight-title"> Enter Passegers Information</p>
                            <div class="passenger_info_wrapper">
                                <div class="payment_method_form">
                                    <form method="post">
                                        <div class="form_rows ">
                                          <span class="col-sm-6"><input type="text" name="fname" placeholder="First Name" /></span>
                                          <span class="col-sm-6"><input type="text" name="lname" placeholder="Last Name" /></span>
                                        </div> 
                                        <div class="form_rows ">
                                            <input type="email" name="email" placeholder="Email" />
                                         </div>
                                          <div class="form_rows ">
                                            <input type="text" name="phone_no" placeholder="Phone Number" />
                                         </div>
                                          <div class="form_rows ">
                                            <input type="text" name="address" placeholder="Address" />
                                         </div>
                                         <div class="form_rows ">   
                                             <span class="col-sm-4">
                                                <select id="day" name="day">
                                                    <option value="01">1</option>
                                                    <option value="02">2</option>
                                                    <option value="03">3</option>
                                                    <option value="04">4</option>
                                                    <option value="05">5</option>
                                                    <option value="06">6</option>
                                                    <option value="07">7</option>
                                                    <option value="08">8</option>
                                                    <option value="09">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                </select>
                                             </span>
                                             <span class="col-sm-4">
                                                 <select id="month" name="month">
                                                    <option value="01">January</option> 
                                                    <option value="02">February</option>
                                                    <option value="03">March</option>
                                                    <option value="04">April</option>
                                                    <option value="05">May</option>
                                                    <option value="06">June</option>
                                                    <option value="07">July</option>
                                                    <option value="08">August</option>
                                                    <option value="09">September</option>
                                                    <option value="10">October</option>
                                                    <option value="11">November</option>
                                                    <option value="12">December</option>
                                                </select>
                                            </span>
                                             <span class="col-sm-4">
                                                <select id="year" name="year">
                                                    <option value="1988">1988</option>
                                                    <option value="1989">1989</option>
                                                    <option value="1990">1990</option>
                                                    <option value="2014">2014</option>
                                                    <option value="2015">2015</option>
                                                    <option value="2016">2016</option>
                                                    <option value="2017">2017</option>
                                                    <option value="2018">2018</option>
                                                </select>
                                             </span>
                                         </div> 
                                       
                                        <div class="total_pay">
                                            <div class="agree">I would likle to have insurance
                                             <span><input type="checkbox" name="chk" /></span>
                                            </div>
                                            <div class="total_cost text-right text-left-xs">Total:<span> 1 Adult / $319.55</span></div>
                                            <div>
                                                <div class="col-md-9 no-padding-xs">
                                                    <span><b>Fare:</b>$ 14,639 + $ 563.94 carrier-imposed charges + $ 231.56 taxes and fees</span>
                                                    <div class="clearfix gap" styles="margin-top: 20px;"></div>
                                                </div>
                                                <input type="submit" name="continue_btn" value="Continue" class="button type-2 green no-shadow" />
                                            </div>
                                        </div>
                                    </form>
                                   
                                </div>
                            </div>
                        </div>  
                    </div>

                    <div class="clearfix gap sm-hidden"></div>
                    <div class="clearfix gap sm-hidden"></div>
                    <div class="clearfix gap sm-hidden"></div>
                    <div class="clearfix gap sm-hidden"></div>
                    <div class="clearfix gap sm-hidden"></div>
                    <div class="clearfix gap sm-hidden"></div>
                    <div class="clearfix gap xs-hidden"></div>
                    <div class="clearfix gap"></div>
                </div>
            </div>
        </div>
        
        <div class="clearfix"></div>
        <div class="clearfix gap sm-hidden"></div>
        <div class="clearfix gap sm-hidden"></div>
        <div class="clearfix gap xs-hidden"></div>
        <div class="clearfix gap"></div>

    </Main>
		);
	}
}

export default BookFlightPassengers;