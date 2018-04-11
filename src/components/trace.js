import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class Trace extends Component {
	render() {
		return (
		<Main>

        <div className="container-fluid">
            <Header />
            <div className="banner banner-trace banner-small no-text-banner">
                <div className="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>

        </div>
        <div className="">
            <div className="card-layout-1 text-center card-map-container card-margin-style-1 no-padding"  >
                <div className="map" styles="min-height: 300px;">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d908224.4742712615!2d152.442389502102!3d-27.22693966709454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbrisbane+zoo!5e0!3m2!1sen!2sin!4v1516024611321" width="100%" height="100%" frameBorder="0" styles="border:0" allowFullScreen></iframe>
                </div>
            </div>
        </div>
        <FooterOther />

    </Main>
		);
	}
}

export default Trace;