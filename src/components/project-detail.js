import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class ProjectDetail extends Component {
	render() {
		return (
		<Main>

        <div className="container-fluid">
            <Header />
            <div className="banner banner-product-detail banner-small">
                <div className="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>

        </div>
        <div className="">
            <div className="card-layout-1 card-map-container card-margin-style-1">
                <div className="container  product-container project-detail-container">
                    <div className="clearfix gap hidden-xs" styles="margin-bottom: 38px;"></div>
                    <div className=" row">
                        <div className="col-md-6">
                            <div className="zoom-gallary type-1">
                                
                                <div className="zoom-container col-md-12 pull-right">
                                    <img src="images/product-image/bh-2.png" alt="" xoriginal="images/product-image/bh-2.png" className=" xzoom img-responsive center-block" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 porject-detail-container">
                           <div className="row">
                                <div className="col-sm-6"><h3 className="purple-heading product-title">Bang &amp; Olufsen<br/>BeoPlay H8</h3></div>
                                <div className="col-sm-6 text-right text-left-xs"><h3 className="pink-price">$337</h3></div>
                           </div>
                            <div className="clearfix"></div>
                            <div className="project-description">
                                <div className=" ">
                                    <p className="collapse-heading" data-toggle="collapse" data-target="#ds1">Description</p>
                                    <div className="collapse-containt collapse in" id="ds1"><p>Premium wireless, active noise cancellation on-ear headphone</p></div>
                                </div>
                                <div className="gap"></div>
                                <div className=" ">
                                    <p className="collapse-heading" data-toggle="collapse" data-target="#ds2" styles="color: #3979dc">Details</p>
                                    <div className="collapse-containt collapse in row" id="ds2">
                                        <div className="col-sm-4 details">
                                            <p>
                                                Length
                                                <span>25 cm</span>
                                            </p>
                                        </div>
                                        <div className="col-sm-4 details">
                                            <p>
                                                Height
                                                <span>25 cm</span>
                                            </p>
                                        </div>
                                        <div className="col-sm-4 details last">
                                            <p>
                                                Weight
                                                <span>25 cm</span>
                                            </p>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right text-center-xs">
                                <div className="gap clearfix hidden-sm hidden-xs" styles="margin-bottom: 27px;"></div>
                                <a href="#" className="button type-2 green no-shadow text-uppercase ">ACCEPT</a> 

                            </div>
                        </div>
                    </div>
                    <div className="gap clearfix " ></div>
                    <div className="gap clearfix hidden-sm hidden-xs" styles="margin-bottom: 25px;"></div>
                </div>
            </div>
        </div>

        <FooterOther />

    </Main>
		);
	}
}

export default ProjectDetail;