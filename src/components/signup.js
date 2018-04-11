import React, { Component } from 'react';

import MainCustomWrap from './layout/main-custom-wrap';
import Header from './layout/header';

class Signup extends Component {
	render() {
		return (
            <MainCustomWrap customClass="login signup">

        <div className="container-fluid">
            <header className="menu-containter no-bg">
                    <div className="logo">
                        <a href="index.html">
                            <img src="images/logo.png" alt="sofia" /> </a>
                    </div>
                </header>
        </div>
        <div className="container">
            <div className="form-type-1 form-container">
                <div className="form">
                    <form>
                        <div className="title form-title text-center">
                            <p>
                                Sign Up
                            </p>
                            <div className="social-signup">
                                <a href="#" className="social-button">
                                    <img src="images/icons8-twitter-w.png" />
                                </a>
                                <a href="#" className="social-button">
                                    <img src="images/icons8-facebook-w.png" />
                                </a>
                            </div>
                        </div>
                        <div className="input">
                            <i>
                                <img className="icon" src="images/icons/icons8-human-head-26.png" />
                            </i>
                            <input type="text" className="" placeholder="Username..." />
                        </div>
                        <div className="input">
                            <i>
                                <img className="icon" src="images/icons/icons8-envelope-24.png" />
                            </i>
                            <input type="email" className="" placeholder="Email..." />
                        </div>
                        <div className="input">
                            <i>
                                <img className="icon" src="images/icons/icons8-lock-24.png" />
                            </i>
                            <input type="password" className="" placeholder="Password..." />
                        </div>
                        <div className="input">
                            <i>
                                <img className="icon" src="images/icons/icons8-gift-24.png" />
                            </i>
                            <input type="text" className="" placeholder="Birthday..." />
                        </div>
                        <div className="text-center">
                            <input type="submit" value="Get Started" className="text-uppercase hollow-button" styles="margin-top: 0;" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </MainCustomWrap>
		);
	}
}

export default Signup;