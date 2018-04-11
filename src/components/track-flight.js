import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class TrackFlight extends Component {
	render() {
		return (
		<Main>

        <div className="container-fluid">
            <Header />

        </div>
        <div className="track_flight">
            <div className="track-flight-container">
                
                <div className="custom_wrapper_left">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87008.32425559849!2d-122.50764038874705!3d37.75767927539305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e1!3m2!1sen!2sin!4v1518167787668" width="100%" height="407" frameBorder="0" styles="border:0" allowFullScreen></iframe>
    
                    <div className="custom_city_details">
                        <div className="custom_section_first">
                            <div className="one_third">
                                <h4>Paris, Europe</h4>
                                <h5>take off from</h5>
                                <h3>CDG, Charles de Gaulle</h3>
                            </div>
                            <div className="one_third time">
                                <b>6h 35m</b> total flight time
                            </div>
                            <div className="one_third text-right">
                                <h4>California, USA</h4>
                                <h5>landing to</h5>
                                <h3>SFO, International Airport</h3>
                            </div>
                        </div>
    
                        <div className="custom_destination">
                            <img src="images/destination.png" className="img-responsive" />
                        </div>
    
                        <div className="custom_section_second">
                            <div className="one_second">
                                <h4>TUESDAY 23/02/2018</h4>
                                <h3>10.40 AM <span>(10 minutes early)</span></h3>
                            </div>
                            <div className="one_second text-right">
                                <h4>TUESDAY 23/02/2018</h4>
                                <h3><span>(On time)</span> 10.23 PM </h3>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="custom_wrapper_right">
                    <div className="city_title">
                        <div className="content">
                            <div className="title_left"><p>+17</p><p>c</p></div>

                            <div className="title_right"><i className="fa fa-heart-o"></i></div>
                            <h1>SAN FRANCISCO <span>California, USA</span></h1>
                            <p>QA762</p>
                        </div>
                        <img src="images/track-flight.png" className="img-responsive" />
                    </div>
                    <div>
                        
                        <div className="rought_time">
                            <div className="flight_time clearfix">
                                <div className="flight_data">
                                    Flight Data<br/>
                                    Speed: <b>888km/h</b>
                                </div>
                                <div className="flight_desciption">
                                    <p><a href="#">Airbus</a></p>
                                    <p>Altitude: <b> 9,740 m</b></p>
                                </div>
                            </div>
                            <h2>EN ROUTE AND ON TIME</h2>
    
                            <div className="custom_schedule">   
                                <h5 className="departure">Departure times <span></span></h5>
                                <div className="width-50">
                                    <p>Actual</p>
                                    <b>10.30 AM</b>
                                </div>
                                <div className="width-50">
                                    <p>Schedule</p>
                                    <b>10.40 AM</b>
                                </div>
                            </div>
    
                            <div className="custom_schedule">   
                                <h5 className="arrival">Arrival times <span></span></h5>
                                <div className="width-50">
                                    <p>Estimated</p>
                                    <b>11.22 PM</b>
                                </div>
                                <div className="width-50">
                                    <p>Schedule</p>
                                    <b>11.23 PM</b>
                                </div>
                            </div>
    
                            <div className="custom_schedule">   
                                <h5>Airline</h5>
                                <div className="width-100 flight-name">
                                    <p>Qatar Airways</p>
                                    <img src="images/qatar.png" />
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

export default TrackFlight;