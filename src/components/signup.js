import React, { PureComponent } from 'react';
import MainCustomWrap from './layout/main-custom-wrap';
import Header from './layout/header';
import Parse from 'parse'

class Signup extends  PureComponent {

    constructor(){
        super();
        Parse.initialize("kgMoNAcxUBHJIo9KUVQqcjYOZvpZv4fR4pky1zJH", "je5obIpZemmDCQ1ivZqcZaj7vpUNVFQtvjElbpAi"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
        Parse.serverURL = "https://parseapi.back4app.com/";
        this.state ={
            userName:'',
            password:'',
            email:'',
            username:'',
            birthday :''
            

        };
    }
    onUsernameChange = (e) => {
        this.setState({ userName: e.target.value });
        
    };
    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
        
    };
    onEmailChange = (e) => {
        this.setState({ email: e.target.value });
        
    };
    onBirthdayChange = (e) => {
        this.setState({ birthday: e.target.value });
        
    };
    signUp(userData) {
        // Create a new instance of the user class
        console.log('user is:',userData);
        let user = new Parse.User();
        /*user.set("username", "my name");
        user.set("password", "my pass");
        user.set("email", "email@example.com");
        */
       user.set("username",userData.userName );
       user.set("password", userData.password);
       user.set("email", userData.email);
       user.set("birthday", userData.birthday);
    
        user.signUp(null, {
          success: function(user) {
            alert('User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
          },
          error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            // It is likely that the user is trying to sign with a username or email already taken.
            alert("Error: " + error.code + " " + error.message);
          }
        });
    }

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
                            <input
                                name = "username" 
                                value = {this.state.userName } 
                                onChange = { this.onUsernameChange }
                                type="text" className="" 
                                placeholder="Username..." 
                             />
                        </div>
                        <div className="input">
                            <i>
                                <img className="icon" src="images/icons/icons8-envelope-24.png" />
                            </i>
                            <input 
                                type="email"
                                name = "email"
                                value = {this.state.email} 
                                onChange = { this.onEmailChange }
                                className=""
                                placeholder="Email..." 
                            />
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
                        <div className="input">
                            <i>
                                <img className="icon" src="images/icons/icons8-gift-24.png" />
                            </i>
                            <input 
                                type="text" 
                                name = "birthday" 
                                value = {this.state.birthday} 
                                onChange = { this.onBirthdayChange }
                                className="" 
                                placeholder="Birthday..." 
                            />
                        </div>
                        <div className="text-center">
                            <input type="button" onClick={()=> this.signUp(this.state)} value="Get Started" className="text-uppercase hollow-button" styles="margin-top: 0;" />
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