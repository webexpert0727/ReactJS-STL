import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class ProductDetail extends Component {
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
                <div class="container  product-container has-padding">
                    <div class="row">
                            
                        <div>
                            
                        </div>
                        <div class="col-md-6">
                            <div class="zoom-gallary type-1">
                                
                                <div class="zoom-container col-sm-10 pull-right  custom-zoom-padding">
                                    <img src="images/product-image/wh-2.png" alt="" xoriginal="images/product-image/wh-2.png" class=" xzoom img-responsive center-block" />
                                </div>
                                <div class="col-sm-2 gallary xzoom-thumbs" >
                                    <div class="image-thumb ">
                                        <a href="images/product-image/wh-1.png" data-image="images/product-image/small/wh-1.png" data-zoom-image="images/product-image/large/wh-1.png" >
                                            <img src="images/product-image/wh-1.png" alt="" class="  xzoom-gallery img-responsive center-block" />
                                        </a>
                                    </div>
                                    <div class="image-thumb  active">
                                        <a href="images/product-image/wh-2.png" data-image="images/product-image/small/wh-1.png" data-zoom-image="images/product-image/large/wh-1.png" >
                                            <img src="images/product-image/wh-2.png" alt="" class=" xzoom-gallery img-responsive center-block" />
                                        </a>
                                    </div>
                                    <div class="image-thumb ">
                                        <a href="images/product-image/wh-3.png" data-image="images/product-image/small/wh-1.png" data-zoom-image="images/product-image/large/wh-1.png" >
                                            <img src="images/product-image/wh-3.png" alt="" class=" xzoom-gallery img-responsive center-block" />
                                        </a>
                                    </div>
                                    <div class="image-thumb ">
                                        <a href="images/product-image/wh-4.png" data-image="images/product-image/small/wh-1.png" data-zoom-image="images/product-image/large/wh-1.png" >
                                            <img src="images/product-image/wh-4.png" alt="" class=" xzoom-gallery img-responsive center-block" />
                                        </a>
                                    </div>
                                    <div class="image-thumb ">
                                        <a href="images/product-image/wh-5.png" data-image="images/product-image/small/wh-1.png" data-zoom-image="images/product-image/large/wh-1.png" >
                                            <img src="images/product-image/wh-5.png" alt="" class=" xzoom-gallery img-responsive center-block" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix hidden-lg hidden-md"></div>
                        <div class="col-md-6 detail-container">
                            <h2 class="purple-heading product-title">Beats Studio 3</h2>
                            <h3 class="price"> <span class="old-price">1999$</span>1749$ </h3>
                            <div class="detail">
                                <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and excitement it.</p>
                            </div>
                            <div class="color-container">
                                <p class="color-name">Color - <span>Silver</span> </p>
                                <div class="color">
                                    <span class="active color-dot" styles="background: #d7d7d7"></span>
                                    <span class="color-dot" styles="background: #2e2e2e"></span>
                                    <span class="color-dot" styles="background: #217eba"></span>
                                    <span class="color-dot" styles="background: #c23824"></span>
                                    <span class="color-dot" styles="background: #ece2b3"></span>
                                </div>
                            </div>
                            <div class="text-right text-center-xs">
                                <br/>
                                <a href="#" class="button type-1 grey text-uppercase">save</a> 
                                <a href="#" class="button type-2 green  text-uppercase">Buy now</a> 

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