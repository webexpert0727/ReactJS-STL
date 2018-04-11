import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Profile extends Component {
	render() {
		return (
		<Main>

       <div className="container-fluid">
            <Header />
            <div className="banner banner-profile banner-small no-text-banner banner-cus-1-xs">
                <div className="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>

        </div>
        <div className="">
            <div className="profile image">
                <input type="file" name="" id="" className="profile-image" />
                <img src="images/team-3.png" alt="" className="img-circle img-responsive center-block " width="140px" height="140px" />
            </div>
            <div className="card-layout-1 text-center card-margin-style-2">
                <div className="small-container">
                    <h3 className="name">Sofia&nbsp; Wilson <span>London, England</span></h3>

                    <h5 className="text-center profile-details">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br/>
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </h5>
                    <div className="clearfix"></div>
                    <div className="col-sm-3 col-sm-offset-1 large-number text-center large-total">
                        <h1> 
                            174
                        </h1>
                        <p> 
                            TOTAL
                        </p>
                    </div>
                    <div className="col-sm-4 large-number text-center large-deliverd">
                        <h1> 
                            33
                        </h1>
                        <p> 
                            DELIVERED
                        </p>
                    </div>
                    <div className="col-sm-3 large-number text-center large-sent">
                        <h1> 
                            19
                        </h1>
                        <p> 
                            SENT
                        </p>
                    </div>
                   <div className="gap"><br/></div>
                </div>
                <div className="clearfix"></div>
                
                <div className="form profile-detail-form container">
                        <div className="gap hidden-xs"><br/></div>
                    <div className="col-md-4 varify input phone">
                        <label htmlFor="">Phone Verificaiton</label>
                        <input type="text" name="" id="" value="+ 12 34567890123" readOnly={true} />
                       
                    </div>
                    <div className="col-md-4  input email">
                        <label htmlFor="">Email Verificaiton</label>
                        <input type="text" name="" id="" placeholder="Type here..." readOnly={true} />
                       
                    </div>
                    <div className="col-md-4  input identity">
                        <label htmlFor="">Identity Verificaiton</label>
                        <input type="text" name="" id="" placeholder="Type here..." readOnly={true} />
                    
                    </div>
                    <div className="clearfix"></div>
                    <div className="text-center">
                        <div className="gap"></div>
                            <a href="#" className="button type-2 green">Save</a>
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