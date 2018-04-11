import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
         <header className="menu-containter">
            <div className="logo">
                <a href="/">
                    <img src="images/logo.png" alt="Share The Load" /> </a>
            </div>
            <div className="menu">
                <nav>
                    <div className="hidden-md hidden-lg">
                        <a href="javascript:void(0)" className="menu-list-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                    </div>
                    <ul className="menu-list">
                        <li>
                            <a href="/" className="active">home</a>
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
                        <li className="bottom-btn hidden-lg hidden-md">
                            <div>
                                <a href="/login">
                                    <i className="fa fa-sign-in" aria-hidden="true"></i>
                                    Login
                                </a>
                                <a href="/setting">
                                    <i className="fa fa-cog" aria-hidden="true"></i>
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


export default Header;