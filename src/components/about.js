import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class About extends Component {
	render() {
		return (
		<Main>
        <div className="container-fluid">
        
           <Header />

            <div className="banner banner-about banner-small">
                <div className="text text-center">
                    <h3>
                        About us
                    </h3>
                    <p>
                        Learn more about our company
                    </p>
                </div>
            </div>

        </div>
        <div className="">
            <div className="card-layout-1 text-center">
                <div className="small-container">
                    <h5 styles="padding: 0 10px;">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </h5>
                    <div className="gap clearfix"></div>
                    <div className="gap sm-hidden clearfix" style={{marginTop : "13px"}}></div>
                    <h2>Who we are</h2>
                    <div className="gap sm-hidden clearfix" style={{marginTop : "23px"}}></div>
                    <h5>
                        This is the paragraph where you can write more details about your team. Keep your user engaged by providing meaningful information
                    </h5>
                </div>
                <div className="clearfix"></div>

                <div className="gap clearfix sm-hidden"></div>
                <div className="gap clearfix"></div>
                <div className="team ">
                        
                    <div className="col-md-4 team-member">
                        <div className="image-wrapper">
                            <img src="images/team-1.png" alt="" className="img-circle img-responsive center-block" />
                            <br/>
                        </div>
                        <div className="content">
                            <h3>
                                Anna Cooper<span className="text-uppercase"> Ceo </span>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                            <div className="social-container">
                                <div><img src="images/icons/icons8-twitter.png" /></div>
                                <div><img src="images/icons/icons8-facebook.png" /></div>
                                <div><img src="images/icons/icons8-linkedin.png" /></div>
                            </div>
                        </div>
                    </div>   
                    <div className="col-md-4 team-member ">
                        <div className="image-wrapper">
                            <img src="images/team-2.png" alt="" className="img-circle img-responsive center-block" />
                            <br/>
                        </div>

                        <div className="content">
                            <h3>
                                James Doe<span className="text-uppercase"> Co-founder </span>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                            <div className="social-container">
                                <div><img src="images/icons/icons8-twitter.png" /></div>
                                <div><img src="images/icons/icons8-facebook.png" /></div>
                                <div><img src="images/icons/icons8-linkedin.png" /></div>
                            </div>
                        </div>
                    </div>   
                    <div className="col-md-4 team-member">
                        <div className="image-wrapper">
                            <img src="images/team-3.png" alt="" className="img-circle img-responsive center-block" />
                            <br/>
                        </div>
                        <div className="content">
                            <h3>
                                Jessica Storm<span className="text-uppercase"> Pr Manager </span>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                            <div className="social-container">
                                <div><img src="images/icons/icons8-facebook.png" /></div>
                                <div><img src="images/icons/icons8-linkedin.png" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix gap"></div>
                 <div className="gap clearfix sm-hidden"></div>
                <div>
                    <h2>Our partners</h2>
                </div>
                <div className="gap" style={{marginTop : "33px"}}></div>
                <div className="blue-bg ">
                    <div className="inline-img text-center bottom-logo horizontal-img owl-carousel">
                        <div className="item">
                            <a href="# "><img src="images/bottom-logo-1.png" alt="" /></a>
                        </div>
                        <div className="item">
                            <a href="# "><img src="images/bottom-logo-2.png" alt="" /></a>
                        </div>
                        <div className="item">
                            <a href="# "><img src="images/bottom-logo-3.png" alt="" /></a>
                        </div>
                        <div className="item">
                            <a href="# "><img src="images/bottom-logo-4.png" alt="" /></a>
                        </div>
                        <div className="item">
                            <a href="# "><img src="images/bottom-logo-5.png" alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="gap" styles={{marginTop : "52px;"}}></div>
                <div>
                    <h2>Other companies</h2>
                </div>
                <div className="inline-img text-center bottom-logo">
                    <a href="# "><img src="images/bottom-logo-6.png" alt="" /></a>
                    <a href="# "><img src="images/bottom-logo-7.png" alt="" /></a>
                    <a href="# "><img src="images/bottom-logo-8.png" alt="" /></a>
                </div>
            </div>
        </div>

        <FooterOther />
    </Main>
		);
	}
}

export default About;