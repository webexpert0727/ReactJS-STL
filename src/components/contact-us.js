import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class ContactUs extends Component {
	render() {
		return (
		<Main>

        <div className="container-fluid">
            <Header />

            <div className="banner banner-contact banner-small  no-text-banner">
                <div className="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>
        </div>
        <div className=" card-layout-1 style-layout-1 card-margin-style-1  no-padding-xs" styles="padding-top: 6px;">
            <div className="container  no-padding-sm">
                <div className="gap"> </div>
                <div className="small-container-2">
                    <div className="col-md-8 col-sm-6">
                        <h3 className="title default-title " styles="margin-top: 8px;margin-bottom: 7px;">Send us a message</h3>
                                    
                        <div className="form-type-3 form-container no-padding">
                            <div className="form">
                                <form>
                                    
                                    <div className="info">
                                        <p>You can contuct us with anything related to our Products. We&#39;ll get in
                                            touch with you as soon as possible.</p>
                                    </div>
                                    <div className="input">
                                        <input type="text" className="" placeholder="Your name" />
                                    </div>
                                    <div className="input">
                                        <input type="email" className="" placeholder="Email address" />
                                    </div>
                                    <div className="input">
                                        <input type="password" className="" placeholder="Phone" />
                                    </div>
                                    <div className="input" styles="padding: 0">
                                        <textarea name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                                    </div>
                                    <div className="text-center">
                                        <br/>
                                        <input type="submit" value="Contact Us" className=" button type-2 default-blue no-shadow text-uppercase " />
                                    </div>
                                    <div className="clearfix"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gap"></div><br/> <div className="gap clearfix xs-hidden"></div><div className="gap xs-hidden"></div>
                        <div className="address ">
                            <h4><img src="images/icons8-marker.png" alt="" /> Find us at the office</h4>
                            <p>First street, 74 <br/> 1234 Budapest
                                <br/> Hungary</p>
                        </div>
                        <div className="address ">
                            <h4><img src="images/icons8-phone.png" alt="" /> Give us a ring</h4>
                            <p>John Smith <br/>
                            +12 3456789012 <br/>
                                Mon-Fri, 8:00-18:00</p>
                        </div>
                        <div className="address ">
                            <h4><img src="images/icons8-briefcase.png" alt="" /> Legal Information</h4>
                            <p>Share The Load Ltd. <br/>
                                VAT - AB123456789 <br/>
                                IBAN - AB111122223333444 <br/>
                                Bank - Alpha Bank</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix gap" styles="margin-bottom: 13px;"></div>
            <div className="chat-popup">
                <div className="heading">
                    <span className="online"></span>
                    <p>Chat with us, we are online <span></span> <span></span> <span></span></p>
                </div>
                <div className="body text-center" styles="display: none;">
                    <a href="chat.html" className="button type-2 blue"> chat </a>
                </div>
            </div>
        </div>
        <FooterOther />

    </Main>
		);
	}
}

export default ContactUs;