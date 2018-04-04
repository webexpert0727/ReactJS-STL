import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Setting extends Component {
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
                <input type="file" name="" id="" class="profile-image edit" />
                <img src="images/team-3.png" alt="" class="img-circle img-responsive center-block " width="140px" height="140px" />
            </div>
            <div class="card-layout-1 text-center card-margin-style-2">
                <div class="small-container">
                    <div class="gap clearfix" styles="margin-top: 15px;"></div>
                    <div class="input profile-input" styles="width: 340px; max-width: 100%;">
                        <span class="edit-input" styles=" display: none;" ></span>
                        <input type="text" name="" readonly="readonly" class="name text-center" id="" value="Jessica Parker" />
                        <input type="text" name="" id="" readonly="readonly" class="profile-location text-center" value="London, England" />
                    </div>
                    <div class="input profile-input">
                        <span class="edit-input" styles=" display: none;" ></span>
                        <textarea name="" id="" cols="30" rows="4" class="info text-center" readonly="readonly">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </textarea>
                    </div>
                    <div class="gap clearfix hidden-xs" styles="margin-top:37px;"></div>
                </div>
                <div class="clearfix"></div>
                
                <div class="form profile-detail-form container"><br/>
                    <div class="col-md-4  input ">
                        <span class="edit-input" styles="right: 40px; display: none;"></span>
                        <label for="">Phone Verificaiton</label>
                        <input type="text" name="" id="" value="+ 12 34567890123" readonly="readonly" />
                    </div>
                    <div class="col-md-4  input email">
                        <span class="edit-input" styles="right: 40px; display: none;"></span>
                        <label for="">Email Verificaiton</label>
                        <input type="text" name="" id="" placeholder="Type here..." readonly="readonly" />
                    </div>
                    <div class="col-md-4  input ">
                        <span class="edit-input" styles="right: 40px; display: none;"></span>
                        <label for="">Password</label>
                        <input type="text" name="" id="" placeholder="*************" readonly="readonly" />
                    </div>
                    <div class="clearfix"></div>
                    <div class="text-center">
                        <div class="gap clearfix"></div>
                        <div class="gap clearfix hidden-xs" styles="margin-top:37px;"></div>
                            <a href="javascript:void(0)" id="edit-profile" class="button type-2 green ">Edit profile</a>
                            
                        <div class="gap clearfix"></div>
                        <div class="gap clearfix hidden-xs" styles="margin-bottom:20px;"></div>
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