import React, { Component } from 'react';
import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Travel extends Component {
	render() {
		return (
		<Main>
        <div className="container-fluid">
            
            <Header />
            <div className="banner banner-travel banner-small no-text-banner">
                <div className="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>

        </div>
        <div className="">
            <div className="card-layout-1  card-map-container card-margin-style-1">
                <div className="map">
                    
                    <div className="white-bg travel-sidebar" styles="height: 100%; overflow: auto;">
                        <aside>
                            <div className="filter-reset">
                                <h3>Filter
                                    <a href="#" className="filter-reser-button pull-right">
                                        <img src="images/icons8-synchronize.png" />
                                    </a>
                                </h3>
                                

                            </div>
                            <div className="accordian sidebar-block">
                                <p className="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-4">Price</p>
                                <div className="collapse-containt collapse" id="side-4">
                                    
                                <br/>
                                <br/>
                                <div className="clearfix">
                                    <div className="range" id="price">
                                        <div className="range-slider"> </div>
                                        <input type="text" id="range-min" readOnly={true} className="pull-left" />
                                        <input type="text" id="range-max" readOnly={true}className="pull-right text-right" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordian sidebar-block">
                                <p className="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-1">Category</p>
                                <div className="collapse-containt collapse in" id="side-1">
                                    <div className="sidebar-checkbox">
                                        <input type="checkbox" name="" id="side-1-ch1" />
                                        <label htmlFor="side-1-ch1">All</label>
                                    </div>
                                    <div className="sidebar-checkbox">
                                        <input type="checkbox" name="" id="side-1-ch2" />
                                        <label htmlFor="side-1-ch2">Category 1</label>
                                    </div>
                                    <div className="sidebar-checkbox">
                                        <input type="checkbox" name="" id="side-1-ch3" />
                                        <label htmlFor="side-1-ch3">Category 2</label>
                                    </div>
                                    <div className="sidebar-checkbox">
                                        <input type="checkbox" name="" id="side-1-ch4" />
                                        <label htmlFor="side-1-ch4">Category 3</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="accordian sidebar-block" >
                                    <p className="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-1-ch7" >Distance</p>
                                    <div className="collapse-containt collapse in" id="side-1-ch7">
                                        <div className="clearfix">
                                            <div className="range clearfix" >
                                               
                                                <input type="text" id="distance-min" readOnly={true} className="pull-left" />
                                                <input type="text" id="distance-max" readOnly={true} className="pull-right text-right" />
                                                <br/> <br/>
                                            </div>
                                            <div className="range clearfix" id="distance">
                                                <br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="accordian sidebar-block">
                                <p className="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-2">Weight</p>
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
                                <p className="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-3">Query</p>
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
                        </aside>
                    </div>
                    <div className="travel-main" styles="height: 100%;">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d908224.4742712615!2d152.442389502102!3d-27.22693966709454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbrisbane+zoo!5e0!3m2!1sen!2sin!4v1516024611321" width="100%" height="100%" frameBorder="0" styles="border:0" allowFullScreen=""></iframe>
                    </div>
                </div>
            </div>
        </div>
        
        <FooterOther />

    </Main>
		);
	}
}

export default Travel;