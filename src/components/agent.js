import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Agent extends Component {
	render() {
		return (
		<Main>

        <div className="container-fluid">
            
            <Header customClass="no-banner direct-remove"/>
           
        </div>
        <div className="">
            <div className="map agent full-height" style={{minHeight: "710px"}}>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d908224.4742712615!2d152.442389502102!3d-27.22693966709454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbrisbane+zoo!5e0!3m2!1sen!2sin!4v1516024611321" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
            </div>
            <div className="form-type-2 form-container abs">
                <div className="form">
                    <form>
                        <div className="title form-title text-center">
                            <p>
                                Work with us
                            </p>
                        </div>
                        <div className="info">
                            <p>Become an agent. Please fill the form and send us. We are going to answer back soon.</p>
                        </div>
                        <div className="input">
                            <input type="text" className="" placeholder="Your name" />
                        </div>
                        <div className="input">
                            <input type="email" className="" placeholder="Email address" />
                        </div>
                        <div className="input">
                            <input type="password" className="" placeholder="Phone" />
                        </div>
                        <div className="clearfix gap" style={{marginBottom : "4px"}}></div>
                        <div className="input clearfix">
                            
                            <div className="col-sm-6" styles="padding: 0; padding-top: 10px;">
                                <input type="checkbox" name="" id="check-1" className="check-box green" />
                                <label htmlFor="check-1"><span></span>Accept to detect your location</label>                                
                            </div>
                            <div className="col-sm-6 no-padding text-right text-center-xs">
                                <div className="gap  clearfix visible-xs"></div>
                                <input type="submit" value="send" styles="width: 117px; height: 43px; line-height: 1.1" className="no-shadow no-margin button type-2 green text-uppercase " />
                            </div>
                        </div>
                        <div className="clearfix gap" style={{marginBottom : "5px"}}></div>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        </div>
        
        <FooterOther />

    </Main>
		);
	}
}

export default Agent;