import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class ProductDetail extends Component {
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
                <div className="container  product-container has-padding">
                    <div className="row">
                            
                        <div>
                            
                        </div>
                        <div className="col-md-6">
                            <div className="zoom-gallary type-1">
                                
                                <div className="zoom-container col-sm-10 pull-right  custom-zoom-padding">
                                    <img src="images/product-image/wh-2.png" alt="" xoriginal="images/product-image/wh-2.png" className=" xzoom img-responsive center-block" />
                                </div>
                                <div className="col-sm-2 gallary xzoom-thumbs" >
                                    <div className="image-thumb ">
                                        <a href="images/product-image/wh-1.png" data-image="images/product-image/small/wh-1.png" data-zoom-image="images/product-image/large/wh-1.png" >
                                            <img src="images/product-image/wh-1.png" alt="" className="  xzoom-gallery img-responsive center-block" />
                                        </a>
                                    </div>
                                    <div className="image-thumb  active">
                                        <a href="images/product-image/wh-2.png" data-image="images/product-image/small/wh-1.png" data-zoom-image="images/product-image/large/wh-1.png" >
                                            <img src="images/product-image/wh-2.png" alt="" className=" xzoom-gallery img-responsive center-block" />
                                        </a>
                                    </div>
                                    <div className="image-thumb ">
                                        <a href="images/product-image/wh-3.png" data-image="images/product-image/small/wh-1.png" data-zoom-image="images/product-image/large/wh-1.png" >
                                            <img src="images/product-image/wh-3.png" alt="" className=" xzoom-gallery img-responsive center-block" />
                                        </a>
                                    </div>
                                    <div className="image-thumb ">
                                        <a href="images/product-image/wh-4.png" data-image="images/product-image/small/wh-1.png" data-zoom-image="images/product-image/large/wh-1.png" >
                                            <img src="images/product-image/wh-4.png" alt="" className=" xzoom-gallery img-responsive center-block" />
                                        </a>
                                    </div>
                                    <div className="image-thumb ">
                                        <a href="images/product-image/wh-5.png" data-image="images/product-image/small/wh-1.png" data-zoom-image="images/product-image/large/wh-1.png" >
                                            <img src="images/product-image/wh-5.png" alt="" className=" xzoom-gallery img-responsive center-block" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix hidden-lg hidden-md"></div>
                        <div className="col-md-6 detail-container">
                            <h2 className="purple-heading product-title">Beats Studio 3</h2>
                            <h3 className="price"> <span className="old-price">1999$</span>1749$ </h3>
                            <div className="detail">
                                <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and excitement it.</p>
                            </div>
                            <div className="color-container">
                                <p className="color-name">Color - <span>Silver</span> </p>
                                <div className="color">
                                    <span className="active color-dot" styles="background: #d7d7d7"></span>
                                    <span className="color-dot" style={{background: "#2e2e2e"}}></span>
                                    <span className="color-dot" style={{background: "#217eba"}}></span>
                                    <span className="color-dot" style={{background: "#c23824"}}></span>
                                    <span className="color-dot" style={{background: "#ece2b3"}}></span>
                                </div>
                            </div>
                            <div className="text-right text-center-xs">
                                <br/>
                                <a href="#" className="button type-1 grey text-uppercase">save</a> 
                                <a href="#" className="button type-2 green  text-uppercase">Buy now</a> 

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

export default ProductDetail;