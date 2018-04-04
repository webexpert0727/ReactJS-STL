import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Projects extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            <Header />

            <div class="banner banner-project banner-small">
                <div class="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>

        </div>
        <div class="">
            <div class="card-layout-1 card-margin-style-1 projects-container">
                <div class="container ">
                    <div>
                        <h1 class="plain-heading heading-style-3">Projects</h1>
                    </div>
                   <div class="row">
                        <div class="projects-sidebar sidebar">
                            <aside>
                                <div class="accordian sidebar-block" >
                                    <p class="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-1">Distance</p>
                                    <div class="collapse-containt collapse in" id="side-1">
                                        <div class="clearfix">
                                            <div class="range clearfix " styles="padding-right: 0" >
                                               
                                                <input type="text" id="distance-min" readonly="readonly" class="pull-left" />
                                                <input type="text" id="distance-max" readonly="readonly" class="pull-right text-right" />
                                                <br/> <br/>
                                            </div>
                                            <div class="range clearfix" id="distance">
                                                <br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordian sidebar-block">
                                    <p class="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-2">Weight</p>
                                    <div class="collapse-containt collapse" id="side-2">
                                        <div class="clearfix">
                                            <div class="range clearfix" >
                                                <input type="text" id="weight-min" readonly="readonly" class="pull-left" />
                                                <input type="text" id="weight-max" readonly="readonly" class="pull-right text-right" />
                                                <br/> <br/>
                                            </div>
                                            <div class="range clearfix" id="weight">
                                                <br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordian sidebar-block" styles="padding-top: 0;">
                                    <p class="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-3">Price</p>
                                    <div class="collapse-containt collapse" id="side-3">
                                        <div class="clearfix">
                                            <div class="range clearfix" >
                                                <input type="text" id="range-min" readonly="readonly" class="pull-left" />
                                                <input type="text" id="range-max" readonly="readonly" class="pull-right text-right" />
                                                <br/> <br/>
                                            </div>
                                            <div class="range clearfix" id="price">
                                                <br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="gap"> </div>
                            </aside>
                        </div>
                        <div class=" main-container projects-main-container ">
                            <div class="products-container">
                                <div class="grid-layout ">
                                    <div class="product-layout-3 row">
                                        <div class="product-div col-sm-4 text-left">
                                            <div class="contain ">
                                                <div class="image-wrapper ">
                                                    <a href="#">
                                                            <img src="images/product-img-1.png" alt="" class="img-responsive center-block"  />
                                                    </a>
                                                </div>
                                                <div class="clearfix" >
                                                    <div class="product-name col-xs-9 no-padding">
                                                        <p class="no-padding">
                                                            Caroline Schwartz
                                                            <span>Auroreburgh</span>
                                                        </p>
                                                    </div>
                                                    <div class="col-xs-3 no-padding">
                                                        <p class="project-price text-right no-padding">$45</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-div col-sm-4 text-left">
                                            <div class="contain ">
                                                <div class="image-wrapper ">
                                                    <a href="#">
                                                            <img src="images/product-img-2.png" alt="" class="img-responsive center-block"  />
                                                    </a>
                                                </div>
                                                <div class="clearfix" >
                                                    <div class="product-name col-xs-9 no-padding">
                                                        <p class="no-padding">
                                                            Caroline Schwartz
                                                            <span>Auroreburgh</span>
                                                        </p>
                                                    </div>
                                                    <div class="col-xs-3 no-padding">
                                                        <p class="project-price text-right no-padding">$45</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-div col-sm-4 text-left">
                                            <div class="contain ">
                                                <div class="image-wrapper ">
                                                    <a href="#">
                                                            <img src="images/product-img-3.png" alt="" class="img-responsive center-block"  />
                                                    </a>
                                                </div>
                                                <div class="clearfix" >
                                                    <div class="product-name col-xs-9 no-padding">
                                                        <p class="no-padding">
                                                            Caroline Schwartz
                                                            <span>Auroreburgh</span>
                                                        </p>
                                                    </div>
                                                    <div class="col-xs-3 no-padding">
                                                        <p class="project-price text-right no-padding">$45</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-div col-sm-4 text-left">
                                            <div class="contain ">
                                                <div class="image-wrapper ">
                                                    <a href="#">
                                                            <img src="images/product-img-1.png" alt="" class="img-responsive center-block"  />
                                                    </a>
                                                </div>
                                                <div class="clearfix" >
                                                    <div class="product-name col-xs-9 no-padding">
                                                        <p class="no-padding">
                                                            Caroline Schwartz
                                                            <span>Auroreburgh</span>
                                                        </p>
                                                    </div>
                                                    <div class="col-xs-3 no-padding">
                                                        <p class="project-price text-right no-padding">$45</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-div col-sm-4 text-left">
                                            <div class="contain ">
                                                <div class="image-wrapper ">
                                                    <a href="#">
                                                            <img src="images/product-img-2.png" alt="" class="img-responsive center-block"  />
                                                    </a>
                                                </div>
                                                <div class="clearfix" >
                                                    <div class="product-name col-xs-9 no-padding">
                                                        <p class="no-padding">
                                                            Caroline Schwartz
                                                            <span>Auroreburgh</span>
                                                        </p>
                                                    </div>
                                                    <div class="col-xs-3 no-padding">
                                                        <p class="project-price text-right no-padding">$45</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-div col-sm-4 text-left">
                                            <div class="contain ">
                                                <div class="image-wrapper ">
                                                    <a href="#">
                                                            <img src="images/product-img-3.png" alt="" class="img-responsive center-block"  />
                                                    </a>
                                                </div>
                                                <div class="clearfix" >
                                                    <div class="product-name col-xs-9 no-padding">
                                                        <p class="no-padding">
                                                            Caroline Schwartz
                                                            <span>Auroreburgh</span>
                                                        </p>
                                                    </div>
                                                    <div class="col-xs-3 no-padding">
                                                        <p class="project-price text-right no-padding">$45</p>
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