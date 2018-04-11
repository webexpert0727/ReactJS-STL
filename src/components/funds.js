import React, { Component } from 'react';

import MainCustomWrap from './layout/main-custom-wrap';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Funds extends Component {
	render() {
		return (
		<MainCustomWrap customClass="funds">

        <div className="container-fluid">
            <Header />

        </div>
        <div className=" container" >
                <div className="gap"></div><br/><div className="gap"></div>
            <div className="text-right">
                <a href="#" className="button type-1 white round-5"> &nbsp;<i className="fa fa-plus" aria-hidden="true"></i> Add Deposit</a>
            </div>
            
            <div className="">
                <div className="col-sm-6 text-center hide-border-sm funds-price-container" styles="border-right: 1px solid #696969;">
                    <div className="col-xs-7 text-left">
                        <p className="label-funds" >Available Balance</p>
                    </div>
                    <div className="col-xs-5 text-right  no-padding">
                        <div className="input select-1  ">
                            <select name="" id="" >
                                <option value="">$ Dollar</option>
                                <option value="">$ Dollar</option>
                                <option value="">$ Dollar</option>
                            </select>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    
                    <div className="info-container">
                        <p>337<sup>$</sup></p>
                        
                    </div>
                    <div>
                        <a href="#" className="button type-2 blue "> Withdraw!</a>
                    </div>
                    <div className="clearfix gap sm-hidden" styles="margin-top: 100px;"></div>
                </div>
                <div className="gap">
                </div>
                <div className="col-sm-6 transaction-container">
                    <div className="col-xs-7 text-left no-padding">
                        <p className="label-funds">Transactions</p>
                    </div>
                    <div className="col-xs-5 text-right no-padding">
                        <div className="input select-1  ">
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
                    <div className="clearfix"></div>
                    <div className="gap clearfix" styles="margin-top: 24px;"></div>
                    <div className="card-layout-1 clearfix transaction-card completed" >
                        <div className="fund-detail pull-left">
                            <p> Project completed</p>
                            <span>
                                Sydney Gift
                            </span>
                        </div>
                        <div className="fund-detail-amount pull-right ">
                            <p>100</p>
                            <span>
                                USD
                            </span>
                        </div>
                    </div>
                    <div className="card-layout-1 clearfix transaction-card sent" >
                        <div className="fund-detail pull-left">
                            <p> Project completed</p>
                            <span>
                                Sydney Gift
                            </span>
                        </div>
                        <div className="fund-detail-amount pull-right">
                            <p>219</p>
                            <span>
                                USD
                            </span>
                        </div>
                    </div>
                    <div className="card-layout-1 clearfix transaction-card withdraw" >
                        <div className="fund-detail pull-left">
                            <p> Project completed</p>
                            <span>
                                Sydney Gift
                            </span>
                        </div>
                        <div className="fund-detail-amount pull-right">
                            <p>30</p>
                            <span>
                                USD
                            </span>
                        </div>
                    </div>
                    <br/>
                    <p className="text-center loadmore">Load more </p>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="clearfix gap sm-hidden" styles="margin-top: 118px;"></div>
        </div>

        <FooterOther />

    </MainCustomWrap>
		);
	}
}

export default Funds;