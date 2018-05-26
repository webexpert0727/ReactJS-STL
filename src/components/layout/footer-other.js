import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Parse from 'parse';

Parse.initialize("kgMoNAcxUBHJIo9KUVQqcjYOZvpZv4fR4pky1zJH", "je5obIpZemmDCQ1ivZqcZaj7vpUNVFQtvjElbpAi"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";
class FooterOther extends Component {
    logoutHandler = (e) => {
        const { history } = this.props;
        e.preventDefault();
          Parse.User.logOut().then(() => {
                history.push("/");
              }
            )
    }
	render() {
        const currentUser = Parse.User.current();
		return (
		 <footer>
            <div className="container footer-container">
                <div className="col-sm-8">
                    <div className="footer-nav">
                        <ul>
                            <li>
                                <img src="images/profile.png" />
                                <Link to="profile.html">Sofia</Link>
                            </li>
                            <li>
                                <Link to={"my-projects"}>My Projects </Link>
                            </li>
                            <li>
                                <Link to={"found"}>Founds</Link>
                            </li>
                            <li>
                                <Link to={"setting"}>Settings</Link>
                            </li>
                            <li>
                                {currentUser && <a href="/#/" onClick={this.logoutHandler}>Logout</a>}
                                {!currentUser && <a href="/#/login">Login</a>}
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

export default withRouter(FooterOther);