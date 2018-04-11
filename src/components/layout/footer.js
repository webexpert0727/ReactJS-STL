import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
		<footer class="footer_style_2">
            <div class="container footer-container">
                <div class="col-sm-12">
                    <div class="footer-nav">
                        <div class="col-sm-6 first-half">
                            <div class="">
                                <ul>
                                    <li class="profile">
                                      <img src="images/profile.png" />
                                      <a href="/profile">Sofia</a>
                                    </li>
                                    
                                </ul>   
                                <div class="col-xs-6 menu-links">
                                    <span><a href="/my-projects">My Projects </a></span>
                                    <span><a href="/funds">Founds</a></span>   
                                </div>
                                <div class="col-xs-6 menu-links">
                                    <span> <a href="/setting">Settings</a></span>
                                    <span> <a href="#">Logout</a></span>   
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 second-half">
                            <div class="">
                                <div class="">
                                    <div class="">
                                        <h3> Quick Links</h3>
                                        <div class="col-xs-7 quick-links">
                                            <span> <a href="#">How it works</a></span>
                                            <span> <a href="#">Benifits</a></span>
                                            <span> <a href="#">Features</a></span>
                                        </div>
                                        <div class="col-xs-5 quick-links">
                                             <span> <a href="#">Blog</a></span>
                                            <span> <a href="#">Help</a></span>
                                            <span> <a href="#">FAQ</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-2 col-xs-12 third-half">
                            <div class="col-sm- help_support">
                                <img src="images/profile.png" width="80px" height="80px" />
                                <a href="#"> Help &amp; support</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="copyright">
                        <p>&copy;2018 - Share The Load. All right reserved</p>
                    </div>
                </div>
            </div>
        </footer>
		);
	}
}

export default Footer;