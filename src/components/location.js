import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Location extends Component {
	render() {
		return (
		<Main>

        <div className="container-fluid">
        <Header />

            <div className="banner banner-travel-search banner-small  no-text-banner">
                <div className="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>

        </div>
        <div className="">
            <div className="card-layout-1 text-center card-map-container card-margin-style-1">
                <div className="map">
                    <div className="col-md-4 col-lg-5 form-location-search form-map">
                        <h2 className="map-form-heading">Select location</h2>
                        <div className="input-container">
                            <span className="circle circle-green"></span>
                            <input type="text" name="" id="start" placeholder="Enter pickup location" className="type-2" />
                            <input type="button" value="" className="location abs" />
                        </div>
                        <div className="input-container">
                            <input type="hidden" multiple id="waypoints" />
                            <span className="circle circle-red"></span>
                            <input type="text" name="" id="end" placeholder="Enter destinition" className="type-2" />
                            <input type="button" value="" id="submit" className="right-arrow abs" />
                        </div>
                    </div>
                    <div className="col-md-offset-4 col-lg-offset-5" styles="height: 100%; min-height: 280px;">
                        <div id="map"></div>
                    </div>
                </div>
            </div>
        </div>

        <FooterOther />

    </Main>
		);
	}
}

export default Location;