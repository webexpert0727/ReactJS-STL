import React, { Component } from 'react';

import MainCustomWrap from './layout/main-custom-wrap';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Login extends Component {
	render() {
		return (
            <MainCustomWrap customClass="login">


        <div className="container-fluid">
            <header className="menu-containter no-bg">
                    <div className="logo">
                        <a href="index.html">
                            <img src="images/logo.png" alt="Share The Load" /> </a>
                    </div>
                </header>
        </div>
        <div className="container">
            <div className="form-type-1 form-container">
                <div className="form">
                    <form>
                        <div className="title form-title text-center no-social">
                            <p>
                                Login
                            </p>
                        </div>
                        <div className="input">
                            <i>
                                <img className="icon" src="images/icons/icons8-human-head-26.png" />
                            </i>
                            <input type="text" className="" placeholder="Username..." />
                        </div>
                        <div className="input">
                            <i>
                                <img className="icon" src="images/icons/icons8-lock-24.png" />
                            </i>
                            <input type="password" className="" placeholder="Password..." />
                        </div>
                        <div className="text-right">
                            <a href="#" className="text-uppercase forget-password">Forget Password</a>
                        </div>
                        <div className="text-center">
                            <br/><br/>
                            <input type="submit" value="Join" className="text-uppercase hollow-button" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </MainCustomWrap>
		);
	}
}

export default Login;