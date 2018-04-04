import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Profile extends Component {
	render() {
		return (
		<Main>

       <div class="container-fluid">
            <Header />
            <div class="banner banner-profile banner-small no-text-banner banner-cus-1-xs">
                <div class="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>

        </div>
        <div class="">
            <div class="profile image">
                <input type="file" name="" id="" class="profile-image" />
                <img src="images/team-3.png" alt="" class="img-circle img-responsive center-block " width="140px" height="140px" />
            </div>
            <div class="card-layout-1 text-center card-margin-style-2">
                <div class="small-container">
                    <h3 class="name">Sofia&nbsp; Wilson <span>London, England</span></h3>

                    <h5 class="text-center profile-details">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br/>
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </h5>
                    <div class="clearfix"></div>
                    <div class="col-sm-3 col-sm-offset-1 large-number text-center large-total">
                        <h1> 
                            174
                        </h1>
                        <p> 
                            TOTAL
                        </p>
                    </div>
                    <div class="col-sm-4 large-number text-center large-deliverd">
                        <h1> 
                            33
                        </h1>
                        <p> 
                            DELIVERED
                        </p>
                    </div>
                    <div class="col-sm-3 large-number text-center large-sent">
                        <h1> 
                            19
                        </h1>
                        <p> 
                            SENT
                        </p>
                    </div>
                   <div class="gap"><br/></div>
                </div>
                <div class="clearfix"></div>
                
                <div class="form profile-detail-form container">
                        <div class="gap hidden-xs"><br/></div>
                    <div class="col-md-4 varify input phone">
                        <label for="">Phone Verificaiton</label>
                        <input type="text" name="" id="" value="+ 12 34567890123" readonly="readonly" />
                       
                    </div>
                    <div class="col-md-4  input email">
                        <label for="">Email Verificaiton</label>
                        <input type="text" name="" id="" placeholder="Type here..." readonly="readonly" />
                       
                    </div>
                    <div class="col-md-4  input identity">
                        <label for="">Identity Verificaiton</label>
                        <input type="text" name="" id="" placeholder="Type here..." readonly="readonly" />
                    
                    </div>
                    <div class="clearfix"></div>
                    <div class="text-center">
                        <div class="gap"></div>
                            <a href="#" class="button type-2 green">Save</a>
                    </div>
                </div>

            </div>
        </div>

        <FooterOther />

    </Main>
		);
	}
}

export default Profile;