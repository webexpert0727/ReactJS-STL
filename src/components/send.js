import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Send extends Component {
	render() {
		return (
		<Main>

        <div className="container-fluid">
            <Header />
            <div className="banner banner-travel-search banner-small no-text-banner">
                <div className="text text-center">
                    <h3>                        
                    </h3>
                    <p>                        
                    </p>
                </div>
            </div>
        </div>

        <div className="off-white-bg-2">
            <div className="card-layout-1 card-margin-style-3">
                <p className="custom-2">Calculate Postage</p>
                <div className="row">
                    <div className="inline-md-1-5 col-sm-6">
                        <img src="images/icons8-surface-top.png" alt="" className="input-abs-icon" />
                        <input type="text" className="type-3" name="" id="" placeholder="Length of Parcel" />
                    </div>
                    <div className="inline-md-1-5 col-sm-6">
                        <img src="images/icons8-surface-right.png" alt="" className="input-abs-icon" />
                        <input type="text" className="type-3" name="" id="" placeholder="Height of Parcel" />
                    </div>
                    <div className="inline-md-1-5 col-sm-6">
                        <img src="images/icons8-weight.png" alt="" className="input-abs-icon" />
                        <input type="text" className="type-3" name="" id="" placeholder="Weight of Parcel" />
                    </div>
                    <div className="inline-md-1-5 col-sm-6">
                        <img src="images/icons8-america.png" alt="" className="input-abs-icon" />
                        <img src="images/icons8-geo_fence_filled.png" alt="" className="input-abs-icon" styles="right: 20px; left: unset;" />
                        <input type="text" className="type-3" name="" id="" placeholder="Destination" />
                    </div>
                    <div className="inline-md-1-5 col-sm-6">
                        <a href="#" className="button type-2 blue round-5 full size-2 text-initial" styles="line-height: 1">Calculate</a>
                    </div>
                    <div className="clearfix"></div>
                    <div className="second-section">
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <a href="#" className="text-ancho">dolore magna aliqua</a></p>
                        
                        <div className="col-md-4 col-sm-4 three-block">
                            <img src="images/monitor-window.png" alt="" className="img-responsive center-block" />
                            <h4 className="text-center">Print Shipping Labels</h4>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                        </div>
                        <div className="col-md-4 col-sm-4 three-block">
                            <img src="images/stamp-document.png" alt="" className="img-responsive center-block" />
                            <h4 className="text-center">Check Sending Guiglines</h4>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                        </div>
                        <div className="col-md-4 col-sm-4 three-block">
                            <img src="images/postman-receive-letter.png" alt="" className="img-responsive center-block" />
                            <h4 className="text-center">Packaging Hints and Tips</h4>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center ">
                <img src="images/map-2.jpg" alt="" className="img-responsive center-block" />
                <br/>
            </div>
        </div>

        <FooterOther />
    </Main>
		);
	}
}

export default Send;