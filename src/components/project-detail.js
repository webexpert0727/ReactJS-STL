import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class ProjectDetail extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            <Header />
            <div class="banner banner-product-detail banner-small">
                <div class="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>

        </div>
        <div class="">
            <div class="card-layout-1 card-map-container card-margin-style-1">
                <div class="container  product-container project-detail-container">
                    <div class="clearfix gap hidden-xs" styles="margin-bottom: 38px;"></div>
                    <div class=" row">
                        <div class="col-md-6">
                            <div class="zoom-gallary type-1">
                                
                                <div class="zoom-container col-md-12 pull-right">
                                    <img src="images/product-image/bh-2.png" alt="" xoriginal="images/product-image/bh-2.png" class=" xzoom img-responsive center-block" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 porject-detail-container">
                           <div class="row">
                                <div class="col-sm-6"><h3 class="purple-heading product-title">Bang &amp; Olufsen<br/>BeoPlay H8</h3></div>
                                <div class="col-sm-6 text-right text-left-xs"><h3 class="pink-price">$337</h3></div>
                           </div>
                            <div class="clearfix"></div>
                            <div class="project-description">
                                <div class=" ">
                                    <p class="collapse-heading" data-toggle="collapse" data-target="#ds1">Description</p>
                                    <div class="collapse-containt collapse in" id="ds1"><p>Premium wireless, active noise cancellation on-ear headphone</p></div>
                                </div>
                                <div class="gap"></div>
                                <div class=" ">
                                    <p class="collapse-heading" data-toggle="collapse" data-target="#ds2" styles="color: #3979dc">Details</p>
                                    <div class="collapse-containt collapse in row" id="ds2">
                                        <div class="col-sm-4 details">
                                            <p>
                                                Length
                                                <span>25 cm</span>
                                            </p>
                                        </div>
                                        <div class="col-sm-4 details">
                                            <p>
                                                Height
                                                <span>25 cm</span>
                                            </p>
                                        </div>
                                        <div class="col-sm-4 details last">
                                            <p>
                                                Weight
                                                <span>25 cm</span>
                                            </p>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-right text-center-xs">
                                <div class="gap clearfix hidden-sm hidden-xs" styles="margin-bottom: 27px;"></div>
                                <a href="#" class="button type-2 green no-shadow text-uppercase ">ACCEPT</a> 

                            </div>
                        </div>
                    </div>
                    <div class="gap clearfix " ></div>
                    <div class="gap clearfix hidden-sm hidden-xs" styles="margin-bottom: 25px;"></div>
                </div>
            </div>
        </div>

        <FooterOther />

    </Main>
		);
	}
}

export default ProjectDetail;