import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Projects extends Component {
	render() {
		return (
		<Main>
            <div className="container-fluid">
                <Header />
                <div className="banner banner-project banner-small">
                    <div className="text text-center">
                        <h3>
                            
                        </h3>
                        <p>
                            
                        </p>
                    </div>
                </div>
            </div>
        <div className="">
            <div className="card-layout-1 card-margin-style-1 projects-container">
                <div className="container ">
                    <div>
                        <h1 className="plain-heading heading-style-3">Projects</h1>
                    </div>
                   <div className="row">
                        <div className="projects-sidebar sidebar">
                            <aside>
                                <div className="accordian sidebar-block" >
                                    <p className="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-1">Distance</p>
                                    <div className="collapse-containt collapse in" id="side-1">
                                        <div className="clearfix">
                                            <div className="range clearfix " styles="padding-right: 0" >
                                               
                                                <input type="text" id="distance-min" readOnly={true}className="pull-left" />
                                                <input type="text" id="distance-max" readOnly={true}className="pull-right text-right" />
                                                <br/> <br/>
                                            </div>
                                            <div className="range clearfix" id="distance">
                                                <br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordian sidebar-block">
                                    <p className="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-2">Weight</p>
                                    <div className="collapse-containt collapse" id="side-2">
                                        <div className="clearfix">
                                            <div className="range clearfix" >
                                                <input type="text" id="weight-min" readOnly={true} className="pull-left" />
                                                <input type="text" id="weight-max" readOnly={true}className="pull-right text-right" />
                                                <br/> <br/>
                                            </div>
                                            <div className="range clearfix" id="weight">
                                                <br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordian sidebar-block" styles="padding-top: 0;">
                                    <p className="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-3">Price</p>
                                    <div className="collapse-containt collapse" id="side-3">
                                        <div className="clearfix">
                                            <div className="range clearfix" >
                                                <input type="text" id="range-min" readOnly={true}className="pull-left" />
                                                <input type="text" id="range-max" readOnly={true}className="pull-right text-right" />
                                                <br/> <br/>
                                            </div>
                                            <div className="range clearfix" id="price">
                                                <br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="gap"> </div>
                            </aside>
                        </div>
                        <div className=" main-container projects-main-container ">
                            <div className="products-container">
                                <div className="grid-layout ">
                                    <div className="product-layout-3 row">
                                        <div className="product-div col-sm-4 text-left">
                                            <div className="contain ">
                                                <div className="image-wrapper ">
                                                    <a href="#">
                                                            <img src="images/product-img-1.png" alt="" className="img-responsive center-block"  />
                                                    </a>
                                                </div>
                                                <div className="clearfix" >
                                                    <div className="product-name col-xs-9 no-padding">
                                                        <p className="no-padding">
                                                            Caroline Schwartz
                                                            <span>Auroreburgh</span>
                                                        </p>
                                                    </div>
                                                    <div className="col-xs-3 no-padding">
                                                        <p className="project-price text-right no-padding">$45</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div col-sm-4 text-left">
                                            <div className="contain ">
                                                <div className="image-wrapper ">
                                                    <a href="#">
                                                            <img src="images/product-img-2.png" alt="" className="img-responsive center-block"  />
                                                    </a>
                                                </div>
                                                <div className="clearfix" >
                                                    <div className="product-name col-xs-9 no-padding">
                                                        <p className="no-padding">
                                                            Caroline Schwartz
                                                            <span>Auroreburgh</span>
                                                        </p>
                                                    </div>
                                                    <div className="col-xs-3 no-padding">
                                                        <p className="project-price text-right no-padding">$45</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div col-sm-4 text-left">
                                            <div className="contain ">
                                                <div className="image-wrapper ">
                                                    <a href="#">
                                                            <img src="images/product-img-3.png" alt="" className="img-responsive center-block"  />
                                                    </a>
                                                </div>
                                                <div className="clearfix" >
                                                    <div className="product-name col-xs-9 no-padding">
                                                        <p className="no-padding">
                                                            Caroline Schwartz
                                                            <span>Auroreburgh</span>
                                                        </p>
                                                    </div>
                                                    <div className="col-xs-3 no-padding">
                                                        <p className="project-price text-right no-padding">$45</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div col-sm-4 text-left">
                                            <div className="contain ">
                                                <div className="image-wrapper ">
                                                    <a href="#">
                                                            <img src="images/product-img-1.png" alt="" className="img-responsive center-block"  />
                                                    </a>
                                                </div>
                                                <div className="clearfix" >
                                                    <div className="product-name col-xs-9 no-padding">
                                                        <p className="no-padding">
                                                            Caroline Schwartz
                                                            <span>Auroreburgh</span>
                                                        </p>
                                                    </div>
                                                    <div className="col-xs-3 no-padding">
                                                        <p className="project-price text-right no-padding">$45</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div col-sm-4 text-left">
                                            <div className="contain ">
                                                <div className="image-wrapper ">
                                                    <a href="#">
                                                            <img src="images/product-img-2.png" alt="" className="img-responsive center-block"  />
                                                    </a>
                                                </div>
                                                <div className="clearfix" >
                                                    <div className="product-name col-xs-9 no-padding">
                                                        <p className="no-padding">
                                                            Caroline Schwartz
                                                            <span>Auroreburgh</span>
                                                        </p>
                                                    </div>
                                                    <div className="col-xs-3 no-padding">
                                                        <p className="project-price text-right no-padding">$45</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div col-sm-4 text-left">
                                            <div className="contain ">
                                                <div className="image-wrapper ">
                                                    <a href="#">
                                                            <img src="images/product-img-3.png" alt="" className="img-responsive center-block"  />
                                                    </a>
                                                </div>
                                                <div className="clearfix" >
                                                    <div className="product-name col-xs-9 no-padding">
                                                        <p className="no-padding">
                                                            Caroline Schwartz
                                                            <span>Auroreburgh</span>
                                                        </p>
                                                    </div>
                                                    <div className="col-xs-3 no-padding">
                                                        <p className="project-price text-right no-padding">$45</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default Projects;