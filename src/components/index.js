import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import Footer from './layout/footer';

class Index extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">

        	<Header />

            <div class="banner has-form">
                <div class="text">
                    <h3>
                        Then they show that show to the people who make shows
                    </h3>
                    <p>
                        The path of the righteous man is best on all sides by the iniquities of the selfish and the tranny of evil men. Blessed is
                        he who, in the mane of charity and good will, shepherds the weak through the valley of darkness,
                        for he is truly his brother's.
                    </p>
                </div>
                <div class="home_banner_form">
                    <div class="img_section">
                        <a href="book-flight-results.html">
                            <img src="images/icon-plain.png" />
                            <p>Book Flight</p>
                        </a>
                        <a href="#" >
                            <img src="images/icon-cl.png" />
                            <p>Calculate Postage</p>
                        </a>
                        <a href="#">
                            <img src="images/icon-bed.png" />
                            <p>Accommodation</p>
                        </a>
                    </div>
                    <div class="search_section">
                        <div class="search_top">
                            <span> <img src="images/icon-track.png" />Track Flight</span>
                            <span class="advance_search"><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Advance Search</a></span>
                        </div>
                        <form>
                            <div class="search_bottom">
                            <div class="flightsearch_fields">
                                <input type="text" name="airline" placeholder="Airline..." />
                                <input type="text" name="flight" placeholder="Flight #..." />
                            </div>
                            <div class="flightsearch_submit"><input type="submit" class="button green-2 round-5 no-shadow type-2" name="flight_sub_btn" value="Track Now" /></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
        <section class="how_it_work">
            <div class="container">
                <h4 class="title cus-title-2 red text-center">How it works?</h4>
                <h3 class="title default-title text-center">This is how project flow works</h3>
                <p class="text-center large-1">
                    We aims to make IoT a reality by providing users easy-to-setup, <br/>
                    internet-enabled devices for sensing and controlling home enironments.
                </p>
                <div class="flow clearfix text-center">
                    <div class="col-sm-4">
                        <img src="images/flow-1.png" alt="" class="img-responsive center-block" />
                        <h5>
                            Create project
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </div>
                    <div class="col-sm-4">
                        <img src="images/flow-2.png" alt="" class="img-responsive center-block" />
                        <h5>
                            Accept it
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </div>
                    <div class="col-sm-4">
                        <img src="images/flow-3.png" alt="" class="img-responsive center-block" />
                        <h5>
                            Pickup on time
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="best_sellers">
            <div class="container">
                <h3 class="title blue-title text-center has-shadow-title">Best Sellers <span>Our Best</span> </h3>
                <div class="product-layout-2">
                    <div class="product-div col-sm-4 text-center">
                        <div class="contain">
                            <div class="gap"></div>
                            <div class="image-wrapper">
                                <a href="#">
                                    <img src="images/p-1.png" alt="" class="img-responsive center-block" />
                                </a>
                            </div>
                            <div class="product-name">
                                <p>
                                    Solo 3 Wireless
                                    <span>Black</span>
                                </p>
                            </div>
                            <div class="product-price">
                                <p><span class="old-price">129$</span>99$</p>
                            </div>
                        </div>
                    </div>
                    <div class="product-div col-sm-4 text-center">
                        <div class="contain">
                            <div class="gap"></div>
                            <div class="image-wrapper">
                                <a href="#">
                                    <img src="images/p-2.png" alt="" class="img-responsive center-block" />
                                </a>
                            </div>
                            <div class="product-name">
                                <p>
                                    MacBook Pro 15"
                                    <span>Space Grey</span>
                                </p>
                            </div>
                            <div class="product-price">
                                <p><span class="old-price">2149$</span>1899$</p>
                            </div>
                        </div>
                    </div>
                    <div class="product-div col-sm-4 text-center">
                        <div class="contain">
                            <div class="gap"></div>
                            <div class="image-wrapper">
                                <a href="#">
                                    <img src="images/p-3.png" alt="" class="img-responsive center-block" />
                                </a>
                            </div>
                            <div class="product-name">
                                <p>
                                    Pill+ Bluetooth Speaker
                                    <span>Black</span>
                                </p>
                            </div>
                            <div class="product-price">
                                <p><span class="old-price">245$</span>189$</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="sales">
            <div class="container">
                <h3 class="title blue-title text-center has-shadow-title">Sales <span>Price Drop</span> </h3>
                <div class="slider-1" >
                    <div class="col-sm-6" >
                        <div class="image-container blue">
                            <div class="image-wrapper">
                                <img src="images/mac-1.png" alt="" class="img-responsive center-block" />
                            </div>
                            <div class="image-wrapper">
                                <img src="images/mac-1.png" alt="" class="img-responsive center-block" />
                            </div>
                            <div class="image-wrapper">
                                <img src="images/mac-1.png" alt="" class="img-responsive center-block" />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="detail-container">
                            <div class="detail-wrapper">
                                <h3 class="title blue-title">MacBook Pro 15"</h3>
                                <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and exitement it provides</p>
                                <h3 class="price"> <span class="old-price">1999$</span>1749$ </h3>
                                <div class="button-wrapper">
                                    <a href="#" class="button type-1 blue">Explore</a>
                                    <a href="#" class="button type-2 blue">Buy Now</a>
                                </div>
                            </div>
                            <div class="detail-wrapper">
                                <h3 class="title blue-title">MacBook Pro 15"</h3>
                                <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and exitement it provides</p>
                                <h3 class="price"> <span class="old-price">1999$</span>1749$ </h3>
                                <div class="button-wrapper">
                                    <a href="#" class="button type-1 blue">Explore</a>
                                    <a href="#" class="button type-2 blue">Buy Now</a>
                                </div>
                            </div>
                            <div class="detail-wrapper">
                                <h3 class="title blue-title">MacBook Pro 15"</h3>
                                <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and exitement it provides</p>
                                <h3 class="price"> <span class="old-price">1999$</span>1749$ </h3>
                                <div class="button-wrapper">
                                    <a href="#" class="button type-1 blue">Explore</a>
                                    <a href="#" class="button type-2 blue">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="product-layout-2">
                    <div class="product-div col-md-4 text-center">
                        <div class="contain">
                            <div class="image-wrapper">
                                <a href="#">
                                    <img src="images/p-4.png" alt="" />
                                </a>
                            </div>
                            <div class="product-name">
                                <p>
                                    Magic Track Pad
                                    <span>Bluetooth</span>
                                </p>
                            </div>
                            <div class="product-price">
                                <p><span class="old-price">249$</span>149$</p>
                            </div>
                        </div>
                    </div>
                    <div class="product-div col-md-4 text-center">
                        <div class="contain">
                            <div class="image-wrapper">
                                <a href="#">
                                    <img src="images/p-6.png" alt="" />
                                </a>
                            </div>
                            <div class="product-name">
                                <p>
                                    iMac 27"
                                    <span>512 GB</span>
                                </p>
                            </div>
                            <div class="product-price">
                                <p><span class="old-price">2490$</span>1999$</p>
                            </div>
                        </div>
                    </div>
                    <div class="product-div col-md-4 text-center">
                        <div class="contain">
                            <div class="image-wrapper">
                                <a href="#">
                                    <img src="images/p-5.png" alt="" />
                                </a>
                            </div>
                            <div class="product-name">
                                <p>
                                    Harman Kardon Speaker
                                    <span>Bluetooth</span>
                                </p>
                            </div>
                            <div class="product-price">
                                <p><span class="old-price">599$</span>349$</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clearfix "></div>
                <div class="clearfix gap hidden-sm hidden-xs" ns="margin-top: -20px;"></div>
                <div class="slider-1" styles="margin-top: 0">
                    <div class="col-sm-6">
                        <div class="detail-container">
                             <div class="detail-wrapper">
                                <h3 class="title blue-title red">iPad Pro</h3>
                                <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and excitement it provides</p>
                                <h3 class="price"> <span class="old-price">349$</span>299$</h3>
                                <div class="button-wrapper">
                                    <a href="#" class="button type-1 red">Explore</a>
                                    <a href="#" class="button type-2 red">Buy Now</a>
                                </div>
                            </div>
                             <div class="detail-wrapper">
                                <h3 class="title blue-title red">MacBook Pro 155"</h3>
                                <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and exitement it provides</p>
                                <h3 class="price"> <span class="old-price">1999$</span>1749$ </h3>
                                <div class="button-wrapper">
                                    <a href="#" class="button type-1 red">Explore</a>
                                    <a href="#" class="button type-2 red">Buy Now</a>
                                </div>
                            </div>
                            <div class="detail-wrapper">
                                <h3 class="title blue-title red">iPad Pro</h3>
                                <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and exitement it provides</p>
                                <h3 class="price"> <span class="old-price">1999$</span>1749$ </h3>
                                <div class="button-wrapper">
                                    <a href="#" class="button type-1 red">Explore</a>
                                    <a href="#" class="button type-2 red">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6" >
                        <div class="image-container red">
                            <div class="image-wrapper">
                                <img src="images/ipad-1.png" alt="" class="img-responsive center-block" />
                            </div>
                            <div class="image-wrapper">
                                <img src="images/ipad-1.png" alt="" class="img-responsive center-block" />
                            </div>
                            <div class="image-wrapper">
                                <img src="images/ipad-1.png" alt="" class="img-responsive center-block" />
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="clearfix"></div>
            </div>
            
        </section>
        <section class="learn_more">
            <div class="container">
                <div class="col-sm-4">
                    <div>
                        <h3 class="title blue-title">Learn More</h3>
                        <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and</p>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="has-vertical-heading">
                        <span class="vertical-heading">
                            Smart
                        </span>
                        <div class="video">
                            <img src="images/video.png" alt="" class="img-responsive center-block" />
                            <iframe width="655" height="442" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                        </div>
                    </div>

                </div>

            </div>
            <div class="clearfix"></div>
            <div class="gap"> </div>
        </section>
        <section class="agent text-center">
            <div class="container">
                <h3 class="title blue-title text-center has-shadow-title">Agent <span>Benefites</span> </h3>
                <p>
                    Become an Agent to enjoy all the benefits of our service
                </p>
                <div class="gap"></div>
                <a href="#" class="button type-2 green" styles="width: 140px;">send</a>
            </div>
        </section>

        <Footer />

    </Main>
		);
	}
}

export default Index;