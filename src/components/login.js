import React, { Component } from 'react';

import MainCustomWrap from './layout/main-custom-wrap';
import Header from './layout/header';
import FooterOther from './layout/footer-other';
import Parse from 'parse'

class Login extends Component {

    constructor(){
        super();
        Parse.initialize("kgMoNAcxUBHJIo9KUVQqcjYOZvpZv4fR4pky1zJH", "je5obIpZemmDCQ1ivZqcZaj7vpUNVFQtvjElbpAi"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
        Parse.serverURL = "https://parseapi.back4app.com/";
        this.state = {
            userName:'',
            password:'',
        };
    }
    
    onUsernameChange = (e) => {
        this.setState({ userName: e.target.value });
        
    };
    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
        
    };
    login(userData){
        Parse.User.logIn(userData.userName, userData.password , {
            success: function(user) {
                alert("User logged in successful with username: " + user.get("username") + ' and email: ' + user.get("email"));
                // Do stuff after successful login, like a redirect.
            },
            error: function(user, error) {
                alert("The login failed with error: " + error.code + " " + error.message);
            }
        });
    }

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
                            <input 
                            type="text" 
                            name = "username" 
                            value = {this.state.userName } 
                            onChange = { this.onUsernameChange }
                            className="" 
                            placeholder="Username..."  />
                        </div>
                        <div className="input">
                            <i>
                                <img className="icon" src="images/icons/icons8-lock-24.png" />
                            </i>
                            <input 
                            type="password" 
                            name = "password" 
                            value = { this.state.password }
                            onChange = { this.onPasswordChange } 
                            className="" 
                            placeholder="Password..." />
                        </div>
                        <div className="text-right">
                            <a href="#" className="text-uppercase forget-password">Forget Password</a>
                        </div>
                        <div className="text-center">
                            <br/><br/>
                            <input 
                            type="button" 
                            onClick={()=>this.login(this.state)} 
                            value="Join" 
                            className="text-uppercase hollow-button" />
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