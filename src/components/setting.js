import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Setting extends Component {
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
                <input type="file" name="" id="" className="profile-image edit" />
                <img src="images/team-3.png" alt="" className="img-circle img-responsive center-block " width="140px" height="140px" />
            </div>
            <div className="card-layout-1 text-center card-margin-style-2">
                <div className="small-container">
                    <div className="gap clearfix" styles="margin-top: 15px;"></div>
                    <div className="input profile-input" styles="width: 340px; max-width: 100%;">
                        <span className="edit-input" styles=" display: none;" ></span>
                        <input type="text" name="" readOnly={true} className="name text-center" id="" value="Jessica Parker" />
                        <input type="text" name="" id="" readOnly={true} className="profile-location text-center" value="London, England" />
                    </div>
                    <div className="input profile-input">
                        <span className="edit-input" styles=" display: none;" ></span>
                        <textarea name="" id="" cols="30" rows="4" className="info text-center" readOnly={true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </textarea>
                    </div>
                    <div className="gap clearfix hidden-xs" styles="margin-top:37px;"></div>
                </div>
                <div className="clearfix"></div>
                
                <div className="form profile-detail-form container"><br/>
                    <div className="col-md-4  input ">
                        <span className="edit-input" styles="right: 40px; display: none;"></span>
                        <label htmlFor="">Phone Verificaiton</label>
                        <input type="text" name="" id="" defaultValue="+ 12 34567890123" readOnly={true} />
                    </div>
                    <div className="col-md-4  input email">
                        <span className="edit-input" styles="right: 40px; display: none;"></span>
                        <label htmlFor="">Email Verificaiton</label>
                        <input type="text" name="" id="" placeholder="Type here..." readOnly={true} />
                    </div>
                    <div className="col-md-4  input ">
                        <span className="edit-input" styles="right: 40px; display: none;"></span>
                        <label htmlFor="">Password</label>
                        <input type="text" name="" id="" placeholder="*************" readOnly={true} />
                    </div>
                    <div className="clearfix"></div>
                    <div className="text-center">
                        <div className="gap clearfix"></div>
                        <div className="gap clearfix hidden-xs" styles="margin-top:37px;"></div>
                            <a href="javascript:void(0)" id="edit-profile" className="button type-2 green ">Edit profile</a>
                            
                        <div className="gap clearfix"></div>
                        <div className="gap clearfix hidden-xs" styles="margin-bottom:20px;"></div>
                    </div>
                </div>

            </div>
        </div>

        <FooterOther />

    </Main>
		);
	}
}

export default Setting;