import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={`menu-containter ${props.customClass}`}>
           <div className="logo">
               <a href="/">
                   <img src="images/logo.png" alt="Share The Load" /> 
                </a>
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
                            <NavLink to="/" className="nav-link" activeClassName="active">
                                home
                            </NavLink>
                       </li>
                       <li>
                            <NavLink to="/shop" className="nav-link" activeClassName="active">
                                Shop
                            </NavLink>
                       </li>
                       <li>
                            <NavLink to="/send" className="nav-link" activeClassName="active">
                                Send
                            </NavLink>
                       </li>
                       <li>
                            <NavLink to="/trace" className="nav-link" activeClassName="active">
                                Trace
                            </NavLink>
                       </li>
                       <li>
                            <NavLink to="/travel" className="nav-link" activeClassName="active">
                                Travelers
                            </NavLink>
                       </li>
                       <li>
                            <NavLink to="/agent" className="nav-link" activeClassName="active">
                                Agent
                            </NavLink>
                       </li>
                       <li>
                            <NavLink to="/about" className="nav-link" activeClassName="active">
                                About Us
                            </NavLink>
                       </li>
                       <li>
                            <NavLink to="/contact-us" className="nav-link" activeClassName="active">
                                Contact
                            </NavLink>
                       </li>
                       <li className="bottom-btn hidden-lg hidden-md">
                           <div>
                                <NavLink to="/login" className="nav-link" activeClassName="active">
                                    <i className="fa fa-sign-in" aria-hidden="true"></i>
                                    Login
                                </NavLink>
                                <NavLink to="/setting" className="nav-link" activeClassName="active">
                                    <i className="fa fa-cog" aria-hidden="true"></i>
                                    Setting
                                </NavLink>
                           </div>
                       </li>
                   </ul>
               </nav>
           </div>
       </header>
   );
}

export default Header;