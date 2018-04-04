import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class PostProject extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            <Header />

            <div class="banner banner-travel-search banner-small no-text-banner banner-cus-1-xs">
                <div class="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>

        </div>
        <div class="">
            <div class="card-layout-1 post-project-container">
                <div class="container checkout">
                    <div>
                        <h1 class="plain-heading text-center">Post Project</h1>
                    </div>
                    <div class="clearfix gap hidden-xs"></div>
                    <div class="row">
                            
                        <div class="col-md-6 post-project-container-1">
                            <div class="text-center card-layout-1 text-left-xs post-project-type-card" >
                                <h3>Type 1</h3>
                                <p>In which traveler is responsible for picking up parcel from sender's locarion and delivering to it destination, in this case, traveler make $ per weight and also per KM (distance from traveler current location to parcel pickup location)
                                    </p>
                            </div>
                            <div class="gap clearfix hidden-xs hidden-sm" styles="margin-bottom: 17px;"></div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="col-md-6 text-center  post-project-container-2">
                            <div class="text-center text-left-xs  post-project-type">
                                <h3>Type 2</h3>
                                <p>In which traveler is responsible for only delivering the parcel to destination and sender have to give parcel to traveler, in this case, Traveler make only per KG and only destination is entered by sender while posting the project, 
                                    </p>
                            </div>
                            <div class="gap clearfix hidden-xs hidden-sm"></div><div class="gap clearfix hidden-xs" styles="margin-bottom: 27px;"></div>
                        </div>
                        <div class="col-md-6 post-project-container-1 no-padding-xs">
                            <div class="post-project-inputs">
                                <div class="input text-1">
                                    <label for="">DESTINATION:</label>
                                    <input type="text" name="" id="" value="United Kingdom" />
                                </div>
                                <div class="input text-1">
                                    <label for="">ADDRESS:</label>
                                    <input type="text" name="" id="" value="320 Willingham Rd. Morrisville, NC 2756.." />
                                </div>
                                <div class="input text-1">
                                    <label for="">LENGHT OF PARCEL:</label>
                                    <input type="text" name="" id="" value="30 cm" />
                                </div>
                                <div class="input text-1">
                                    <label for="">HEIGHT OF PARCEL:</label>
                                    <input type="text" name="" id="" value="23 cm" />
                                </div>
                                <div class="input text-1">
                                    <label for="">WEIGHT OF PARCEL:</label>
                                    <input type="text" name="" id="" value="1.9 kg" />
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="col-md-6 text-center  post-project-container-2">
                            
                            <p class="info low">Your current balance: <span class="amount low"> $ 19.00</span></p>
                            <p class="estimited">ESTIMATED COST:&nbsp;&nbsp;&nbsp;<span class="amount"><sup>$ </sup>37<sup> 00</sup></span></p>
                            <div class="gap clearfix"></div>
                            <div class="gap clearfix hidden-sm hidden-xs" styles="margin-bottom: 24px;"></div>
                            <div>
                                <a href="#" styles="width: initial;" class="button type-1 grey text-uppercase">CANCEL</a> 
                                <a href="#" styles="width: initial;" class="button type-2 green text-uppercase">POST NOW</a> 
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

export default PostProject;