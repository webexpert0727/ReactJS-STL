import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class BookFligh extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            <Header />
        </div>

        <div class="book-flight">
            <div class="book-flight-container">
                <div class="custom_wrapper_right">
                    <form action="">
                        <div class="blue-form">
                            <div class="inputs">
                                <div class="input-container full">
                                    <label for="">Flying from</label>
                                    <input type="text" name="" id="" placeholder="Flying from" value="Paris, Charles de Gaulle Airport" class="location" />
                                </div>
                                <div class="input-container full">
                                    <label for="">Flying to</label>
                                    <input type="text" name="" id="" placeholder="Flying to" value="San Francisco, International Airport"  class="location" />
                                </div>
                                <div class="multi-input">
                                    <div class="input-container">
                                        <label for="">Departing</label>
                                        <input type="text" name="" id="" class="date-picker depart" />
                                    </div>
                                    <div class="input-container">
                                        <label for="">Returning</label>
                                        <input type="text" name="" id="" class="date-picker return" />
                                    </div>
                                    <div class="input-container">
                                        <input type="checkbox" name="" id="one-way" />
                                        <label for="one-way">Returning</label>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="rought_time">
                            <div class="flight_time owl-carousel">
                                <div class="item flight">
                                    <div class="departure">
                                        <span></span>
                                        <p class="label">Departure</p>
                                        <p class="time">10:40 AM</p>
                                    </div>
                                    <div class="arrival">
                                        <span></span>
                                        <p class="label">Arrival</p>
                                        <p class="time">12:55 AM</p>
                                    </div>
                                    <div class="duration">
                                        <p class="label">Flight time: 2h. 15min., same day arriwal</p>
                                    </div>
                                </div>
                                <div class="item flight">
                                    <div class="departure">
                                        <span></span>
                                        <p class="label">Departure</p>
                                        <p class="time">11:40 AM</p>
                                    </div>
                                    <div class="arrival">
                                        <span></span>
                                        <p class="label">Arrival</p>
                                        <p class="time">01:55 AM</p>
                                    </div>
                                    <div class="duration">
                                        <p class="label">Flight time: 2h. 15min., same day arriwal</p>
                                    </div>
                                </div>
                                <div class="item flight">
                                    <div class="departure">
                                        <span></span>
                                        <p class="label">Departure</p>
                                        <p class="time">12:40 AM</p>
                                    </div>
                                    <div class="arrival">
                                        <span></span>
                                        <p class="label">Arrival</p>
                                        <p class="time">02:55 AM</p>
                                    </div>
                                    <div class="duration">
                                        <p class="label">Flight time: 2h. 15min., same day arriwal</p>
                                    </div>
                                </div>
                            </div>
                            <div class="class-n-price">
                                <div class="passenger">
                                    <div class="input-container select">
                                        <label for="">Class</label>
                                        <select>
                                            <option value="economy">Economy</option>
                                            <option value="economy">Economy</option>
                                            <option value="economy">Economy</option>
                                        </select>
                                    </div>
                                    <div class="input-container ">
                                        <label for="">Passenger</label>
                                        <select>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="price">
                                    <h3>&euro;159.99</h3>
                                    <p>/ per person</p>
                                </div>
                                <div class="has-button">
                                    <input type="submit" value="Book this flight" class="text-uppercase button type-2 round-5 no-margin no-shadow green-3" styles="height: 60px;" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="custom_wrapper_left">
                    <div class="city_name">
                        <div class="close_btn"><img src="images/close.png" /></div>

                        <div class="city_images">
                            <div class="first_third"><img src="images/paris.png" class="b-radius" />
                                <div class="containt">
                                    <h2>PARIS</h2>
                                    <p>Charles de Gaulle</p>
                                </div>
                            </div>
                            <div class="first_second"><img src="images/arrow.png" class="center_img" /></div>
                            <div class="first_third"><img src="images/san fransiso.png" class="b-radius" />
                                <div class="containt">
                                    <h2>SAN FRANCISCO</h2>
                                    <p>International Airport    </p>
                                </div>
                            </div>
                        </div>
                    </div>              
                </div>
            </div>
        </div>

    </Main>
		);
	}
}

export default BookFligh;