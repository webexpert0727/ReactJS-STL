import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class ContactUs extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            <Header />

            <div class="banner banner-contact banner-small  no-text-banner">
                <div class="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>
        </div>
        <div class=" card-layout-1 style-layout-1 card-margin-style-1  no-padding-xs" styles="padding-top: 6px;">
            <div class="container  no-padding-sm">
                <div class="gap"> </div>
                <div class="small-container-2">
                    <div class="col-md-8 col-sm-6">
                        <h3 class="title default-title " styles="margin-top: 8px;margin-bottom: 7px;">Send us a message</h3>
                                    
                        <div class="form-type-3 form-container no-padding">
                            <div class="form">
                                <form>
                                    
                                    <div class="info">
                                        <p>You can contuct us with anything related to our Products. We&#39;ll get in
                                            touch with you as soon as possible.</p>
                                    </div>
                                    <div class="input">
                                        <input type="text" class="" placeholder="Your name" />
                                    </div>
                                    <div class="input">
                                        <input type="email" class="" placeholder="Email address" />
                                    </div>
                                    <div class="input">
                                        <input type="password" class="" placeholder="Phone" />
                                    </div>
                                    <div class="input" styles="padding: 0">
                                        <textarea name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                                    </div>
                                    <div class="text-center">
                                        <br/>
                                        <input type="submit" value="Contact Us" class=" button type-2 default-blue no-shadow text-uppercase " />
                                    </div>
                                    <div class="clearfix"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="gap"></div><br/> <div class="gap clearfix xs-hidden"></div><div class="gap xs-hidden"></div>
                        <div class="address ">
                            <h4><img src="images/icons8-marker.png" alt="" /> Find us at the office</h4>
                            <p>First street, 74 <br/> 1234 Budapest
                                <br/> Hungary</p>
                        </div>
                        <div class="address ">
                            <h4><img src="images/icons8-phone.png" alt="" /> Give us a ring</h4>
                            <p>John Smith <br/>
                            +12 3456789012 <br/>
                                Mon-Fri, 8:00-18:00</p>
                        </div>
                        <div class="address ">
                            <h4><img src="images/icons8-briefcase.png" alt="" /> Legal Information</h4>
                            <p>Share The Load Ltd. <br/>
                                VAT - AB123456789 <br/>
                                IBAN - AB111122223333444 <br/>
                                Bank - Alpha Bank</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clearfix gap" styles="margin-bottom: 13px;"></div>
            <div class="chat-popup">
                <div class="heading">
                    <span class="online"></span>
                    <p>Chat with us, we are online <span></span> <span></span> <span></span></p>
                </div>
                <div class="body text-center" styles="display: none;">
                    <a href="chat.html" class="button type-2 blue"> chat </a>
                </div>
            </div>
        </div>
        <FooterOther />

    </Main>
		);
	}
}

export default ContactUs;