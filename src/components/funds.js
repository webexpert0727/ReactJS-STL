import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Funds extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            <Header />

        </div>
        <div class=" container" >
                <div class="gap"></div><br/><div class="gap"></div>
            <div class="text-right">
                <a href="#" class="button type-1 white round-5"> &nbsp;<i class="fa fa-plus" aria-hidden="true"></i> Add Deposit</a>
            </div>
            
            <div class="">
                <div class="col-sm-6 text-center hide-border-sm funds-price-container" styles="border-right: 1px solid #696969;">
                    <div class="col-xs-7 text-left">
                        <p class="label-funds" >Available Balance</p>
                    </div>
                    <div class="col-xs-5 text-right  no-padding">
                        <div class="input select-1  ">
                            <select name="" id="" >
                                <option value="">$ Dollar</option>
                                <option value="">$ Dollar</option>
                                <option value="">$ Dollar</option>
                            </select>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    
                    <div class="info-container">
                        <p>337<sup>$</sup></p>
                        
                    </div>
                    <div>
                        <a href="#" class="button type-2 blue "> Withdraw!</a>
                    </div>
                    <div class="clearfix gap sm-hidden" styles="margin-top: 100px;"></div>
                </div>
                <div class="gap">
                </div>
                <div class="col-sm-6 transaction-container">
                    <div class="col-xs-7 text-left no-padding">
                        <p class="label-funds">Transactions</p>
                    </div>
                    <div class="col-xs-5 text-right no-padding">
                        <div class="input select-1  ">
                            <select name="" id="" styles=" border-bottom: 1px solid #888;">
                                <option value="">January</option>
                                <option value="">February</option>
                                <option value="">March</option>
                                <option value="">April</option>
                                <option value="">May</option>
                                <option value="">July</option>
                                <option value="">August</option>
                                <option value="">September</option>
                                <option value="">October</option>
                                <option value="">November</option>
                                <option value="" selected="selected">December</option>
                            </select>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="gap clearfix" styles="margin-top: 24px;"></div>
                    <div class="card-layout-1 clearfix transaction-card completed" >
                        <div class="fund-detail pull-left">
                            <p> Project completed</p>
                            <span>
                                Sydney Gift
                            </span>
                        </div>
                        <div class="fund-detail-amount pull-right ">
                            <p>100</p>
                            <span>
                                USD
                            </span>
                        </div>
                    </div>
                    <div class="card-layout-1 clearfix transaction-card sent" >
                        <div class="fund-detail pull-left">
                            <p> Project completed</p>
                            <span>
                                Sydney Gift
                            </span>
                        </div>
                        <div class="fund-detail-amount pull-right">
                            <p>219</p>
                            <span>
                                USD
                            </span>
                        </div>
                    </div>
                    <div class="card-layout-1 clearfix transaction-card withdraw" >
                        <div class="fund-detail pull-left">
                            <p> Project completed</p>
                            <span>
                                Sydney Gift
                            </span>
                        </div>
                        <div class="fund-detail-amount pull-right">
                            <p>30</p>
                            <span>
                                USD
                            </span>
                        </div>
                    </div>
                    <br/>
                    <p class="text-center loadmore">Load more </p>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="clearfix gap sm-hidden" styles="margin-top: 118px;"></div>
        </div>

        <FooterOther />

    </Main>
		);
	}
}

export default Funds;