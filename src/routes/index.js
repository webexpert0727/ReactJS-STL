import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer/HomeContainer';
import AboutUsContainer from '../containers/AboutUsContainer/AboutUsContainer';
import Agent from '../components/agent';
import AgreementContainer from '../containers/AgreementContainer/AgreementContainer';
import Shop from '../components/shop';
import Signup from '../components/signup';
import Trace from '../components/trace';
import TrackFlight from '../components/track-flight';
import Travel from '../components/travel';
import ContactContainer from '../containers/ContactContainer/ContactContainer';
import Funds from '../components/funds';
import HintsAndTips from '../components/hints-and-tips';
import Location from '../components/location';
import Login from '../components/login';
import MyCart from '../components/my-cart';


import PostProjectContainer from '../containers/PostProjectContainer/PostProjectContainer';
import MyProjectsContainer from '../containers/MyProjectsContainer/MyProjectContainer';
import ProductDetailContainer from '../containers/ProjectsContainer/ProjectDetailsContainer';
import PrintShippingLabel from '../components/print-shipping-label';
import Profile from '../components/profile';
import ProjectsContainer from '../containers/ProjectsContainer/ProjectsContainer';
import Send from '../components/send';
import Setting from '../components/setting';

import BookFlightConfirm from '../components/book-flight-confirm';
import BookFlightResults from '../components/book-flight-results';
import BookFlight from '../components/book-flight';
import BookFlightPassengers from '../components/book-flight-passengers';
import BookFlightPayment from '../components/book-flight-payment';


import BookHotelPayment from '../components/book-hotel-payment';
import BookHotelSelectHotel from '../components/book-hotel-select-hotel';
import BookHotelSelectRoom from '../components/book-hotel-select-room';
import BookHotel from '../components/book-hotel';

import Chat from '../components/chat';
import Confirm from '../components/confirm';

const Routes = () => {
    return (
        <Switch>
          <Route exact path={"/"} component={HomeContainer} />
          <Route exact path={"/about"} component={AboutUsContainer} />
          <Route path={"/agent"} component={Agent} />
          <Route path={"/agreement"} component={AgreementContainer} />
          <Route path={"/shop"} component={Shop} />
          <Route path={"/signup"} component={Signup} />
          <Route path={"/trace"} component={Trace} />
          <Route path={"/track-flight"} component={TrackFlight} />
          <Route path={"/travel"} component={Travel} />
          <Route path={"/contact-us"} component={ContactContainer} />
          <Route path={"/funds"} component={Funds} />
          <Route path={"/hints-and-tips"} component={HintsAndTips} />
          <Route path={"/location"} component={Location} />
          <Route path={"/login"} component={Login} />
          <Route path={"/my-cart"} component={MyCart} />

          <Route path={"/post-project"} component={PostProjectContainer} />
          <Route path={"/my-projects"} component={MyProjectsContainer} />
          <Route path={"/print-shipping-label"} component={PrintShippingLabel} />
          <Route path={"/profile"} component={Profile} />
          <Route path={"/project-detail/:objectId"} component={ProductDetailContainer} />
          <Route path={"/projects"} component={ProjectsContainer} />
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
        </Switch>
    )
}

export default Routes;
