import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Location extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
        <Header />

            <div class="banner banner-travel-search banner-small  no-text-banner">
                <div class="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>

        </div>
        <div class="">
            <div class="card-layout-1 text-center card-map-container card-margin-style-1">
                <div class="map">
                    <div class="col-md-4 col-lg-5 form-location-search form-map">
                        <h2 class="map-form-heading">Select location</h2>
                        <div class="input-container">
                            <span class="circle circle-green"></span>
                            <input type="text" name="" id="start" placeholder="Enter pickup location" class="type-2" />
                            <input type="button" value="" class="location abs" />
                        </div>
                        <div class="input-container">
                            <input type="hidden" multiple id="waypoints" />
                            <span class="circle circle-red"></span>
                            <input type="text" name="" id="end" placeholder="Enter destinition" class="type-2" />
                            <input type="button" value="" id="submit" class="right-arrow abs" />
                        </div>
                    </div>
                    <div class="col-md-offset-4 col-lg-offset-5" styles="height: 100%; min-height: 280px;">
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