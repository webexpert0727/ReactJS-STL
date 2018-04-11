import React, { Component } from 'react';

class FooterOther extends Component {
	render() {
		return (
		 <footer>
            <div className="container footer-container">
                <div className="col-sm-8">
                    <div className="footer-nav">
                        <ul>
                            <li>
                                <img src="images/profile.png" />
                                <a href="profile.html">Sofia</a>
                            </li>
                            <li>
                                <a href="my-projects.html">My Projects </a>
                            </li>
                            <li>
                                <a href="funds.html">Founds</a>
                            </li>
                            <li>
                                <a href="setting.html">Settings</a>
                            </li>
                            <li>
                                <a href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="copyright text-right">
                        <p>&copy; 2017, made by NagyAppDev</p>
                    </div>
                </div>
            </div>
        </footer>
		);
	}
}

export default FooterOther;