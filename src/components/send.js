import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Send extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            <Header />
            <div class="banner banner-travel-search banner-small no-text-banner">
                <div class="text text-center">
                    <h3>                        
                    </h3>
                    <p>                        
                    </p>
                </div>
            </div>
        </div>

        <div class="off-white-bg-2">
            <div class="card-layout-1 card-margin-style-3">
                <p class="custom-2">Calculate Postage</p>
                <div class="row">
                    <div class="inline-md-1-5 col-sm-6">
                        <img src="images/icons8-surface-top.png" alt="" class="input-abs-icon" />
                        <input type="text" class="type-3" name="" id="" placeholder="Length of Parcel" />
                    </div>
                    <div class="inline-md-1-5 col-sm-6">
                        <img src="images/icons8-surface-right.png" alt="" class="input-abs-icon" />
                        <input type="text" class="type-3" name="" id="" placeholder="Height of Parcel" />
                    </div>
                    <div class="inline-md-1-5 col-sm-6">
                        <img src="images/icons8-weight.png" alt="" class="input-abs-icon" />
                        <input type="text" class="type-3" name="" id="" placeholder="Weight of Parcel" />
                    </div>
                    <div class="inline-md-1-5 col-sm-6">
                        <img src="images/icons8-america.png" alt="" class="input-abs-icon" />
                        <img src="images/icons8-geo_fence_filled.png" alt="" class="input-abs-icon" styles="right: 20px; left: unset;" />
                        <input type="text" class="type-3" name="" id="" placeholder="Destination" />
                    </div>
                    <div class="inline-md-1-5 col-sm-6">
                        <a href="#" class="button type-2 blue round-5 full size-2 text-initial" styles="line-height: 1">Calculate</a>
                    </div>
                    <div class="clearfix"></div>
                    <div class="second-section">
                        <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <a href="#" class="text-ancho">dolore magna aliqua</a></p>
                        
                        <div class="col-md-4 col-sm-4 three-block">
                            <img src="images/monitor-window.png" alt="" class="img-responsive center-block" />
                            <h4 class="text-center">Print Shipping Labels</h4>
                            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                        </div>
                        <div class="col-md-4 col-sm-4 three-block">
                            <img src="images/stamp-document.png" alt="" class="img-responsive center-block" />
                            <h4 class="text-center">Check Sending Guiglines</h4>
                            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                        </div>
                        <div class="col-md-4 col-sm-4 three-block">
                            <img src="images/postman-receive-letter.png" alt="" class="img-responsive center-block" />
                            <h4 class="text-center">Packaging Hints and Tips</h4>
                            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center ">
                <img src="images/map-2.jpg" alt="" class="img-responsive center-block" />
                <br/>
            </div>
        </div>

        <FooterOther />
    </Main>
		);
	}
}

export default Send;