import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Login extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            <header class="menu-containter no-bg">
                    <div class="logo">
                        <a href="index.html">
                            <img src="images/logo.png" alt="Share The Load" /> </a>
                    </div>
                </header>
        </div>
        <div class="container">
            <div class="form-type-1 form-container">
                <div class="form">
                    <form>
                        <div class="title form-title text-center no-social">
                            <p>
                                Login
                            </p>
                        </div>
                        <div class="input">
                            <i>
                                <img class="icon" src="images/icons/icons8-human-head-26.png" />
                            </i>
                            <input type="text" class="" placeholder="Username..." />
                        </div>
                        <div class="input">
                            <i>
                                <img class="icon" src="images/icons/icons8-lock-24.png" />
                            </i>
                            <input type="password" class="" placeholder="Password..." />
                        </div>
                        <div class="text-right">
                            <a href="#" class="text-uppercase forget-password">Forget Password</a>
                        </div>
                        <div class="text-center">
                            <br/><br/>
                            <input type="submit" value="Join" class="text-uppercase hollow-button" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </Main>
		);
	}
}

export default Login;