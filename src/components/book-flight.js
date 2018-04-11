import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class BookFligh extends Component {
	render() {
		return (
		<Main>

        <div className="container-fluid">
            <Header />
        </div>

        <div className="book-flight">
            <div className="book-flight-container">
                <div className="custom_wrapper_right">
                    <form action="">
                        <div className="blue-form">
                            <div className="inputs">
                                <div className="input-container full">
                                    <label htmlFor="">Flying from</label>
                                    <input type="text" name="" id="" placeholder="Flying from" defaultValue="Paris, Charles de Gaulle Airport" className="location" />
                                </div>
                                <div className="input-container full">
                                    <label htmlFor="">Flying to</label>
                                    <input type="text" name="" id="" placeholder="Flying to" defaultValue="San Francisco, International Airport"  className="location" />
                                </div>
                                <div className="multi-input">
                                    <div className="input-container">
                                        <label htmlFor="">Departing</label>
                                        <input type="text" name="" id="" className="date-picker depart" />
                                    </div>
                                    <div className="input-container">
                                        <label htmlFor="">Returning</label>
                                        <input type="text" name="" id="" className="date-picker return" />
                                    </div>
                                    <div className="input-container">
                                        <input type="checkbox" name="" id="one-way" />
                                        <label htmlFor="one-way">Returning</label>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="rought_time">
                            <div className="flight_time owl-carousel">
                                <div className="item flight">
                                    <div className="departure">
                                        <span></span>
                                        <p className="label">Departure</p>
                                        <p className="time">10:40 AM</p>
                                    </div>
                                    <div className="arrival">
                                        <span></span>
                                        <p className="label">Arrival</p>
                                        <p className="time">12:55 AM</p>
                                    </div>
                                    <div className="duration">
                                        <p className="label">Flight time: 2h. 15min., same day arriwal</p>
                                    </div>
                                </div>
                                <div className="item flight">
                                    <div className="departure">
                                        <span></span>
                                        <p className="label">Departure</p>
                                        <p className="time">11:40 AM</p>
                                    </div>
                                    <div className="arrival">
                                        <span></span>
                                        <p className="label">Arrival</p>
                                        <p className="time">01:55 AM</p>
                                    </div>
                                    <div className="duration">
                                        <p className="label">Flight time: 2h. 15min., same day arriwal</p>
                                    </div>
                                </div>
                                <div className="item flight">
                                    <div className="departure">
                                        <span></span>
                                        <p className="label">Departure</p>
                                        <p className="time">12:40 AM</p>
                                    </div>
                                    <div className="arrival">
                                        <span></span>
                                        <p className="label">Arrival</p>
                                        <p className="time">02:55 AM</p>
                                    </div>
                                    <div className="duration">
                                        <p className="label">Flight time: 2h. 15min., same day arriwal</p>
                                    </div>
                                </div>
                            </div>
                            <div className="class-n-price">
                                <div className="passenger">
                                    <div className="input-container select">
                                        <label htmlFor="">Class</label>
                                        <select>
                                            <option value="economy">Economy</option>
                                            <option value="economy">Economy</option>
                                            <option value="economy">Economy</option>
                                        </select>
                                    </div>
                                    <div className="input-container ">
                                        <label htmlFor="">Passenger</label>
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
                                <div className="price">
                                    <h3>&euro;159.99</h3>
                                    <p>/ per person</p>
                                </div>
                                <div className="has-button">
                                    <input type="submit" value="Book this flight" className="text-uppercase button type-2 round-5 no-margin no-shadow green-3" style={{height: "60px"}} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="custom_wrapper_left">
                    <div className="city_name">
                        <div className="close_btn"><img src="images/close.png" /></div>

                        <div className="city_images">
                            <div className="first_third"><img src="images/paris.png" className="b-radius" />
                                <div className="containt">
                                    <h2>PARIS</h2>
                                    <p>Charles de Gaulle</p>
                                </div>
                            </div>
                            <div className="first_second"><img src="images/arrow.png" className="center_img" /></div>
                            <div className="first_third"><img src="images/san fransiso.png" className="b-radius" />
                                <div className="containt">
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