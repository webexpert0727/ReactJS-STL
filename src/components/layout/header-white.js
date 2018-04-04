import React, { Component } from 'react';

class HeaderWhite extends Component {
  render() {
    return (
         <header class="menu-containter whites">
            <div class="logo">
                <a href="index.html">
                    <img src="images/logo.png" alt="sofia" /> </a>
            </div>
            <div class="menu">
                <nav>
                    <div class="hidden-md hidden-lg">
                        <a href="javascript:void(0)" class="menu-list-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                    </div>
                    <ul class="menu-list">
                        <li>
                            <a href="/" class="active">home</a>
                        </li>
                        <li>
                            <a href="/shop">Shop</a>
                        </li>
                        <li>
                            <a href="/send">Send</a>
                        </li>
                        <li>
                            <a href="/trace">Trace</a>
                        </li>
                        <li>
                            <a href="/travel">Travelers</a>
                        </li>
                        <li>
                            <a href="/agent">Agent</a>
                        </li>
                        <li>
                            <a href="/about">About Us</a>
                        </li>
                        <li>
                            <a href="/contact-us">Contact</a>
                        </li>
                        <li class="bottom-btn hidden-lg hidden-md">
                            <div>
                                <a href="/login">
                                    <i class="fa fa-sign-in" aria-hidden="true"></i>
                                    Login
                                </a>
                                <a href="/setting">
                                    <i class="fa fa-cog" aria-hidden="true"></i>
                                    Setting
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
  }
  
}


export default HeaderWhite;