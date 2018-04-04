import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';

class Signup extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            <header class="menu-containter no-bg">
                    <div class="logo">
                        <a href="index.html">
                            <img src="images/logo.png" alt="sofia" /> </a>
                    </div>
                </header>
        </div>
        <div class="container">
            <div class="form-type-1 form-container">
                <div class="form">
                    <form>
                        <div class="title form-title text-center">
                            <p>
                                Sign Up
                            </p>
                            <div class="social-signup">
                                <a href="#" class="social-button">
                                    <img src="images/icons8-twitter-w.png" />
                                </a>
                                <a href="#" class="social-button">
                                    <img src="images/icons8-facebook-w.png" />
                                </a>
                            </div>
                        </div>
                        <div class="input">
                            <i>
                                <img class="icon" src="images/icons/icons8-human-head-26.png" />
                            </i>
                            <input type="text" class="" placeholder="Username..." />
                        </div>
                        <div class="input">
                            <i>
                                <img class="icon" src="images/icons/icons8-envelope-24.png" />
                            </i>
                            <input type="email" class="" placeholder="Email..." />
                        </div>
                        <div class="input">
                            <i>
                                <img class="icon" src="images/icons/icons8-lock-24.png" />
                            </i>
                            <input type="password" class="" placeholder="Password..." />
                        </div>
                        <div class="input">
                            <i>
                                <img class="icon" src="images/icons/icons8-gift-24.png" />
                            </i>
                            <input type="text" class="" placeholder="Birthday..." />
                        </div>
                        <div class="text-center">
                            <input type="submit" value="Get Started" class="text-uppercase hollow-button" styles="margin-top: 0;" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </Main>
		);
	}
}

export default Signup;