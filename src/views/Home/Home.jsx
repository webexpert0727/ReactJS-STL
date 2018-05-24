import React, { Component } from 'react';
import Main from '../../components/layout/main';
import Header from '../../components/layout/header';
import FooterOther from '../../components/layout/footer-other';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <Main>
                <div className="container-fluid">
        	        <Header />
                    <div className="banner has-form">
                        <div className="text">
                            <h3>
                                Then they show that show to the people who make shows
                            </h3>
                            <p>
                                The path of the righteous man is best on all sides by the iniquities of the selfish and the tranny of evil men. Blessed is
                                he who, in the mane of charity and good will, shepherds the weak through the valley of darkness,
                                for he is truly his brother's.
                            </p>
                        </div>
                        <div className="home_banner_form">
                            <div className="img_section">
                                <a href="book-flight-results.html">
                                    <img src="images/icon-plain.png" alt="" />
                                    <p>Book Flight</p>
                                </a>
                                <a href="/#/" >
                                    <img src="images/icon-cl.png" alt="" />
                                    <p>Calculate Postage</p>
                                </a>
                                <a href="/#/">
                                    <img src="images/icon-bed.png" alt=""/>
                                    <p>Accommodation</p>
                                </a>
                            </div>
                            <div className="search_section">
                                <div className="search_top">
                                    <span> <img src="images/icon-track.png" alt=""/>Track Flight</span>
                                    <span className="advance_search"><i className="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Advance Search</a></span>
                                </div>
                                <form>
                                    <div className="search_bottom">
                                    <div className="flightsearch_fields">
                                        <input type="text" name="airline" placeholder="Airline..." />
                                        <input type="text" name="flight" placeholder="Flight #..." />
                                    </div>
                                    <div className="flightsearch_submit"><input type="submit" className="button green-2 round-5 no-shadow type-2" name="flight_sub_btn" value="Track Now" /></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="how_it_work">
                    <div className="container">
                        <h4 className="title cus-title-2 red text-center">How it works?</h4>
                        <h3 className="title default-title text-center">This is how project flow works</h3>
                        <p className="text-center large-1">
                            We aims to make IoT a reality by providing users easy-to-setup, <br/>
                            internet-enabled devices for sensing and controlling home enironments.
                        </p>
                        <div className="flow clearfix text-center">
                            <div className="col-sm-4">
                                <img src="images/flow-1.png" alt="" className="img-responsive center-block" />
                                <h5>
                                    Create project
                                </h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                            </div>
                            <div className="col-sm-4">
                                <img src="images/flow-2.png" alt="" className="img-responsive center-block" />
                                <h5>
                                    Accept it
                                </h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                            </div>
                            <div className="col-sm-4">
                                <img src="images/flow-3.png" alt="" className="img-responsive center-block" />
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
                <section className="best_sellers">
                    <div className="container">
                        <h3 className="title blue-title text-center has-shadow-title">Best Sellers <span>Our Best</span> </h3>
                        <div className="product-layout-2">
                            <div className="product-div col-sm-4 text-center">
                                <div className="contain">
                                    <div className="gap"></div>
                                    <div className="image-wrapper">
                                        <a href="/#/">
                                            <img src="images/p-1.png" alt="" className="img-responsive center-block" />
                                        </a>
                                    </div>
                                    <div className="product-name">
                                        <p>
                                            Solo 3 Wireless
                                            <span>Black</span>
                                        </p>
                                    </div>
                                    <div className="product-price">
                                        <p><span className="old-price">129$</span>99$</p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-div col-sm-4 text-center">
                                <div className="contain">
                                    <div className="gap"></div>
                                    <div className="image-wrapper">
                                        <a href="/#/">
                                            <img src="images/p-2.png" alt="" className="img-responsive center-block" />
                                        </a>
                                    </div>
                                    <div className="product-name">
                                        <p>
                                            MacBook Pro 15"
                                            <span>Space Grey</span>
                                        </p>
                                    </div>
                                    <div className="product-price">
                                        <p><span className="old-price">2149$</span>1899$</p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-div col-sm-4 text-center">
                                <div className="contain">
                                    <div className="gap"></div>
                                    <div className="image-wrapper">
                                        <a href="/#/">
                                            <img src="images/p-3.png" alt="" className="img-responsive center-block" />
                                        </a>
                                    </div>
                                    <div className="product-name">
                                        <p>
                                            Pill+ Bluetooth Speaker
                                            <span>Black</span>
                                        </p>
                                    </div>
                                    <div className="product-price">
                                        <p><span className="old-price">245$</span>189$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sales">
                    <div className="container">
                        <h3 className="title blue-title text-center has-shadow-title">Sales <span>Price Drop</span> </h3>
                        <div className="slider-1" >
                            <div className="col-sm-6" >
                                <div className="image-container blue">
                                    <div className="image-wrapper">
                                        <img src="images/mac-1.png" alt="" className="img-responsive center-block" />
                                    </div>
                                    <div className="image-wrapper">
                                        <img src="images/mac-1.png" alt="" className="img-responsive center-block" />
                                    </div>
                                    <div className="image-wrapper">
                                        <img src="images/mac-1.png" alt="" className="img-responsive center-block" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="detail-container">
                                    <div className="detail-wrapper">
                                        <h3 className="title blue-title">MacBook Pro 15"</h3>
                                        <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and exitement it provides</p>
                                        <h3 className="price"> <span className="old-price">1999$</span>1749$ </h3>
                                        <div className="button-wrapper">
                                            <a href="#" className="button type-1 blue">Explore</a>
                                            <a href="#" className="button type-2 blue">Buy Now</a>
                                        </div>
                                    </div>
                                    <div className="detail-wrapper">
                                        <h3 className="title blue-title">MacBook Pro 15"</h3>
                                        <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and exitement it provides</p>
                                        <h3 className="price"> <span className="old-price">1999$</span>1749$ </h3>
                                        <div className="button-wrapper">
                                            <a href="#" className="button type-1 blue">Explore</a>
                                            <a href="#" className="button type-2 blue">Buy Now</a>
                                        </div>
                                    </div>
                                    <div className="detail-wrapper">
                                        <h3 className="title blue-title">MacBook Pro 15"</h3>
                                        <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and exitement it provides</p>
                                        <h3 className="price"> <span className="old-price">1999$</span>1749$ </h3>
                                        <div className="button-wrapper">
                                            <a href="#" className="button type-1 blue">Explore</a>
                                            <a href="#" className="button type-2 blue">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="product-layout-2">
                            <div className="product-div col-md-4 text-center">
                                <div className="contain">
                                    <div className="image-wrapper">
                                        <a href="/#/">
                                            <img src="images/p-4.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="product-name">
                                        <p>
                                            Magic Track Pad
                                            <span>Bluetooth</span>
                                        </p>
                                    </div>
                                    <div className="product-price">
                                        <p><span className="old-price">249$</span>149$</p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-div col-md-4 text-center">
                                <div className="contain">
                                    <div className="image-wrapper">
                                        <a href="/#/">
                                            <img src="images/p-6.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="product-name">
                                        <p>
                                            iMac 27"
                                            <span>512 GB</span>
                                        </p>
                                    </div>
                                    <div className="product-price">
                                        <p><span className="old-price">2490$</span>1999$</p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-div col-md-4 text-center">
                                <div className="contain">
                                    <div className="image-wrapper">
                                        <a href="/#/">
                                            <img src="images/p-5.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="product-name">
                                        <p>
                                            Harman Kardon Speaker
                                            <span>Bluetooth</span>
                                        </p>
                                    </div>
                                    <div className="product-price">
                                        <p><span className="old-price">599$</span>349$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix "></div>
                        <div className="clearfix gap hidden-sm hidden-xs" ns="margin-top: -20px;"></div>
                        <div className="slider-1" styles="margin-top: 0">
                            <div className="col-sm-6">
                                <div className="detail-container">
                                    <div className="detail-wrapper">
                                        <h3 className="title blue-title red">iPad Pro</h3>
                                        <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and excitement it provides</p>
                                        <h3 className="price"> <span className="old-price">349$</span>299$</h3>
                                        <div className="button-wrapper">
                                            <a href="/#/" className="button type-1 red">Explore</a>
                                            <a href="/#/" className="button type-2 red">Buy Now</a>
                                        </div>
                                    </div>
                                    <div className="detail-wrapper">
                                        <h3 className="title blue-title red">MacBook Pro 155"</h3>
                                        <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and exitement it provides</p>
                                        <h3 className="price"> <span className="old-price">1999$</span>1749$ </h3>
                                        <div className="button-wrapper">
                                            <a href="/#/" className="button type-1 red">Explore</a>
                                            <a href="/#/" className="button type-2 red">Buy Now</a>
                                        </div>
                                    </div>
                                    <div className="detail-wrapper">
                                        <h3 className="title blue-title red">iPad Pro</h3>
                                        <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and exitement it provides</p>
                                        <h3 className="price"> <span className="old-price">1999$</span>1749$ </h3>
                                        <div className="button-wrapper">
                                            <a href="/#/" className="button type-1 red">Explore</a>
                                            <a href="/#/" className="button type-2 red">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6" >
                                <div className="image-container red">
                                    <div className="image-wrapper">
                                        <img src="images/ipad-1.png" alt="" className="img-responsive center-block" />
                                    </div>
                                    <div className="image-wrapper">
                                        <img src="images/ipad-1.png" alt="" className="img-responsive center-block" />
                                    </div>
                                    <div className="image-wrapper">
                                        <img src="images/ipad-1.png" alt="" className="img-responsive center-block" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </section>
                <section className="learn_more">
                    <div className="container">
                        <div className="col-sm-4">
                            <div>
                                <h3 className="title blue-title">Learn More</h3>
                                <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and</p>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="has-vertical-heading">
                                <span className="vertical-heading">
                                    Smart
                                </span>
                                <div className="video">
                                    <img src="images/video.png" alt="" className="img-responsive center-block" />
                                    <iframe width="655" height="442" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="clearfix"></div>
                    <div className="gap"> </div>
                </section>
                <section className="agent text-center">
                    <div className="container">
                        <h3 className="title blue-title text-center has-shadow-title">Agent <span>Benefites</span> </h3>
                        <p>
                            Become an Agent to enjoy all the benefits of our service
                        </p>
                        <div className="gap"></div>
                        <a href="/#/" className="button type-2 green" styles="width: 140px;">send</a>
                    </div>
                </section>
                <FooterOther />
            </Main>
        )
    }
}
 
export default Home;