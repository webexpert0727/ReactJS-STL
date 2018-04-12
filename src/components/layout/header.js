import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        
         <header className={`menu-containter ${this.props.customClass}`}>
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

                        <li >
                            <a href="/" className={ (window.location.pathname == "/")? "active": "" }>home </a>
                        </li>
                        <li>
                            <a href="/shop" className={ (window.location.pathname == "/shop")? "active": "" } >Shop</a>
                        </li>
                        <li >
                            <a href="/send" className={ (window.location.pathname == "/send")? "active": "" }>Send</a>
                        </li>
                        <li>
                            <a href="/trace" className={ (window.location.pathname == "/trace")? "active": "" }>Trace</a>
                        </li>
                        <li >
                            <a href="/travel" className={ (window.location.pathname == "/travel")? "active": "" }>Travelers</a>
                        </li>
                        <li >
                            <a href="/agent" className={ (window.location.pathname == "/agent")? "active": "" }>Agent</a>
                        </li>
                        <li >
                            <a href="/about" className={ (window.location.pathname == "/about")? "active": "" }>About Us</a>
                        </li>
                        <li >
                            <a href="/contact-us" className={ (window.location.pathname == "/contact-us")? "active": "" }>Contact</a>
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