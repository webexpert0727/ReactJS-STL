import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class PostProject extends Component {
	render() {
		return (
		<Main>

        <div className="container-fluid">
            <Header />

            <div className="banner banner-travel-search banner-small no-text-banner banner-cus-1-xs">
                <div className="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>

        </div>
        <div className="">
            <div className="card-layout-1 post-project-container">
                <div className="container checkout">
                    <div>
                        <h1 className="plain-heading text-center">Post Project</h1>
                    </div>
                    <div className="clearfix gap hidden-xs"></div>
                    <div className="row">
                            
                        <div className="col-md-6 post-project-container-1">
                            <div className="text-center card-layout-1 text-left-xs post-project-type-card" >
                                <h3>Type 1</h3>
                                <p>In which traveler is responsible for picking up parcel from sender's locarion and delivering to it destination, in this case, traveler make $ per weight and also per KM (distance from traveler current location to parcel pickup location)
                                    </p>
                            </div>
                            <div className="gap clearfix hidden-xs hidden-sm" styles="margin-bottom: 17px;"></div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="col-md-6 text-center  post-project-container-2">
                            <div className="text-center text-left-xs  post-project-type">
                                <h3>Type 2</h3>
                                <p>In which traveler is responsible for only delivering the parcel to destination and sender have to give parcel to traveler, in this case, Traveler make only per KG and only destination is entered by sender while posting the project, 
                                    </p>
                            </div>
                            <div className="gap clearfix hidden-xs hidden-sm"></div><div className="gap clearfix hidden-xs" styles="margin-bottom: 27px;"></div>
                        </div>
                        <div className="col-md-6 post-project-container-1 no-padding-xs">
                            <div className="post-project-inputs">
                                <div className="input text-1">
                                    <label htmlFor="">DESTINATION:</label>
                                    <input type="text" name="" id="" defaultValue="United Kingdom" />
                                </div>
                                <div className="input text-1">
                                    <label htmlFor="">ADDRESS:</label>
                                    <input type="text" name="" id="" defaultValue="320 Willingham Rd. Morrisville, NC 2756.." />
                                </div>
                                <div className="input text-1">
                                    <label htmlFor="">LENGHT OF PARCEL:</label>
                                    <input type="text" name="" id="" defaultValue="30 cm" />
                                </div>
                                <div className="input text-1">
                                    <label htmlFor="">HEIGHT OF PARCEL:</label>
                                    <input type="text" name="" id="" defaultValue="23 cm" />
                                </div>
                                <div className="input text-1">
                                    <label htmlFor="">WEIGHT OF PARCEL:</label>
                                    <input type="text" name="" id="" defaultValue="1.9 kg" />
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="col-md-6 text-center  post-project-container-2">
                            
                            <p className="info low">Your current balance: <span className="amount low"> $ 19.00</span></p>
                            <p className="estimited">ESTIMATED COST:&nbsp;&nbsp;&nbsp;<span className="amount"><sup>$ </sup>37<sup> 00</sup></span></p>
                            <div className="gap clearfix"></div>
                            <div className="gap clearfix hidden-sm hidden-xs" styles="margin-bottom: 24px;"></div>
                            <div>
                                <a href="#" styles="width: initial;" className="button type-1 grey text-uppercase">CANCEL</a> 
                                <a href="#" styles="width: initial;" className="button type-2 green text-uppercase">POST NOW</a> 
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