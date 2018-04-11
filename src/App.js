import React, { Component } from 'react';
import { Route, Router, browserHistory } from 'react-router';
import logo from './logo.svg';
import './App.css';

import Index from './components/index';
import About from './components/about';
import Agent from './components/agent';
import Agreement from './components/agreement';
import Shop from './components/shop';
import Signup from './components/signup';
import Trace from './components/trace';
import TrackFlight from './components/track-flight';
import Travel from './components/travel';
import ContactUs from './components/contact-us';
import Funds from './components/funds';
import HintsAndTips from './components/hints-and-tips';
import Location from './components/location';
import Login from './components/login';
import MyCart from './components/my-cart';


import PostProject from './components/post-project';
import MyProjects from './components/my-projects';
import ProductDetail from './components/product-detail';
import PrintShippingLabel from './components/print-shipping-label';
import Profile from './components/profile';
import ProjectDetail from './components/project-detail';
import Projects from './components/projects';
import Send from './components/send';
import Setting from './components/setting';

import BookFlightConfirm from './components/book-flight-confirm';
import BookFlightResults from './components/book-flight-results';
import BookFlight from './components/book-flight';
import BookFlightPassengers from './components/book-flight-passengers';
import BookFlightPayment from './components/book-flight-payment';


import BookHotelPayment from './components/book-hotel-payment';
import BookHotelSelectHotel from './components/book-hotel-select-hotel';
import BookHotelSelectRoom from './components/book-hotel-select-room';
import BookHotel from './components/book-hotel';

import Chat from './components/chat';
import Confirm from './components/confirm';

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Route path={"/"} component={Index} />
          <Route path={"/about"} component={About} />
          <Route path={"/agent"} component={Agent} />
          <Route path={"/agreement"} component={Agreement} />
          <Route path={"/shop"} component={Shop} />
          <Route path={"/signup"} component={Signup} />
          <Route path={"/trace"} component={Trace} />
          <Route path={"/track-flight"} component={TrackFlight} />
          <Route path={"/travel"} component={Travel} />
          <Route path={"/contact-us"} component={ContactUs} />
          <Route path={"/funds"} component={Funds} />
          <Route path={"/hints-and-tips"} component={HintsAndTips} />
          <Route path={"/location"} component={Location} />
          <Route path={"/login"} component={Login} />
          <Route path={"/my-cart"} component={MyCart} />

          <Route path={"/post-project"} component={PostProject} />
          <Route path={"/my-projects"} component={MyProjects} />
          <Route path={"/product-detail"} component={ProductDetail} />
          <Route path={"/print-shipping-label"} component={PrintShippingLabel} />
          <Route path={"/profile"} component={Profile} />
          <Route path={"/project-detail"} component={ProjectDetail} />
          <Route path={"/projects"} component={Projects} />
          <Route path={"/send"} component={Send} />
          <Route path={"/setting"} component={Setting} />

          <Route path={"/book-flight-confirm"} component={BookFlightConfirm} />
          <Route path={"/book-flight-results"} component={BookFlightResults} />
          <Route path={"/book-flight"} component={BookFlight} />
          <Route path={"/book-flight-passengers"} component={BookFlightPassengers} />
          <Route path={"/book-flight-payment"} component={BookFlightPayment} />

          <Route path={"/book-hotel"} component={BookHotel} />
          <Route path={"/book-hotel-payment"} component={BookHotelPayment} />
          <Route path={"/book-hotel-select-room"} component={BookHotelSelectRoom} />
          <Route path={"/book-hotel-select-hotel"} component={BookHotelSelectHotel} />
          
          <Route path={"/chat"} component={Chat} />
          <Route path={"/confirm"} component={Confirm} />

        </Router>
    )
  }
}

export default App;