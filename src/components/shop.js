import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {current_color: "first"};
     //   this.setColor = this.setColor.bind(this);

      }
      setColor(color) {
        this.setState({
            current_color : color
        });
      }
    
	render() {
		return (
		<Main>
            
        <div className="container-fluid">
            <Header />

            <div className="banner banner-product-detail banner-small no-text-banner shop">
                <div className="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>

        </div>
        <div className="">
            <div className="card-layout-1 low-top-padding-xs">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3 shop-sidebar">
                            <aside className="shop">
                                <div className="accordian sidebar-block">
                                    <p className="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-1">Product Type</p>
                                    <div className="collapse-containt collapse in" id="side-1">
                                        <div className="sidebar-checkbox">
                                            <input type="checkbox" name="" id="side-1-ch1" />
                                            <label htmlFor="side-1-ch1">All</label>
                                        </div>
                                        <div className="sidebar-checkbox">
                                            <input type="checkbox" name="" id="side-1-ch2" />
                                            <label htmlFor="side-1-ch2">Speakers</label>
                                        </div>
                                        <div className="sidebar-checkbox">
                                            <input type="checkbox" name="" id="side-1-ch3" />
                                            <label htmlFor="side-1-ch3">Notebook</label>
                                        </div>
                                        <div className="sidebar-checkbox">
                                            <input type="checkbox" name="" id="side-1-ch4" />
                                            <label htmlFor="side-1-ch4">Accessories</label>
                                        </div>
                                        <div className="sidebar-checkbox">
                                            <input type="checkbox" name="" id="side-1-ch5" />
                                            <label htmlFor="side-1-ch5">Telephone</label>
                                        </div>
                                        <div className="sidebar-checkbox">
                                            <input type="checkbox" name="" id="side-1-ch6" />
                                            <label htmlFor="side-1-ch6">Headphones</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordian sidebar-block">
                                    <p className="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-2">Brand</p>
                                    <div className="collapse-containt collapse " id="side-2">
                                        <div className="sidebar-checkbox">
                                            <input type="checkbox" name="" id="side-2-ch1" />
                                            <label htmlFor="side-2-ch1">All</label>
                                        </div>
                                        <div className="sidebar-checkbox">
                                            <input type="checkbox" name="" id="side-2-ch2" />
                                            <label htmlFor="side-2-ch2">LG</label>
                                        </div>
                                        <div className="sidebar-checkbox">
                                            <input type="checkbox" name="" id="side-2-ch3" />
                                            <label htmlFor="side-2-ch3">Logitek</label>
                                        </div>
                                        <div className="sidebar-checkbox">
                                            <input type="checkbox" name="" id="side-2-ch4" />
                                            <label htmlFor="side-2-ch4">Apple</label>
                                        </div>
                                        <div className="sidebar-checkbox">
                                            <input type="checkbox" name="" id="side-2-ch5" />
                                            <label htmlFor="side-2-ch5">Hp</label>
                                        </div>
                                        <div className="sidebar-checkbox">
                                            <input type="checkbox" name="" id="side-2-ch6" />
                                            <label htmlFor="side-2-ch6">Noc</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordian sidebar-block">
                                    <p className="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-3">Color</p>
                                    <div className="collapse-containt collapse" id="side-3">
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch1" />
                                                <label htmlFor="side-3-ch1"><span styles="background: #202020;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch2" />
                                                <label htmlFor="side-3-ch2"><span styles="background: #fc0000;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch3" />
                                                <label htmlFor="side-3-ch3"><span styles="background: #4100bb;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch4" />
                                                <label htmlFor="side-3-ch4"><span styles="background: #deee00;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch5" />
                                                <label htmlFor="side-3-ch5"><span styles="background: #00a380;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch6" />
                                                <label htmlFor="side-3-ch6"><span styles="background: #861daf;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch1" />
                                                <label htmlFor="side-3-ch1"><span styles="background: #d4c4c4;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch2" />
                                                <label htmlFor="side-3-ch2"><span styles="background: #4d0909;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch3" />
                                                <label htmlFor="side-3-ch3"><span styles="background: #1a0642;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch4" />
                                                <label htmlFor="side-3-ch4"><span styles="background: #383b04;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch5" />
                                                <label htmlFor="side-3-ch5"><span styles="background: #073a2f;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch6" />
                                                <label htmlFor="side-3-ch6"><span styles="background: #2c083a;"></span></label>
                                            </div>
                                    </div>
                                </div>
                                <div className="sidebar-block" styles="overflow: hidden; border: none;">
                                    <p className="sidebar-heading" >Price</p>
                                    <div className="clearfix">
                                        <div className="range" id="price">
                                            <div className="range-slider"> </div>
                                            <input type="text" id="range-min" readOnly={true} className="pull-left" />
                                            <input type="text" id="range-max" readOnly={true} className="pull-right text-right" />
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="search-box clearfix">
                                        <span className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></span>
                                        <input type="text" name="" id="" placeholder="Search" className="search" />
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className="col-md-9 shop-main">
                            <div className="products-container">
                                <div className="header clearfix">
                                    <div className="layout-switch-btn pull-left">
                                        <a href="javascript:void(0)" className="detail-layout-button"></a>
                                        <a href="javascript:void(0)" className="grid-layout-button active"></a>
                                    </div>
                                    <div className="pull-right text-right sorting-container">
                                        <div>
                                            <label htmlFor="sort">Sort By :</label>
                                            <select className="sort" id="sort">
                                                <option value="Price Low to High"  >Price Low to High </option>
                                                <option value="Price Low to High" >Price High to Low </option>
                                                <option value="Price Low to High" >Date Low to High </option>
                                                <option value="Price Low to High" >Date Low to High </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-layout ">
                                    <div className="product-layout-2 row">
                                        <div className="product-div col-sm-4 text-center">
                                            <div className="contain hover-container">
                                                <div className="image-wrapper">
                                                    <a href="#">
                                                        <img src="images/p-1.png" alt="" className="img-responsive center-block" />
                                                    </a>
                                                </div>
                                                <div className="text-wrap">
                                                    <div className="product-name">
                                                        <p>
                                                            Solo 3 Wireless
                                                            <span>Black</span>
                                                        </p>
                                                    </div>
                                                    <div className=" " styles="height: 50px">
                                                        <div className="hover">
                                                            <div className="product-price front">
                                                                <p><span className="old-price">129$</span>99$</p>
                                                            </div>
                                                            <div className="back">
                                                                <a href="#" className="button type-2 blue">BUY NOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div col-sm-4 text-center">
                                            <div className="contain hover-container">
                                                <div className="image-wrapper">
                                                    <a href="#">
                                                        <img src="images/mac-1.png" alt="" className="img-responsive center-block" />
                                                    </a>
                                                </div>
                                                <div className="text-wrap">
                                                    <div className="product-name">
                                                        <p>
                                                            Solo 3 Wireless
                                                            <span>Black</span>
                                                        </p>
                                                    </div>
                                                    <div className=" " styles="height: 50px">
                                                        <div className="hover">
                                                            <div className="product-price front">
                                                                <p><span className="old-price">129$</span>99$</p>
                                                            </div>
                                                            <div className="back">
                                                                <a href="#" className="button type-2 blue">BUY NOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div col-sm-4 text-center">
                                            <div className="contain hover-container">
                                                <div className="image-wrapper">
                                                    <a href="#">
                                                        <img src="images/p-3.png" alt="" className="img-responsive center-block" />
                                                    </a>
                                                </div>
                                                <div className="text-wrap">
                                                    <div className="product-name">
                                                        <p>
                                                            Solo 3 Wireless
                                                            <span>Black</span>
                                                        </p>
                                                    </div>
                                                    <div className=" " styles="height: 50px">
                                                        <div className="hover">
                                                            <div className="product-price front">
                                                                <p><span className="old-price">129$</span>99$</p>
                                                            </div>
                                                            <div className="back">
                                                                <a href="#" className="button type-2 blue">BUY NOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div col-sm-4 text-center">
                                            <div className="contain hover-container">
                                                <div className="image-wrapper">
                                                    <a href="#">
                                                        <img src="images/p-1.png" alt="" className="img-responsive center-block" />
                                                    </a>
                                                </div>
                                                <div className="text-wrap">
                                                    <div className="product-name">
                                                        <p>
                                                            Solo 3 Wireless
                                                            <span>Black</span>
                                                        </p>
                                                    </div>
                                                    <div className=" " styles="height: 50px">
                                                        <div className="hover">
                                                            <div className="product-price front">
                                                                <p><span className="old-price">129$</span>99$</p>
                                                            </div>
                                                            <div className="back">
                                                                <a href="#" className="button type-2 blue">BUY NOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div col-sm-4 text-center">
                                            <div className="contain hover-container">
                                                <div className="image-wrapper">
                                                    <a href="#">
                                                        <img src="images/mac-1.png" alt="" className="img-responsive center-block" />
                                                    </a>
                                                </div>
                                                <div className="text-wrap">
                                                    <div className="product-name">
                                                        <p>
                                                            Solo 3 Wireless
                                                            <span>Black</span>
                                                        </p>
                                                    </div>
                                                    <div className=" " styles="height: 50px">
                                                        <div className="hover">
                                                            <div className="product-price front">
                                                                <p><span className="old-price">129$</span>99$</p>
                                                            </div>
                                                            <div className="back">
                                                                <a href="#" className="button type-2 blue">BUY NOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div col-sm-4 text-center">
                                            <div className="contain hover-container">
                                                <div className="offer">
                                                    <p>%50</p>
                                                </div>
                                                <div className="image-wrapper">
                                                    <a href="#">
                                                        <img src="images/p-3.png" alt="" className="img-responsive center-block" />
                                                    </a>
                                                </div>
                                                <div className="text-wrap">
                                                    <div className="product-name">
                                                        <p>
                                                            Solo 3 Wireless
                                                            <span>Black</span>
                                                        </p>
                                                    </div>
                                                    <div className=" " styles="height: 50px">
                                                        <div className="hover">
                                                            <div className="product-price front">
                                                                <p><span className="old-price">129$</span>99$</p>
                                                            </div>
                                                            <div className="back">
                                                                <a href="#" className="button type-2 blue">BUY NOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div col-sm-4 text-center">
                                            <div className="contain hover-container">
                                                <div className="image-wrapper">
                                                    <a href="#">
                                                        <img src="images/p-1.png" alt="" className="img-responsive center-block" />
                                                    </a>
                                                </div>
                                                <div className="text-wrap">
                                                    <div className="product-name">
                                                        <p>
                                                            Solo 3 Wireless
                                                            <span>Black</span>
                                                        </p>
                                                    </div>
                                                    <div className=" " styles="height: 50px">
                                                        <div className="hover">
                                                            <div className="product-price front">
                                                                <p><span className="old-price">129$</span>99$</p>
                                                            </div>
                                                            <div className="back">
                                                                <a href="#" className="button type-2 blue">BUY NOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div col-sm-4 text-center">
                                            <div className="contain hover-container">
                                                <div className="image-wrapper">
                                                    <a href="#">
                                                        <img src="images/mac-1.png" alt="" className="img-responsive center-block" />
                                                    </a>
                                                </div>
                                                <div className="text-wrap">
                                                    <div className="product-name">
                                                        <p>
                                                            Solo 3 Wireless
                                                            <span>Black</span>
                                                        </p>
                                                    </div>
                                                    <div className=" " styles="height: 50px">
                                                        <div className="hover">
                                                            <div className="product-price front">
                                                                <p><span className="old-price">129$</span>99$</p>
                                                            </div>
                                                            <div className="back">
                                                                <a href="#" className="button type-2 blue">BUY NOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div col-sm-4 text-center">
                                            <div className="contain hover-container">
                                                <div className="image-wrapper">
                                                    <a href="#">
                                                        <img src="images/p-3.png" alt="" className="img-responsive center-block" />
                                                    </a>
                                                </div>
                                                <div className="text-wrap">
                                                    <div className="product-name">
                                                        <p>
                                                            Solo 3 Wireless
                                                            <span>Black</span>
                                                        </p>
                                                    </div>
                                                    <div className=" " styles="height: 50px">
                                                        <div className="hover">
                                                            <div className="product-price front">
                                                                <p><span className="old-price">129$</span>99$</p>
                                                            </div>
                                                            <div className="back">
                                                                <a href="#" className="button type-2 blue">BUY NOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                            
                                    </div>
                                </div>
                                <div className="detail-layout" style={{"display": "none"}}>
                                    <div className="product-layout-1">
                                        <div className="product-div">
                                            <div className="contain clearfix">
                                                <div className="image-wrapper col-sm-4" id="image-col">
                                                    <a href="#">
                                                        <img src="images/product-image/bh-1.png" alt=""  className={`img-responsive center-block ${this.state.current_color == "first" ? 'shown' : 'hidden'}`}/>
                                                        <img src="images/p-1.png" alt="" id="second_image" className={`img-responsive center-block ${this.state.current_color == "second" ? 'shown' : 'hidden'}`} styles="display: none" />
                                                        <img src="images/third-image.jpg" alt="" id="third_image" className={`img-responsive center-block ${this.state.current_color == "third" ? 'shown' : 'hidden'}`} styles="display: none" />
                                                        <img src="images/fourth-image.jpg" alt="" id="fourth_image" className={`img-responsive center-block ${this.state.current_color == "fourth" ? 'shown' : 'hidden'}`} styles="display: none" />
                                                    </a>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="product-name ">
                                                        <p>
                                                            Solo 3 Wireless
                                                            <span>Black</span>
                                                        </p>
                                                    </div>
                                                    <div className="color-container">
                                                        <p className="color-name">Color - <span>Silver</span> </p>
                                                        <div className="color">
                                                            <span className=" color-dot" onClick={this.setColor.bind(this,"first")} style={{background:'#d7d7d7'}}></span>
                                                            <span className="color-dot" onClick={this.setColor.bind(this,"second")} style={{background:'#2e2e2e'}}></span>
                                                            <span className="color-dot" onClick={this.setColor.bind(this,"third")} style={{background:'#217eba'}}></span>
                                                            <span className="color-dot" onClick={this.setColor.bind(this,"fourth")}style={{background:'#c23824'}}></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" col-sm-3" styles="padding-top: 30px;">
                                                    <div className="">
                                                        <div className="product-price ">
                                                            <p><span className="old-price">129$</span>99$</p>
                                                        </div>
                                                        <div className="">
                                                            <a href="#" className="button type-2 blue">BUY NOW</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div">
                                            <div className="contain clearfix">
                                                <div className="image-wrapper col-sm-4">
                                                    <a href="#">
                                                        <img src="images/p-1.png" alt="" className="img-responsive center-block" />
                                                    </a>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="product-name ">
                                                        <p>
                                                            Solo 3 Wireless
                                                            <span>Black</span>
                                                        </p>
                                                    </div>
                                                    <div className="color-container">
                                                        <p className="color-name">Color - <span>Silver</span> </p>
                                                        <div className="color">
                                                            <span className=" color-dot" styles="background: #d7d7d7"></span>
                                                            <span className="color-dot" styles="background: #2e2e2e"></span>
                                                            <span className="color-dot" styles="background: #217eba"></span>
                                                            <span className="color-dot" styles="background: #c23824"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" col-sm-3">
                                                    <div className="">
                                                        <div className="product-price ">
                                                            <p><span className="old-price">129$</span>99$</p>
                                                        </div>
                                                        <div className="">
                                                            <a href="#" className="button type-2 blue">BUY NOW</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div">
                                            <div className="contain clearfix">
                                                <div className="image-wrapper col-sm-4">
                                                    <a href="#">
                                                        <img src="images/p-1.png" alt="" className="img-responsive center-block" />
                                                    </a>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="product-name ">
                                                        <p>
                                                            Solo 3 Wireless
                                                            <span>Black</span>
                                                        </p>
                                                    </div>
                                                    <div className="color-container">
                                                        <p className="color-name">Color - <span>Silver</span> </p>
                                                        <div className="color">
                                                            <span className=" color-dot" styles="background: #d7d7d7"></span>
                                                            <span className="color-dot" styles="background: #2e2e2e"></span>
                                                            <span className="color-dot" styles="background: #217eba"></span>
                                                            <span className="color-dot" styles="background: #c23824"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" col-sm-3">
                                                    <div className="">
                                                        <div className="product-price ">
                                                            <p><span className="old-price">129$</span>99$</p>
                                                        </div>
                                                        <div className="">
                                                            <a href="#" className="button type-2 blue">BUY NOW</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div">
                                            <div className="contain clearfix">
                                                <div className="image-wrapper col-sm-4">
                                                    <a href="#">
                                                        <img src="images/p-1.png" alt="" className="img-responsive center-block" />
                                                    </a>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="product-name ">
                                                        <p>
                                                            Solo 3 Wireless
                                                            <span>Black</span>
                                                        </p>
                                                    </div>
                                                    <div className="color-container">
                                                        <p className="color-name">Color - <span>Silver</span> </p>
                                                        <div className="color">
                                                            <span className=" color-dot" styles="background: #d7d7d7"></span>
                                                            <span className="color-dot" styles="background: #2e2e2e"></span>
                                                            <span className="color-dot" styles="background: #217eba"></span>
                                                            <span className="color-dot" styles="background: #c23824"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" col-sm-3">
                                                    <div className="">
                                                        <div className="product-price ">
                                                            <p><span className="old-price">129$</span>99$</p>
                                                        </div>
                                                        <div className="">
                                                            <a href="#" className="button type-2 blue">BUY NOW</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div">
                                            <div className="contain clearfix">
                                                <div className="image-wrapper col-sm-4">
                                                    <a href="#">
                                                        <img src="images/p-1.png" alt="" className="img-responsive center-block" />
                                                    </a>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="product-name ">
                                                        <p>
                                                            Solo 3 Wireless
                                                            <span>Black</span>
                                                        </p>
                                                    </div>
                                                    <div className="color-container">
                                                        <p className="color-name">Color - <span>Silver</span> </p>
                                                        <div className="color">
                                                            <span className=" color-dot" styles="background: #d7d7d7"></span>
                                                            <span className="color-dot" styles="background: #2e2e2e"></span>
                                                            <span className="color-dot" styles="background: #217eba"></span>
                                                            <span className="color-dot" styles="background: #c23824"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" col-sm-3">
                                                    <div className="">
                                                        <div className="product-price ">
                                                            <p><span className="old-price">129$</span>99$</p>
                                                        </div>
                                                        <div className="">
                                                            <a href="#" className="button type-2 blue">BUY NOW</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div">
                                            <div className="contain clearfix">
                                                <div className="image-wrapper col-sm-4">
                                                    <a href="#">
                                                        <img src="images/p-1.png" alt="" className="img-responsive center-block" />
                                                    </a>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="product-name ">
                                                        <p>
                                                            Solo 3 Wireless
                                                            <span>Black</span>
                                                        </p>
                                                    </div>
                                                    <div className="color-container">
                                                        <p className="color-name">Color - <span>Silver</span> </p>
                                                        <div className="color">
                                                            <span className=" color-dot" styles="background: #d7d7d7"></span>
                                                            <span className="color-dot" styles="background: #2e2e2e"></span>
                                                            <span className="color-dot" styles="background: #217eba"></span>
                                                            <span className="color-dot" styles="background: #c23824"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" col-sm-3" >
                                                    <div className="">
                                                        <div className="product-price ">
                                                            <p><span className="old-price">129$</span>99$</p>
                                                        </div>
                                                        <div className="">
                                                            <a href="#" className="button type-2 blue">BUY NOW</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div">
                                            <div className="contain clearfix">
                                                <div className="image-wrapper col-sm-4">
                                                    <a href="#">
                                                        <img src="images/p-1.png" alt="" className="img-responsive center-block" />
                                                    </a>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="product-name ">
                                                        <p>
                                                            Solo 3 Wireless
                                                            <span>Black</span>
                                                        </p>
                                                    </div>
                                                    <div className="color-container">
                                                        <p className="color-name">Color - <span>Silver</span> </p>
                                                        <div className="color">
                                                            <span className=" color-dot" styles="background: #d7d7d7"></span>
                                                            <span className="color-dot" styles="background: #2e2e2e"></span>
                                                            <span className="color-dot" styles="background: #217eba"></span>
                                                            <span className="color-dot" styles="background: #c23824"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" col-sm-3">
                                                    <div className="">
                                                        <div className="product-price ">
                                                            <p><span className="old-price">129$</span>99$</p>
                                                        </div>
                                                        <div className="">
                                                            <a href="#" className="button type-2 blue">BUY NOW</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-div">
                                            <div className="contain clearfix">
                                                <div className="image-wrapper col-sm-4">
                                                    <a href="#">
                                                        <img src="images/p-1.png" custom-color="color-1" alt="" className="img-responsive center-block" />
                                                    </a>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="product-name ">
                                                        <p>
                                                            Solo 3 Wireless
                                                            <span>Black</span>
                                                        </p>
                                                    </div>
                                                    <div className="color-container">
                                                        <p className="color-name">Color - <span>Silver</span> </p>
                                                        <div className="color">
                                                            <span className=" color-dot" custom-color="color-1" styles="background: #d7d7d7"></span>
                                                            <span className="color-dot" styles="background: #2e2e2e"></span>
                                                            <span className="color-dot" styles="background: #217eba"></span>
                                                            <span className="color-dot" styles="background: #c23824"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" col-sm-3" >
                                                    <div className="">
                                                        <div className="product-price ">
                                                            <p><span className="old-price">129$</span>99$</p>
                                                        </div>
                                                        <div className="">
                                                            <a href="#" className="button type-2 blue">BUY NOW</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterOther />

    </Main>
		);
	}
}

export default Shop;