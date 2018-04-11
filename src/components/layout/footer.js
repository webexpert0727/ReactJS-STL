import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
		<footer className="footer_style_2">
            <div className="container footer-container">
                <div className="col-sm-12">
                    <div className="footer-nav">
                        <div className="col-sm-6 first-half">
                            <div className="">
                                <ul>
                                    <li className="profile">
                                      <img src="images/profile.png" />
                                      <a href="/profile">Sofia</a>
                                    </li>
                                    
                                </ul>   
                                <div className="col-xs-6 menu-links">
                                    <span><a href="/my-projects">My Projects </a></span>
                                    <span><a href="/funds">Founds</a></span>   
                                </div>
                                <div className="col-xs-6 menu-links">
                                    <span> <a href="/setting">Settings</a></span>
                                    <span> <a href="#">Logout</a></span>   
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 second-half">
                            <div className="">
                                <div className="">
                                    <div className="">
                                        <h3> Quick Links</h3>
                                        <div className="col-xs-7 quick-links">
                                            <span> <a href="#">How it works</a></span>
                                            <span> <a href="#">Benifits</a></span>
                                            <span> <a href="#">Features</a></span>
                                        </div>
                                        <div className="col-xs-5 quick-links">
                                             <span> <a href="#">Blog</a></span>
                                            <span> <a href="#">Help</a></span>
                                            <span> <a href="#">FAQ</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2 col-xs-12 third-half">
                            <div className="col-sm- help_support">
                                <img src="images/profile.png" width="80px" height="80px" />
                                <a href="#"> Help &amp; support</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="copyright">
                        <p>&copy;2018 - Share The Load. All right reserved</p>
                    </div>
                </div>
            </div>
        </footer>
		);
	}
}

export default Footer;