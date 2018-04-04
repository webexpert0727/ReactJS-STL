import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Agent extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            
            <Header />
           
        </div>
        <div class="">
            <div class="map agent full-height" styles="min-height: 710px;">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d908224.4742712615!2d152.442389502102!3d-27.22693966709454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbrisbane+zoo!5e0!3m2!1sen!2sin!4v1516024611321" width="100%" height="100%" frameborder="0" styles="border:0" allowfullscreen></iframe>
            </div>
            <div class="form-type-2 form-container abs">
                <div class="form">
                    <form>
                        <div class="title form-title text-center">
                            <p>
                                Work with us
                            </p>
                        </div>
                        <div class="info">
                            <p>Become an agent. Please fill the form and send us. We are going to answer back soon.</p>
                        </div>
                        <div class="input">
                            <input type="text" class="" placeholder="Your name" />
                        </div>
                        <div class="input">
                            <input type="email" class="" placeholder="Email address" />
                        </div>
                        <div class="input">
                            <input type="password" class="" placeholder="Phone" />
                        </div>
                        <div class="clearfix gap" styles="margin-bottom: 4px"></div>
                        <div class="input clearfix">
                            
                            <div class="col-sm-6" styles="padding: 0; padding-top: 10px;">
                                <input type="checkbox" name="" id="check-1" class="check-box green" />
                                <label for="check-1"><span></span>Accept to detect your location</label>                                
                            </div>
                            <div class="col-sm-6 no-padding text-right text-center-xs">
                                <div class="gap  clearfix visible-xs"></div>
                                <input type="submit" value="send" styles="width: 117px; height: 43px; line-height: 1.1" class="no-shadow no-margin button type-2 green text-uppercase " />
                            </div>
                        </div>
                        <div class="clearfix gap" styles="margin-bottom: 5px;"></div>
                        <div class="clearfix"></div>
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